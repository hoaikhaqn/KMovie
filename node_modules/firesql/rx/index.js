"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var firestore_1 = require("rxfire/firestore");
var sql_parser_1 = require("../sql-parser");
var firesql_1 = require("../firesql");
var select_1 = require("../select");
var utils_1 = require("../utils");
firesql_1.FireSQL.prototype.rxQuery = function (sql, options) {
    utils_1.assert(
    // tslint:disable-next-line: strict-type-predicates
    typeof sql === 'string' && sql.length > 0, 'rxQuery() expects a non-empty string.');
    var ast = sql_parser_1.parse(sql);
    utils_1.assert(ast.type === 'select', 'Only SELECT statements are supported.');
    return rxSelect(this._ref, ast, __assign({}, this._options, options));
};
function rxSelect(ref, ast, options) {
    var selectOp = new select_1.SelectOperation(ref, ast, options);
    var queries = selectOp.generateQueries_();
    if (ast._next) {
        utils_1.assert(ast._next.type === 'select', ' UNION statements are only supported between SELECTs.');
        // This is the UNION of 2 SELECTs, so lets process the second
        // one and merge their queries
        queries = queries.concat(selectOp.generateQueries_(ast._next));
        // FIXME: The SQL parser incorrectly attributes ORDER BY to the second
        // SELECT only, instead of to the whole UNION. Find a workaround.
    }
    var idField;
    var keepIdField;
    if (selectOp._includeId === true) {
        idField = utils_1.DOCUMENT_KEY_NAME;
        keepIdField = true;
    }
    else if (typeof selectOp._includeId === 'string') {
        idField = selectOp._includeId;
        keepIdField = true;
    }
    else {
        idField = utils_1.DOCUMENT_KEY_NAME;
        keepIdField = false;
    }
    var rxData = rxjs_1.combineLatest(queries.map(function (query) {
        return firestore_1.collectionData(query, idField);
    }));
    return rxData.pipe(operators_1.map(function (results) {
        // We have an array of results (one for each query we generated) where
        // each element is an array of documents. We need to flatten them.
        var documents = [];
        var seenDocuments = {};
        for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
            var docs = results_1[_i];
            for (var _a = 0, docs_1 = docs; _a < docs_1.length; _a++) {
                var doc = docs_1[_a];
                // Note: for now we're only allowing to query a single collection, but
                // if at any point we change that (for example with JOINs) we'll need to
                // use the full document path here instead of just its ID
                if (!utils_1.contains(seenDocuments, doc[idField])) {
                    seenDocuments[doc[idField]] = true;
                    if (!keepIdField) {
                        delete doc[idField];
                    }
                    documents.push(doc);
                }
            }
        }
        return documents;
    }), operators_1.map(function (documents) {
        return selectOp.processDocuments_(queries, documents);
    }));
}
//# sourceMappingURL=index.js.map
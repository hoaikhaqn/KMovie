"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var groupby_1 = require("./groupby");
var orderby_1 = require("./orderby");
var limit_1 = require("./limit");
var where_1 = require("./where");
var VALID_AGGR_FUNCTIONS = ['MIN', 'MAX', 'SUM', 'AVG'];
function select_(ref, ast, options) {
    return __awaiter(this, void 0, void 0, function () {
        var selectOp, queries, documents;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    selectOp = new SelectOperation(ref, ast, options);
                    queries = selectOp.generateQueries_();
                    return [4 /*yield*/, selectOp.executeQueries_(queries)];
                case 1:
                    documents = _a.sent();
                    return [2 /*return*/, selectOp.processDocuments_(queries, documents)];
            }
        });
    });
}
exports.select_ = select_;
var SelectOperation = /** @class */ (function () {
    function SelectOperation(_ref, _ast, options) {
        this._ref = _ref;
        this._ast = _ast;
        // We need to determine if we have to include
        // the document's ID (__name__) in the results.
        this._includeId = options.includeId || false;
        if (!this._includeId && Array.isArray(_ast.columns)) {
            for (var i = 0; i < _ast.columns.length; i++) {
                if (_ast.columns[i].expr.type === 'column_ref') {
                    if (_ast.columns[i].expr.column === utils_1.DOCUMENT_KEY_NAME) {
                        this._includeId = true;
                        break;
                    }
                }
            }
        }
        if (this._includeId === void 0) {
            this._includeId = false;
        }
    }
    SelectOperation.prototype.generateQueries_ = function (ast) {
        ast = ast || this._ast;
        utils_1.assert(ast.from.parts.length % 2 === 1, '"FROM" needs a path to a collection (odd number of parts).');
        var path = ast.from.parts.join('/');
        var queries = [];
        if (ast.from.group) {
            utils_1.assert(this._ref.path === '', 'Collection group queries are only allowed from the root of the database.');
            var firestore = utils_1.contains(this._ref, 'firestore')
                ? this._ref.firestore
                : this._ref;
            utils_1.assert(typeof firestore.collectionGroup === 'function', "Your version of the Firebase SDK doesn't support collection group queries.");
            queries.push(firestore.collectionGroup(path));
        }
        else {
            queries.push(this._ref.collection(path));
        }
        /*
         * We'd need this if we end up implementing JOINs, but for now
         * it's unnecessary since we're only querying a single collection
        
          // Keep track of aliased "tables" (collections)
          const aliasedCollections: { [k: string]: string } = {};
          if (ast.from[0].as.length > 0) {
            aliasedCollections[ast.from[0].as] = colName;
          } else {
            aliasedCollections[colName] = colName;
          }
       */
        if (ast.where) {
            queries = where_1.applyWhere(queries, ast.where);
        }
        if (ast.orderby) {
            queries = orderby_1.applyOrderBy(queries, ast.orderby);
            /*
             FIXME: the following query throws an error:
                SELECT city, name
                FROM restaurants
                WHERE city IN ('Nashvile', 'Denver')
                ORDER BY city, name
        
             It happens because "WHERE ... IN ..." splits into 2 separate
             queries with a "==" filter, and an order by clause cannot
             contain a field with an equality filter:
                ...where("city","==","Denver").orderBy("city")
            */
        }
        // if (ast.groupby) {
        //   throw new Error('GROUP BY not supported yet');
        // }
        if (ast.limit) {
            // First we apply the limit to each query we may have
            // and later we'll apply it again locally to the
            // merged set of documents, in case we end up with too many.
            queries = limit_1.applyLimit(queries, ast.limit);
        }
        if (ast._next) {
            utils_1.assert(ast._next.type === 'select', ' UNION statements are only supported between SELECTs.');
            // This is the UNION of 2 SELECTs, so lets process the second
            // one and merge their queries
            queries = queries.concat(this.generateQueries_(ast._next));
            // FIXME: The SQL parser incorrectly attributes ORDER BY to the second
            // SELECT only, instead of to the whole UNION. Find a workaround.
        }
        return queries;
    };
    SelectOperation.prototype.executeQueries_ = function (queries) {
        return __awaiter(this, void 0, void 0, function () {
            var documents, seenDocuments, err_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        documents = [];
                        seenDocuments = {};
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Promise.all(queries.map(function (query) { return __awaiter(_this, void 0, void 0, function () {
                                var snapshot, numDocs, i, docSnap, docPath, docData;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, query.get()];
                                        case 1:
                                            snapshot = _a.sent();
                                            numDocs = snapshot.docs.length;
                                            for (i = 0; i < numDocs; i++) {
                                                docSnap = snapshot.docs[i];
                                                docPath = docSnap.ref.path;
                                                if (!utils_1.contains(seenDocuments, docPath)) {
                                                    docData = docSnap.data();
                                                    if (this._includeId) {
                                                        docData[typeof this._includeId === 'string'
                                                            ? this._includeId
                                                            : utils_1.DOCUMENT_KEY_NAME] = docSnap.id;
                                                    }
                                                    documents.push(docData);
                                                    seenDocuments[docPath] = true;
                                                }
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        // TODO: handle error?
                        throw err_1;
                    case 4: return [2 /*return*/, documents];
                }
            });
        });
    };
    SelectOperation.prototype.processDocuments_ = function (queries, documents) {
        if (documents.length === 0) {
            return [];
        }
        else {
            if (this._ast.groupby) {
                var groupedDocs = groupby_1.applyGroupByLocally(documents, this._ast.groupby);
                return this._processGroupedDocs(queries, groupedDocs);
            }
            else {
                return this._processUngroupedDocs(queries, documents);
            }
        }
    };
    SelectOperation.prototype._processUngroupedDocs = function (queries, documents) {
        var _this = this;
        if (this._ast.orderby && queries.length > 1) {
            // We merged more than one query into a single set of documents
            // so we need to order the documents again, this time client-side.
            documents = orderby_1.applyOrderByLocally(documents, this._ast.orderby);
        }
        if (this._ast.limit && queries.length > 1) {
            // We merged more than one query into a single set of documents
            // so we need to apply the limit again, this time client-side.
            documents = limit_1.applyLimitLocally(documents, this._ast.limit);
        }
        if (typeof this._ast.columns === 'string' && this._ast.columns === '*') {
            // Return all fields from the documents
        }
        else if (Array.isArray(this._ast.columns)) {
            var aggrColumns = getAggrColumns(this._ast.columns);
            if (aggrColumns.length > 0) {
                var docsGroup = new groupby_1.DocumentsGroup();
                docsGroup.documents = documents;
                aggregateDocuments(docsGroup, aggrColumns);
                /// Since there is no GROUP BY and we already computed all
                // necessary aggregated values, at this point we only care
                // about the first document in the list. Anything else is
                // irrelevant.
                var resultEntry = this._buildResultEntry(docsGroup.documents[0], docsGroup.aggr);
                documents = [resultEntry];
            }
            else {
                documents = documents.map(function (doc) { return _this._buildResultEntry(doc); });
            }
        }
        else {
            // We should never reach here
            throw new Error('Internal error (ast.columns).');
        }
        return documents;
    };
    SelectOperation.prototype._processGroupedDocs = function (queries, groupedDocs) {
        var _this = this;
        utils_1.assert(this._ast.columns !== '*', 'Cannot "SELECT *" when using GROUP BY.');
        var aggrColumns = getAggrColumns(this._ast.columns);
        var groups = flattenGroupedDocs(groupedDocs);
        if (aggrColumns.length === 0) {
            // We're applying a GROUP BY but none of the fields requested
            // in the SELECT are an aggregate function. In this case we
            // just return an entry for the first document.
            var firstGroupKey = Object.keys(groups)[0];
            var firstGroup = groups[firstGroupKey];
            var firstDoc = firstGroup.documents[0];
            return [this._buildResultEntry(firstDoc)];
        }
        else {
            var results_1 = [];
            // TODO: ORDER BY
            utils_1.assert(!this._ast.orderby, 'ORDER BY is not yet supported when using GROUP BY.');
            // TODO: LIMIT
            utils_1.assert(!this._ast.limit, 'LIMIT is not yet supported when using GROUP BY.');
            Object.keys(groups).forEach(function (groupKey) {
                var docsGroup = groups[groupKey];
                aggregateDocuments(docsGroup, aggrColumns);
                var resultEntry = _this._buildResultEntry(docsGroup.documents[0], docsGroup.aggr);
                results_1.push(resultEntry);
            });
            return results_1;
        }
    };
    SelectOperation.prototype._buildResultEntry = function (document, aggregate, asFieldArray) {
        if (asFieldArray === void 0) { asFieldArray = false; }
        var idIncluded = false;
        var columns = this._ast.columns;
        var resultFields = columns.reduce(function (entries, column) {
            var fieldName;
            var fieldAlias;
            switch (column.expr.type) {
                case 'column_ref':
                    fieldName = column.expr.column;
                    fieldAlias = utils_1.nameOrAlias(fieldName, column.as);
                    entries.push(new AliasedField(fieldName, fieldAlias, utils_1.deepGet(document, fieldName)));
                    if (fieldName === utils_1.DOCUMENT_KEY_NAME) {
                        idIncluded = true;
                    }
                    break;
                case 'aggr_func':
                    vaidateAggrFunction(column.expr);
                    fieldName = column.expr.field;
                    fieldAlias = utils_1.nameOrAlias(fieldName, column.as, column.expr);
                    entries.push(new AliasedField(fieldName, fieldAlias, aggregate[column.expr.name.toLowerCase()][fieldName]));
                    break;
                default:
                    throw new Error('Unsupported type in SELECT.');
            }
            return entries;
        }, []);
        if (this._includeId && !idIncluded) {
            resultFields.push(new AliasedField(utils_1.DOCUMENT_KEY_NAME, typeof this._includeId === 'string'
                ? this._includeId
                : utils_1.DOCUMENT_KEY_NAME, utils_1.safeGet(document, utils_1.DOCUMENT_KEY_NAME)));
        }
        if (asFieldArray) {
            return resultFields;
        }
        else {
            return resultFields.reduce(function (doc, field) {
                doc[field.alias] = field.value;
                return doc;
            }, {});
        }
    };
    return SelectOperation;
}());
exports.SelectOperation = SelectOperation;
/*************************************************/
function aggregateDocuments(docsGroup, functions) {
    var numDocs = docsGroup.documents.length;
    var _loop_1 = function (i) {
        var doc = docsGroup.documents[i];
        // If the same field is used in more than one aggregate function
        // we don't want to sum its value more than once.
        var skipSum = {};
        functions.forEach(function (fn) {
            var value = utils_1.safeGet(doc, fn.field);
            var isNumber = !Number.isNaN(value);
            switch (fn.name) {
                case 'AVG':
                    // Lets put a value so that later we know we have to compute this avg
                    docsGroup.aggr.avg[fn.field] = 0;
                // tslint:disable-next-line:no-switch-case-fall-through
                case 'SUM':
                    if (utils_1.safeGet(skipSum, fn.field) !== true) {
                        skipSum[fn.field] = true;
                        if (!utils_1.contains(docsGroup.aggr.total, fn.field)) {
                            docsGroup.aggr.total[fn.field] = 0;
                            docsGroup.aggr.sum[fn.field] = 0;
                        }
                        value = Number(value);
                        utils_1.assert(!Number.isNaN(value), "Can't compute aggregate function " + fn.name + "(" + fn.field + ") because some values are not numbers.");
                        docsGroup.aggr.total[fn.field] += 1;
                        docsGroup.aggr.sum[fn.field] += value;
                        // FIXME: if the numbers are big we could easily go out of bounds in this sum
                    }
                    break;
                case 'MIN':
                    utils_1.assert(isNumber || typeof value === 'string', "Aggregate function MIN(" + fn.field + ") can only be performed on numbers or strings");
                    if (!utils_1.contains(docsGroup.aggr.min, fn.field)) {
                        docsGroup.aggr.min[fn.field] = value;
                    }
                    else {
                        if (!Number.isNaN(docsGroup.aggr.min[fn.field])) {
                            // The current minimum is a number
                            utils_1.assert(isNumber, "Can't compute aggregate function MIN(" + fn.field + ") because some values are not numbers.");
                            value = Number(value);
                        }
                        if (value < docsGroup.aggr.min[fn.field]) {
                            docsGroup.aggr.min[fn.field] = value;
                        }
                    }
                    break;
                case 'MAX':
                    utils_1.assert(isNumber || typeof value === 'string', "Aggregate function MAX(" + fn.field + ") can only be performed on numbers or strings");
                    if (!utils_1.contains(docsGroup.aggr.max, fn.field)) {
                        docsGroup.aggr.max[fn.field] = value;
                    }
                    else {
                        if (!Number.isNaN(docsGroup.aggr.max[fn.field])) {
                            // The current maximum is a number
                            utils_1.assert(isNumber, "Can't compute aggregate function MAX(" + fn.field + ") because some values are not numbers.");
                            value = Number(value);
                        }
                        if (value > docsGroup.aggr.max[fn.field]) {
                            docsGroup.aggr.max[fn.field] = value;
                        }
                    }
                    break;
            }
        });
    };
    for (var i = 0; i < numDocs; i++) {
        _loop_1(i);
    }
    // Compute any necessary averages
    Object.keys(docsGroup.aggr.avg).forEach(function (group) {
        docsGroup.aggr.avg[group] =
            docsGroup.aggr.sum[group] / docsGroup.aggr.total[group];
    });
    return docsGroup;
}
function getAggrColumns(columns) {
    var aggrColumns = [];
    if (columns !== '*') {
        columns.forEach(function (astColumn) {
            if (astColumn.expr.type === 'aggr_func') {
                vaidateAggrFunction(astColumn.expr);
                aggrColumns.push(astColumn.expr);
            }
            else {
                utils_1.assert(astColumn.expr.type === 'column_ref', 'Only field names and aggregate functions are supported in SELECT statements.');
            }
        });
    }
    return aggrColumns;
}
function vaidateAggrFunction(aggrFn) {
    // TODO: support COUNT, then remove this assert
    utils_1.assert(aggrFn.name !== 'COUNT', 'Aggregate function COUNT is not yet supported.');
    utils_1.assert(VALID_AGGR_FUNCTIONS.includes(aggrFn.name), "Unknown aggregate function '" + aggrFn.name + "'.");
    utils_1.assert(
    // tslint:disable-next-line: strict-type-predicates
    typeof aggrFn.field === 'string', "Unsupported type in aggregate function '" + aggrFn.name + "'.");
}
function flattenGroupedDocs(groupedDocs) {
    var result = {};
    for (var prop in groupedDocs) {
        if (!utils_1.contains(groupedDocs, prop)) {
            continue;
        }
        if (!(groupedDocs[prop] instanceof groupby_1.DocumentsGroup)) {
            var flatInner = flattenGroupedDocs(groupedDocs[prop]);
            for (var innerProp in flatInner) {
                if (!utils_1.contains(flatInner, innerProp)) {
                    continue;
                }
                result[prop + '$$' + innerProp] = flatInner[innerProp];
            }
        }
        else {
            result[prop] = groupedDocs[prop];
        }
    }
    return result;
}
/**
 * Represents a field (prop) in a document.
 * It stores the original field name, the assigned alias, and the value.
 *
 * This is necessary in order to properly apply ORDER BY once
 * a result set has been built.
 */
var AliasedField = /** @class */ (function () {
    function AliasedField(name, alias, value) {
        this.name = name;
        this.alias = alias;
        this.value = value;
    }
    return AliasedField;
}());
//# sourceMappingURL=index.js.map
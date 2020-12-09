"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
function applyGroupByLocally(documents, astGroupBy) {
    utils_1.assert(astGroupBy.length > 0, 'GROUP BY needs at least 1 group.');
    var group = new DocumentsGroup();
    group.documents = documents;
    astGroupBy.forEach(function (groupBy) {
        utils_1.assert(groupBy.type === 'column_ref', 'GROUP BY only supports grouping by field names.');
        group = applySingleGroupBy(group, groupBy);
    });
    return group;
}
exports.applyGroupByLocally = applyGroupByLocally;
function applySingleGroupBy(documents, groupBy) {
    var groupedDocs = {};
    if (documents instanceof DocumentsGroup) {
        // We just have a list of documents
        var numDocs = documents.documents.length;
        for (var i = 0; i < numDocs; i++) {
            var doc = documents.documents[i];
            // Since we're going to use the value as an object key, always
            // coherce it to a string in case it's some other type.
            var groupValue = String(utils_1.safeGet(doc, groupBy.column));
            if (!utils_1.contains(groupedDocs, groupValue)) {
                groupedDocs[groupValue] = new DocumentsGroup();
            }
            groupedDocs[groupValue].documents.push(doc);
        }
        return groupedDocs;
    }
    else {
        // We have documents that have already been grouped with another field
        var currentGroups = Object.keys(documents);
        currentGroups.forEach(function (group) {
            groupedDocs[group] = applySingleGroupBy(documents[group], groupBy);
        });
        return groupedDocs;
    }
}
var DocumentsGroup = /** @class */ (function () {
    function DocumentsGroup(key) {
        this.key = key;
        this.documents = [];
        this.aggr = {
            sum: {},
            avg: {},
            min: {},
            max: {},
            total: {}
        };
    }
    return DocumentsGroup;
}());
exports.DocumentsGroup = DocumentsGroup;
//# sourceMappingURL=groupby.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
function applyOrderBy(queries, astOrderBy) {
    astOrderBy.forEach(function (orderBy) {
        utils_1.assert(orderBy.expr.type === 'column_ref', 'ORDER BY only supports ordering by field names.');
        queries = queries.map(function (query) {
            return query.orderBy(orderBy.expr.column, orderBy.type.toLowerCase());
        });
    });
    return queries;
}
exports.applyOrderBy = applyOrderBy;
function applyOrderByLocally(docs, astOrderBy) {
    return docs.sort(function (doc1, doc2) {
        return astOrderBy.reduce(function (result, orderBy) {
            if (result !== 0) {
                // We already found a way to sort these 2 documents, so there's
                // no need to keep going. This doesn't actually break out of the
                // reducer but prevents doing any further unnecessary and
                // potentially expensive comparisons.
                return result;
            }
            var field = orderBy.expr.column;
            if (doc1[field] < doc2[field]) {
                result = -1;
            }
            else if (doc1[field] > doc2[field]) {
                result = 1;
            }
            else {
                result = 0;
            }
            if (orderBy.type === 'DESC' && result !== 0) {
                result = -result;
            }
            return result;
        }, 0);
    });
}
exports.applyOrderByLocally = applyOrderByLocally;
//# sourceMappingURL=orderby.js.map
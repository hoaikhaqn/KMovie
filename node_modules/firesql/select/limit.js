"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
function applyLimit(queries, astLimit) {
    utils_1.assert(astLimit.type === 'number', "LIMIT has to be a number.");
    var limit = utils_1.astValueToNative(astLimit);
    return queries.map(function (query) { return query.limit(limit); });
}
exports.applyLimit = applyLimit;
function applyLimitLocally(docs, astLimit) {
    var limit = utils_1.astValueToNative(astLimit);
    docs.splice(limit);
    return docs;
}
exports.applyLimitLocally = applyLimitLocally;
//# sourceMappingURL=limit.js.map
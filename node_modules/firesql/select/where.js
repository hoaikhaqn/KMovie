"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
function applyWhere(queries, astWhere) {
    if (astWhere.type === 'binary_expr') {
        if (astWhere.operator === 'AND') {
            queries = applyWhere(queries, astWhere.left);
            queries = applyWhere(queries, astWhere.right);
        }
        else if (astWhere.operator === 'OR') {
            queries = applyWhere(queries, astWhere.left).concat(applyWhere(queries, astWhere.right));
        }
        else if (astWhere.operator === 'IN') {
            utils_1.assert(astWhere.left.type === 'column_ref', 'Unsupported WHERE type on left side.');
            utils_1.assert(astWhere.right.type === 'expr_list', 'Unsupported WHERE type on right side.');
            var newQueries_1 = [];
            astWhere.right.value.forEach(function (valueObj) {
                newQueries_1.push.apply(newQueries_1, applyCondition(queries, astWhere.left.column, '=', valueObj));
            });
            queries = newQueries_1;
        }
        else if (astWhere.operator === 'LIKE') {
            utils_1.assert(astWhere.left.type === 'column_ref', 'Unsupported WHERE type on left side.');
            utils_1.assert(astWhere.right.type === 'string', 'Only strings are supported with LIKE in WHERE clause.');
            var whereLike = parseWhereLike(astWhere.right.value);
            if (whereLike.equals !== void 0) {
                queries = applyCondition(queries, astWhere.left.column, '=', whereLike.equals);
            }
            else if (whereLike.beginsWith !== void 0) {
                var successorStr = utils_1.prefixSuccessor(whereLike.beginsWith.value);
                queries = applyCondition(queries, astWhere.left.column, '>=', whereLike.beginsWith);
                queries = applyCondition(queries, astWhere.left.column, '<', stringASTWhereValue(successorStr));
            }
            else {
                throw new Error('Only terms in the form of "value%" (string begins with value) and "value" (string equals value) are supported with LIKE in WHERE clause.');
            }
        }
        else if (astWhere.operator === 'BETWEEN') {
            utils_1.assert(astWhere.left.type === 'column_ref', 'Unsupported WHERE type on left side.');
            utils_1.assert(astWhere.right.type === 'expr_list' &&
                astWhere.right.value.length === 2, 'BETWEEN needs 2 values in WHERE clause.');
            queries = applyCondition(queries, astWhere.left.column, '>=', astWhere.right.value[0]);
            queries = applyCondition(queries, astWhere.left.column, '<=', astWhere.right.value[1]);
        }
        else if (astWhere.operator === 'CONTAINS') {
            utils_1.assert(astWhere.left.type === 'column_ref', 'Unsupported WHERE type on left side.');
            utils_1.assert(['string', 'number', 'bool', 'null'].includes(astWhere.right.type), 'Only strings, numbers, booleans, and null are supported with CONTAINS in WHERE clause.');
            queries = applyCondition(queries, astWhere.left.column, astWhere.operator, astWhere.right);
        }
        else {
            utils_1.assert(astWhere.left.type === 'column_ref', 'Unsupported WHERE type on left side.');
            queries = applyCondition(queries, astWhere.left.column, astWhere.operator, astWhere.right);
        }
    }
    else if (astWhere.type === 'column_ref') {
        // The query is like "... WHERE column_name", so lets return
        // the documents where "column_name" is true. Ideally we would
        // include any document where "column_name" is truthy, but there's
        // no way to do that with Firestore.
        queries = queries.map(function (query) { return query.where(astWhere.column, '==', true); });
    }
    else {
        throw new Error('Unsupported WHERE clause');
    }
    return queries;
}
exports.applyWhere = applyWhere;
function applyCondition(queries, field, astOperator, astValue) {
    /*
     TODO: Several things:
  
      - If we're applying a range condition to a query (<, <=, >, >=)
        we need to make sure that any other range condition on that same
        query is only applied to the same field. Firestore doesn't
        allow range conditions on several fields in the same query.
  
      - If we apply a range condition, the first .orderBy() needs to
        be on that same field. We should wait and only apply it if
        the user has requested an ORDER BY. Otherwise, they might be
        expecting the results ordered by document id.
  
      - Can't combine "LIKE 'value%'" and inequality filters (>, <=, ...)
        with AND:
          SELECT * FROM shops WHERE rating > 2 AND name LIKE 'T%'
        In theory it's only a problem when they're on the same field,
        but since applying those on different fields doesn't make any
        sense it's easier if we just disallow it in any case.
        It's OK if it's with an OR (not the same query):
          SELECT * FROM shops WHERE rating > 2 OR name LIKE 'T%'
    */
    if (astOperator === '!=' || astOperator === '<>') {
        if (astValue.type === 'bool') {
            // If the value is a boolean, then just perform a == operation
            // with the negation of the value.
            var negValue = { type: 'bool', value: !astValue.value };
            return applyCondition(queries, field, '=', negValue);
        }
        else {
            // The != operator is not supported in Firestore so we
            // split this query in two, one with the < operator and
            // another one with the > operator.
            return applyCondition(queries, field, '<', astValue).concat(applyCondition(queries, field, '>', astValue));
        }
    }
    else {
        var value_1 = utils_1.astValueToNative(astValue);
        var operator_1 = whereFilterOp(astOperator);
        return queries.map(function (query) { return query.where(field, operator_1, value_1); });
    }
}
function whereFilterOp(op) {
    var newOp;
    switch (op) {
        case '=':
        case 'IS':
            newOp = '==';
            break;
        case '<':
        case '<=':
        case '>':
        case '>=':
            newOp = op;
            break;
        case 'CONTAINS':
            newOp = 'array-contains';
            break;
        case 'NOT':
        case 'NOT CONTAINS':
            throw new Error('"NOT" WHERE operator unsupported');
            break;
        default:
            throw new Error('Unknown WHERE operator');
    }
    return newOp;
}
function stringASTWhereValue(str) {
    return {
        type: 'string',
        value: str
    };
}
function parseWhereLike(str) {
    var result = {};
    var strLength = str.length;
    if (str[0] === '%') {
        if (str[strLength - 1] === '%') {
            result.contains = stringASTWhereValue(str.substr(1, strLength - 2));
        }
        else {
            result.endsWith = stringASTWhereValue(str.substring(1));
        }
    }
    else if (str[strLength - 1] === '%') {
        result.beginsWith = stringASTWhereValue(str.substr(0, strLength - 1));
    }
    else {
        result.equals = stringASTWhereValue(str);
    }
    return result;
}
//# sourceMappingURL=where.js.map
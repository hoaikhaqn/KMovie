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
require("firebase/firestore");
var sql_parser_1 = require("./sql-parser");
var utils_1 = require("./utils");
var select_1 = require("./select");
var FireSQL = /** @class */ (function () {
    function FireSQL(ref, _options) {
        if (_options === void 0) { _options = {}; }
        this._options = _options;
        /*
           We initially used `instanceof` to determine the object type, but that
           only allowed using the client SDK. Doing it this way we can support
           both the client and the admin SDKs.
           */
        if (typeof ref.doc === 'function') {
            // It's an instance of firebase.firestore.Firestore
            try {
                this._ref = ref.doc('/');
            }
            catch (err) {
                // If the Firestore instance we get is from the Admin SDK, it throws
                // an error if we call `.doc("/")` on it. In that case we just treat
                // it as a firebase.firestore.DocumentReference
                this._ref = ref;
            }
        }
        else if (typeof ref.collection === 'function') {
            // It's an instance of firebase.firestore.DocumentReference
            this._ref = ref;
        }
        else {
            throw new Error('The first parameter needs to be a Firestore object ' +
                ' or a Firestore document reference .');
        }
    }
    Object.defineProperty(FireSQL.prototype, "ref", {
        get: function () {
            return this._ref;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FireSQL.prototype, "firestore", {
        get: function () {
            return this._ref.firestore;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FireSQL.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    FireSQL.prototype.query = function (sql, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var ast;
            return __generator(this, function (_a) {
                utils_1.assert(
                // tslint:disable-next-line: strict-type-predicates
                typeof sql === 'string' && sql.length > 0, 'query() expects a non-empty string.');
                ast = sql_parser_1.parse(sql);
                if (ast.type === 'select') {
                    return [2 /*return*/, select_1.select_(this._ref, ast, __assign({}, this._options, options))];
                }
                else {
                    throw new Error("\"" + ast.type.toUpperCase() + "\" statements are not supported.");
                }
                return [2 /*return*/];
            });
        });
    };
    FireSQL.prototype.toJSON = function () {
        return {
            ref: this._ref,
            options: this._options
        };
    };
    return FireSQL;
}());
exports.FireSQL = FireSQL;
//# sourceMappingURL=firesql.js.map
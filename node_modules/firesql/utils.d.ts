import { SQL_Value, SQL_AggrFunction } from './sql-parser';
export declare type DocumentData = {
    [field: string]: any;
};
export declare type ValueOf<T> = T[keyof T];
export declare const DOCUMENT_KEY_NAME = "__name__";
export declare function assert(condition: boolean, message: string): void;
export declare function contains(obj: object, prop: string): boolean;
export declare function safeGet(obj: any, prop: string): any;
export declare function deepGet(obj: any, path: string): any;
export declare function astValueToNative(astValue: SQL_Value): boolean | string | number | null;
/**
 * Adapted from: https://github.com/firebase/firebase-ios-sdk/blob/14dd9dc2704038c3bf702426439683cee4dc941a/Firestore/core/src/firebase/firestore/util/string_util.cc#L23-L40
 */
export declare function prefixSuccessor(prefix: string): string;
export declare function nameOrAlias(name: string, alias: string | null, aggrFn?: SQL_AggrFunction): string;

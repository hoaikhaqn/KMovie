import firebase from 'firebase/app';
import 'firebase/firestore';
import { FireSQLOptions, QueryOptions } from './shared';
import { DocumentData } from './utils';
export declare class FireSQL {
    private _options;
    private _ref;
    constructor(ref: FirestoreOrDocument, _options?: FireSQLOptions);
    readonly ref: firebase.firestore.DocumentReference;
    readonly firestore: firebase.firestore.Firestore;
    readonly options: FireSQLOptions;
    query(sql: string, options?: QueryOptions): Promise<DocumentData[]>;
    query<T>(sql: string, options?: QueryOptions): Promise<T[]>;
    toJSON(): object;
}
export declare type FirestoreOrDocument = firebase.firestore.Firestore | firebase.firestore.DocumentReference | AdminFirestore | AdminDocumentReference;
/**
 * An interface representing the basics we need from the
 * admin.firestore.Firestore class.
 * We use it like this to avoid having to require "firebase-admin".
 */
interface AdminFirestore {
    collection(collectionPath: string): any;
    doc(documentPath: string): any;
}
/**
 * An interface representing the basics we need from the
 * admin.firestore.DocumentReference class.
 * We use it like this to avoid having to require "firebase-admin".
 */
interface AdminDocumentReference {
    collection(collectionPath: string): any;
    get(options?: any): Promise<any>;
}
export {};

import { QueryOptions } from '../shared';
import { SQL_Select } from '../sql-parser';
import { DocumentData } from '../utils';
export declare function select_(ref: firebase.firestore.DocumentReference, ast: SQL_Select, options: QueryOptions): Promise<DocumentData[]>;
export declare class SelectOperation {
    private _ref;
    private _ast;
    _includeId?: boolean | string;
    constructor(_ref: firebase.firestore.DocumentReference, _ast: SQL_Select, options: QueryOptions);
    generateQueries_(ast?: SQL_Select): firebase.firestore.Query[];
    executeQueries_(queries: firebase.firestore.Query[]): Promise<DocumentData[]>;
    processDocuments_(queries: firebase.firestore.Query[], documents: DocumentData[]): DocumentData[];
    private _processUngroupedDocs;
    private _processGroupedDocs;
    private _buildResultEntry;
}

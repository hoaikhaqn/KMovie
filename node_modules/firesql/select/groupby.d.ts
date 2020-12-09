import { SQL_GroupBy } from '../sql-parser';
import { DocumentData } from '../utils';
export declare function applyGroupByLocally(documents: DocumentData[], astGroupBy: SQL_GroupBy[]): GroupedDocuments;
export declare class DocumentsGroup {
    key?: string | undefined;
    documents: DocumentData[];
    aggr: GroupAggregateValues;
    constructor(key?: string | undefined);
}
export interface GroupedDocuments {
    [key: string]: GroupedDocuments | DocumentsGroup;
}
export interface GroupAggregateValues {
    sum: {
        [k: string]: number;
    };
    avg: {
        [k: string]: number;
    };
    min: {
        [k: string]: number | string;
    };
    max: {
        [k: string]: number | string;
    };
    total: {
        [k: string]: number;
    };
}

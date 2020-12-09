import { Observable } from 'rxjs';
import { DocumentData } from '../utils';
import { QueryOptions } from '../shared';
declare module '../firesql' {
    interface FireSQL {
        rxQuery(sql: string, options?: QueryOptions): Observable<DocumentData[]>;
        rxQuery<T>(sql: string, options?: QueryOptions): Observable<T[]>;
    }
}

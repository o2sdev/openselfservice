import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import * as Model from './documents.model';

@Injectable()
export abstract class DocumentService {
    protected constructor(..._services: unknown[]) {}

    abstract getDocumentList(query: Model.GetDocumentListQuery, authorization?: string): Observable<Model.Documents>;

    abstract getDocument(params: Model.GetDocumentParams, authorization?: string): Observable<Model.Document>;
}

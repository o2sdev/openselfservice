import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

import { mapDocument, mapDocuments } from './documents.mapper';
import * as Model from './documents.model';
import { DocumentService } from './documents.service';
import { responseDelay } from '@/utils/delay';

@Injectable()
export class MockedDocumentService extends DocumentService {
    constructor() {
        super();
    }

    getDocumentList(query: Model.GetDocumentListQuery): Observable<Model.Documents> {
        return of(mapDocuments(query)).pipe(responseDelay());
    }

    getDocument(params: Model.GetDocumentParams): Observable<Model.Document> {
        return of(mapDocument(params.id)).pipe(responseDelay());
    }
}

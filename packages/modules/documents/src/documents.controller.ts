import { Controller, Get, Headers, Param, Query, UseInterceptors } from '@nestjs/common';
import { Observable } from 'rxjs';

import { LoggerService } from '@o2s/utils.logger';

import * as Model from './documents.model';
import { DocumentService } from './documents.service';

@Controller('/documents')
@UseInterceptors(LoggerService)
export class DocumentController {
    constructor(protected readonly documentService: DocumentService) {}

    @Get()
    getDocumentList(
        @Query() query: Model.GetDocumentListQuery,
        @Headers('authorization') authorization?: string,
    ): Observable<Model.Documents> {
        return this.documentService.getDocumentList(query, authorization);
    }

    @Get(':id')
    getDocument(
        @Param() params: Model.GetDocumentParams,
        @Headers('authorization') authorization?: string,
    ): Observable<Model.Document> {
        return this.documentService.getDocument(params, authorization);
    }
}

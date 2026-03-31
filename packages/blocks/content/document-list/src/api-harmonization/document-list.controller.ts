import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { AppHeaders } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetDocumentListBlockQuery } from './document-list.request';
import { DocumentListService } from './document-list.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class DocumentListController {
    constructor(protected readonly service: DocumentListService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    getDocumentListBlock(@Headers() headers: AppHeaders, @Query() query: GetDocumentListBlockQuery) {
        return this.service.getDocumentListBlock(query, headers);
    }
}

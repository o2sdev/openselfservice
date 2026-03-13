import { Injectable } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { mapDocumentList } from './document-list.mapper';
import { DocumentListBlock } from './document-list.model';
import { GetDocumentListBlockQuery } from './document-list.request';

@Injectable()
export class DocumentListService {
    constructor(private readonly cmsService: CMS.Service) {}

    getDocumentListBlock(
        query: GetDocumentListBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<DocumentListBlock> {
        const cms = this.cmsService.getDocumentListBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(map(([cms]) => mapDocumentList(cms, headers['x-locale'])));
    }
}

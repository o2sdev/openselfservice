import { Injectable } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';

import { mapDocumentList } from './document-list.mapper';
import { DocumentListBlock } from './document-list.model';
import { GetDocumentListBlockQuery } from './document-list.request';

const H = HeaderName;

@Injectable()
export class DocumentListService {
    constructor(private readonly cmsService: CMS.Service) {}

    getDocumentListBlock(query: GetDocumentListBlockQuery, headers: AppHeaders): Observable<DocumentListBlock> {
        const cms = this.cmsService.getDocumentListBlock({ ...query, locale: headers[H.Locale] });

        return forkJoin([cms]).pipe(map(([cms]) => mapDocumentList(cms, headers[H.Locale])));
    }
}

import { Injectable } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { mapQuickLinks } from './quick-links.mapper';
import { QuickLinksBlock } from './quick-links.model';
import { GetQuickLinksBlockQuery } from './quick-links.request';

@Injectable()
export class QuickLinksService {
    constructor(private readonly cmsService: CMS.Service) {}

    getQuickLinksBlock(
        query: GetQuickLinksBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<QuickLinksBlock> {
        const cms = this.cmsService.getQuickLinksBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(map(([cms]) => mapQuickLinks(cms, headers['x-locale'])));
    }
}

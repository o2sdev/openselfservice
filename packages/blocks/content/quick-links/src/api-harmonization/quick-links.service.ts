import { Injectable } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';

import { mapQuickLinks } from './quick-links.mapper';
import { QuickLinksBlock } from './quick-links.model';
import { GetQuickLinksBlockQuery } from './quick-links.request';

const H = HeaderName;

@Injectable()
export class QuickLinksService {
    constructor(private readonly cmsService: CMS.Service) {}

    getQuickLinksBlock(query: GetQuickLinksBlockQuery, headers: AppHeaders): Observable<QuickLinksBlock> {
        const cms = this.cmsService.getQuickLinksBlock({ ...query, locale: headers[H.Locale] });

        return forkJoin([cms]).pipe(map(([cms]) => mapQuickLinks(cms, headers[H.Locale])));
    }
}

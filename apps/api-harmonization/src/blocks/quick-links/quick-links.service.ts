import { Injectable } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS } from '../../models';

import { mapQuickLinks } from './quick-links.mapper';
import { QuickLinksBlock } from './quick-links.model';
import { GetQuickLinksBlockQuery } from './quick-links.request';

@Injectable()
export class QuickLinksService {
    constructor(private readonly cmsService: CMS.Service) {}

    getQuickLinksBlock(query: GetQuickLinksBlockQuery, headers: AppHeaders): Observable<QuickLinksBlock> {
        const cms = this.cmsService.getQuickLinksBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(map(([cms]) => mapQuickLinks(cms, headers['x-locale'])));
    }
}

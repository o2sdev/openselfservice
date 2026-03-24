import { Injectable } from '@nestjs/common';
import { CMS, Resources } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';

import { mapFeaturedServiceList } from './featured-service-list.mapper';
import { FeaturedServiceListBlock } from './featured-service-list.model';
import { GetFeaturedServiceListBlockQuery } from './featured-service-list.request';

const H = HeaderName;

@Injectable()
export class FeaturedServiceListService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly resourceService: Resources.Service,
    ) {}

    getFeaturedServiceListBlock(
        query: GetFeaturedServiceListBlockQuery,
        headers: AppHeaders,
    ): Observable<FeaturedServiceListBlock> {
        const cms = this.cmsService.getFeaturedServiceListBlock({ ...query, locale: headers[H.Locale] });
        const featuredServices = this.resourceService.getFeaturedServiceList();

        return forkJoin([cms, featuredServices]).pipe(
            map(([cms, featuredServices]) => mapFeaturedServiceList(featuredServices, cms)),
        );
    }
}

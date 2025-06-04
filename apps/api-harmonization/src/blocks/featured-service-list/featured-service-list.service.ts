import { Injectable } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS, Resources } from '../../models';

import { mapFeaturedServiceList } from './featured-service-list.mapper';
import { FeaturedServiceListBlock } from './featured-service-list.model';
import { GetFeaturedServiceListBlockQuery } from './featured-service-list.request';

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
        const cms = this.cmsService.getFeaturedServiceListBlock({ ...query, locale: headers['x-locale'] });
        const featuredServices = this.resourceService.getFeaturedServiceList();

        return forkJoin([cms, featuredServices]).pipe(
            map(([cms, featuredServices]) => mapFeaturedServiceList(featuredServices, cms)),
        );
    }
}

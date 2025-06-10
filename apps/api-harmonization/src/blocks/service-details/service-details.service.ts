import { Injectable } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS, Resources } from '../../models';

import { mapServiceDetails } from './service-details.mapper';
import { ServiceDetailsBlock } from './service-details.model';
import { GetServiceDetailsBlockParams, GetServiceDetailsBlockQuery } from './service-details.request';

@Injectable()
export class ServiceDetailsService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly resourceService: Resources.Service,
    ) {}

    getServiceDetailsBlock(
        params: GetServiceDetailsBlockParams,
        query: GetServiceDetailsBlockQuery,
        headers: AppHeaders,
    ): Observable<ServiceDetailsBlock> {
        const cms = this.cmsService.getServiceDetailsBlock({ ...query, locale: headers['x-locale'] });
        const service = this.resourceService.getService({ ...params, locale: headers['x-locale'] });

        return forkJoin([cms, service]).pipe(
            map(([cms, service]) =>
                mapServiceDetails(cms, service, headers['x-locale'], headers['x-client-timezone'] || ''),
            ),
        );
    }
}

import { Injectable } from '@nestjs/common';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS, Resources } from '../../models';

import { mapServiceList } from './service-list.mapper';
import { ServiceListBlock } from './service-list.model';
import { GetServiceListBlockQuery } from './service-list.request';

@Injectable()
export class ServiceListService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly resourceService: Resources.Service,
    ) {}

    getServiceListBlock(query: GetServiceListBlockQuery, headers: AppHeaders): Observable<ServiceListBlock> {
        const cms = this.cmsService.getServiceListBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                return this.resourceService
                    .getServiceList(
                        {
                            ...query,
                            limit: query.limit || cms.pagination?.limit || 6,
                            offset: query.offset || 0,
                            status: query.status as Resources.Model.ContractStatus,
                            type: query.type as Resources.Model.ProductType,
                            category: query.category,
                            sort: query.sort,
                        },
                        headers['authorization'] || '',
                    )
                    .pipe(
                        map((services) =>
                            mapServiceList(services, cms, headers['x-locale'], headers['x-client-timezone'] || ''),
                        ),
                    );
            }),
        );
    }
}

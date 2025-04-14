import { Injectable } from '@nestjs/common';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS, Products, Resources } from '../../models';

import { mapServiceDetails } from './service-details.mapper';
import { ServiceDetailsBlock } from './service-details.model';
import { GetServiceDetailsBlockParams, GetServiceDetailsBlockQuery } from './service-details.request';

@Injectable()
export class ServiceDetailsService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly resourceService: Resources.Service,
        private readonly productService: Products.Service,
    ) {}

    getServiceDetailsBlock(
        params: GetServiceDetailsBlockParams,
        query: GetServiceDetailsBlockQuery,
        headers: AppHeaders,
    ): Observable<ServiceDetailsBlock> {
        const cms = this.cmsService.getServiceDetailsBlock({ ...query, locale: headers['x-locale'] });
        const service = this.resourceService.getService({ ...params, locale: headers['x-locale'] });

        return forkJoin([cms, service]).pipe(
            concatMap(([cms, service]) => {
                return this.productService
                    .getProduct({ id: service.productId, locale: headers['x-locale'] })
                    .pipe(
                        map((products) =>
                            mapServiceDetails(
                                cms,
                                service,
                                products,
                                headers['x-locale'],
                                headers['x-client-timezone'] || '',
                            ),
                        ),
                    );
            }),
        );
    }
}

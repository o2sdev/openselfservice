import { Injectable } from '@nestjs/common';
import { Observable, concatMap, forkJoin, map, switchMap } from 'rxjs';

import { Products } from '@o2s/framework/modules';

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
        private readonly productService: Products.Service,
    ) {}

    getServiceListBlock(query: GetServiceListBlockQuery, headers: AppHeaders): Observable<ServiceListBlock> {
        const cms = this.cmsService.getServiceListBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                return this.resourceService
                    .getServiceList({
                        ...query,
                        limit: cms.pagination?.limit || query.limit,
                    })
                    .pipe(
                        switchMap((services) => {
                            const serviceList = services.data.map((service) => {
                                return this.productService
                                    .getProduct({
                                        id: service.productId,
                                        locale: headers['x-locale'],
                                    })
                                    .pipe(
                                        map((product) => {
                                            return {
                                                ...service,
                                                product,
                                            };
                                        }),
                                    );
                            });
                            return forkJoin(serviceList).pipe(
                                map((servicesList) => {
                                    return {
                                        total: services.total,
                                        data: servicesList,
                                    };
                                }),
                                map((services) => {
                                    return mapServiceList(services, cms, headers['x-locale']);
                                }),
                            );
                        }),
                    );
            }),
        );
    }
}

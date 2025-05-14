import { Injectable } from '@nestjs/common';
import { Observable, concatMap, forkJoin, map, of, switchMap } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS, Products, Resources } from '../../models';

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
        const { status } = query;

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                return this.resourceService
                    .getServiceList(
                        {
                            ...query,
                            limit: query.limit || cms.pagination?.limit || 1,
                            offset: query.offset || 0,
                            status: status as Resources.Model.ContractStatus,
                        },
                        headers['authorization'] || '',
                    )
                    .pipe(
                        switchMap((services) => {
                            if (!services.total) {
                                return of({
                                    total: 0,
                                    data: [],
                                });
                            }

                            const serviceList = services.data.map((service) =>
                                this.productService
                                    .getProduct({
                                        id: service.productId,
                                        variantId: service?.productVariantId,
                                        locale: headers['x-locale'],
                                    })
                                    .pipe(map((product) => ({ ...service, product }))),
                            );

                            return forkJoin(serviceList).pipe(
                                map((servicesList) => ({
                                    total: services.total,
                                    data: servicesList,
                                })),
                            );
                        }),
                        map((services) =>
                            mapServiceList(services, cms, headers['x-locale'], headers['x-client-timezone'] || ''),
                        ),
                    );
            }),
        );
    }
}

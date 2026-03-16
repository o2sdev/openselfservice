import { Injectable } from '@nestjs/common';
import { CMS, Resources } from '@o2s/configs.integrations';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { mapServiceList } from './service-list.mapper';
import { ServiceListBlock } from './service-list.model';
import { GetServiceListBlockQuery } from './service-list.request';

const H = HeaderName;

@Injectable()
export class ServiceListService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly resourceService: Resources.Service,
        private readonly authService: Auth.Service,
    ) {}

    getServiceListBlock(query: GetServiceListBlockQuery, headers: AppHeaders): Observable<ServiceListBlock> {
        const cms = this.cmsService.getServiceListBlock({ ...query, locale: headers[H.Locale] });

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
                        headers[H.Authorization] || '',
                    )
                    .pipe(
                        map((services) => {
                            const result = mapServiceList(
                                services,
                                cms,
                                headers[H.Locale],
                                headers[H.ClientTimezone] || '',
                            );

                            // Extract permissions using ACL service
                            if (headers[H.Authorization]) {
                                const permissions = this.authService.canPerformActions(
                                    headers[H.Authorization],
                                    'services',
                                    ['view'],
                                );

                                result.permissions = {
                                    view: permissions.view ?? false,
                                };
                            }

                            return result;
                        }),
                    );
            }),
        );
    }
}

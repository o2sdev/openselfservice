import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CMS, Orders } from '@o2s/configs.integrations';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { mapOrderDetails } from './order-details.mapper';
import { OrderDetailsBlock } from './order-details.model';
import { GetOrderDetailsBlockParams, GetOrderDetailsBlockQuery } from './order-details.request';

const H = HeaderName;

@Injectable()
export class OrderDetailsService {
    private readonly defaultProductUnit: string;

    constructor(
        private readonly cmsService: CMS.Service,
        private readonly orderService: Orders.Service,
        private readonly configService: ConfigService,
        private readonly authService: Auth.Service,
    ) {
        this.defaultProductUnit = this.configService.get('DEFAULT_PRODUCT_UNIT') || 'PCS';
    }

    getOrderDetailsBlock(
        params: GetOrderDetailsBlockParams,
        query: GetOrderDetailsBlockQuery,
        headers: AppHeaders,
    ): Observable<OrderDetailsBlock> {
        const authorization = headers[H.Authorization];
        const cms = this.cmsService.getOrderDetailsBlock({ ...query, locale: headers[H.Locale] });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                return this.orderService
                    .getOrder(
                        {
                            id: params.id,
                            limit: query.limit || cms.pagination?.limit || 5,
                            offset: query.offset || 0,
                            sort: query.sort || '',
                        },
                        authorization,
                    )
                    .pipe(
                        map((order) => {
                            if (!order) {
                                throw new NotFoundException();
                            }
                            const result = mapOrderDetails(
                                cms,
                                order,
                                headers[H.Locale],
                                headers[H.ClientTimezone] || '',
                                this.defaultProductUnit,
                            );

                            // Extract permissions using ACL service
                            if (authorization) {
                                const permissions = this.authService.canPerformActions(authorization, 'orders', [
                                    'view',
                                    'edit',
                                    'cancel',
                                    'track',
                                ]);

                                result.permissions = {
                                    view: permissions.view ?? false,
                                    edit: permissions.edit ?? false,
                                    cancel: permissions.cancel ?? false,
                                    track: permissions.track ?? false,
                                };
                            }

                            return result;
                        }),
                    );
            }),
        );
    }
}

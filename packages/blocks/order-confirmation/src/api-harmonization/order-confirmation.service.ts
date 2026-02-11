import { Injectable } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { Auth } from '@o2s/framework/modules';

import { mapOrderConfirmation } from './order-confirmation.mapper';
import { OrderConfirmationBlock } from './order-confirmation.model';
import { GetOrderConfirmationBlockQuery } from './order-confirmation.request';

@Injectable()
export class OrderConfirmationService {
    constructor(
        private readonly cmsService: CMS.Service,
        // Optional: Inject Auth.Service when you need to add permission flags to the response
        // private readonly authService: Auth.Service,
    ) {}

    getOrderConfirmationBlock(
        query: GetOrderConfirmationBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<OrderConfirmationBlock> {
        const cms = this.cmsService.getOrderConfirmationBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(
            map(([cms]) => {
                const orderId = query.orderId ?? cms.id;
        const result = mapOrderConfirmation(cms, headers['x-locale'], orderId);

                // Optional: Add permission flags to the response
                // if (headers.authorization) {
                //     const permissions = this.authService.canPerformActions(headers.authorization, 'resource-name', [
                //         'view',
                //         'edit',
                //     ]);
                //     result.permissions = {
                //         view: permissions.view ?? false,
                //         edit: permissions.edit ?? false,
                //     };
                // }

                return result;
            }),
        );
    }
}

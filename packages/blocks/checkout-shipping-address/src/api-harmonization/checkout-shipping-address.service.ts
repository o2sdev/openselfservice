import { CMS } from '@o2s/configs.integrations';
import { Models } from '@o2s/utils.api-harmonization';
import { Injectable } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { Auth } from '@o2s/framework/modules';

import { mapCheckoutShippingAddress } from './checkout-shipping-address.mapper';
import { CheckoutShippingAddressBlock } from './checkout-shipping-address.model';
import { GetCheckoutShippingAddressBlockQuery } from './checkout-shipping-address.request';

@Injectable()
export class CheckoutShippingAddressService {
    constructor(
        private readonly cmsService: CMS.Service,
        // Optional: Inject Auth.Service when you need to add permission flags to the response
        // private readonly authService: Auth.Service,
    ) {}

    getCheckoutShippingAddressBlock(
        query: GetCheckoutShippingAddressBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<CheckoutShippingAddressBlock> {
        const cms = this.cmsService.getCheckoutShippingAddressBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(
            map(([cms]) => {
                const result = mapCheckoutShippingAddress(cms, headers['x-locale']);

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

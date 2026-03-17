import { Injectable } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';

// import { Auth } from '@o2s/framework/modules';

import { mapCheckoutShippingAddress } from './checkout-shipping-address.mapper';
import { CheckoutShippingAddressBlock } from './checkout-shipping-address.model';
import { GetCheckoutShippingAddressBlockQuery } from './checkout-shipping-address.request';

const H = HeaderName;

@Injectable()
export class CheckoutShippingAddressService {
    constructor(
        private readonly cmsService: CMS.Service,
        // Optional: Inject Auth.Service when you need to add permission flags to the response
        // private readonly authService: Auth.Service,
    ) {}

    getCheckoutShippingAddressBlock(
        query: GetCheckoutShippingAddressBlockQuery,
        headers: AppHeaders,
    ): Observable<CheckoutShippingAddressBlock> {
        const cms = this.cmsService.getCheckoutShippingAddressBlock({ ...query, locale: headers[H.Locale] });

        return forkJoin([cms]).pipe(
            map(([cms]) => {
                const result = mapCheckoutShippingAddress(cms);

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

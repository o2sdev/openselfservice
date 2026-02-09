import { Models } from '@o2s/utils.api-harmonization';
import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetCheckoutShippingAddressBlockQuery } from './checkout-shipping-address.request';
import { CheckoutShippingAddressService } from './checkout-shipping-address.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class CheckoutShippingAddressController {
    constructor(protected readonly service: CheckoutShippingAddressService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    // Optional: Add permission-based access control
    // @Auth.Decorators.Permissions({ resource: 'resource-name', actions: ['view'] })
    getCheckoutShippingAddressBlock(@Headers() headers: Models.Headers.AppHeaders, @Query() query: GetCheckoutShippingAddressBlockQuery) {
        return this.service.getCheckoutShippingAddressBlock(query, headers);
    }
}

import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { Models } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { URL } from './';
import { GetCheckoutNotesBlockQuery } from './checkout-notes.request';
import { CheckoutNotesService } from './checkout-notes.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class CheckoutNotesController {
    constructor(protected readonly service: CheckoutNotesService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [] })
    // Optional: Add permission-based access control
    // @Auth.Decorators.Permissions({ resource: 'resource-name', actions: ['view'] })
    getCheckoutNotesBlock(@Headers() headers: Models.Headers.AppHeaders, @Query() query: GetCheckoutNotesBlockQuery) {
        return this.service.getCheckoutNotesBlock(query, headers);
    }
}

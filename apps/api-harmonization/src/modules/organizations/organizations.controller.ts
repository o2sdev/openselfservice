import { URL } from '.';
import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';

import { LoggerService } from '@o2s/utils.logger';

import { AppHeaders } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { GetCustomersQuery } from './organizations.request';
import { OrganizationsService } from './organizations.service';

@Controller(URL)
@UseInterceptors(LoggerService)
@ApiExcludeController()
export class OrganizationsController {
    constructor(protected readonly service: OrganizationsService) {}

    @Get()
    @Auth.Decorators.Permissions({ resource: 'organizations', actions: ['view'] })
    getCustomers(@Headers() headers: AppHeaders, @Query() query: GetCustomersQuery) {
        return this.service.getCustomers(query, headers);
    }
}

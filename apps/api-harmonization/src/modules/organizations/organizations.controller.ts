import { URL } from '.';
import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';

import { Models } from '@o2s/utils.api-harmonization';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { GetCustomersQuery } from './organizations.request';
import { OrganizationsService } from './organizations.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class OrganizationsController {
    constructor(protected readonly service: OrganizationsService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [Auth.Constants.Roles.ORG_USER, Auth.Constants.Roles.ORG_ADMIN] })
    getCustomers(@Headers() headers: Models.Headers.AppHeaders, @Query() query: GetCustomersQuery) {
        return this.service.getCustomers(query, headers);
    }
}

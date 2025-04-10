import { URL } from '.';
import { Controller, Get, Headers, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { Auth } from '@o2s/framework/modules';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { GetOrganizationsQuery } from './organizations.request';
import { OrganizationsService } from './organizations.service';

@Controller(URL)
@UseInterceptors(LoggerService)
export class OrganizationsController {
    constructor(protected readonly service: OrganizationsService) {}

    @Get()
    @Auth.Decorators.Roles({ roles: [Auth.Constants.Roles.USER, Auth.Constants.Roles.ADMIN] })
    getOrganizations(@Headers() headers: AppHeaders, @Query() query: GetOrganizationsQuery) {
        return this.service.getOrganizations(query, headers);
    }
}

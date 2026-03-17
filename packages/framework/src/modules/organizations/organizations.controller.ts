import { Controller, Get, Headers, Param, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { OrganizationService } from './organizations.service';
import { AppHeaders, HeaderName } from '@/utils/models/headers';

const H = HeaderName;

@Controller('organizations')
@UseInterceptors(LoggerService)
export class OrganizationController {
    constructor(private readonly organizationService: OrganizationService) {}

    @Get(':id')
    getOrganization(@Param() params: Request.GetOrganizationParams, @Headers() headers: AppHeaders) {
        return this.organizationService.getOrganization(params, headers[H.Authorization]);
    }

    @Get()
    getOrganizations(@Query() options: Request.OrganizationsListQuery, @Headers() headers: AppHeaders) {
        return this.organizationService.getOrganizationList(options, headers[H.Authorization]);
    }

    @Get('/membership/:orgId/:userId')
    checkMembership(@Param() params: Request.CheckMembershipParams, @Headers() headers: AppHeaders) {
        return this.organizationService.checkMembership(params, headers[H.Authorization]);
    }
}

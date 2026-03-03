import { Controller, Get, Headers, Param, Query, UseInterceptors } from '@nestjs/common';

import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { OrganizationService } from './organizations.service';
import { AppHeaders } from '@/utils/models/headers';

/**
 * HTTP controller for organizations. Base path: `organizations`. All methods delegate to {@link OrganizationService}.
 */
@Controller('organizations')
@UseInterceptors(LoggerService)
export class OrganizationController {
    constructor(private readonly organizationService: OrganizationService) {}

    @Get(':id')
    getOrganization(
        @Param() params: Request.GetOrganizationParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<OrganizationService['getOrganization']> {
        return this.organizationService.getOrganization(params, headers.authorization);
    }

    @Get()
    getOrganizations(
        @Query() options: Request.OrganizationsListQuery,
        @Headers() headers: AppHeaders,
    ): ReturnType<OrganizationService['getOrganizationList']> {
        return this.organizationService.getOrganizationList(options, headers.authorization);
    }

    @Get('/membership/:orgId/:userId')
    checkMembership(
        @Param() params: Request.CheckMembershipParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<OrganizationService['checkMembership']> {
        return this.organizationService.checkMembership(params, headers.authorization);
    }
}

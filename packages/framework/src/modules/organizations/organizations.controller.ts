import { Controller, Get, Headers, Param, Query, UseInterceptors } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { Organization, PaginatedOrganizations } from './organizations.model';
import { OrganizationService } from './organizations.service';
import { AppHeaders, HeaderName } from '@/utils/models/headers';

const H = HeaderName;

/**
 * HTTP controller for organizations. Base path: `organizations`. All methods delegate to {@link OrganizationService}.
 */
@Controller('organizations')
@UseInterceptors(LoggerService)
@ApiTags('organizations')
export class OrganizationController {
    constructor(private readonly organizationService: OrganizationService) {}

    @Get(':id')
    @ApiOperation({ summary: 'Get organization by id' })
    @ApiParam({ name: 'id', type: String, description: 'Organization identifier.' })
    @ApiOkResponse({ description: 'Returns organization details.', type: Organization })
    getOrganization(
        @Param() params: Request.GetOrganizationParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<OrganizationService['getOrganization']> {
        return this.organizationService.getOrganization(params, headers[H.Authorization]);
    }

    @Get()
    @ApiOperation({ summary: 'List organizations' })
    @ApiQuery({
        name: 'query',
        required: false,
        type: String,
        description: 'Organization list filters and pagination query.',
    })
    @ApiOkResponse({ description: 'Returns organizations list.', type: PaginatedOrganizations })
    getOrganizations(
        @Query() options: Request.OrganizationsListQuery,
        @Headers() headers: AppHeaders,
    ): ReturnType<OrganizationService['getOrganizationList']> {
        return this.organizationService.getOrganizationList(options, headers[H.Authorization]);
    }

    @Get('/membership/:orgId/:userId')
    @ApiOperation({ summary: 'Check organization membership' })
    @ApiParam({ name: 'orgId', type: String, description: 'Organization identifier.' })
    @ApiParam({ name: 'userId', type: String, description: 'User identifier.' })
    @ApiOkResponse({
        description: 'Returns true if user is a member of the organization.',
        schema: { type: 'boolean' },
    })
    checkMembership(
        @Param() params: Request.CheckMembershipParams,
        @Headers() headers: AppHeaders,
    ): ReturnType<OrganizationService['checkMembership']> {
        return this.organizationService.checkMembership(params, headers[H.Authorization]);
    }
}

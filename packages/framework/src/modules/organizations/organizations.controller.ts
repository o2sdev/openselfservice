import { Controller, Get, Param, Query, UseInterceptors } from '@nestjs/common';
import { LoggerService } from '@o2s/utils.logger';

import { Request } from './';
import { OrganizationService } from './organizations.service';

@Controller('organizations')
@UseInterceptors(LoggerService)
export class OrganizationController {
    constructor(private readonly organizationService: OrganizationService) {}

    @Get(':id')
    getOrganization(@Param() params: Request.GetOrganizationParams) {
        return this.organizationService.getOrganization(params);
    }

    @Get()
    getOrganizations(@Query() options: Request.OrganizationsListQuery) {
        return this.organizationService.getOrganizationList(options);
    }
}

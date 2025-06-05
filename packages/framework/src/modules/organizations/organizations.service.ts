import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import * as Organizations from './';

@Injectable()
export abstract class OrganizationService {
    protected constructor(..._services: unknown[]) {}

    abstract getOrganizationList(
        options: Organizations.Request.OrganizationsListQuery,
        authorization?: string,
    ): Observable<Organizations.Model.Organizations | undefined>;
    abstract getOrganization(
        params: Organizations.Request.GetOrganizationParams,
        authorization?: string,
    ): Observable<Organizations.Model.Organization | undefined>;
}

import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import * as Organizations from './';

@Injectable()
export abstract class OrganizationService {
    abstract getOrganizationList(
        options: Organizations.Request.OrganizationsListQuery,
    ): Observable<Organizations.Model.Organizations | undefined>;

    abstract getOrganization(
        params: Organizations.Request.GetOrganizationParams,
    ): Observable<Organizations.Model.Organization | undefined>;

    abstract checkMembership(params: Organizations.Request.CheckMembershipParams): Observable<boolean>;
}

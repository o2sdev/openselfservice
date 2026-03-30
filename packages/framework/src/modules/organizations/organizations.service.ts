import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import * as Organizations from './';

/**
 * Abstract organization service. Implementation is provided by API Harmonization. All methods return RxJS {@link Observable}.
 */
@Injectable()
export abstract class OrganizationService {
    protected constructor(..._services: unknown[]) {}

    /** Organization list with optional taxId filter. */
    abstract getOrganizationList(
        options: Organizations.Request.OrganizationsListQuery,
        authorization?: string,
    ): Observable<Organizations.Model.Organizations | undefined>;
    /** Single organization by id. */
    abstract getOrganization(
        params: Organizations.Request.GetOrganizationParams,
        authorization?: string,
    ): Observable<Organizations.Model.Organization | undefined>;
    /** Check if user is member of organization. */
    abstract checkMembership(
        params: Organizations.Request.CheckMembershipParams,
        authorization?: string,
    ): Observable<boolean>;
}

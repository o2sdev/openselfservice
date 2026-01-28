import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

import { Organizations } from '@o2s/framework/modules';

import { checkMembership, mapOrganization, mapOrganizationsForUser } from './organizations.mapper';
import { responseDelay } from '@/utils/delay';

@Injectable()
export class OrganizationsService implements Organizations.Service {
    getOrganizationList(
        options: Organizations.Request.OrganizationsListQuery,
        authorization?: string,
    ): Observable<Organizations.Model.Organizations | undefined> {
        return of(mapOrganizationsForUser(options, authorization)).pipe(responseDelay());
    }

    getOrganization(
        params: Organizations.Request.GetOrganizationParams,
    ): Observable<Organizations.Model.Organization | undefined> {
        return of(mapOrganization(params.id)).pipe(responseDelay());
    }

    checkMembership(params: Organizations.Request.CheckMembershipParams): Observable<boolean> {
        return of(checkMembership(params.orgId, params.userId)).pipe(responseDelay());
    }
}

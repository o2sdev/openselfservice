import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

import { Organizations } from '@o2s/framework/modules';

import { mapOrganization, mapOrganizations } from './organizations.mapper';
import { responseDelay } from '@/utils/delay';

@Injectable()
export class OrganizationsService implements Organizations.Service {
    getOrganizationList(
        options: Organizations.Request.OrganizationsListQuery,
    ): Observable<Organizations.Model.Organizations | undefined> {
        return of(mapOrganizations(options)).pipe(responseDelay());
    }

    getOrganization(
        params: Organizations.Request.GetOrganizationParams,
    ): Observable<Organizations.Model.Organization | undefined> {
        return of(mapOrganization(params.id)).pipe(responseDelay());
    }
}

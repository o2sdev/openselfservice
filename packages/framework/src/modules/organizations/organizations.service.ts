import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import * as Organizations from './';

@Injectable()
export abstract class OrganizationService {
    abstract getOrganizationList(
        options: Organizations.Request.OrganizationListQuery,
    ): Observable<Organizations.Model.Organizations | undefined>;
    abstract getOrganization(
        params: Organizations.Request.GetOrganizationParams,
    ): Observable<Organizations.Model.Organization | undefined>;
}

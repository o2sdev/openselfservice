import { Injectable, NotFoundException } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS, Organizations } from '../../models';

import { mapOrganizationList } from './organizations.mapper';
import { OrganizationList } from './organizations.model';
import { GetOrganizationsQuery } from './organizations.request';

@Injectable()
export class OrganizationsService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly organizationsService: Organizations.Service,
    ) {}

    getOrganizations(query: GetOrganizationsQuery, headers: AppHeaders): Observable<OrganizationList> {
        const cms = this.cmsService.getOrganizationList({ locale: headers['x-locale'] });
        const organizations = this.organizationsService.getOrganizationList(query);

        return forkJoin([organizations, cms]).pipe(
            map(([organizations, cms]) => {
                if (!organizations) {
                    throw new NotFoundException();
                }

                return mapOrganizationList(organizations, cms, headers['x-locale']);
            }),
        );
    }
}

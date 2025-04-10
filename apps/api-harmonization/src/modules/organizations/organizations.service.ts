import { Injectable } from '@nestjs/common';
import { Observable, concatMap, forkJoin, map } from 'rxjs';

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
        const cms = this.cmsService.getOrganizationListBlock({ locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(
            concatMap(([cms]) => {
                return this.organizationsService
                    .getOrganizationList({
                        limit: query.limit || cms.pagination?.limit || 1,
                        offset: query.offset || 0,
                    })
                    .pipe(map((organizations) => mapOrganizationList(organizations, cms, headers['x-locale'])));
            }),
        );
    }
}

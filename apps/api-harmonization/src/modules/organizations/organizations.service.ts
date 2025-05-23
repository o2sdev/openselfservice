import { Injectable, NotFoundException } from '@nestjs/common';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS, Organizations } from '../../models';

import { mapCustomerList } from './organizations.mapper';
import { CustomerList } from './organizations.model';
import { GetCustomersQuery } from './organizations.request';

@Injectable()
export class OrganizationsService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly organizationsService: Organizations.Service,
    ) {}

    getCustomers(query: GetCustomersQuery, headers: AppHeaders): Observable<CustomerList> {
        const cms = this.cmsService.getOrganizationList({ locale: headers['x-locale'] });
        const organizations = this.organizationsService.getOrganizationList({
            ...query,
            limit: query.limit || 1000,
            offset: query.offset || 0,
        });

        return forkJoin([organizations, cms]).pipe(
            map(([organizations, cms]) => {
                if (!organizations) {
                    throw new NotFoundException();
                }

                return mapCustomerList(organizations, cms, headers['x-locale']);
            }),
        );
    }
}

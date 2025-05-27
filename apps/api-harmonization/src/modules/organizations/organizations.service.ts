import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Observable, concatMap, forkJoin, map, of } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS, Organizations, Users } from '../../models';

import { mapCustomerList } from './organizations.mapper';
import { CustomerList, OrganizationMembership } from './organizations.model';
import { CheckMembershipQuery, GetCustomersQuery } from './organizations.request';

@Injectable()
export class OrganizationsService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly organizationsService: Organizations.Service,
        private readonly usersService: Users.Service,
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

    checkMembership(query: CheckMembershipQuery, _headers: AppHeaders): Observable<OrganizationMembership> {
        if (!query.taxId || !query.username) {
            throw new BadRequestException();
        }

        const organizations = this.organizationsService.getOrganizationList({
            taxId: query.taxId,
        });

        const users = this.usersService.getUsers({
            username: query.username,
        });

        return forkJoin([organizations, users]).pipe(
            concatMap(([organizations, users]) => {
                const organization = organizations?.data[0];
                const user = users?.data[0];

                if (!organization) {
                    throw new NotFoundException();
                }

                if (user) {
                    const membership = this.organizationsService.checkMembership({
                        orgId: organization.id,
                        userId: user.id,
                    });

                    return membership.pipe(
                        map((membership) => {
                            return {
                                id: organization.id,
                                name: organization.name,
                                taxId: organization.taxId,
                                user: membership
                                    ? {
                                          username: user.username,
                                      }
                                    : undefined,
                            };
                        }),
                    );
                }

                return of({
                    id: organization.id,
                    name: organization.name,
                    taxId: organization.taxId,
                });
            }),
        );
    }
}

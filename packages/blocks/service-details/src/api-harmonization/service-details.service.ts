import { Injectable } from '@nestjs/common';
import { CMS, Resources } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { Auth } from '@o2s/framework/modules';

import { mapServiceDetails } from './service-details.mapper';
import { ServiceDetailsBlock } from './service-details.model';
import { GetServiceDetailsBlockParams, GetServiceDetailsBlockQuery } from './service-details.request';

@Injectable()
export class ServiceDetailsService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly resourceService: Resources.Service,
        private readonly permissionsService: Auth.Permissions.Service,
    ) {}

    getServiceDetailsBlock(
        params: GetServiceDetailsBlockParams,
        query: GetServiceDetailsBlockQuery,
        headers: ApiModels.Headers.AppHeaders,
    ): Observable<ServiceDetailsBlock> {
        const cms = this.cmsService.getServiceDetailsBlock({ ...query, locale: headers['x-locale'] });
        const service = this.resourceService.getService({ ...params, locale: headers['x-locale'] });

        return forkJoin([cms, service]).pipe(
            map(([cms, service]) => {
                const result = mapServiceDetails(cms, service, headers['x-locale'], headers['x-client-timezone'] || '');

                // Extract permissions using ACL service
                if (headers.authorization) {
                    const permissions = this.permissionsService.checkResourceActions(
                        headers.authorization,
                        'services',
                        ['view'],
                    );

                    result.permissions = {
                        view: permissions.view ?? false,
                    };
                } else {
                    // Default to allowing view if no authorization token
                    result.permissions = {
                        view: true,
                    };
                }

                return result;
            }),
        );
    }
}

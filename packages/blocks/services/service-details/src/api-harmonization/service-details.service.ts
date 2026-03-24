import { Injectable } from '@nestjs/common';
import { CMS, Resources } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';
import { Auth } from '@o2s/framework/modules';

import { mapServiceDetails } from './service-details.mapper';
import { ServiceDetailsBlock } from './service-details.model';
import { GetServiceDetailsBlockParams, GetServiceDetailsBlockQuery } from './service-details.request';

const H = HeaderName;

@Injectable()
export class ServiceDetailsService {
    constructor(
        private readonly cmsService: CMS.Service,
        private readonly resourceService: Resources.Service,
        private readonly authService: Auth.Service,
    ) {}

    getServiceDetailsBlock(
        params: GetServiceDetailsBlockParams,
        query: GetServiceDetailsBlockQuery,
        headers: AppHeaders,
    ): Observable<ServiceDetailsBlock> {
        const authorization = headers[H.Authorization];
        const cms = this.cmsService.getServiceDetailsBlock({ ...query, locale: headers[H.Locale] });
        const service = this.resourceService.getService({ ...params, locale: headers[H.Locale] }, authorization);

        return forkJoin([cms, service]).pipe(
            map(([cms, service]) => {
                const result = mapServiceDetails(cms, service, headers[H.Locale], headers[H.ClientTimezone] || '');

                // Extract permissions using ACL service
                if (authorization) {
                    const permissions = this.authService.canPerformActions(authorization, 'services', ['view']);

                    result.permissions = {
                        view: permissions.view ?? false,
                    };
                }

                return result;
            }),
        );
    }
}

import { Injectable } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { Auth } from '@o2s/framework/modules';

import { mapKpis } from './kpis.mapper';
import { KpisBlock } from './kpis.model';
import { GetKpisBlockQuery } from './kpis.request';

@Injectable()
export class KpisService {
    constructor(
        private readonly cmsService: CMS.Service,
        // Optional: Inject Auth.Service when you need to add permission flags to the response
        // private readonly authService: Auth.Service,
    ) {}

    getKpisBlock(query: GetKpisBlockQuery, headers: Models.Headers.AppHeaders): Observable<KpisBlock> {
        const cms = this.cmsService.getKpisBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(
            map(([cms]) => {
                const result = mapKpis(cms, headers['x-locale']);

                // Optional: Add permission flags to the response
                // if (headers.authorization) {
                //     const permissions = this.authService.canPerformActions(headers.authorization, 'resource-name', [
                //         'view',
                //         'edit',
                //     ]);
                //     result.permissions = {
                //         view: permissions.view ?? false,
                //         edit: permissions.edit ?? false,
                //     };
                // }

                return result;
            }),
        );
    }
}

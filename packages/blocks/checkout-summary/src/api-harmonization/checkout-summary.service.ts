import { Injectable } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { Auth } from '@o2s/framework/modules';

import { mapCheckoutSummary } from './checkout-summary.mapper';
import { CheckoutSummaryBlock } from './checkout-summary.model';
import { GetCheckoutSummaryBlockQuery } from './checkout-summary.request';

@Injectable()
export class CheckoutSummaryService {
    constructor(
        private readonly cmsService: CMS.Service,
        // Optional: Inject Auth.Service when you need to add permission flags to the response
        // private readonly authService: Auth.Service,
    ) {}

    getCheckoutSummaryBlock(
        query: GetCheckoutSummaryBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<CheckoutSummaryBlock> {
        const cms = this.cmsService.getCheckoutSummaryBlock({ ...query, locale: headers['x-locale'] });

        return forkJoin([cms]).pipe(
            map(([cms]) => {
                const result = mapCheckoutSummary(cms, headers['x-locale']);

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

import { Injectable } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

// import { Auth } from '@o2s/framework/modules';

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
        return this.cmsService.getEntry({ ...query, locale: headers['x-locale'] }).pipe(
            map((cms) => {
                return mapCheckoutSummary(cms as CMS.Model.CheckoutSummaryBlock.CheckoutSummaryBlock);
            }),
        );
    }
}

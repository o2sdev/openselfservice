import { Injectable } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';

// import { Auth } from '@o2s/framework/modules';

import { mapCheckoutSummary } from './checkout-summary.mapper';
import { CheckoutSummaryBlock } from './checkout-summary.model';
import { GetCheckoutSummaryBlockQuery } from './checkout-summary.request';

const H = HeaderName;

@Injectable()
export class CheckoutSummaryService {
    constructor(
        private readonly cmsService: CMS.Service,
        // Optional: Inject Auth.Service when you need to add permission flags to the response
        // private readonly authService: Auth.Service,
    ) {}

    getCheckoutSummaryBlock(
        query: GetCheckoutSummaryBlockQuery,
        headers: AppHeaders,
    ): Observable<CheckoutSummaryBlock> {
        return this.cmsService
            .getBlockConfig<CMS.Model.CheckoutSummaryBlock.CheckoutSummaryBlock>({
                ...query,
                locale: headers[H.Locale],
                blockType: 'CheckoutSummaryBlock',
            })
            .pipe(map(mapCheckoutSummary));
    }
}

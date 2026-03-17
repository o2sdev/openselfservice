import { Injectable } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, map } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

// import { Auth } from '@o2s/framework/modules';

import { mapCheckoutBillingPayment } from './checkout-billing-payment.mapper';
import { CheckoutBillingPaymentBlock } from './checkout-billing-payment.model';
import { GetCheckoutBillingPaymentBlockQuery } from './checkout-billing-payment.request';

@Injectable()
export class CheckoutBillingPaymentService {
    constructor(
        private readonly cmsService: CMS.Service,
        // Optional: Inject Auth.Service when you need to add permission flags to the response
        // private readonly authService: Auth.Service,
    ) {}

    getCheckoutBillingPaymentBlock(
        query: GetCheckoutBillingPaymentBlockQuery,
        headers: Models.Headers.AppHeaders,
    ): Observable<CheckoutBillingPaymentBlock> {
        return this.cmsService.getEntry({ ...query, locale: headers['x-locale'] }).pipe(
            map((cms) => {
                return mapCheckoutBillingPayment(
                    cms as CMS.Model.CheckoutBillingPaymentBlock.CheckoutBillingPaymentBlock,
                );
            }),
        );
    }
}

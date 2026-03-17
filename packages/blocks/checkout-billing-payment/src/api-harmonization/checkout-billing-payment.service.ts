import { Injectable } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, forkJoin, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';

// import { Auth } from '@o2s/framework/modules';

import { mapCheckoutBillingPayment } from './checkout-billing-payment.mapper';
import { CheckoutBillingPaymentBlock } from './checkout-billing-payment.model';
import { GetCheckoutBillingPaymentBlockQuery } from './checkout-billing-payment.request';

const H = HeaderName;

@Injectable()
export class CheckoutBillingPaymentService {
    constructor(
        private readonly cmsService: CMS.Service,
        // Optional: Inject Auth.Service when you need to add permission flags to the response
        // private readonly authService: Auth.Service,
    ) {}

    getCheckoutBillingPaymentBlock(
        query: GetCheckoutBillingPaymentBlockQuery,
        headers: AppHeaders,
    ): Observable<CheckoutBillingPaymentBlock> {
        const cms = this.cmsService.getCheckoutBillingPaymentBlock({ ...query, locale: headers[H.Locale] });

        return forkJoin([cms]).pipe(
            map(([cms]) => {
                return mapCheckoutBillingPayment(cms);
            }),
        );
    }
}

import { Injectable } from '@nestjs/common';
import { CMS } from '@o2s/configs.integrations';
import { Observable, map } from 'rxjs';

import { AppHeaders, HeaderName } from '@o2s/framework/headers';

import { mapCheckoutBillingPayment } from './checkout-billing-payment.mapper';
import { CheckoutBillingPaymentBlock } from './checkout-billing-payment.model';
import { GetCheckoutBillingPaymentBlockQuery } from './checkout-billing-payment.request';

const H = HeaderName;

@Injectable()
export class CheckoutBillingPaymentService {
    constructor(private readonly cmsService: CMS.Service) {}

    getCheckoutBillingPaymentBlock(
        query: GetCheckoutBillingPaymentBlockQuery,
        headers: AppHeaders,
    ): Observable<CheckoutBillingPaymentBlock> {
        return this.cmsService
            .getCheckoutBillingPaymentBlock({ ...query, locale: headers[H.Locale] })
            .pipe(map(mapCheckoutBillingPayment));
    }
}

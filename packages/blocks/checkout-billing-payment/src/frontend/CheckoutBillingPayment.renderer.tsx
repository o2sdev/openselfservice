import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Loading';

import { CheckoutBillingPayment } from './CheckoutBillingPayment.server';
import { CheckoutBillingPaymentRendererProps } from './CheckoutBillingPayment.types';

export const CheckoutBillingPaymentRenderer: React.FC<CheckoutBillingPaymentRendererProps> = ({
    id,
    accessToken,
    routing,
}) => {
    const locale = useLocale();

    return (
        <Suspense
            key={id}
            fallback={
                <div className="w-full flex flex-col gap-8">
                    <Loading bars={0} />
                    <Loading bars={8} />
                </div>
            }
        >
            <CheckoutBillingPayment id={id} accessToken={accessToken} locale={locale} routing={routing} />
        </Suspense>
    );
};

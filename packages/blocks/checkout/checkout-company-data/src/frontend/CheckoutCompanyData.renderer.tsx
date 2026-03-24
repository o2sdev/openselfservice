import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Feedback/Loading';

import { CheckoutCompanyData } from './CheckoutCompanyData.server';
import { CheckoutCompanyDataRendererProps } from './CheckoutCompanyData.types';

export const CheckoutCompanyDataRenderer: React.FC<CheckoutCompanyDataRendererProps> = ({
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
                    <Loading bars={1} />
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <Loading bars={4} />
                        </div>
                        <div className="lg:col-span-1">
                            <Loading bars={4} />
                        </div>
                    </div>
                </div>
            }
        >
            <CheckoutCompanyData id={id} accessToken={accessToken} locale={locale} routing={routing} />
        </Suspense>
    );
};

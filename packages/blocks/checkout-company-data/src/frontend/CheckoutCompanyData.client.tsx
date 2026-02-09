'use client';

import { createNavigation } from 'next-intl/navigation';
import React from 'react';

import { CheckoutCompanyDataPureProps } from './CheckoutCompanyData.types';

export const CheckoutCompanyDataPure: React.FC<CheckoutCompanyDataPureProps> = ({
    locale,
    accessToken,
    routing,
    ...component
}) => {
    const { Link: LinkComponent } = createNavigation(routing);

    return (
        <div className="w-full flex flex-col gap-4">
            {component.__typename}: {component.id}
        </div>
    );
};

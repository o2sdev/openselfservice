'use client';

import { createNavigation } from 'next-intl/navigation';
import React from 'react';

import { TicketSummaryPureProps } from './TicketSummary.types';

export const TicketSummaryPure: React.FC<TicketSummaryPureProps> = ({ locale, accessToken, routing, ...component }) => {
    const { Link: LinkComponent } = createNavigation(routing);

    return (
        <div className="w-full flex flex-col gap-4">
            {component.__typename}: {component.id}
        </div>
    );
};

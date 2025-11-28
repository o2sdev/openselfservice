import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';
import { Loading } from '@o2s/ui/components/Loading';
import { TicketSummary } from './TicketSummary.server';
export const TicketSummaryRenderer = ({ id, accessToken, routing }) => {
    const locale = useLocale();
    return (React.createElement(Suspense, { key: id, fallback: React.createElement(React.Fragment, null,
            React.createElement("div", { className: "w-full flex gap-6" },
                React.createElement(Loading, { bars: 0 }),
                React.createElement(Loading, { bars: 0 }))) },
        React.createElement(TicketSummary, { id: id, accessToken: accessToken, locale: locale, routing: routing })));
};

import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';
import { Loading } from '@o2s/ui/components/Loading';
import { NotificationSummary } from './NotificationSummary.server';
export const NotificationSummaryRenderer = ({ id, accessToken, routing, }) => {
    const locale = useLocale();
    return (React.createElement(Suspense, { key: id, fallback: React.createElement(React.Fragment, null,
            React.createElement("div", { className: "w-full flex gap-6" },
                React.createElement(Loading, { bars: 0 }),
                React.createElement(Loading, { bars: 0 }))) },
        React.createElement(NotificationSummary, { id: id, accessToken: accessToken, locale: locale, routing: routing })));
};

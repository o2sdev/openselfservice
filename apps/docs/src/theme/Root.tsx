import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import React from 'react';

import CookieConsentComponent from '@site/src/components/CookieConsent';

// Default implementation, that you can customize
export default function Root({ children }) {
    return (
        <>
            {children}

            <SpeedInsights />
            <Analytics />
            <CookieConsentComponent />
        </>
    );
}

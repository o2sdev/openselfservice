import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Loading';

import { CtaSection } from './CtaSection.server';
import { CtaSectionRendererProps } from './CtaSection.types';

export const CtaSectionRenderer: React.FC<CtaSectionRendererProps> = ({ id, accessToken, routing }) => {
    const locale = useLocale();

    return (
        <Suspense key={id} fallback={<Loading bars={12} />}>
            <CtaSection id={id} accessToken={accessToken} locale={locale} routing={routing} />
        </Suspense>
    );
};

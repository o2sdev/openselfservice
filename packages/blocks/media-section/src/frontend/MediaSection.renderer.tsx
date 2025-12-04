import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Loading';

import { MediaSection } from './MediaSection.server';
import { MediaSectionRendererProps } from './MediaSection.types';

export const MediaSectionRenderer: React.FC<MediaSectionRendererProps> = ({ id, accessToken, routing }) => {
    const locale = useLocale();

    return (
        <Suspense
            key={id}
            fallback={
                <div className="flex flex-col gap-12">
                    <Loading bars={5} />
                    <Loading bars={25} />
                </div>
            }
        >
            <MediaSection id={id} accessToken={accessToken} locale={locale} routing={routing} />
        </Suspense>
    );
};

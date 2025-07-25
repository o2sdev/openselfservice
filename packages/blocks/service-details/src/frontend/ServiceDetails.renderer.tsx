import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@o2s/ui/components/Container';
import { Loading } from '@o2s/ui/components/Loading';

import { ServiceDetails } from './ServiceDetails.server';
import { ServiceDetailsRendererProps } from './ServiceDetails.types';

export const ServiceDetailsRenderer: React.FC<ServiceDetailsRendererProps> = ({ slug, id, accessToken, routing }) => {
    const locale = useLocale();

    if (!slug[1]) {
        return null;
    }

    return (
        <Suspense
            key={id}
            fallback={
                <>
                    <Loading bars={1} />
                    <Container variant="narrow">
                        <Loading bars={20} />
                    </Container>
                </>
            }
        >
            <ServiceDetails id={id} serviceId={slug[1]} accessToken={accessToken} locale={locale} routing={routing} />
        </Suspense>
    );
};

export { ServiceDetailsRenderer as Renderer };

import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@/components/Container/Container';
import { Loading } from '@/components/Loading/Loading';

import { ServiceDetails } from './ServiceDetails.server';

export interface ServiceDetailsRendererProps {
    slug: string[];
    id: string;
    accessToken: string;
}

export const ServiceDetailsRenderer: React.FC<ServiceDetailsRendererProps> = ({ slug, id, accessToken }) => {
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
            <ServiceDetails id={id} serviceId={slug[1]} accessToken={accessToken} locale={locale} />
        </Suspense>
    );
};

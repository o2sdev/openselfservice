import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@/components/Container/Container';
import { Loading } from '@/components/Loading/Loading';

import { ServiceList } from './ServiceList.server';

export interface ServiceListRendererProps {
    id: string;
    accessToken: string;
}

export const ServiceListRenderer: React.FC<ServiceListRendererProps> = ({ id, accessToken }) => {
    const locale = useLocale();

    return (
        <Suspense
            key={id}
            fallback={
                <>
                    <Loading bars={1} />
                    <Container variant="narrow">
                        <Loading bars={8} />
                    </Container>
                </>
            }
        >
            <ServiceList id={id} accessToken={accessToken} locale={locale} />
        </Suspense>
    );
};

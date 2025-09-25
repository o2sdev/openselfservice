import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@o2s/ui/components/Container';
import { Loading } from '@o2s/ui/components/Loading';

import { ServiceDetails } from './ServiceDetails.server';
import { ServiceDetailsRendererProps } from './ServiceDetails.types';

export const ServiceDetailsRenderer: React.FC<ServiceDetailsRendererProps> = ({
    slug,
    id,
    accessToken,
    routing,
    hasPriority,
}) => {
    const locale = useLocale();

    if (!slug[1]) {
        return null;
    }

    return (
        <Suspense
            key={id}
            fallback={
                <div className="w-full flex flex-col gap-6">
                    <Loading bars={1} />
                    <Container variant="narrow">
                        <Loading bars={16} />
                    </Container>
                    <div className="w-full flex flex-col md:flex-row gap-6">
                        <Loading bars={14} />
                        <Loading bars={14} />
                        <Loading bars={14} />
                    </div>
                </div>
            }
        >
            <ServiceDetails
                id={id}
                serviceId={slug[1]}
                accessToken={accessToken}
                locale={locale}
                routing={routing}
                hasPriority={hasPriority}
            />
        </Suspense>
    );
};

export { ServiceDetailsRenderer as Renderer };

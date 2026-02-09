import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@o2s/ui/components/Container';
import { Loading } from '@o2s/ui/components/Loading';

import { CheckoutNotes } from './CheckoutNotes.server';
import { CheckoutNotesRendererProps } from './CheckoutNotes.types';

export const CheckoutNotesRenderer: React.FC<CheckoutNotesRendererProps> = ({ id, accessToken, routing }) => {
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
            <CheckoutNotes id={id} accessToken={accessToken} locale={locale} routing={routing} />
        </Suspense>
    );
};

import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@/components/Container/Container';
import { Loading } from '@/components/Loading/Loading';

import { UserAccount } from './UserAccount.server';

export interface UserAccountRendererProps {
    id: string;
    accessToken?: string;
}

export const UserAccountRenderer: React.FC<UserAccountRendererProps> = ({ id, accessToken }) => {
    const locale = useLocale();

    return (
        <Suspense
            key={id}
            fallback={
                <>
                    <Loading bars={1} />
                    <Container variant="narrow">
                        <Loading bars={10} />
                    </Container>
                </>
            }
        >
            <UserAccount id={id} accessToken={accessToken} locale={locale} />
        </Suspense>
    );
};

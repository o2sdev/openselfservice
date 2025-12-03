import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@o2s/ui/components/Container';
import { Loading } from '@o2s/ui/components/Loading';

import { UserAccount } from './UserAccount.server';
import { UserAccountRendererProps } from './UserAccount.types';

export const UserAccountRenderer = ({
    id,
    accessToken,
    routing,
    userId,
    onSignOut,
    hasPriority,
}: UserAccountRendererProps) => {
    const locale = useLocale();

    if (!userId) {
        return null;
    }

    return (
        <Suspense
            key={id}
            fallback={
                <Container variant="narrow">
                    <Loading bars={[13, 14]} />
                </Container>
            }
        >
            <UserAccount
                id={id}
                accessToken={accessToken}
                locale={locale}
                routing={routing}
                userId={userId}
                onSignOut={onSignOut}
                hasPriority={hasPriority}
            />
        </Suspense>
    );
};

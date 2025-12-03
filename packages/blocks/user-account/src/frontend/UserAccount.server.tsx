import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '../sdk';

import { UserAccountProps } from './UserAccount.types';

export const UserAccountDynamic = dynamic(() =>
    import('./UserAccount.client').then((module) => module.UserAccountPure),
);

export const UserAccount = async ({
    id,
    accessToken,
    locale,
    routing,
    userId,
    onSignOut,
    hasPriority,
}: UserAccountProps) => {
    if (!userId) {
        return null;
    }

    try {
        const data = await sdk.blocks.getUserAccount(
            {
                id,
                userId,
            },
            { 'x-locale': locale },
            accessToken,
        );

        return (
            <UserAccountDynamic
                {...data}
                id={id}
                accessToken={accessToken}
                locale={locale}
                routing={routing}
                userId={userId}
                onSignOut={onSignOut}
                hasPriority={hasPriority}
            />
        );
    } catch (_error) {
        return null;
    }
};

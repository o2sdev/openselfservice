import dynamic from 'next/dynamic';
import React from 'react';

import { Model } from '../api-harmonization/user-account.client';
import { sdk } from '../sdk';

import { UserAccountProps } from './UserAccount.types';

export const UserAccountDynamic = dynamic(() =>
    import('./UserAccount.client').then((module) => module.UserAccountPure),
);

export const UserAccount: React.FC<UserAccountProps> = async ({
    id,
    accessToken,
    locale,
    routing,
    userId,
    onSignOut,
    hasPriority,
}) => {
    if (!userId) {
        return null;
    }

    let data: Model.UserAccountBlock;
    try {
        data = await sdk.blocks.getUserAccount(
            {
                id,
                userId,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (_error) {
        return null;
    }

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
};

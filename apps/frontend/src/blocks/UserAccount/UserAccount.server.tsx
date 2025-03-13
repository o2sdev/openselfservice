import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '@/api/sdk';

import { UserAccountProps } from './UserAccount.types';

// an intermediary component is required for the dynamic import to work propertly with server components
// @see https://github.com/vercel/next.js/issues/61066
export const UserAccountDynamic = dynamic(() =>
    import('./UserAccount.client').then((module) => module.UserAccountPure),
);

export const UserAccount: React.FC<UserAccountProps> = async ({ id, accessToken, locale }) => {
    const data = await sdk.blocks.getUserAccount(
        {
            id,
        },
        { 'x-locale': locale },
        accessToken,
    );

    return <UserAccountDynamic {...data} id={id} accessToken={accessToken} locale={locale} />;
};

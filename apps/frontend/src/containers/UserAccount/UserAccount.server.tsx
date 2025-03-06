import React from 'react';

import { sdk } from '@/api/sdk';

import { UserAccountDynamic } from './UserAccount.dynamic';
import { UserAccountProps } from './UserAccount.types';

export const UserAccount: React.FC<UserAccountProps> = async ({ id, accessToken, locale }) => {
    const data = await sdk.components.getUserAccount(
        {
            id,
        },
        { 'x-locale': locale },
        accessToken,
    );

    return <UserAccountDynamic {...data} id={id} accessToken={accessToken} locale={locale} />;
};

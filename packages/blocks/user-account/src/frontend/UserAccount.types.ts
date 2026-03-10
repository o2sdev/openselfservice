import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/user-account.client';

export interface UserAccountProps extends Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>> {
    userId?: string;
    onSignOut: () => void;
}

export type UserAccountPureProps = UserAccountProps & Model.UserAccountBlock;

export type UserAccountRendererProps = Omit<UserAccountProps, ''> & {
    slug: string[];
};

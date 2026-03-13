import { defineRouting } from 'next-intl/routing';

import type { Model } from '../api-harmonization/user-account.client';

export interface UserAccountProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
    userId?: string;
    onSignOut: () => void;
    hasPriority?: boolean;
}

export type UserAccountPureProps = UserAccountProps & Model.UserAccountBlock;

export type UserAccountRendererProps = Omit<UserAccountProps, ''> & {
    slug: string[];
};

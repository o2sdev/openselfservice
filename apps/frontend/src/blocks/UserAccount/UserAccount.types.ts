import { Blocks } from '@o2s/api-harmonization';

export interface UserAccountProps {
    id: string;
    accessToken: string;
    locale: string;
}

export type UserAccountPureProps = UserAccountProps & Blocks.UserAccount.Model.UserAccountBlock;

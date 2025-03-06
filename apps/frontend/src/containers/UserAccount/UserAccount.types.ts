import { Components } from '@o2s/api-harmonization';

export interface UserAccountProps {
    id: string;
    accessToken: string;
    locale: string;
}

export type UserAccountPureProps = UserAccountProps & Components.UserAccount.Model.UserAccountComponent;

import { Auth } from '@o2s/framework/modules';

export interface Jwt extends Auth.Model.Jwt {
    permissions?: Auth.Model.Permissions;
    roles?: string[];
    customer?: {
        id: string;
        name: string;
        roles?: string[];
        permissions: Auth.Model.Permissions;
    };
}

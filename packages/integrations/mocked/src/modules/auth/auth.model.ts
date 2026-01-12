import { Auth, Models } from '@o2s/framework/modules';

export interface Jwt extends Auth.Model.Jwt {
    permissions?: Models.Permission.Permission[];
    customer?: {
        id: string;
        name: string;
        permissions: Models.Permission.Permission[];
    };
}

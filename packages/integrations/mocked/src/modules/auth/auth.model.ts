import { Auth } from '@o2s/framework/modules';

export interface Jwt extends Auth.Model.Jwt {
    role: string;
    customer?: {
        id: string;
        roles: string[];
    };
}

import { OrganizationMembership, UserCustomerRole } from '../../utils/models/roles';

import { Customer } from '@/utils/models/customer';
import { Paginated } from '@/utils/models/pagination';

export class User {
    id!: string;
    username!: string;
    email!: string;
    firstName?: string;
    lastName?: string;
    /** Organizations the user belongs to, with their membership details */
    organizations?: OrganizationMembership[];
    /** @deprecated Use organizations instead */
    roles?: UserCustomerRole[];
    /** @deprecated Use organizations instead */
    customers?: Customer[];
}

export type Users = Paginated<User>;

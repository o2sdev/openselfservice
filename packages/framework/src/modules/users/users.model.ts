import { UserCustomerRole } from '../../utils/models/roles';

import { Customer } from '@/utils/models/customer';
import { Paginated } from '@/utils/models/pagination';

export class User {
    id!: string;
    username!: string;
    email!: string;
    firstName?: string;
    lastName?: string;
    roles!: UserCustomerRole[];
    customers!: Customer[];
}

export type Users = Paginated<User>;

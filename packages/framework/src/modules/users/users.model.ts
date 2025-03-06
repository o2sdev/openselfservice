import { UserCustomerRole } from '../../utils/models/roles';

import { Customer } from '@/utils/models/customer';

export class User {
    id!: string;
    email!: string;
    firstName?: string;
    lastName?: string;
    roles!: UserCustomerRole[];
    customers!: Customer[];
}

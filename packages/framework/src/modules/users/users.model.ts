import { Customer } from '@/utils/models/customer';
import { UserCustomerRole } from '@/utils/models/roles';

export class User {
    id!: string;
    email!: string;
    firstName?: string;
    lastName?: string;
    roles!: UserCustomerRole[];
    customers!: Customer[];
}

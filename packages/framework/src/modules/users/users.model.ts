import { Customer } from '@/utils/models/customer';
import { Paginated } from '@/utils/models/pagination';

/** User profile returned by user endpoints. */
export class User {
    id!: string;
    username!: string;
    email!: string;
    firstName?: string;
    lastName?: string;
    customers?: Customer[];
}

/** Paginated user list. */
export type Users = Paginated<User>;

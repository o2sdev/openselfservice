import { Customer } from '@/utils/models/customer';
import { Paginated } from '@/utils/models/pagination';

export class User {
    id!: string;
    username!: string;
    email!: string;
    firstName?: string;
    lastName?: string;
    customers?: Customer[];
}

export type Users = Paginated<User>;

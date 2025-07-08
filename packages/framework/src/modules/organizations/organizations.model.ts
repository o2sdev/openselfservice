import { Pagination } from '@/utils/models';
import { Customer } from '@/utils/models/customer';
import { Party } from '@/utils/models/party';

export class Organization extends Party {
    isActive!: boolean;
    taxId!: string;
    children!: Organization[];
    customers!: Customer[];
}

export type Organizations = Pagination.Paginated<Organization>;

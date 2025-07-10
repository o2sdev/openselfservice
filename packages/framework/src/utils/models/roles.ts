import { Auth } from '@o2s/framework/modules';

import { Customer } from '@/utils/models/customer';

export class UserCustomerRole {
    roles!: Auth.Constants.Roles[];
    customer?: Customer;
}

import { BillingAccount } from '@/modules/billing-accounts/billing-accounts.model';

import { Party } from './party';
import { Permission } from './permission';
import { UserCustomerRole } from './roles';

export class Customer extends Party {
    clientType?: ClientType;
    parentOrgId?: string;
    /** Normalized permissions for this organization */
    permissions?: Permission[];
    /** @deprecated Use permissions instead */
    roles?: UserCustomerRole[];
    billingAccounts?: BillingAccount[];
}

export type ClientType = 'B2B' | 'B2C';

import { Party } from './party';
import { UserCustomerRole } from './roles';
import { BillingAccount } from '@/modules/billing-accounts/billing-accounts.model';

export class Customer extends Party {
    clientType?: ClientType;
    parentOrgId?: string;
    roles?: UserCustomerRole[];
    billingAccounts?: BillingAccount[];
}

export type ClientType = 'B2B' | 'B2C';

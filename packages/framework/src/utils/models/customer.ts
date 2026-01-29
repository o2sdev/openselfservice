import * as Auth from '@/modules/auth';
import { BillingAccount } from '@/modules/billing-accounts/billing-accounts.model';

import { Party } from './party';

export class Customer extends Party {
    clientType?: ClientType;
    parentOrgId?: string;
    roles?: Auth.Model.Role[];
    permissions?: Auth.Model.Permissions;
    billingAccounts?: BillingAccount[];
}

export type ClientType = 'B2B' | 'B2C';

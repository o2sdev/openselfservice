import { BillingAccounts } from '@o2s/framework/modules';

const MOCK_BILLING_ACCOUNT_1: BillingAccounts.Model.BillingAccount = {
    id: 'BA-001',
    number: '550e8400-e29b-41d4-a716-446655440000',
    status: 'ACTIVE',
};

const MOCK_BILLING_ACCOUNT_2: BillingAccounts.Model.BillingAccount = {
    id: 'BA-002',
    number: '7a3f8b12-d9c5-48e7-b3a2-f89d76e42c8a',
    status: 'INACTIVE',
};

const MOCK_BILLING_ACCOUNT_3: BillingAccounts.Model.BillingAccount = {
    id: 'BA-003',
    number: '550e8400-e29b-41d4-a716-446655440002',
    status: 'INACTIVE',
};

const MOCK_BILLING_ACCOUNTS = [MOCK_BILLING_ACCOUNT_1, MOCK_BILLING_ACCOUNT_2, MOCK_BILLING_ACCOUNT_3];

export const mapBillingAccount = (id: string): BillingAccounts.Model.BillingAccount => {
    const billingAccount = MOCK_BILLING_ACCOUNTS.find((billingAccount) => billingAccount.id === id);
    if (!billingAccount) {
        throw new Error(`Billing account with id ${id} not found`);
    }
    return billingAccount;
};

export const mapBillingAccounts = (
    query: BillingAccounts.Request.GetBillingAccountsListQuery,
): BillingAccounts.Model.BillingAccounts => {
    const filteredBillingAccounts = MOCK_BILLING_ACCOUNTS.filter((billingAccount) => {
        if (query.status && billingAccount.status !== query.status) {
            return false;
        }
        return true;
    });
    return {
        data: filteredBillingAccounts,
        total: filteredBillingAccounts.length,
    };
};

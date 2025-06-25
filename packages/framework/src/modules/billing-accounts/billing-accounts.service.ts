import { Observable } from 'rxjs';

import { BillingAccount, BillingAccounts } from './billing-accounts.model';
import { GetBillingAccountParams, GetBillingAccountsListQuery } from './billing-accounts.request';

export abstract class BillingAccountService {
    protected constructor(..._services: unknown[]) {}

    abstract getBillingAccounts(
        query: GetBillingAccountsListQuery,
        authorization?: string,
    ): Observable<BillingAccounts>;
    abstract getBillingAccount(params: GetBillingAccountParams, authorization?: string): Observable<BillingAccount>;
}

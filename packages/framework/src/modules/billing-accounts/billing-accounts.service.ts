import { Observable } from 'rxjs';

import { BillingAccount, BillingAccounts } from './billing-accounts.model';
import { GetBillingAccountParams, GetBillingAccountsListQuery } from './billing-accounts.request';

/**
 * Abstract billing account service. Implementation is provided by API Harmonization. All methods return RxJS {@link Observable}.
 */
export abstract class BillingAccountService {
    protected constructor(..._services: unknown[]) {}

    /**
     * Retrieve a list of billing accounts.
     * @param query Request query containing paging and optional filters.
     * @param authorization Optional bearer token value.
     * @returns Observable stream with billing account list data.
     */
    abstract getBillingAccounts(
        query: GetBillingAccountsListQuery,
        authorization?: string,
    ): Observable<BillingAccounts>;
    /**
     * Retrieve a single billing account by params.
     * @param params Request params identifying the billing account.
     * @param authorization Optional bearer token value.
     * @returns Observable stream with one billing account.
     */
    abstract getBillingAccount(params: GetBillingAccountParams, authorization?: string): Observable<BillingAccount>;
}

import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

import { BillingAccounts } from '@o2s/framework/modules';

import { mapBillingAccount, mapBillingAccounts } from './billing-accounts.mapper';
import { responseDelay } from '@/utils/delay';

@Injectable()
export class BillingAccountService implements BillingAccounts.Service {
    getBillingAccount(
        params: BillingAccounts.Request.GetBillingAccountParams,
    ): Observable<BillingAccounts.Model.BillingAccount> {
        return of(mapBillingAccount(params.id)).pipe(responseDelay());
    }

    getBillingAccounts(
        query: BillingAccounts.Request.GetBillingAccountsListQuery,
    ): Observable<BillingAccounts.Model.BillingAccounts> {
        return of(mapBillingAccounts(query)).pipe(responseDelay());
    }
}

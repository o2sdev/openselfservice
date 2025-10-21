import { Config, Integration } from '@o2s/integrations.mocked/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const BillingAccountsIntegrationConfig: ApiConfig['integrations']['billingAccounts'] = Config.billingAccounts!;

export import Service = Integration.BillingAccounts.Service;
export import Request = Integration.BillingAccounts.Request;
export import Model = Integration.BillingAccounts.Model;

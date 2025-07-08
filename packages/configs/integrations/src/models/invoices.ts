import { Config, Integration } from '@o2s/integrations.mocked/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const InvoicesIntegrationConfig: ApiConfig['integrations']['invoices'] = Config.invoices!;

export import Service = Integration.Invoices.Service;
export import Request = Integration.Invoices.Request;
export import Model = Integration.Invoices.Model;

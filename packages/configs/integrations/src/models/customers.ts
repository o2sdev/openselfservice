import { Config, Integration } from '@o2s/integrations.mocked/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const CustomersIntegrationConfig: ApiConfig['integrations']['customers'] = Config.customers!;

export import Service = Integration.Customers.Service;
export import Request = Integration.Customers.Request;
export import Model = Integration.Customers.Model;

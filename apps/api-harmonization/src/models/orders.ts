import { Config, Integration } from '@o2s/integrations.mocked/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const OrdersIntegrationConfig: ApiConfig['integrations']['orders'] = Config.orders!;

export import Service = Integration.Orders.Service;
export import Request = Integration.Orders.Request;
export import Model = Integration.Orders.Model;

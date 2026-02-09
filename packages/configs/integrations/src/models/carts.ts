import { Config, Integration } from '@o2s/integrations.medusajs/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const CartsIntegrationConfig: ApiConfig['integrations']['carts'] = Config.carts!;

export import Service = Integration.Carts.Service;
export import Request = Integration.Carts.Request;
export import Model = Integration.Carts.Model;

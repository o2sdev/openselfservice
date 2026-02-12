import { Config, Integration } from '@o2s/integrations.medusajs/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const CheckoutIntegrationConfig: ApiConfig['integrations']['checkout'] = Config.checkout!;

export import Service = Integration.Checkout.Service;
export import Request = Integration.Checkout.Request;
export import Model = Integration.Checkout.Model;

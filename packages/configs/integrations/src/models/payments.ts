import { Config, Integration } from '@o2s/integrations.medusajs/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const PaymentsIntegrationConfig: ApiConfig['integrations']['payments'] = Config.payments!;

export import Service = Integration.Payments.Service;
export import Request = Integration.Payments.Request;
export import Model = Integration.Payments.Model;

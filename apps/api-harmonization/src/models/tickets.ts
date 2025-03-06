import { Config, Integration } from '@o2s/integrations.mocked/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const TicketsIntegrationConfig: ApiConfig['integrations']['tickets'] = Config.tickets!;

export import Service = Integration.Tickets.Service;
export import Request = Integration.Tickets.Request;
export import Model = Integration.Tickets.Model;

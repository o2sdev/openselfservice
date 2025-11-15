import { Config as ZendeskConfig, Integration as ZendeskIntegration } from '@o2s/integrations.zendesk/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const TicketsIntegrationConfig: ApiConfig['integrations']['tickets'] = ZendeskConfig.tickets!;
export import Service = ZendeskIntegration.Tickets.Service;
export import Request = ZendeskIntegration.Tickets.Request;
export import Model = ZendeskIntegration.Tickets.Model;

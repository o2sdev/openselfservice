import { Config, Integration } from '@o2s/integrations.mocked/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const NotificationsIntegrationConfig: ApiConfig['integrations']['notifications'] = Config.notifications!;

export import Service = Integration.Notifications.Service;
export import Request = Integration.Notifications.Request;
export import Model = Integration.Notifications.Model;

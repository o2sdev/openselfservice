import { Config, Integration } from '@o2s/integrations.mocked/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const ResourcesIntegrationConfig: ApiConfig['integrations']['resources'] = Config.resources!;

export import Service = Integration.Resources.Service;
export import Request = Integration.Resources.Request;
export import Model = Integration.Resources.Model;

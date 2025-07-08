import { Config, Integration } from '@o2s/integrations.mocked/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const AuthIntegrationConfig: ApiConfig['integrations']['auth'] = Config.auth!;

export import Service = Integration.Auth.Service;
export import Model = Integration.Auth.Model;
export import Guard = Integration.Auth.Guard;

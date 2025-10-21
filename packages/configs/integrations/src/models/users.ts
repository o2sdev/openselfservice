import { Config, Integration } from '@o2s/integrations.mocked/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const UsersIntegrationConfig: ApiConfig['integrations']['users'] = Config.users!;

export import Service = Integration.Users.Service;
export import Request = Integration.Users.Request;
export import Model = Integration.Users.Model;

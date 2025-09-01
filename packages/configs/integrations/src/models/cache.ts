import { Config, Integration } from '@o2s/integrations.mocked/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const CacheIntegrationConfig: ApiConfig['integrations']['cache'] = Config.cache!;

export import Service = Integration.Cache.Service;

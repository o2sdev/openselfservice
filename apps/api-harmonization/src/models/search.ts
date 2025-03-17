import { Config, Integration } from '@o2s/integrations.mocked/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const SearchIntegrationConfig: ApiConfig['integrations']['search'] = Config.search!;

export import Service = Integration.Search.Service;

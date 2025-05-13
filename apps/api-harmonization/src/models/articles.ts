import { Config, Integration } from '@o2s/integrations.mocked/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const ArticlesIntegrationConfig: ApiConfig['integrations']['articles'] = Config.articles!;

export import Service = Integration.Articles.Service;
export import Request = Integration.Articles.Request;
export import Model = Integration.Articles.Model;

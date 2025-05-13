import { Config, Integration } from '@o2s/integrations.mocked/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const CmsIntegrationConfig: ApiConfig['integrations']['cms'] = Config.cms!;

export import Service = Integration.CMS.Service;
export import Request = Integration.CMS.Request;
export import Model = Integration.CMS.Model;

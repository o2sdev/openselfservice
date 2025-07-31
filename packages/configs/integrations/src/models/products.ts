import { Config, Integration } from '@o2s/integrations.mocked/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const ProductsIntegrationConfig: ApiConfig['integrations']['products'] = Config.products!;

export import Service = Integration.Products.Service;
export import Request = Integration.Products.Request;
export import Model = Integration.Products.Model;

import { Config, Integration } from '@o2s/integrations.mocked/integration';

import { ApiConfig } from '@o2s/framework/modules';

export const OrganizationsIntegrationConfig: ApiConfig['integrations']['organizations'] = Config.organizations!;

export import Service = Integration.Organizations.Service;
export import Request = Integration.Organizations.Request;
export import Model = Integration.Organizations.Model;

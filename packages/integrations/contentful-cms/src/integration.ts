import { ApiConfig, Cache } from '@o2s/framework/modules';

import { GraphqlModule } from '@/modules/graphql/graphql.module';

import { Service as CmsService } from './modules/cms';

export * as Integration from './modules/index';

export const Config: Partial<ApiConfig['integrations']> = {
    cms: {
        name: 'contentful-cms',
        service: CmsService,
        imports: [GraphqlModule, Cache.Module],
    },
};

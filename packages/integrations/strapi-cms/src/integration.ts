import { ApiConfig, Cache } from '@o2s/framework/modules';

import { Service as CmsService } from './modules/cms';
import { GraphqlModule } from '@/modules/graphql/graphql.module';

export * as Integration from './modules/index';

export const Config: Partial<ApiConfig['integrations']> = {
    cms: {
        service: CmsService,
        imports: [GraphqlModule, Cache.Module],
    },
};

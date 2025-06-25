import { ApiConfig, Cache } from '@o2s/framework/modules';

import { GraphqlModule } from '@/modules/graphql/graphql.module';

import { Service as ArticleService } from './modules/articles';
import { Service as CmsService } from './modules/cms';

export * as Integration from './modules/index';

export const Config: Partial<ApiConfig['integrations']> = {
    cms: {
        name: 'strapi-cms',
        service: CmsService,
        imports: [GraphqlModule, Cache.Module],
    },
    articles: {
        name: 'strapi-cms',
        service: ArticleService,
        imports: [GraphqlModule, Cache.Module],
    },
};

import { ApiConfig, Cache } from '@o2s/framework/modules';

import { Service as ArticleService } from '@/modules/articles';
import { Service as CmsService } from '@/modules/cms';
import { GraphqlModule } from '@/modules/graphql/graphql.module';
import { StrapiModule } from '@/modules/strapi/strapi.module';

export * as Integration from './modules/index';

export const Config: Partial<ApiConfig['integrations']> = {
    cms: {
        name: 'strapi-cms',
        service: CmsService,
        imports: [GraphqlModule, StrapiModule, Cache.Module],
    },
    articles: {
        name: 'strapi-cms',
        service: ArticleService,
        imports: [GraphqlModule, StrapiModule, Cache.Module],
    },
};

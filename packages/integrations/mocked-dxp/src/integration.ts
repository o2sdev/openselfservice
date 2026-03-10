import { ApiConfig, Auth, Search } from '@o2s/framework/modules';

import { Service as ArticlesService } from './modules/articles';
import { Service as CmsService } from './modules/cms';
import { Service as SearchService } from './modules/search';

export * as Integration from './modules/index';

export const Config: Partial<ApiConfig['integrations']> = {
    cms: {
        name: 'mocked-dxp',
        service: CmsService,
        imports: [Auth.Module],
    },
    articles: {
        name: 'mocked-dxp',
        service: ArticlesService,
        imports: [Search.Module],
    },
    search: {
        name: 'mocked-dxp',
        service: SearchService,
    },
};

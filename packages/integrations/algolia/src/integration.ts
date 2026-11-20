import { ApiConfig } from '@o2s/framework/modules';

import { Service as SearchService } from './modules/search';

export * as Integration from './modules/index';

export const Config = {
    search: {
        name: 'algolia',
        service: SearchService,
    },
} satisfies Partial<ApiConfig['integrations']>;

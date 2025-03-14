import { ApiConfig } from '@o2s/framework/modules';

import { Service as SearchService } from './modules/search';

export * as Integration from './modules/index';

export const Config: Partial<ApiConfig['integrations']> = {
    search: {
        service: SearchService,
    },
};

import { ApiConfig } from '@o2s/framework/modules';

import { Service as AlgoliaService } from './modules/algolia';

export * as Integration from './modules/index';

export const Config: Partial<ApiConfig['integrations']> = {
    search: {
        service: AlgoliaService,
    },
};

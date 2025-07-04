import { ApiConfig } from '@o2s/framework/modules';

import { Service as RedisService } from './modules/cache';

export * as Integration from './modules/index';

export const Config: Partial<ApiConfig['integrations']> = {
    cache: {
        name: 'redis',
        service: RedisService,
    },
};

import { ApiConfig } from '@o2s/framework/modules';

import { Service as RedisService } from './modules/redis';

export const Config: Partial<ApiConfig['integrations']> = {
    cache: {
        service: RedisService,
    },
};

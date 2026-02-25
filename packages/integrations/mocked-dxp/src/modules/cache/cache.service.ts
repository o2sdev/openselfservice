import { Injectable } from '@nestjs/common';

import { Cache } from '@o2s/framework/modules';

@Injectable()
export class CacheService implements Cache.Service {
    del(_key: string): Promise<void> {
        return Promise.resolve(undefined);
    }

    get(_key: string): Promise<string | undefined> {
        return Promise.resolve(undefined);
    }

    set(_key: string, _value: string): Promise<void> {
        return Promise.resolve(undefined);
    }
}

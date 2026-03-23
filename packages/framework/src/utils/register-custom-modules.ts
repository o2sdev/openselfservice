import { DynamicModule } from '@nestjs/common';

import { createModule } from './create-module';
import { ApiConfig } from '@/api-config';

export function registerCustomModules(config: ApiConfig): DynamicModule[] {
    if (!config.customModules) return [];

    return Object.entries(config.customModules).map(([key, entry]) => {
        const mod = createModule(key);
        return mod.register(entry);
    });
}

import { DynamicModule } from '@nestjs/common';

import { ApiConfig } from './api-config';

type SlotKey = keyof ApiConfig['integrations'];

export function registerIf(
    config: ApiConfig,
    slots: SlotKey | SlotKey[],
    register: (config: ApiConfig) => DynamicModule,
): DynamicModule | null {
    const keys = Array.isArray(slots) ? slots : [slots];
    return keys.every((s) => !!config.integrations[s]) ? register(config) : null;
}

export function filterModules(modules: (DynamicModule | null)[]): DynamicModule[] {
    return modules.filter((m): m is DynamicModule => m !== null);
}

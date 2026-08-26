import { describe, expect, it } from 'vitest';

import type { ApiConfig } from '../api-config';

import { CacheModule } from './cache/cache.module';
import { CacheService } from './cache/cache.service';
import { DefaultCacheService } from './cache/cache.service.default';
import { OrdersModule } from './orders/orders.module';

// Minimal config with only the required core domains present.
const coreOnly = {
    integrations: {
        cms: { name: 'test', service: class {} },
        auth: { name: 'test', service: class {} },
    },
} as unknown as ApiConfig;

const withSlot = (slot: string, service: unknown): ApiConfig =>
    ({
        integrations: { ...coreOnly.integrations, [slot]: { name: 'test', service } },
    }) as unknown as ApiConfig;

const findProvider = (providers: unknown[] | undefined, token: unknown) =>
    (providers ?? []).find(
        (p): p is { provide: unknown; useClass: unknown } =>
            typeof p === 'object' && p !== null && 'provide' in p && p.provide === token,
    );

describe('optional integration slots', () => {
    it('CacheModule falls back to DefaultCacheService when cache is not configured', () => {
        const mod = CacheModule.register(coreOnly);

        expect(findProvider(mod.providers, CacheService)?.useClass).toBe(DefaultCacheService);
    });

    it('CacheModule uses the configured cache service when provided', () => {
        class CustomCache {}
        const mod = CacheModule.register(withSlot('cache', CustomCache));

        expect(findProvider(mod.providers, CacheService)?.useClass).toBe(CustomCache);
    });

    it('an optional module registers as a no-op when its slot is absent', () => {
        const mod = OrdersModule.register(coreOnly);

        expect(mod.module).toBe(OrdersModule);
        expect(mod.providers ?? []).toHaveLength(0);
        expect(mod.controllers ?? []).toHaveLength(0);
    });

    it('an optional module registers normally when its slot is present', () => {
        class CustomOrders {}
        const mod = OrdersModule.register(withSlot('orders', CustomOrders));

        expect((mod.providers ?? []).length).toBeGreaterThan(0);
        expect((mod.controllers ?? []).length).toBeGreaterThan(0);
    });
});

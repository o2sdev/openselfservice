import { describe, expect, it } from 'vitest';

import type { ApiConfig } from '../api-config';

import {
    type IntegrationConfigInput,
    type IntegrationProviding,
    createIntegrationConfig,
} from './create-integration-config';

const DOMAINS = [
    'articles',
    'auth',
    'billingAccounts',
    'cache',
    'carts',
    'checkout',
    'cms',
    'customers',
    'invoices',
    'notifications',
    'orders',
    'organizations',
    'payments',
    'products',
    'resources',
    'search',
    'tickets',
    'users',
] as const;

// A stub integration namespace providing every domain (like `mocked`). Only the `Config` field is
// read by the helper, so a minimal runtime shape cast to the input type is enough to exercise it.
const stubDomainConfig = (name: string) => ({ name, service: class {} });

const fullConfig = Object.fromEntries(DOMAINS.map((d) => [d, stubDomainConfig('mocked')]));
const FullIntegration = { Config: fullConfig } as unknown as IntegrationConfigInput[keyof IntegrationConfigInput];

const inputWith = (overrides: Partial<Record<(typeof DOMAINS)[number], unknown>> = {}) =>
    Object.fromEntries(
        DOMAINS.map((d) => [d, d in overrides ? overrides[d] : FullIntegration]),
    ) as unknown as IntegrationConfigInput;

describe('createIntegrationConfig', () => {
    it('assembles every domain from its assigned integration', () => {
        const { integrations } = createIntegrationConfig(inputWith());

        expect(Object.keys(integrations).sort()).toEqual([...DOMAINS].sort());
        for (const domain of DOMAINS) {
            expect(integrations[domain]).toBeDefined();
            expect((integrations[domain] as { name: string }).name).toBe('mocked');
        }
    });

    it('throws when an integration does not provide its assigned domain (runtime backstop)', () => {
        const missingTickets = { Config: { ...fullConfig, tickets: undefined } };

        expect(() => createIntegrationConfig(inputWith({ tickets: missingTickets }))).toThrow(/tickets/);
    });

    it('rejects an integration whose Config is absent', () => {
        expect(() => createIntegrationConfig(inputWith({ cms: {} }))).toThrow(/cms/);
    });

    // Compile-time guarantee (validated by `tsc --noEmit` during lint): an integration that
    // provides domain D satisfies IntegrationProviding<D> but NOT IntegrationProviding<other>.
    it('constrains domain assignment at compile time', () => {
        const ticketsOnly = {} as { Config: { tickets: NonNullable<ApiConfig['integrations']['tickets']> } };

        const validAssignment: IntegrationProviding<'tickets'> = ticketsOnly;
        // @ts-expect-error a tickets-only integration cannot be assigned to the `cms` domain
        const invalidAssignment: IntegrationProviding<'cms'> = ticketsOnly;

        expect(validAssignment).toBeDefined();
        expect(invalidAssignment).toBeDefined();
    });
});

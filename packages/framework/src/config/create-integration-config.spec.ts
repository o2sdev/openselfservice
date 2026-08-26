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

// Build an input from an explicit set of domains (each value is the full stub integration).
const inputFrom = (domains: readonly string[]) =>
    Object.fromEntries(domains.map((d) => [d, FullIntegration])) as unknown as IntegrationConfigInput;

describe('createIntegrationConfig', () => {
    it('assembles every domain when all are provided', () => {
        const { integrations } = createIntegrationConfig(inputFrom(DOMAINS));

        expect(Object.keys(integrations).sort()).toEqual([...DOMAINS].sort());
    });

    it('assembles only the provided domains — optional ones are skipped, not defaulted', () => {
        const { integrations } = createIntegrationConfig(inputFrom(['cms', 'auth', 'tickets']));

        expect(Object.keys(integrations).sort()).toEqual(['auth', 'cms', 'tickets']);
        expect(integrations.orders).toBeUndefined();
    });

    it('supports a minimal core-only config (cms + auth), no mocked integration needed', () => {
        const { integrations } = createIntegrationConfig(inputFrom(['cms', 'auth']));

        expect(Object.keys(integrations).sort()).toEqual(['auth', 'cms']);
    });

    it('throws when a required core domain is missing', () => {
        expect(() => createIntegrationConfig(inputFrom(['cms']))).toThrow(/auth/);
        expect(() => createIntegrationConfig(inputFrom(['auth']))).toThrow(/cms/);
    });

    it('throws when a core integration does not actually provide its domain', () => {
        const input = { ...inputFrom(['cms', 'auth']), cms: { Config: {} } } as unknown as IntegrationConfigInput;

        expect(() => createIntegrationConfig(input)).toThrow(/cms/);
    });

    it('throws when an optional domain is assigned an integration that does not provide it', () => {
        // Provided but non-providing (only reachable via untyped input) must fail loudly, not skip.
        const input = { ...inputFrom(['cms', 'auth']), orders: { Config: {} } } as unknown as IntegrationConfigInput;

        expect(() => createIntegrationConfig(input)).toThrow(/orders/);
    });

    // Compile-time guarantees (validated by `tsc --noEmit` during lint).
    it('constrains domain assignment at compile time', () => {
        const ticketsOnly = {} as { Config: { tickets: NonNullable<ApiConfig['integrations']['tickets']> } };

        const validAssignment: IntegrationProviding<'tickets'> = ticketsOnly;
        // @ts-expect-error a tickets-only integration cannot be assigned to the `cms` domain
        const invalidAssignment: IntegrationProviding<'cms'> = ticketsOnly;

        expect(validAssignment).toBeDefined();
        expect(invalidAssignment).toBeDefined();
    });

    it('requires the core domains (cms + auth) at compile time', () => {
        const core = {} as IntegrationProviding<'cms'> & IntegrationProviding<'auth'>;

        const minimal: IntegrationConfigInput = { cms: core, auth: core };
        // @ts-expect-error `auth` is a required core domain
        const missingCore: IntegrationConfigInput = { cms: core };

        expect(minimal).toBeDefined();
        expect(missingCore).toBeDefined();
    });
});

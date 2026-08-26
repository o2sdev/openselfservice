import type { ApiConfig } from '../api-config';

type DomainKey = keyof ApiConfig['integrations'];

/**
 * An integration that provably provides the domain `D`.
 *
 * The constraint requires the integration's `Config` to contain the key `D` with a
 * non-optional value. This only works when integrations declare their config with
 * `satisfies Partial<ApiConfig['integrations']>` (not a `: Partial<...>` annotation),
 * so that `typeof Config` keeps the exact set of domains the integration provides.
 *
 * As a result, assigning an integration to a domain it does not implement (e.g.
 * `cms: Zendesk`) is a compile-time error, not a runtime crash.
 */
export type IntegrationProviding<D extends DomainKey> = {
    Config: Record<D, NonNullable<ApiConfig['integrations'][D]>>;
};

/**
 * Input for {@link createIntegrationConfig}: every domain maps to an integration that
 * provably provides that domain.
 */
export type IntegrationConfigInput = {
    [D in DomainKey]: IntegrationProviding<D>;
};

const DOMAIN_KEYS = [
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
] as const satisfies readonly DomainKey[];

/**
 * Assembles the `integrations` map consumed by `ApiConfig` from a domain-to-integration map.
 *
 * Domain validity is enforced at compile time by {@link IntegrationConfigInput} — see
 * {@link IntegrationProviding}. The runtime check below is a defense-in-depth backstop for
 * cases the types cannot cover (e.g. a config assembled dynamically or cast to `any`).
 *
 * @example
 * export const { integrations } = createIntegrationConfig({
 *     cms: Mocked,
 *     tickets: Zendesk, // swap: change Mocked -> Zendesk; compile error if Zendesk lacks `tickets`
 *     articles: Mocked,
 *     // ...all 18 domains
 * });
 */
export function createIntegrationConfig<T extends IntegrationConfigInput>(
    config: T,
): { integrations: ApiConfig['integrations'] } {
    // The public generic already guarantees each slot provides its domain; the loop reads the
    // values dynamically, so it works against a loosely-typed view of the validated input.
    const source = config as Record<DomainKey, { Config: Partial<ApiConfig['integrations']> }>;
    const integrations = {} as Record<DomainKey, unknown>;

    for (const domain of DOMAIN_KEYS) {
        const domainConfig = source[domain]?.Config?.[domain];
        if (!domainConfig) {
            throw new Error(`Integration assigned to domain "${domain}" does not provide it`);
        }
        integrations[domain] = domainConfig;
    }

    return {
        integrations: integrations as ApiConfig['integrations'],
    };
}

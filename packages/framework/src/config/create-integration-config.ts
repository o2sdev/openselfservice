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
 * Domains that must always be configured. `cms` backs pages and most blocks; `auth` powers the
 * global guards. Every other domain is optional — omit it and its framework module registers as
 * a no-op (see each module's `register`).
 */
type CoreDomain = 'cms' | 'auth';

/**
 * Input for {@link createIntegrationConfig}. The core domains are required; the rest are optional.
 * Any domain that IS provided is still validated at compile time by {@link IntegrationProviding}
 * (assigning an integration to a domain it does not implement is a type error).
 */
export type IntegrationConfigInput = {
    [D in CoreDomain]: IntegrationProviding<D>;
} & {
    [D in Exclude<DomainKey, CoreDomain>]?: IntegrationProviding<D>;
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

const CORE_DOMAINS: readonly DomainKey[] = ['cms', 'auth'];

/**
 * Assembles the `integrations` map consumed by `ApiConfig` from a domain-to-integration map.
 *
 * The core domains (`cms`, `auth`) are required; the rest are optional and simply omitted from the
 * resulting map when not provided. Any provided domain is validated at compile time by
 * {@link IntegrationConfigInput} — see {@link IntegrationProviding}. The runtime checks below are a
 * defense-in-depth backstop for cases the types cannot cover (e.g. a config cast to `any`).
 *
 * @example
 * // Minimal, mocked-free setup — only the core domains:
 * export const { integrations } = createIntegrationConfig({
 *     cms: Strapi,
 *     auth: MyAuth,
 * });
 */
export function createIntegrationConfig<T extends IntegrationConfigInput>(
    config: T,
): { integrations: ApiConfig['integrations'] } {
    // The public generic already validates each provided slot; the loop reads the values
    // dynamically, so it works against a loosely-typed view of the (validated) input.
    const source = config as Partial<Record<DomainKey, { Config?: Partial<ApiConfig['integrations']> }>>;
    const integrations = {} as Record<DomainKey, unknown>;

    for (const domain of DOMAIN_KEYS) {
        const domainConfig = source[domain]?.Config?.[domain];

        if (!domainConfig) {
            // Core domains must always be present; a missing optional domain is simply skipped.
            if (CORE_DOMAINS.includes(domain)) {
                throw new Error(`Missing required core integration for domain "${domain}"`);
            }
            continue;
        }

        integrations[domain] = domainConfig;
    }

    return {
        integrations: integrations as ApiConfig['integrations'],
    };
}

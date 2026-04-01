import type { ApiConfig } from '../api-config';

/**
 * Integration module must export Config with the domain's config and Integration namespace.
 * Domain presence is validated at runtime by createIntegrationConfig.
 */
export type IntegrationWithDomain = {
    Config: Partial<ApiConfig['integrations']>;
    Integration: Record<string, unknown>;
};

type DomainKey = keyof ApiConfig['integrations'];

/**
 * Input for createIntegrationConfig. Each domain maps to an integration that provides that domain.
 */
export type IntegrationConfigInput = {
    [D in DomainKey]: IntegrationWithDomain;
};

const DOMAIN_KEYS = {
    articles: true,
    auth: true,
    billingAccounts: true,
    cache: true,
    carts: true,
    checkout: true,
    cms: true,
    customers: true,
    invoices: true,
    notifications: true,
    orders: true,
    organizations: true,
    payments: true,
    products: true,
    resources: true,
    search: true,
    tickets: true,
    users: true,
} satisfies Record<DomainKey, true>;

/**
 * Creates integration config from a domain-to-integration map.
 * Validates at runtime that each integration provides the domain it's assigned to.
 *
 * @example
 * const { integrations } = createIntegrationConfig({
 *   cms: Mocked,
 *   tickets: Zendesk,  // swap: change Mocked -> Zendesk
 *   articles: Mocked,
 *   // ...
 * });
 */
export function createIntegrationConfig<T extends IntegrationConfigInput>(
    config: T,
): {
    integrations: ApiConfig['integrations'];
} {
    const integrations: Record<string, unknown> = {};

    for (const domain of Object.keys(DOMAIN_KEYS) as DomainKey[]) {
        const integration = config[domain];
        if (!integration?.Config) {
            throw new Error(`Missing integration for domain: ${domain}`);
        }

        const domainConfig = integration.Config[domain];
        if (!domainConfig) {
            throw new Error(`Integration does not provide config for domain: ${domain}`);
        }

        integrations[domain] = domainConfig;
    }

    return {
        integrations: integrations as ApiConfig['integrations'],
    };
}

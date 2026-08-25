---
'@o2s/configs.integrations': minor
'@o2s/api-harmonization': minor
'@o2s/framework': minor
'@o2s/integrations.mocked': patch
'@o2s/integrations.mocked-dxp': patch
'@o2s/integrations.zendesk': patch
'@o2s/integrations.strapi-cms': patch
'@o2s/integrations.contentful-cms': patch
'@o2s/integrations.medusajs': patch
'@o2s/integrations.algolia': patch
'@o2s/integrations.redis': patch
---

Refactored integration configuration by consolidating the 18 individual model files into a single typed `config.ts` backed by a `createIntegrationConfig` helper. Each domain now maps to an integration through a per-domain import alias shared by both the runtime map and its type re-export, so swapping an integration is a single-line change that cannot desync value and types.

Integration `Config` objects are now declared with `satisfies Partial<ApiConfig['integrations']>` (instead of a type annotation), which lets `createIntegrationConfig` validate domain bindings **at compile time** — assigning an integration to a domain it does not provide is now a type error rather than a runtime crash. The runtime check remains as a defense-in-depth backstop.

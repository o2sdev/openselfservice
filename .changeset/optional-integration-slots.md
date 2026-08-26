---
'@o2s/framework': minor
'@o2s/api-harmonization': patch
'@o2s/modules.surveyjs': patch
---

Make non-core `ApiConfig` integration slots optional. Only `cms` and `auth` are required now; every other domain (tickets, orders, carts, checkout, payments, products, customers, invoices, billingAccounts, resources, organizations, users, notifications, articles, search, cache) can be omitted.

When a domain is omitted, its framework module registers as a no-op instead of crashing, so a project can run a minimal setup (for example a CMS-backed portal) without importing `@o2s/integrations.mocked` to fill unused slots. `createIntegrationConfig` now accepts a partial map (core domains still required) and skips absent domains. A new `DefaultCacheService` is used as a pass-through fallback when no `cache` integration is configured, so services that depend on `Cache.Service` (e.g. the Strapi/Contentful CMS integrations) keep working. The `page` service treats `articles` as optional, and the SurveyJS module registers as a no-op when `tickets` is not configured.

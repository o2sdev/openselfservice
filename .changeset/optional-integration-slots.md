---
'@o2s/framework': minor
'@o2s/api-harmonization': patch
'@o2s/modules.surveyjs': patch
---

Make non-core `ApiConfig` integration slots optional. Only `cms` and `auth` are required now; every other domain (tickets, orders, carts, checkout, payments, products, customers, invoices, billingAccounts, resources, organizations, users, notifications, articles, search, cache) can be omitted.

When a domain is omitted, its framework module registers as a no-op instead of crashing, so a project can run a minimal setup (for example a CMS-backed portal) without importing `@o2s/integrations.mocked` to fill unused slots. `createIntegrationConfig` now accepts a partial map (core domains still required) and skips absent domains. A new `DefaultCacheService` is used as a pass-through fallback when no `cache` integration is configured (caching disabled, logged at startup), so services that depend on `Cache.Service` (e.g. the Strapi/Contentful CMS integrations) keep working. The `page` service treats `articles` as optional, and the SurveyJS module registers as a no-op when `tickets` is not configured.

This also fixes a latent bug in the search module, which previously fell back to the abstract `SearchService` (which cannot be instantiated) when no search service was configured; it now registers as a no-op instead.

Migration: this is backward compatible for the standard, module-based usage — existing configs that provide all domains keep working unchanged. Custom code that reads an integration slot directly (e.g. `config.integrations.orders.service`) may now need optional chaining, since non-core slots are typed as possibly `undefined`.

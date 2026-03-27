---
'@o2s/blocks.checkout-billing-payment': patch
'@o2s/blocks.invoice-list': patch
'@o2s/blocks.orders-summary': patch
'@o2s/blocks.payments-history': patch
'@o2s/blocks.payments-summary': patch
'@o2s/framework': patch
'@o2s/integrations.algolia': patch
'@o2s/integrations.contentful-cms': patch
'@o2s/integrations.medusajs': patch
'@o2s/integrations.mocked': patch
'@o2s/integrations.mocked-dxp': patch
'@o2s/integrations.strapi-cms': patch
'@o2s/integrations.zendesk': patch
---

docs(api): REST API reference, OpenAPI tooling, and cross-package alignment

Expand `@nestjs/swagger` metadata and related types across framework modules, exports, and CMS block
models. Update billing and orders blocks that call the harmonization API, plus checkout billing
payment UI where needed. Align Algolia, Contentful, Medusa, mocked, mocked-dxp, Strapi, and Zendesk
integrations with the updated contracts, mappers, and tests.

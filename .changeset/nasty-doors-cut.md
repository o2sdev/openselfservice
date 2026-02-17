---
'@o2s/blocks.recommended-products': minor
'@o2s/blocks.product-details': minor
'@o2s/integrations.medusajs': minor
'@o2s/configs.integrations': minor
'@o2s/integrations.mocked': minor
---

feat(products): Medusa integration for product catalog

- Add product list and product detail pages powered by Medusa Admin SDK
- Support SEO-friendly URLs using product handles and variant slugs (e.g. `/products/sweatpants/s-blue`)
- Add variant selection with option-based navigation between product variants
- Map Medusa product data (prices, categories, tags, images, specs) to the unified product model
- Extract key specs and detailed specs from Medusa variant metadata and attributes
- Add related products support via custom Medusa product references API
- Implement lazy initialization for MedusaJS service to improve startup performance
- Add localized mocked product data (EN, DE, PL) with variant overrides for testing

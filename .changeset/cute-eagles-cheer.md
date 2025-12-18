---
'@o2s/configs.integrations': minor
'@o2s/blocks.product-list': minor
'@o2s/integrations.mocked': minor
'@o2s/framework': minor
---

feat: Added sorting support for products in mocked integration

- Added sorting functionality to `mapProducts` and `mapRelatedProducts` in mocked integration
- Supports sorting by name and price in ascending/descending order (format: `name_ASC`, `name_DESC`, `price_ASC`, `price_DESC`)
- Sorting is applied to filtered product lists before returning results
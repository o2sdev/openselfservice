---
'@o2s/configs.integrations': minor
'@o2s/blocks.product-list': minor
'@o2s/integrations.mocked': minor
'@o2s/framework': minor
'@o2s/ui': minor
---

feat: RichText component now automatically detects HTML vs Markdown format and renders HTML directly

RichText component has been enhanced to automatically detect content format (HTML or Markdown) and handle each format appropriately:
- HTML content is now rendered directly using dangerouslySetInnerHTML (without unnecessary Markdown parsing)
- Markdown content continues to be processed through markdown-to-jsx as before
- Added `detectContentFormat` utility function that is exported for use in other components
- This improves performance for HTML content and prevents unnecessary parsing overhead
- ProductCard component benefits from improved RichText rendering for product descriptions

feat: Added sorting support for products in mocked integration

- Added sorting functionality to `mapProducts` and `mapRelatedProducts` in mocked integration
- Supports sorting by name and price in ascending/descending order (format: `name_ASC`, `name_DESC`, `price_ASC`, `price_DESC`)
- Sorting is applied to filtered product lists before returning results
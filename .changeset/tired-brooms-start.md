---
'@o2s/api-harmonization': minor
'@o2s/framework': minor
---

Replaced 36+ block-specific abstract methods in CmsService with a single generic getBlockConfig<T>() method. Added Swagger decorators to all CMS block controller endpoints. Extended CmsBlockType union with checkout block types.

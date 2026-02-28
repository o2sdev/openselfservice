---
'@o2s/integrations.contentful-cms': patch
'@o2s/integrations.mocked': patch
'@o2s/integrations.redis': patch
'@o2s/integrations.strapi-cms': patch
---

Migrate integration services from `implements` to `extends` and add `super()` where needed
to keep constructor metadata compatible with NestJS dependency injection.

Update documentation examples to reflect the new `extends ...Service` pattern.

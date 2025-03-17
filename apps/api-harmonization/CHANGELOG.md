# @o2s/api-harmonization

## 0.15.1

### Patch Changes

- 5b48057: updated dependencies
- Updated dependencies [5b48057]
    - @o2s/integrations.strapi-cms@0.14.1
    - @o2s/integrations.algolia@0.2.1
    - @o2s/integrations.mocked@0.14.1
    - @o2s/integrations.redis@0.9.2
    - @o2s/utils.logger@0.9.2
    - @o2s/framework@0.15.1

## 0.15.0

### Minor Changes

- db32d1c: unified naming of the related objects in the api-harmonization and frontend apps - from now on, they are called `blocks` (instead of `components` in api-harmonization and `containers` in frontend)

### Patch Changes

- Updated dependencies [db32d1c]
    - @o2s/integrations.strapi-cms@0.14.0
    - @o2s/integrations.mocked@0.14.0
    - @o2s/framework@0.15.0

## 0.14.0

### Minor Changes

- 80b678a: Added search integration with Algolia

### Patch Changes

- Updated dependencies [80b678a]
    - @o2s/integrations.strapi-cms@0.13.0
    - @o2s/integrations.algolia@0.2.0
    - @o2s/integrations.mocked@0.13.0
    - @o2s/framework@0.14.0

## 0.13.0

### Minor Changes

- 0e3fe6c: improved error handling across the app

### Patch Changes

- Updated dependencies [0e3fe6c]
    - @o2s/integrations.strapi-cms@0.12.0
    - @o2s/integrations.mocked@0.12.0

## 0.12.0

### Minor Changes

- b4cddfb: add seo, add headers

### Patch Changes

- f2a6781: fixed an issue with alternative URLs for pages - on pages with dynamic URLs (e.g. /cases/(.+)) switching to another locale caused route to change to /cases/(.+) instead of /cases/12345
- eea2896: added recent tickets component
- Updated dependencies [f2a6781]
- Updated dependencies [eea2896]
- Updated dependencies [b4cddfb]
- Updated dependencies [54c9fb5]
    - @o2s/integrations.strapi-cms@0.11.0
    - @o2s/integrations.mocked@0.11.0
    - @o2s/framework@0.12.0

## 0.11.0

### Minor Changes

- e0ce5cb: Added localized mocks

### Patch Changes

- Updated dependencies [e0ce5cb]
    - @o2s/integrations.mocked@0.10.0
    - @o2s/framework@0.11.0

## 0.10.1

### Patch Changes

- 2c79c35: initial release
- Updated dependencies [2c79c35]
    - @o2s/framework@0.10.1
    - @o2s/integrations.mocked@0.9.1
    - @o2s/integrations.redis@0.9.1
    - @o2s/integrations.strapi-cms@0.10.1
    - @o2s/utils.logger@0.9.1

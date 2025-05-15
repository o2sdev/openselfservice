# @o2s/api-harmonization

## 0.21.0

### Minor Changes

- 8b93cbf: feat: Implement SurveyJS forms
- 8d92afc: Adding label clickToSelect for reseting filters
- 30f3524: added `OrdersSummary` block and reworked mocked orders to return random orders instead of them being hardcoded
- 8b93cbf: feat: Integrated SurveyJS
- 8d92afc: Help center pages and subpages implemented:

    - Added new UI components InformativeCard, BlogCard, Author, ContentSection
    - Styled blocks, Article, Article List, Category, Category List
    - Added pagination to Category block
    - Made changes to mocks and models

- 30f3524: feat: implemented orderListBlock

    - new page /orders,
    - added strapi integration for page /orders
    - new UI dropdown-menu component

- 8b93cbf: feat: implement surveyJS forms
- 6d63cb1: feat: added surveyJS module
- ba125d6: Added orders module
- bb46536: feat: cases submission

    - new component DynamicIcon - for loading icons dinamicly,
    - new component ActionLinks - for showing button list with dropdown-menu,
    - new pages: /contact-us, /submit-complaint, /request-device-maintenance,
    - fixed placeholders and disabled state in SurveyJS fields,

- 68f7858: chore: updated dependencies

### Patch Changes

- e4ebc5a: updated dependencies
- Updated dependencies [2e4f22d]
- Updated dependencies [8b93cbf]
- Updated dependencies [e4ebc5a]
- Updated dependencies [8d92afc]
- Updated dependencies [30f3524]
- Updated dependencies [84b9002]
- Updated dependencies [8b93cbf]
- Updated dependencies [68925cf]
- Updated dependencies [30f3524]
- Updated dependencies [8b93cbf]
- Updated dependencies [84b9002]
- Updated dependencies [6d63cb1]
- Updated dependencies [ba125d6]
- Updated dependencies [2e4f22d]
- Updated dependencies [bb46536]
- Updated dependencies [68f7858]
    - @o2s/integrations.mocked@0.22.0
    - @o2s/framework@0.22.0
    - @o2s/utils.logger@0.11.0

## 0.20.0

### Minor Changes

- c0ff0a7: implement context switch
- de00274: updated dependencies
- c0ff0a7: implement context change, user roles
- e9dc277: feat: handle user's timezone
- e9dc277: feat: handle user's timezone

### Patch Changes

- Updated dependencies [c0ff0a7]
- Updated dependencies [de00274]
- Updated dependencies [c0ff0a7]
- Updated dependencies [e9dc277]
- Updated dependencies [e9dc277]
    - @o2s/integrations.mocked@0.21.0
    - @o2s/framework@0.21.0
    - @o2s/utils.logger@0.10.0

## 0.19.0

### Minor Changes

- 51a6121: fix: update generators

## 0.18.1

### Patch Changes

- Updated dependencies [dadad64]
    - @o2s/integrations.mocked@0.20.0

## 0.18.0

### Minor Changes

- 98b2b61: implemented breadcrumbs

### Patch Changes

- Updated dependencies [98b2b61]
    - @o2s/integrations.mocked@0.19.0
    - @o2s/framework@0.20.0

## 0.17.0

### Minor Changes

- 35eeac7: implement service details page
- 92be116: added Price model, services page implemented
- 92be116: implement services page
- 35eeac7: implement service details page
- 52b3e0a: add tooltips to mocked buttons

### Patch Changes

- Updated dependencies [35eeac7]
- Updated dependencies [92be116]
- Updated dependencies [92be116]
- Updated dependencies [35eeac7]
- Updated dependencies [52b3e0a]
    - @o2s/integrations.mocked@0.18.0
    - @o2s/framework@0.19.0

## 0.16.0

### Minor Changes

- 92f2be2: Fix inconsistent data in User Profile

### Patch Changes

- Updated dependencies [3a1ff43]
- Updated dependencies [92f2be2]
    - @o2s/framework@0.18.0
    - @o2s/integrations.mocked@0.17.0

## 0.15.3

### Patch Changes

- Updated dependencies [477ca3e]
    - @o2s/integrations.mocked@0.16.0
    - @o2s/framework@0.17.0

## 0.15.2

### Patch Changes

- Updated dependencies [30d3544]
- Updated dependencies [c4ec3cb]
- Updated dependencies [db41474]
- Updated dependencies [30d3544]
    - @o2s/integrations.mocked@0.15.0
    - @o2s/framework@0.16.0

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

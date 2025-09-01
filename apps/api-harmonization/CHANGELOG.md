# @o2s/api-harmonization

## 1.9.1

### Patch Changes

- c25f982: added missing dependencies

## 1.9.0

### Minor Changes

- 2421fb2: A major rework of the approach to the blocks - separated all block-related code from `api-harmonization` and `frontend` apps into separate packages, allowing versioning and much easier updates in other apps started using `create-o2s-app` script

### Patch Changes

- Updated dependencies [2421fb2]
    - @o2s/blocks.featured-service-list@1.0.0
    - @o2s/blocks.notification-details@1.0.0
    - @o2s/blocks.notification-list@1.0.0
    - @o2s/blocks.payments-history@1.0.0
    - @o2s/blocks.payments-summary@1.0.0
    - @o2s/blocks.service-details@1.0.0
    - @o2s/blocks.article-search@1.0.0
    - @o2s/blocks.orders-summary@1.0.0
    - @o2s/blocks.ticket-details@1.0.0
    - @o2s/blocks.category-list@1.0.0
    - @o2s/blocks.order-details@1.0.0
    - @o2s/blocks.surveyjs-form@1.0.0
    - @o2s/blocks.ticket-recent@1.0.0
    - @o2s/configs.integrations@0.1.0
    - @o2s/blocks.article-list@1.0.0
    - @o2s/blocks.invoice-list@1.0.0
    - @o2s/blocks.service-list@1.0.0
    - @o2s/blocks.user-account@1.0.0
    - @o2s/integrations.mocked@1.11.0
    - @o2s/blocks.quick-links@1.0.0
    - @o2s/blocks.ticket-list@1.0.0
    - @o2s/blocks.order-list@1.0.0
    - @o2s/blocks.category@1.0.0
    - @o2s/blocks.article@1.0.0
    - @o2s/blocks.faq@1.0.0
    - @o2s/framework@1.11.0

## 1.8.0

### Minor Changes

- e81621c: added `PROSPECT` role for freshly-created users

### Patch Changes

- Updated dependencies [e81621c]
    - @o2s/integrations.mocked@1.9.0
    - @o2s/framework@1.9.0

## 1.7.0

### Minor Changes

- fb09383: Removing unused import

### Patch Changes

- Updated dependencies [fb09383]
- Updated dependencies [fb09383]
    - @o2s/integrations.mocked@1.8.0
    - @o2s/framework@1.8.0

## 1.6.1

### Patch Changes

- ca33e9a: fix: fixed api-harmonization generator

## 1.6.0

### Minor Changes

- c13192c: implemented user role-based access to pages and articles

### Patch Changes

- Updated dependencies [c13192c]
- Updated dependencies [c13192c]
    - @o2s/framework@1.7.0
    - @o2s/integrations.mocked@1.7.0

## 1.5.6

### Patch Changes

- a5b8ee5: added missing dependency
- 50b2ba3: added example docker config

## 1.5.5

### Patch Changes

- d038e21: added missing dependency
- Updated dependencies [38a9331]
    - @o2s/integrations.mocked@1.6.8

## 1.5.4

### Patch Changes

- 9a93a3d: feat: orders - replace price to be NET
- Updated dependencies [9a93a3d]
    - @o2s/integrations.mocked@1.6.7

## 1.5.3

### Patch Changes

- 25af511: feat: replaced chart to be based on issueDate field
- 97264f1: feat: replace To be Paid column with Net amount on invoices
- f4b70b3: added telemetry events for anonymous data collection about usage
- Updated dependencies [97264f1]
- Updated dependencies [f4b70b3]
- Updated dependencies [f4b70b3]
    - @o2s/integrations.mocked@1.6.5
    - @o2s/framework@1.6.2
    - @o2s/telemetry@1.0.0

## 1.5.2

### Patch Changes

- 36463a4: refactored how modules dependencies are defined to improve extending integrations with multiple modules within them
- Updated dependencies [36463a4]
    - @o2s/framework@1.6.1

## 1.5.1

### Patch Changes

- 900d3d1: changed `FRONT_BASE_URLS` env variable to allow defining multiple origins for the API Harmonization Server
- Updated dependencies [d878a0b]
- Updated dependencies [85bb4bb]
    - @o2s/integrations.mocked@1.6.1

## 1.5.0

### Minor Changes

- 6949717: feat: updated resource integration - added product to the Resource model

    - updated service-list and service-details blocks,
    - added sorting and filters to mocks,

### Patch Changes

- Updated dependencies [fb98e38]
- Updated dependencies [6949717]
    - @o2s/integrations.mocked@1.5.0
    - @o2s/framework@1.5.0

## 1.4.0

### Minor Changes

- 027ed39: featuredServiceListBlock - list of available services

    - added new UI componetnt from Shadcn - Switch,
    - extended ProductCard with action property,
    - implemented model and mock for FeatureServiceListBlock,
    - integrated with strapi,

### Patch Changes

- Updated dependencies [027ed39]
- Updated dependencies [985780a]
- Updated dependencies [9c31433]
    - @o2s/integrations.mocked@1.4.0
    - @o2s/framework@1.4.0

## 1.3.0

### Minor Changes

- 8c29a31: moved mocked auth integration (with a local database) to a separate package to allow easier switching between other integrations

### Patch Changes

- Updated dependencies [8c29a31]
    - @o2s/integrations.mocked@1.3.0
    - @o2s/framework@1.3.0

## 1.2.0

### Minor Changes

- 1ee5be1: feat: aligned buttons - used ActionList component with dropdown menu

    - used ActionList in the OrderDetailBlock to display buttons,
    - updated the mock and strapi - now an action is a Link,
    - used the format method from the string-template to inject a value into a string,

### Patch Changes

- Updated dependencies [1ee5be1]
    - @o2s/integrations.mocked@1.2.0
    - @o2s/framework@1.2.0

## 1.1.0

### Minor Changes

- 565b63d: feat: fixed pagination issue in articleList

    - added new mocked articles
    - implemented new additionalLink in ArticleList

- 5d16edf: orderDetails fixes:

    - order model update - product is required now,
    - filtering moved to order mapper,
    - PayOnline button visible only when the order is overdue,

- 6225c14: remodeled how articles are kept in Strapi in order to suppport indexing them by search engines (e.g. Algolia) by separating them into their own content type
- 61d4f2f: Added integration of services and assets with MedusaJS
- f015c2b: New block ArticleSearch - Input field with suggestions to find appropriate article.

    - added new UI component - Command,
    - added new articles mock,
    - added mock for ArticleSearchBlock,
    - added strapi integration for ArticleSearchBlock,
    - added new component Autocomplete,

### Patch Changes

- Updated dependencies [565b63d]
- Updated dependencies [5d16edf]
- Updated dependencies [61d4f2f]
- Updated dependencies [f015c2b]
    - @o2s/integrations.mocked@1.1.0
    - @o2s/framework@1.1.0
    - @o2s/utils.logger@1.1.0

## 1.0.0

### Major Changes

- 0e0c816: Official stable release

### Patch Changes

- Updated dependencies [0e0c816]
    - @o2s/framework@1.0.0
    - @o2s/integrations.mocked@1.0.0
    - @o2s/utils.logger@1.0.0

## 0.23.0

### Minor Changes

- 05eea01: chore: update dependencies
- 44653fb: feat: orderDetails page implemented

    - added new UI component: InfoCard,
    - used InfoCard in PaymentsSummaryBlock, OrdersSummary and OrderDetails,
    - fixed ordersSummaryBlock integration with strapi,
    - used DynamicIcon in CategoryBlock,
    - added orientation prop for Progress component

### Patch Changes

- 10fbec4: improved global error handling for not-found and unexpected errors
- Updated dependencies [05eea01]
- Updated dependencies [1200a28]
- Updated dependencies [44653fb]
- Updated dependencies [a4cf40d]
- Updated dependencies [6baaae4]
    - @o2s/integrations.mocked@0.24.0
    - @o2s/utils.logger@0.12.0
    - @o2s/framework@0.24.0

## 0.22.0

### Minor Changes

- 2e81dca: added possibility to defined unprotected pages

### Patch Changes

- Updated dependencies [2e81dca]
    - @o2s/integrations.mocked@0.23.0
    - @o2s/framework@0.23.0

## 0.21.1

### Patch Changes

- 87185e9: feat: updated mocked content for knowledge base
- Updated dependencies [9ce2262]
- Updated dependencies [87185e9]
    - @o2s/integrations.mocked@0.22.1
    - @o2s/framework@0.22.1

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

# @o2s/integrations.strapi-cms

## 2.10.0

### Minor Changes

- 1a5a22d: Added ticket creation functionality to the Zendesk integration. Users can now create tickets via POST /tickets with attachments and custom fields. Added custom field mapping from Survey.js format to Zendesk custom fields via new zendesk-field.mapper. Updated table columns on TicketList component to display: ticket type (topic), status, and last updated date. Added display of custom field values from ticket properties on TicketDetails. Updated mapper mocks in cms
- 72391c1: ### Authorization & PBAC Implementation

    This release introduces a comprehensive Policy-Based Access Control system interlaced with Role-Based Access Control.

    #### Framework & Core
    - **`@o2s/framework` (AuthService)**: Enhanced with abstract permission logic (`getPermissions`, `hasPermission`), role checks (`hasRole`, `requireRoles`), and action batching (`canPerformActions`).
    - **`@o2s/api-harmonization`**: Implemented global `RolesGuard` and `PermissionsGuard` in `AppModule`.
    - **`@o2s/utils.api-harmonization`**: Added `extractUserRolesFromJwt` to unify role extraction from different JWT claims.

    #### Features
    - **Decorators**: New `@Auth.Decorators.Permissions({ resource, actions })` for securing controllers.
    - **Data Filtering**: Mappers (e.g., `page.mapper.ts`) now filter UI elements (header/footer navigation) based on user roles.

    This provides granular control over resource access and UI visibility based on user roles and permissions.

### Patch Changes

- Updated dependencies [1a5a22d]
- Updated dependencies [72391c1]
    - @o2s/framework@1.16.0
    - @o2s/utils.logger@1.2.0

## 2.9.0

### Minor Changes

- db5b381: fixing various bugs related with blocks and ui components, adding sign-in button in navigation

### Patch Changes

- e60720e: fix: removed nonexisting fields from CMS query and rebuilt generated files
- 221dc2c: fix: added missing Eslint command to list-staged
- Updated dependencies [221dc2c]
- Updated dependencies [db5b381]
- Updated dependencies [c2d9438]
    - @o2s/utils.logger@1.1.3
    - @o2s/framework@1.14.0

## 2.8.0

### Minor Changes

- 1653b74: fix: update FilterItem and renderCell components for improved functionality and code clarity

### Patch Changes

- 0354126: reworked turbo dev task to optimize CPU/RAM usage
- Updated dependencies [2c780d5]
- Updated dependencies [1653b74]
- Updated dependencies [c27726a]
- Updated dependencies [2c780d5]
- Updated dependencies [0354126]
- Updated dependencies [1653b74]
    - @o2s/framework@1.13.0
    - @o2s/utils.logger@1.1.2

## 2.7.0

### Minor Changes

- ac245c5: adding initial filters support to list blocks

### Patch Changes

- b1c47e8: added mising live preview components to mocked and Strapi integrations
- Updated dependencies [0d1b8cc]
- Updated dependencies [8ac0de9]
- Updated dependencies [ac245c5]
- Updated dependencies [b519464]
- Updated dependencies [3da2e69]
    - @o2s/framework@1.12.0
    - @o2s/utils.logger@1.1.1

## 2.6.3

### Patch Changes

- 4a42e9c: improvements for knowledge base blocks and layouts
- Updated dependencies [4a42e9c]
    - @o2s/framework@1.11.2

## 2.6.2

### Patch Changes

- 5f25529: added stories for UI components
- Updated dependencies [5f25529]
- Updated dependencies [5f25529]
    - @o2s/framework@1.11.1

## 2.6.1

### Patch Changes

- 4c5a8a4: extended `FormField` model into input/select/switch subtypes for future use
- Updated dependencies [4c5a8a4]
    - @o2s/framework@1.9.2

## 2.6.0

### Minor Changes

- e81621c: added `PROSPECT` role for freshly-created users

### Patch Changes

- Updated dependencies [e81621c]
    - @o2s/framework@1.9.0

## 2.5.1

### Patch Changes

- 916fcaa: improved prettier rules and reformatted the code

## 2.5.0

### Minor Changes

- c13192c: adjusted `Page` and `Article` models to conform with new user-based permission model

### Patch Changes

- Updated dependencies [c13192c]
    - @o2s/framework@1.7.0

## 2.4.2

### Patch Changes

- f4b70b3: added telemetry events for anonymous data collection about usage
- Updated dependencies [97264f1]
    - @o2s/framework@1.6.2

## 2.4.1

### Patch Changes

- 36463a4: refactored how modules dependencies are defined to improve extending integrations with multiple modules within them
- Updated dependencies [36463a4]
    - @o2s/framework@1.6.1

## 2.4.0

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
    - @o2s/framework@1.4.0

## 2.3.0

### Minor Changes

- 84510e2: adjusted algolia article search

## 2.2.0

### Minor Changes

- 1ee5be1: feat: aligned buttons - used ActionList component with dropdown menu
    - used ActionList in the OrderDetailBlock to display buttons,
    - updated the mock and strapi - now an action is a Link,
    - used the format method from the string-template to inject a value into a string,

### Patch Changes

- Updated dependencies [1ee5be1]
    - @o2s/framework@1.2.0

## 2.1.0

### Minor Changes

- 565b63d: feat: fixed pagination issue in articleList
    - added new mocked articles
    - implemented new additionalLink in ArticleList

- 6225c14: remodeled how articles are kept in Strapi in order to suppport indexing them by search engines (e.g. Algolia) by separating them into their own content type
- f015c2b: New block ArticleSearch - Input field with suggestions to find appropriate article.
    - added new UI component - Command,
    - added new articles mock,
    - added mock for ArticleSearchBlock,
    - added strapi integration for ArticleSearchBlock,
    - added new component Autocomplete,

### Patch Changes

- fb99085: survey mapper changes after adding multiselect plugin
- Updated dependencies [565b63d]
- Updated dependencies [5d16edf]
- Updated dependencies [61d4f2f]
- Updated dependencies [f015c2b]
    - @o2s/framework@1.1.0
    - @o2s/utils.logger@1.1.0

## 2.0.0

### Major Changes

- 0e0c816: Official stable release

### Patch Changes

- Updated dependencies [0e0c816]
    - @o2s/framework@1.0.0
    - @o2s/utils.logger@1.0.0

## 1.4.1

### Patch Changes

- b91bfc4: fixed incorrect mapping of an optional field

## 1.4.0

### Minor Changes

- 05eea01: chore: update dependencies
- 44653fb: feat: orderDetails page implemented
    - added new UI component: InfoCard,
    - used InfoCard in PaymentsSummaryBlock, OrdersSummary and OrderDetails,
    - fixed ordersSummaryBlock integration with strapi,
    - used DynamicIcon in CategoryBlock,
    - added orientation prop for Progress component

### Patch Changes

- Updated dependencies [05eea01]
- Updated dependencies [44653fb]
    - @o2s/utils.logger@0.12.0
    - @o2s/framework@0.24.0

## 1.3.0

### Minor Changes

- 2e81dca: added possibility to defined unprotected pages

### Patch Changes

- Updated dependencies [2e81dca]
    - @o2s/framework@0.23.0

## 1.2.1

### Patch Changes

- 87185e9: feat: updated mocked content for knowledge base
- Updated dependencies [87185e9]
    - @o2s/framework@0.22.1

## 1.2.0

### Minor Changes

- 8b93cbf: feat: Implement SurveyJS forms
- 84b9002: added Strapi integration for `OrdersSummary` block
- 8d92afc: Adding label clickToSelect for reseting filters
- 30f3524: added `OrdersSummary` block and reworked mocked orders to return random orders instead of them being hardcoded
- 8b93cbf: feat: Integrated SurveyJS
- 8d92afc: added Strapi integration for `CategoryList` block
- 8d92afc: added Strapi integration for `Category` block
- 30f3524: feat: implemented orderListBlock
    - new page /orders,
    - added strapi integration for page /orders
    - new UI dropdown-menu component

- 8b93cbf: feat: implement surveyJS forms
- 8d92afc: added Strapi integration for `QuickLinks` block
- 8d92afc: added Strapi integration for `ArticleList` block
- 6d63cb1: feat: added surveyJS module
- bb46536: feat: cases submission
    - new component DynamicIcon - for loading icons dinamicly,
    - new component ActionLinks - for showing button list with dropdown-menu,
    - new pages: /contact-us, /submit-complaint, /request-device-maintenance,
    - fixed placeholders and disabled state in SurveyJS fields,

- 68f7858: chore: updated dependencies

### Patch Changes

- e4ebc5a: updated dependencies
- 84b9002: added explicit legend to the chart in `OrdersSummary` block
- Updated dependencies [2e4f22d]
- Updated dependencies [8b93cbf]
- Updated dependencies [e4ebc5a]
- Updated dependencies [8d92afc]
- Updated dependencies [30f3524]
- Updated dependencies [8b93cbf]
- Updated dependencies [30f3524]
- Updated dependencies [8b93cbf]
- Updated dependencies [84b9002]
- Updated dependencies [6d63cb1]
- Updated dependencies [ba125d6]
- Updated dependencies [bb46536]
- Updated dependencies [68f7858]
    - @o2s/framework@0.22.0
    - @o2s/utils.logger@0.11.0

## 1.1.1

### Patch Changes

- 0e8409e: fixed a typo in class name
- Updated dependencies [0e8409e]
    - @o2s/framework@0.21.1

## 1.1.0

### Minor Changes

- c0ff0a7: implement context switch
- de00274: updated dependencies
- c0ff0a7: implement context change, user roles
- 35cdf5e: implement TicketRecent component
- e9dc277: feat: handle user's timezone
- e9dc277: feat: handle user's timezone

### Patch Changes

- Updated dependencies [c0ff0a7]
- Updated dependencies [de00274]
- Updated dependencies [c0ff0a7]
- Updated dependencies [e9dc277]
- Updated dependencies [e9dc277]
    - @o2s/framework@0.21.0
    - @o2s/utils.logger@0.10.0

## 1.0.0

### Major Changes

- 6391233: Mapper labels fixes

## 0.18.0

### Minor Changes

- 98b2b61: implemented breadcrumbs

### Patch Changes

- Updated dependencies [98b2b61]
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
    - @o2s/framework@0.19.0

## 0.16.0

### Minor Changes

- 477ca3e: bug-43 - pagination component shows wrong number of total pages - fix

### Patch Changes

- Updated dependencies [477ca3e]
    - @o2s/framework@0.17.0

## 0.15.0

### Minor Changes

- db41474: naming fix, added error message when invalid credentials

### Patch Changes

- Updated dependencies [db41474]
    - @o2s/framework@0.16.0

## 0.14.1

### Patch Changes

- 5b48057: updated dependencies
- Updated dependencies [5b48057]
    - @o2s/utils.logger@0.9.2
    - @o2s/framework@0.15.1

## 0.14.0

### Minor Changes

- db32d1c: unified naming of the related objects in the api-harmonization and frontend apps - from now on, they are called `blocks` (instead of `components` in api-harmonization and `containers` in frontend)

### Patch Changes

- Updated dependencies [db32d1c]
    - @o2s/framework@0.15.0

## 0.13.0

### Minor Changes

- 80b678a: Added search integration with Algolia

### Patch Changes

- Updated dependencies [80b678a]
    - @o2s/framework@0.14.0

## 0.12.1

### Patch Changes

- 8c8bcf4: SEO and accessibility improvements
- Updated dependencies [8c8bcf4]
    - @o2s/framework@0.13.1

## 0.12.0

### Minor Changes

- 0e3fe6c: improved error handling across the app

## 0.11.0

### Minor Changes

- b4cddfb: add seo, add headers

### Patch Changes

- f2a6781: fixed an issue with alternative URLs for pages - on pages with dynamic URLs (e.g. /cases/(.+)) switching to another locale caused route to change to /cases/(.+) instead of /cases/12345
- eea2896: added recent tickets component
- Updated dependencies [f2a6781]
- Updated dependencies [eea2896]
- Updated dependencies [b4cddfb]
    - @o2s/framework@0.12.0

## 0.10.1

### Patch Changes

- 2c79c35: initial release
- Updated dependencies [2c79c35]
    - @o2s/framework@0.10.1
    - @o2s/utils.logger@0.9.1

# @o2s/integrations.mocked

## 1.16.0

### Minor Changes

- e78c11a: feat: Added sorting support for products in mocked integration
    - Added sorting functionality to `mapProducts` and `mapRelatedProducts` in mocked integration
    - Supports sorting by name and price in ascending/descending order (format: `name_ASC`, `name_DESC`, `price_ASC`, `price_DESC`)
    - Sorting is applied to filtered product lists before returning results

### Patch Changes

- Updated dependencies [e78c11a]
    - @o2s/framework@1.15.0

## 1.15.0

### Minor Changes

- db5b381: fixing various bugs related with blocks and ui components, adding sign-in button in navigation
- c2d9438: added new blocks from dxp-starter-kit app

### Patch Changes

- 221dc2c: fix: added missing Eslint command to list-staged
- 235f706: changed mocks for a better page structure
- Updated dependencies [221dc2c]
- Updated dependencies [db5b381]
- Updated dependencies [c2d9438]
    - @o2s/utils.logger@1.1.3
    - @o2s/framework@1.14.0

## 1.14.0

### Minor Changes

- 2c780d5: add NotificationSummary and TicketSummary blocks
- 1653b74: fix: update FilterItem and renderCell components for improved functionality and code clarity
- c27726a: added a new Product List block with list/tile form of presentation
- 2c780d5: conditionally render button in InfoCard for improved layout
- 1653b74: feat(ui): tile version of data lists

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

## 1.13.1

### Patch Changes

- c189d2b: changed file extension from tsx to ts to properly prod dist files

## 1.13.0

### Minor Changes

- ac245c5: adding initial filters support to list blocks
- 3da2e69: Added search functionality to invoice list filters

### Patch Changes

- b1c47e8: added mising live preview components to mocked and Strapi integrations
- d3bf68c: changed the `getCurrentUser` behavior to always return the same user
- Updated dependencies [0d1b8cc]
- Updated dependencies [8ac0de9]
- Updated dependencies [ac245c5]
- Updated dependencies [b519464]
- Updated dependencies [3da2e69]
    - @o2s/framework@1.12.0
    - @o2s/utils.logger@1.1.1

## 1.12.0

### Minor Changes

- 9ad8658: made improvements to the way the code splitting to reduce the total size of JS bundles

## 1.11.3

### Patch Changes

- 4a42e9c: improvements for knowledge base blocks and layouts
- Updated dependencies [4a42e9c]
    - @o2s/framework@1.11.2

## 1.11.2

### Patch Changes

- 5f25529: added stories for UI components
- Updated dependencies [5f25529]
- Updated dependencies [5f25529]
    - @o2s/framework@1.11.1

## 1.11.1

### Patch Changes

- 9c62515: removed Polish characters from mocked URLs for servivces

## 1.11.0

### Minor Changes

- 2421fb2: A major rework of the approach to the blocks - separated all block-related code from `api-harmonization` and `frontend` apps into separate packages, allowing versioning and much easier updates in other apps started using `create-o2s-app` script

### Patch Changes

- Updated dependencies [2421fb2]
    - @o2s/framework@1.11.0

## 1.10.0

### Minor Changes

- 6e5f193: feat: update organization role names

### Patch Changes

- Updated dependencies [6e5f193]
    - @o2s/framework@1.10.0

## 1.9.1

### Patch Changes

- 4c5a8a4: extended `FormField` model into input/select/switch subtypes for future use
- Updated dependencies [4c5a8a4]
    - @o2s/framework@1.9.2

## 1.9.0

### Minor Changes

- e81621c: added `PROSPECT` role for freshly-created users

### Patch Changes

- Updated dependencies [e81621c]
    - @o2s/framework@1.9.0

## 1.8.0

### Minor Changes

- fb09383: Organizations module:
    - Adding taxId to organization's mock data and adding filtering by taxId in mapOrganizations method.
    - Adding checkMembership mapper function that validates membership by checking if both organization and user exist in mock data.
    - Implement checkMembership method in mocked organizations service using the mapper function with simulated response delay.

    Users module:
    - Adding username to users mock data, exporting MOCK_USERS and adding mapUsers mapper function that filter existing users by username
    - Adding mapUsers function to users mapper with GetUsersQuery support that implements username-based filtering for mock user data
    - Add abstract getUsers method to UserService to support filtered user list retrieval with pagination and authorization support.

### Patch Changes

- Updated dependencies [fb09383]
    - @o2s/framework@1.8.0

## 1.7.0

### Minor Changes

- c13192c: adjusted `Page` and `Article` models to conform with new user-based permission model

### Patch Changes

- Updated dependencies [c13192c]
    - @o2s/framework@1.7.0

## 1.6.8

### Patch Changes

- 38a9331: modified prisma init script

## 1.6.7

### Patch Changes

- 9a93a3d: feat: orders - replace price to be NET

## 1.6.6

### Patch Changes

- ec84ef0: fix: fixed breadcrumb - removed redundant dashboard text

## 1.6.5

### Patch Changes

- 97264f1: feat: replace To be Paid column with Net amount on invoices
- f4b70b3: added telemetry events for anonymous data collection about usage
- Updated dependencies [97264f1]
    - @o2s/framework@1.6.2

## 1.6.4

### Patch Changes

- 41ca705: feat: generate db in prisma as postinstall task

## 1.6.3

### Patch Changes

- 6102f12: added prisma files to package files

## 1.6.2

### Patch Changes

- d1eeee2: reverted postinstall script as it fails when trying to initialise prisma

## 1.6.1

### Patch Changes

- d878a0b: added postinstall stage to properly initialize database
- 85bb4bb: fix: fixed pagination in products and resources mocks

## 1.6.0

### Minor Changes

- 2a0475c: feat: update products, resources mocks, InfoCard - layout fix
    - updated model for GetRelatedProductListParams - renamed id and variantId to inform that we need to provide product data as params,
    - added natural data to products and resources mocks,
    - added sorting and filtering to products.mapper.ts,
    - fixed InfoCard layout issue,

### Patch Changes

- Updated dependencies [2a0475c]
    - @o2s/framework@1.6.0

## 1.5.1

### Patch Changes

- 7fdb9c9: added delete user with id method in users module
- Updated dependencies [7fdb9c9]
    - @o2s/framework@1.5.1

## 1.5.0

### Minor Changes

- fb98e38: feat: align overdue cards state on Invoices and OrderDetails pages
- 6949717: feat: updated resource integration - added product to the Resource model
    - updated service-list and service-details blocks,
    - added sorting and filters to mocks,

### Patch Changes

- Updated dependencies [6949717]
    - @o2s/framework@1.5.0

## 1.4.0

### Minor Changes

- 027ed39: featuredServiceListBlock - list of available services
    - added new UI componetnt from Shadcn - Switch,
    - extended ProductCard with action property,
    - implemented model and mock for FeatureServiceListBlock,
    - integrated with strapi,

- 9c31433: - added endOfWarranty attribute on asset model
    - fixed German labels in English mocks
    - fixed incorrect imports in framework modules configuration
    - added optional authorization param in most service methods

### Patch Changes

- Updated dependencies [027ed39]
- Updated dependencies [985780a]
- Updated dependencies [9c31433]
    - @o2s/framework@1.4.0

## 1.3.0

### Minor Changes

- 8c29a31: moved mocked auth integration (with a local database) to a separate package to allow easier switching between other integrations

### Patch Changes

- Updated dependencies [8c29a31]
    - @o2s/framework@1.3.0

## 1.2.0

### Minor Changes

- 1ee5be1: feat: aligned buttons - used ActionList component with dropdown menu
    - used ActionList in the OrderDetailBlock to display buttons,
    - updated the mock and strapi - now an action is a Link,
    - used the format method from the string-template to inject a value into a string,

### Patch Changes

- Updated dependencies [1ee5be1]
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
    - @o2s/framework@1.1.0
    - @o2s/utils.logger@1.1.0

## 1.0.1

### Patch Changes

- b575e8e: made mocked orders IDs more consistent

## 1.0.0

### Major Changes

- 0e0c816: Official stable release

### Patch Changes

- Updated dependencies [0e0c816]
    - @o2s/framework@1.0.0
    - @o2s/utils.logger@1.0.0

## 0.24.1

### Patch Changes

- f52a3fe: updated images in services mocks

## 0.24.0

### Minor Changes

- 05eea01: chore: update dependencies
- 1200a28: feat: update dashboard mock
- 44653fb: feat: orderDetails page implemented
    - added new UI component: InfoCard,
    - used InfoCard in PaymentsSummaryBlock, OrdersSummary and OrderDetails,
    - fixed ordersSummaryBlock integration with strapi,
    - used DynamicIcon in CategoryBlock,
    - added orientation prop for Progress component

### Patch Changes

- a4cf40d: images in articles changed
- 6baaae4: fixed a typo in a filename
- Updated dependencies [05eea01]
- Updated dependencies [44653fb]
    - @o2s/utils.logger@0.12.0
    - @o2s/framework@0.24.0

## 0.23.0

### Minor Changes

- 2e81dca: added possibility to defined unprotected pages

### Patch Changes

- Updated dependencies [2e81dca]
    - @o2s/framework@0.23.0

## 0.22.2

### Patch Changes

- fedee10: fixed mocks for different locales

## 0.22.1

### Patch Changes

- 9ce2262: fixed a typo in organization name
- 87185e9: feat: updated mocked content for knowledge base
- Updated dependencies [87185e9]
    - @o2s/framework@0.22.1

## 0.22.0

### Minor Changes

- 2e4f22d: feat: add scrollable toggle group filter with multiple selection
    - Add scroll container for toggle group filter in overlay view
    - Implement multiple selection version for toggle group filter
    - Add support for horizontal scrolling in filter items
    - Improve filter item layout with proper spacing and alignment
    - Add new components: ScrollContainer and ToggleGroup
    - Add shx script for better cross-platform shell compatibility
    - Add proper styling for filter items in scroll container

- 8b93cbf: feat: Implement SurveyJS forms
- 8d92afc: Adding label clickToSelect for reseting filters
- 30f3524: added `OrdersSummary` block and reworked mocked orders to return random orders instead of them being hardcoded
- 8b93cbf: feat: Integrated SurveyJS
- 30f3524: feat: implemented orderListBlock
    - new page /orders,
    - added strapi integration for page /orders
    - new UI dropdown-menu component

- 8b93cbf: feat: implement surveyJS forms
- 6d63cb1: feat: added surveyJS module
- ba125d6: Added orders module
- 2e4f22d: Replaced cp with shx cp in the postbuild script for cross-platform compatibility.
- bb46536: feat: cases submission
    - new component DynamicIcon - for loading icons dinamicly,
    - new component ActionLinks - for showing button list with dropdown-menu,
    - new pages: /contact-us, /submit-complaint, /request-device-maintenance,
    - fixed placeholders and disabled state in SurveyJS fields,

- 68f7858: chore: updated dependencies

### Patch Changes

- e4ebc5a: updated dependencies
- 84b9002: added explicit legend to the chart in `OrdersSummary` block
- 68925cf: added example icons
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

## 0.21.0

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
    - @o2s/framework@0.21.0
    - @o2s/utils.logger@0.10.0

## 0.20.0

### Minor Changes

- dadad64: fix: service-list - wrong tag color"

## 0.19.0

### Minor Changes

- 98b2b61: implemented breadcrumbs

### Patch Changes

- Updated dependencies [98b2b61]
    - @o2s/framework@0.20.0

## 0.18.0

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

## 0.17.0

### Minor Changes

- 92f2be2: Fix inconsistent data in User Profile

### Patch Changes

- Updated dependencies [3a1ff43]
    - @o2s/framework@0.18.0

## 0.16.0

### Minor Changes

- 477ca3e: bug-43 - pagination component shows wrong number of total pages - fix

### Patch Changes

- Updated dependencies [477ca3e]
    - @o2s/framework@0.17.0

## 0.15.0

### Minor Changes

- 30d3544: fix invoices sorting
- c4ec3cb: fix validation messages on login page
- db41474: naming fix, added error message when invalid credentials
- 30d3544: fix naming

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

## 0.11.2

### Patch Changes

- aeaa8b9: fix: minor content tweaks

## 0.11.1

### Patch Changes

- 3f98ef5: mocked content changes

## 0.11.0

### Minor Changes

- b4cddfb: add seo, add headers

### Patch Changes

- f2a6781: fixed an issue with alternative URLs for pages - on pages with dynamic URLs (e.g. /cases/(.+)) switching to another locale caused route to change to /cases/(.+) instead of /cases/12345
- eea2896: added recent tickets component
- 54c9fb5: added an option to disable fake delays in the integrations.mocked
- Updated dependencies [f2a6781]
- Updated dependencies [eea2896]
- Updated dependencies [b4cddfb]
    - @o2s/framework@0.12.0

## 0.10.2

### Patch Changes

- af1efd4: fixed differences between navigation items between locales

## 0.10.1

### Patch Changes

- c60861b: removed hardcoded logo URL and switched it with a URL to raw file hosted on GitHub

## 0.10.0

### Minor Changes

- e0ce5cb: Added localized mocks

### Patch Changes

- Updated dependencies [e0ce5cb]
    - @o2s/framework@0.11.0

## 0.9.2

### Patch Changes

- bd35a35: removed hardcoded logo URL and switched it with a URL to raw file hosted on GitHub

## 0.9.1

### Patch Changes

- 2c79c35: initial release
- Updated dependencies [2c79c35]
    - @o2s/framework@0.10.1
    - @o2s/utils.logger@0.9.1

# @o2s/framework

## 1.15.0

### Minor Changes

- e78c11a: feat: Added sorting support for products in mocked integration
    - Added sorting functionality to `mapProducts` and `mapRelatedProducts` in mocked integration
    - Supports sorting by name and price in ascending/descending order (format: `name_ASC`, `name_DESC`, `price_ASC`, `price_DESC`)
    - Sorting is applied to filtered product lists before returning results

## 1.14.0

### Minor Changes

- db5b381: fixing various bugs related with blocks and ui components, adding sign-in button in navigation
- c2d9438: added new blocks from dxp-starter-kit app

### Patch Changes

- Updated dependencies [221dc2c]
    - @o2s/utils.logger@1.1.3

## 1.13.0

### Minor Changes

- 2c780d5: add NotificationSummary and TicketSummary blocks
- 1653b74: fix: update FilterItem and renderCell components for improved functionality and code clarity
- c27726a: added a new Product List block with list/tile form of presentation
- 2c780d5: conditionally render button in InfoCard for improved layout
- 1653b74: feat(ui): tile version of data lists

### Patch Changes

- 0354126: reworked turbo dev task to optimize CPU/RAM usage
- Updated dependencies [0354126]
    - @o2s/utils.logger@1.1.2

## 1.12.0

### Minor Changes

- 0d1b8cc: Added Live Preview support in blocks
- ac245c5: adding initial filters support to list blocks
- 3da2e69: Added search functionality to invoice list filters

### Patch Changes

- 8ac0de9: added missing dependencies
- Updated dependencies [8ac0de9]
- Updated dependencies [b519464]
    - @o2s/utils.logger@1.1.1

## 1.11.2

### Patch Changes

- 4a42e9c: improvements for knowledge base blocks and layouts

## 1.11.1

### Patch Changes

- 5f25529: added an option to set a page-based themes via CMS config
- 5f25529: added stories for UI components

## 1.11.0

### Minor Changes

- 2421fb2: A major rework of the approach to the blocks - separated all block-related code from `api-harmonization` and `frontend` apps into separate packages, allowing versioning and much easier updates in other apps started using `create-o2s-app` script

## 1.10.0

### Minor Changes

- 6e5f193: feat: update organization role names

## 1.9.3

### Patch Changes

- e240813: added a model for pattern/regex field validation

## 1.9.2

### Patch Changes

- 4c5a8a4: extended `FormField` model into input/select/switch subtypes for future use

## 1.9.1

### Patch Changes

- db8c779: extended `FormField` model with optional description and caption

## 1.9.0

### Minor Changes

- e81621c: added `PROSPECT` role for freshly-created users

## 1.8.0

### Minor Changes

- fb09383: Organizations module:
    - Extending the Organization model with taxId
    - Adding taxId to OrganizationsListQuery and adding CheckMembershipParams class for membership validation
    - Adding GET /membership/:orgId/:userId endpoint to check user membership and implementing checkMembership method in OrganizationController
    - Adding abstract checkMembership method to OrganizationService to support membership verification operations with boolean return type.

    Users module:
    - Extending the User model with username and adding an export of User type
    - Adding GetUsersQuery class to support optional username filtering
    - Adding getUsers method to UserService

## 1.7.0

### Minor Changes

- c13192c: refactored user roles to allow more than one role on organization level and added permission fields on `Page` and `Article` models to allow displaying them based on user roles

## 1.6.2

### Patch Changes

- 97264f1: feat: replace To be Paid column with Net amount on invoices

## 1.6.1

### Patch Changes

- 36463a4: refactored how modules dependencies are defined to improve extending integrations with multiple modules within them

## 1.6.0

### Minor Changes

- 2a0475c: feat: update products, resources mocks, InfoCard - layout fix
    - updated model for GetRelatedProductListParams - renamed id and variantId to inform that we need to provide product data as params,
    - added natural data to products and resources mocks,
    - added sorting and filtering to products.mapper.ts,
    - fixed InfoCard layout issue,

## 1.5.1

### Patch Changes

- 7fdb9c9: added delete user with id method in users module

## 1.5.0

### Minor Changes

- 6949717: feat: updated resource integration - added product to the Resource model
    - updated service-list and service-details blocks,
    - added sorting and filters to mocks,

## 1.4.0

### Minor Changes

- 027ed39: featuredServiceListBlock - list of available services
    - added new UI componetnt from Shadcn - Switch,
    - extended ProductCard with action property,
    - implemented model and mock for FeatureServiceListBlock,
    - integrated with strapi,

- 985780a: added passing of authorization header to most of crucial services
- 9c31433: - added endOfWarranty attribute on asset model
    - fixed German labels in English mocks
    - fixed incorrect imports in framework modules configuration
    - added optional authorization param in most service methods

## 1.3.0

### Minor Changes

- 8c29a31: moved mocked auth integration (with a local database) to a separate package to allow easier switching between other integrations

## 1.2.0

### Minor Changes

- 1ee5be1: feat: aligned buttons - used ActionList component with dropdown menu
    - used ActionList in the OrderDetailBlock to display buttons,
    - updated the mock and strapi - now an action is a Link,
    - used the format method from the string-template to inject a value into a string,

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

## 1.0.0

### Major Changes

- 0e0c816: Official stable release

## 0.24.0

### Minor Changes

- 05eea01: chore: update dependencies
- 44653fb: feat: orderDetails page implemented
    - added new UI component: InfoCard,
    - used InfoCard in PaymentsSummaryBlock, OrdersSummary and OrderDetails,
    - fixed ordersSummaryBlock integration with strapi,
    - used DynamicIcon in CategoryBlock,
    - added orientation prop for Progress component

## 0.23.0

### Minor Changes

- 2e81dca: added possibility to defined unprotected pages

## 0.22.1

### Patch Changes

- 87185e9: feat: updated mocked content for knowledge base

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
- 84b9002: modified `OrdersSummary` to make range filters optional
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

## 0.21.1

### Patch Changes

- 0e8409e: fixed a typo in class name

## 0.21.0

### Minor Changes

- c0ff0a7: implement context switch
- de00274: updated dependencies
- c0ff0a7: implement context change, user roles
- e9dc277: feat: handle user's timezone
- e9dc277: feat: handle user's timezone

## 0.20.0

### Minor Changes

- 98b2b61: implemented breadcrumbs

## 0.19.0

### Minor Changes

- 35eeac7: implement service details page
- 92be116: added Price model, services page implemented
- 92be116: implement services page
- 35eeac7: implement service details page
- 52b3e0a: add tooltips to mocked buttons

## 0.18.0

### Minor Changes

- 3a1ff43: replace axios with ofetch

## 0.17.0

### Minor Changes

- 477ca3e: bug-43 - pagination component shows wrong number of total pages - fix

## 0.16.0

### Minor Changes

- db41474: naming fix, added error message when invalid credentials

## 0.15.1

### Patch Changes

- 5b48057: updated dependencies

## 0.15.0

### Minor Changes

- db32d1c: unified naming of the related objects in the api-harmonization and frontend apps - from now on, they are called `blocks` (instead of `components` in api-harmonization and `containers` in frontend)

## 0.14.0

### Minor Changes

- 80b678a: Added search integration with Algolia

## 0.13.1

### Patch Changes

- 8c8bcf4: SEO and accessibility improvements

## 0.13.0

### Minor Changes

- 7959037: improved error handling across the app

## 0.12.0

### Minor Changes

- b4cddfb: add seo, add headers

### Patch Changes

- f2a6781: fixed an issue with alternative URLs for pages - on pages with dynamic URLs (e.g. /cases/(.+)) switching to another locale caused route to change to /cases/(.+) instead of /cases/12345
- eea2896: added recent tickets component

## 0.11.0

### Minor Changes

- e0ce5cb: Added localized mocks

## 0.10.1

### Patch Changes

- 2c79c35: initial release

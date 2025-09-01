# @o2s/frontend

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
    - @o2s/api-harmonization@1.9.0
    - @o2s/blocks.faq@1.0.0
    - @o2s/framework@1.11.0
    - @o2s/ui@1.3.0

## 1.8.0

### Minor Changes

- 6e5f193: feat: update organization role names

### Patch Changes

- Updated dependencies [6e5f193]
    - @o2s/integrations.mocked@1.10.0
    - @o2s/framework@1.10.0

## 1.7.0

### Minor Changes

- c13192c: implemented user role-based access to pages and articles

### Patch Changes

- Updated dependencies [c13192c]
- Updated dependencies [c13192c]
- Updated dependencies [c13192c]
    - @o2s/framework@1.7.0
    - @o2s/api-harmonization@1.6.0
    - @o2s/integrations.mocked@1.7.0

## 1.6.4

### Patch Changes

- a5b8ee5: added missing dependency
- 50b2ba3: added example docker config
- 97055f7: split `NEXT_PUBLIC_API_URL` variable into public and internal ones
- Updated dependencies [a5b8ee5]
- Updated dependencies [50b2ba3]
    - @o2s/api-harmonization@1.5.6

## 1.6.3

### Patch Changes

- 9a93a3d: feat: orders - replace price to be NET
- Updated dependencies [9a93a3d]
    - @o2s/integrations.mocked@1.6.7
    - @o2s/api-harmonization@1.5.4

## 1.6.2

### Patch Changes

- ec84ef0: fix: fixed breadcrumb - removed redundant dashboard text
- Updated dependencies [ec84ef0]
    - @o2s/integrations.mocked@1.6.6

## 1.6.1

### Patch Changes

- 97264f1: feat: replace To be Paid column with Net amount on invoices
- Updated dependencies [25af511]
- Updated dependencies [97264f1]
- Updated dependencies [f4b70b3]
    - @o2s/api-harmonization@1.5.3
    - @o2s/integrations.mocked@1.6.5
    - @o2s/framework@1.6.2

## 1.6.0

### Minor Changes

- 2a0475c: feat: update products, resources mocks, InfoCard - layout fix

    - updated model for GetRelatedProductListParams - renamed id and variantId to inform that we need to provide product data as params,
    - added natural data to products and resources mocks,
    - added sorting and filtering to products.mapper.ts,
    - fixed InfoCard layout issue,

### Patch Changes

- Updated dependencies [2a0475c]
    - @o2s/integrations.mocked@1.6.0
    - @o2s/framework@1.6.0

## 1.5.0

### Minor Changes

- fb98e38: feat: align overdue cards state on Invoices and OrderDetails pages

### Patch Changes

- Updated dependencies [fb98e38]
- Updated dependencies [6949717]
    - @o2s/integrations.mocked@1.5.0
    - @o2s/api-harmonization@1.5.0
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
    - @o2s/api-harmonization@1.4.0
    - @o2s/framework@1.4.0
    - @o2s/ui@1.2.0

## 1.3.0

### Minor Changes

- 8c29a31: moved mocked auth integration (with a local database) to a separate package to allow easier switching between other integrations

### Patch Changes

- Updated dependencies [8c29a31]
    - @o2s/integrations.mocked@1.3.0
    - @o2s/api-harmonization@1.3.0
    - @o2s/framework@1.3.0

## 1.2.0

### Minor Changes

- 1ee5be1: feat: aligned buttons - used ActionList component with dropdown menu

    - used ActionList in the OrderDetailBlock to display buttons,
    - updated the mock and strapi - now an action is a Link,
    - used the format method from the string-template to inject a value into a string,

### Patch Changes

- Updated dependencies [1ee5be1]
    - @o2s/api-harmonization@1.2.0
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
- Updated dependencies [6225c14]
- Updated dependencies [61d4f2f]
- Updated dependencies [f015c2b]
    - @o2s/api-harmonization@1.1.0
    - @o2s/framework@1.1.0
    - @o2s/ui@1.1.0

## 1.0.0

### Major Changes

- 0e0c816: Official stable release

### Patch Changes

- Updated dependencies [0e0c816]
    - @o2s/api-harmonization@1.0.0
    - @o2s/framework@1.0.0
    - @o2s/ui@1.0.0

## 0.25.1

### Patch Changes

- 320512b: fixed tables in rich text expanding beyond the viewport

## 0.25.0

### Minor Changes

- 123da31: fix: fixed blogCart hover

### Patch Changes

- 9a2344d: minor UI fixes

## 0.24.1

### Patch Changes

- aaa8c37: code formatting fixes

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

- 10fbec4: fix: fixed image implementation

### Patch Changes

- 10fbec4: improved global error handling for not-found and unexpected errors
- Updated dependencies [05eea01]
- Updated dependencies [44653fb]
- Updated dependencies [10fbec4]
    - @o2s/api-harmonization@0.23.0
    - @o2s/framework@0.24.0
    - @o2s/ui@0.16.0

## 0.23.0

### Minor Changes

- 2e81dca: added possibility to defined unprotected pages

### Patch Changes

- Updated dependencies [2e81dca]
    - @o2s/api-harmonization@0.22.0
    - @o2s/framework@0.23.0

## 0.22.1

### Patch Changes

- 87185e9: feat: updated mocked content for knowledge base
- Updated dependencies [87185e9]
    - @o2s/api-harmonization@0.21.1
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

- 04ed4ce: - Coherence of action buttons in tables.
    - Changing styles for links in RichText component.
- 8b93cbf: feat: Implement SurveyJS forms
- 8d92afc: Adding label clickToSelect for reseting filters
- 30f3524: added `OrdersSummary` block and reworked mocked orders to return random orders instead of them being hardcoded
- 9a33c13: Add Tooltip to TicketRecent component.
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

- a1acbd1: fixed text wrapping in table headers on larger screens
- 8b93cbf: feat: implement surveyJS forms
- 84b9002: modified `OrdersSummary` to make range filters optional
- 2f05843: Moved link to whole row in recent tickets
- bb46536: feat: cases submission

    - new component DynamicIcon - for loading icons dinamicly,
    - new component ActionLinks - for showing button list with dropdown-menu,
    - new pages: /contact-us, /submit-complaint, /request-device-maintenance,
    - fixed placeholders and disabled state in SurveyJS fields,

- 68f7858: chore: updated dependencies

### Patch Changes

- e4ebc5a: updated dependencies
- 84b9002: added explicit legend to the chart in `OrdersSummary` block
- 84b9002: added responsive design to the `OrdersSummary` block
- Updated dependencies [2e4f22d]
- Updated dependencies [8b93cbf]
- Updated dependencies [e4ebc5a]
- Updated dependencies [8d92afc]
- Updated dependencies [30f3524]
- Updated dependencies [8b93cbf]
- Updated dependencies [8d92afc]
- Updated dependencies [30f3524]
- Updated dependencies [8b93cbf]
- Updated dependencies [84b9002]
- Updated dependencies [6d63cb1]
- Updated dependencies [ba125d6]
- Updated dependencies [bb46536]
- Updated dependencies [68f7858]
    - @o2s/framework@0.22.0
    - @o2s/ui@0.15.0
    - @o2s/api-harmonization@0.21.0

## 0.21.1

### Patch Changes

- 811d13a: removed not used locale
- Updated dependencies [0e8409e]
    - @o2s/framework@0.21.1

## 0.21.0

### Minor Changes

- c0ff0a7: implement context switch
- de00274: updated dependencies
- c0ff0a7: implement context change, user roles
- e9dc277: feat: handle user's timezone
- a854c74: upgraded Tailwind to v4
- 7b15c0d: replaced `next-pwa` with native manifest from next.js and added app icons
- e9dc277: feat: handle user's timezone

### Patch Changes

- Updated dependencies [c0ff0a7]
- Updated dependencies [de00274]
- Updated dependencies [c0ff0a7]
- Updated dependencies [e9dc277]
- Updated dependencies [a854c74]
- Updated dependencies [c0ff0a7]
- Updated dependencies [e9dc277]
    - @o2s/api-harmonization@0.20.0
    - @o2s/framework@0.21.0
    - @o2s/ui@0.14.0

## 0.20.0

### Minor Changes

- 51a6121: fix: update generators

### Patch Changes

- Updated dependencies [51a6121]
    - @o2s/api-harmonization@0.19.0

## 0.19.0

### Minor Changes

- fa2f2c5: fix: incorrect layout on the PaymentCard
- dadad64: fix: service-list - wrong tag color"
- b9090bc: incorrect colors on hover in the Navbar and the Footer

### Patch Changes

- Updated dependencies [b9090bc]
    - @o2s/ui@0.13.0
    - @o2s/api-harmonization@0.18.1

## 0.18.0

### Minor Changes

- 98b2b61: implemented breadcrumbs
- 77f9dc4: UI theme update

### Patch Changes

- Updated dependencies [77f9dc4]
- Updated dependencies [98b2b61]
- Updated dependencies [77f9dc4]
- Updated dependencies [77f9dc4]
    - @o2s/ui@0.12.0
    - @o2s/api-harmonization@0.18.0

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
    - @o2s/api-harmonization@0.17.0
    - @o2s/ui@0.11.0

## 0.16.0

### Minor Changes

- 92f2be2: Fix inconsistent data in User Profile

### Patch Changes

- Updated dependencies [92f2be2]
    - @o2s/api-harmonization@0.16.0

## 0.15.0

### Minor Changes

- 477ca3e: bug-43 - pagination component shows wrong number of total pages - fix

### Patch Changes

- @o2s/api-harmonization@0.15.3

## 0.14.0

### Minor Changes

- c4ec3cb: fix validation messages on login page
- db41474: naming fix, added error message when invalid credentials
- 78a3c92: fix filters Context
- db41474: use alert component to display error message

### Patch Changes

- @o2s/api-harmonization@0.15.2

## 0.13.1

### Patch Changes

- 5b48057: updated dependencies
- Updated dependencies [5b48057]
    - @o2s/api-harmonization@0.15.1
    - @o2s/ui@0.10.2

## 0.13.0

### Minor Changes

- db32d1c: unified naming of the related objects in the api-harmonization and frontend apps - from now on, they are called `blocks` (instead of `components` in api-harmonization and `containers` in frontend)

### Patch Changes

- Updated dependencies [db32d1c]
    - @o2s/api-harmonization@0.15.0

## 0.12.3

### Patch Changes

- 5c0aa1d: fixed alternative urls for pages not working when changing locale
- a847eb9: fixed incorrect props in the `Header` component

## 0.12.2

### Patch Changes

- 8c8bcf4: SEO and accessibility improvements
- Updated dependencies [8c8bcf4]
    - @o2s/ui@0.10.1

## 0.12.1

### Patch Changes

- 6e5870c: removed `loading.tsx` in favor of component-specific loaders

## 0.12.0

### Minor Changes

- 0e3fe6c: improved error handling across the app

### Patch Changes

- Updated dependencies [0e3fe6c]
    - @o2s/api-harmonization@0.13.0

## 0.11.0

### Minor Changes

- b4cddfb: add seo, add headers

### Patch Changes

- f2a6781: fixed an issue with alternative URLs for pages - on pages with dynamic URLs (e.g. /cases/(.+)) switching to another locale caused route to change to /cases/(.+) instead of /cases/12345
- eea2896: added recent tickets component
- 54c9fb5: added an alert about the upcoming feature
- Updated dependencies [f2a6781]
- Updated dependencies [eea2896]
- Updated dependencies [b4cddfb]
    - @o2s/api-harmonization@0.12.0

## 0.10.1

### Patch Changes

- c60861b: removed hardcoded logo URL and switched it with a URL to raw file hosted on GitHub

## 0.10.0

### Minor Changes

- e0ce5cb: Removed console.log

### Patch Changes

- Updated dependencies [e0ce5cb]
- Updated dependencies [e0ce5cb]
    - @o2s/ui@0.10.0
    - @o2s/api-harmonization@0.11.0

## 0.9.1

### Patch Changes

- 2c79c35: initial release
- Updated dependencies [2c79c35]
    - @o2s/api-harmonization@0.10.1
    - @o2s/ui@0.9.1

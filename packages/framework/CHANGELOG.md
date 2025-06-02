# @o2s/framework

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

# @o2s/integrations.strapi-cms

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

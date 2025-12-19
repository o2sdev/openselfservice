# @o2s/ui

## 1.8.0

### Minor Changes

- 5947ca4: added an `inline` variant to the `Filters` component that renders filters immediately, instead of in a draawer component

### Patch Changes

- d197b89: fixed incorrect price rendering in `DataView` component
- d197b89: removed unnecessary prop destructuring
- Updated dependencies [e78c11a]
    - @o2s/framework@1.15.0

## 1.7.1

### Patch Changes

- abd3b41: added missing `getRowKey` prop that is passed down to inner components
- be6f80b: fixed incorrect price mapping
- f999bb1: extended `Collapsible` component with an option to define whether it's open by default

## 1.7.0

### Minor Changes

- db5b381: fixing various bugs related with blocks and ui components, adding sign-in button in navigation
- c2d9438: added new blocks from dxp-starter-kit app

### Patch Changes

- 221dc2c: fix: added missing Eslint command to list-staged
- Updated dependencies [db5b381]
- Updated dependencies [c2d9438]
    - @o2s/framework@1.14.0

## 1.6.0

### Minor Changes

- 1653b74: fix: update FilterItem and renderCell components for improved functionality and code clarity
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

## 1.5.0

### Minor Changes

- 0d1b8cc: Added Live Preview support in blocks
- 485731c: enhance Checkbox, Select and Input components with error support
- 51b17ed: Adding new Carousel component
- 3da2e69: Added search functionality to invoice list filters

### Patch Changes

- 8ac0de9: added missing dependencies
- Updated dependencies [0d1b8cc]
- Updated dependencies [8ac0de9]
- Updated dependencies [ac245c5]
- Updated dependencies [3da2e69]
    - @o2s/framework@1.12.0

## 1.4.0

### Minor Changes

- 9ad8658: added support for prioritizing image rendering in order to disable lazyloading for images above the fold
- 9ad8658: reduced JS bundle size by not moving to dynamic icon loading

## 1.3.2

### Patch Changes

- 4a42e9c: improvements for knowledge base blocks and layouts
- Updated dependencies [4a42e9c]
    - @o2s/framework@1.11.2

## 1.3.1

### Patch Changes

- 5f25529: added stories for UI components
- Updated dependencies [5f25529]
- Updated dependencies [5f25529]
    - @o2s/framework@1.11.1

## 1.3.0

### Minor Changes

- 2421fb2: A major rework of the approach to the blocks - separated all block-related code from `api-harmonization` and `frontend` apps into separate packages, allowing versioning and much easier updates in other apps started using `create-o2s-app` script

### Patch Changes

- Updated dependencies [2421fb2]
    - @o2s/framework@1.11.0

## 1.2.0

### Minor Changes

- 027ed39: featuredServiceListBlock - list of available services
    - added new UI componetnt from Shadcn - Switch,
    - extended ProductCard with action property,
    - implemented model and mock for FeatureServiceListBlock,
    - integrated with strapi,

## 1.1.0

### Minor Changes

- f015c2b: New block ArticleSearch - Input field with suggestions to find appropriate article.
    - added new UI component - Command,
    - added new articles mock,
    - added mock for ArticleSearchBlock,
    - added strapi integration for ArticleSearchBlock,
    - added new component Autocomplete,

## 1.0.0

### Major Changes

- 0e0c816: Official stable release

## 0.16.0

### Minor Changes

- 05eea01: chore: update dependencies
- 44653fb: feat: orderDetails page implemented
    - added new UI component: InfoCard,
    - used InfoCard in PaymentsSummaryBlock, OrdersSummary and OrderDetails,
    - fixed ordersSummaryBlock integration with strapi,
    - used DynamicIcon in CategoryBlock,
    - added orientation prop for Progress component

## 0.15.0

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
- 30f3524: added `OrdersSummary` block and reworked mocked orders to return random orders instead of them being hardcoded
- 8b93cbf: feat: Integrated SurveyJS
- 30f3524: feat: implemented orderListBlock
    - new page /orders,
    - added strapi integration for page /orders
    - new UI dropdown-menu component

- 8b93cbf: feat: implement surveyJS forms
- bb46536: feat: cases submission
    - new component DynamicIcon - for loading icons dinamicly,
    - new component ActionLinks - for showing button list with dropdown-menu,
    - new pages: /contact-us, /submit-complaint, /request-device-maintenance,
    - fixed placeholders and disabled state in SurveyJS fields,

- 68f7858: chore: updated dependencies

### Patch Changes

- e4ebc5a: updated dependencies

## 0.14.0

### Minor Changes

- c0ff0a7: implement context switch
- de00274: updated dependencies
- a854c74: upgraded Tailwind to v4
- c0ff0a7: added `toast` component; added pointers to `radio` and `label` components; added `size` to `loading-overlay` component

## 0.13.0

### Minor Changes

- b9090bc: incorrect colors on hover in the Navbar and the Footer

## 0.12.0

### Minor Changes

- 77f9dc4: added nwe variants to `button`, `avatar` and `select` components
- 77f9dc4: updated CSS variables with the new UI theme
- 77f9dc4: UI theme update

## 0.11.0

### Minor Changes

- 92be116: added Price model, services page implemented
- 52b3e0a: add tooltips to mocked buttons

## 0.10.2

### Patch Changes

- 5b48057: updated dependencies

## 0.10.1

### Patch Changes

- 8c8bcf4: SEO and accessibility improvements

## 0.10.0

### Minor Changes

- e0ce5cb: Fixed use of label for pagination button

## 0.9.1

### Patch Changes

- 2c79c35: initial release

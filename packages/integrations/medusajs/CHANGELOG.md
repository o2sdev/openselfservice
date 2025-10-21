# @o2s/integrations.medusajs

## 1.6.0

### Minor Changes

- 2421fb2: A major rework of the approach to the blocks - separated all block-related code from `api-harmonization` and `frontend` apps into separate packages, allowing versioning and much easier updates in other apps started using `create-o2s-app` script

### Patch Changes

- Updated dependencies [2421fb2]
    - @o2s/framework@1.11.0

## 1.5.2

### Patch Changes

- f4b70b3: added telemetry events for anonymous data collection about usage
- Updated dependencies [97264f1]
    - @o2s/framework@1.6.2

## 1.5.1

### Patch Changes

- 36463a4: refactored how modules dependencies are defined to improve extending integrations with multiple modules within them
- Updated dependencies [36463a4]
    - @o2s/framework@1.6.1

## 1.5.0

### Minor Changes

- 2a0475c: feat: update products, resources mocks, InfoCard - layout fix

    - updated model for GetRelatedProductListParams - renamed id and variantId to inform that we need to provide product data as params,
    - added natural data to products and resources mocks,
    - added sorting and filtering to products.mapper.ts,
    - fixed InfoCard layout issue,

### Patch Changes

- Updated dependencies [2a0475c]
    - @o2s/framework@1.6.0

## 1.4.0

### Minor Changes

- 6949717: feat: updated resource integration - added product to the Resource model

    - updated service-list and service-details blocks,
    - added sorting and filters to mocks,

### Patch Changes

- Updated dependencies [6949717]
    - @o2s/framework@1.5.0

## 1.3.0

### Minor Changes

- 9c31433: - added endOfWarranty attribute on asset model
    - fixed German labels in English mocks
    - fixed incorrect imports in framework modules configuration
    - added optional authorization param in most service methods

### Patch Changes

- Updated dependencies [027ed39]
- Updated dependencies [985780a]
- Updated dependencies [9c31433]
    - @o2s/framework@1.4.0

## 1.2.0

### Minor Changes

- 8c29a31: moved mocked auth integration (with a local database) to a separate package to allow easier switching between other integrations

### Patch Changes

- Updated dependencies [8c29a31]
    - @o2s/framework@1.3.0

## 1.1.0

### Minor Changes

- 5d16edf: orderDetails fixes:

    - order model update - product is required now,
    - filtering moved to order mapper,
    - PayOnline button visible only when the order is overdue,

- 61d4f2f: Added integration of services and assets with MedusaJS

### Patch Changes

- 3bd8970: fixed mapping of order list and details
- Updated dependencies [565b63d]
- Updated dependencies [5d16edf]
- Updated dependencies [61d4f2f]
- Updated dependencies [f015c2b]
    - @o2s/framework@1.1.0
    - @o2s/utils.logger@1.1.0

## 1.0.0

### Major Changes

- 0e0c816: Official stable release

### Patch Changes

- Updated dependencies [0e0c816]
    - @o2s/framework@1.0.0
    - @o2s/utils.logger@1.0.0

## 0.3.0

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

## 0.2.0

### Minor Changes

- ba125d6: Added integration with MedusaJS for orders
- 68f7858: chore: updated dependencies

### Patch Changes

- e4ebc5a: updated dependencies
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

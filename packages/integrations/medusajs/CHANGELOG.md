# @o2s/integrations.medusajs

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

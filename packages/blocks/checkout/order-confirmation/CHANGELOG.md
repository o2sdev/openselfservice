# @o2s/blocks.order-confirmation

## 0.2.1

### Patch Changes

- 0aaac5b: fix: add missing dependency declarations for turbo boundaries compliance

  Declare previously undeclared imports as explicit dependencies across 55 packages. This resolves all `turbo boundaries` violations where packages imported modules not listed in their `package.json`.

  Key dependency categories added:
  - `@storybook/nextjs-vite`, `@storybook/react`, `storybook` for story files
  - `vitest`, `@nestjs/testing`, `@o2s/vitest-config` for test files
  - `lucide-react`, `dayjs`, `string-template`, `class-variance-authority` for runtime code
  - `vite` for vitest configs in integrations
  - `@o2s/api-harmonization`, `@auth/core`, `@docusaurus/*` for app-level imports

- Updated dependencies [e8cdde6]
- Updated dependencies [0aaac5b]
- Updated dependencies [0aaac5b]
- Updated dependencies [7ac16b0]
- Updated dependencies [0aaac5b]
  - @o2s/ui@1.14.0
  - @o2s/utils.frontend@0.5.2
  - @o2s/configs.integrations@0.7.0
  - @o2s/framework@1.21.0

## 0.2.0

### Minor Changes

- 32183ef: Full list of blocks in packages/blocks - bump minor version

## 0.1.2

### Patch Changes

- fab2aea: refactor: group Storybook stories by domain and rename UI component directories to PascalCase
- Updated dependencies [a7bb35c]
- Updated dependencies [fab2aea]
  - @o2s/ui@1.13.1

## 0.1.1

### Patch Changes

- c1a5460: chore(deps): update dependencies
- Updated dependencies [83a3d13]
- Updated dependencies [375cd90]
- Updated dependencies [daf592e]
- Updated dependencies [375cd90]
- Updated dependencies [98b2e68]
  - @o2s/framework@1.20.0
  - @o2s/utils.api-harmonization@0.3.2
  - @o2s/utils.frontend@0.5.1
  - @o2s/utils.logger@1.2.3
  - @o2s/ui@1.13.0

## 0.1.0

### Minor Changes

- 5d36519: Added new blocks: Cart, Checkout (Summary, Shipping Address, Company Data, Billing Payment) and Order Confirmation. Includes checkout forms validation (Formik + Yup), error handling, promo code support in cart, and new UI components (StepIndicator, RadioTile, AddressFields, CartSummary, QuantityInput, FormField).

### Patch Changes

- Updated dependencies [5d36519]
- Updated dependencies [0e61431]
- Updated dependencies [5d36519]
  - @o2s/framework@1.19.0
  - @o2s/utils.frontend@0.5.0
  - @o2s/ui@1.12.0

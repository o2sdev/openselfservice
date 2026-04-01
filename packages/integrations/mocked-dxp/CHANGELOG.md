# @o2s/integrations.mocked-dxp

## 1.2.0

### Minor Changes

- 6edc9ca: Added checkout block type cases (Cart, CheckoutCompanyData, CheckoutShippingAddress, CheckoutBillingPayment, CheckoutSummary, OrderConfirmation) to the getBlockConfig switch in mocked CMS service. Refactored mocked-dxp to use getBlockConfig override instead of individual block method overrides.

### Patch Changes

- 7d99d13: docs(api): REST API reference, OpenAPI tooling, and cross-package alignment

    Expand `@nestjs/swagger` metadata and related types across framework modules, exports, and CMS block
    models. Update billing and orders blocks that call the harmonization API, plus checkout billing
    payment UI where needed. Align Algolia, Contentful, Medusa, mocked, mocked-dxp, Strapi, and Zendesk
    integrations with the updated contracts, mappers, and tests.

- Updated dependencies [6edc9ca]
- Updated dependencies [7d99d13]
- Updated dependencies [7d99d13]
- Updated dependencies [6edc9ca]
    - @o2s/integrations.mocked@1.23.0
    - @o2s/framework@1.22.0

## 1.1.2

### Patch Changes

- 0aaac5b: fix: add missing dependency declarations for turbo boundaries compliance

    Declare previously undeclared imports as explicit dependencies across 55 packages. This resolves all `turbo boundaries` violations where packages imported modules not listed in their `package.json`.

    Key dependency categories added:
    - `@storybook/nextjs-vite`, `@storybook/react`, `storybook` for story files
    - `vitest`, `@nestjs/testing`, `@o2s/vitest-config` for test files
    - `lucide-react`, `dayjs`, `string-template`, `class-variance-authority` for runtime code
    - `vite` for vitest configs in integrations
    - `@o2s/api-harmonization`, `@auth/core`, `@docusaurus/*` for app-level imports

- Updated dependencies [afbd639]
- Updated dependencies [0aaac5b]
- Updated dependencies [7ac16b0]
- Updated dependencies [afbd639]
    - @o2s/integrations.mocked@1.22.0
    - @o2s/framework@1.21.0

## 1.1.1

### Patch Changes

- 83a3d13: chore(deps): update dependencies
- 98b2e68: chore(deps): update dependencies
- Updated dependencies [83a3d13]
- Updated dependencies [daf592e]
- Updated dependencies [375cd90]
- Updated dependencies [98b2e68]
    - @o2s/framework@1.20.0
    - @o2s/integrations.mocked@1.21.0
    - @o2s/utils.logger@1.2.3

## 1.1.0

### Minor Changes

- 0e61431: feat: added redirection for homepage dxp mock

### Patch Changes

- Updated dependencies [5d36519]
- Updated dependencies [0e61431]
    - @o2s/framework@1.19.0
    - @o2s/integrations.mocked@1.20.0

## 1.0.0

### Major Changes

- a803940: Initial release of @o2s/integrations.mocked-dxp

## 1.19.0

### Minor Changes

- 600d5ac: chore: add create-o2s-app flag to package.json in all blocks and integrations

### Patch Changes

- Updated dependencies [46d4077]
- Updated dependencies [a288b11]
- Updated dependencies [09d7b17]
- Updated dependencies [bbb3b89]
- Updated dependencies [c6ae8e6]
- Updated dependencies [3b8ab83]
- Updated dependencies [1f2965c]
- Updated dependencies [88d180a]
- Updated dependencies [1804016]
- Updated dependencies [c6ae8e6]
- Updated dependencies [8c01be4]
- Updated dependencies [600d5ac]
- Updated dependencies [ea200fc]
    - @o2s/framework@1.18.0
    - @o2s/integrations.mocked@1.19.0
    - @o2s/utils.logger@1.2.2

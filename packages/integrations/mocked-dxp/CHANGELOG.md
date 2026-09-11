# @o2s/integrations.mocked-dxp

## 2.0.1

### Patch Changes

- 010ae15: Refactored integration configuration by consolidating the 18 individual model files into a single typed `config.ts` backed by a `createIntegrationConfig` helper. Each domain now maps to an integration through a per-domain import alias shared by both the runtime map and its type re-export, so swapping an integration is a single-line change that cannot desync value and types.

    Integration `Config` objects are now declared with `satisfies Partial<ApiConfig['integrations']>` (instead of a type annotation), which lets `createIntegrationConfig` validate domain bindings **at compile time** — assigning an integration to a domain it does not provide is now a type error rather than a runtime crash. The runtime check remains as a defense-in-depth backstop.

- 1a520c8: chore: dependency update pass

    Update dependencies across the monorepo. Highlights: NestJS 12 (Express 5),
    TypeScript 6 for type-checking/lint with native TypeScript 7 compiling the
    package builds, Vite 8, Docusaurus 3.10, Storybook 10.6, @medusajs 2.20,
    redis 6, surveyjs (core + react-ui) 3, and assorted minor/patch bumps. No
    public package API changed; peer ranges were bumped to match (notably
    @nestjs/* to ^12).

- Updated dependencies [010ae15]
- Updated dependencies [457b243]
- Updated dependencies [1a520c8]
- Updated dependencies [ee42afd]
- Updated dependencies [692ecf4]
- Updated dependencies [c4aa242]
- Updated dependencies [c4aa242]
- Updated dependencies [dfc3fbb]
- Updated dependencies [ee42afd]
- Updated dependencies [ee42afd]
    - @o2s/framework@1.24.0
    - @o2s/integrations.mocked@2.0.1
    - @o2s/utils.logger@1.2.4

## 2.0.0

### Patch Changes

- Updated dependencies [86b4c5a]
    - @o2s/framework@1.23.0
    - @o2s/integrations.mocked@2.0.0

## 1.2.2

### Patch Changes

- c893e2c: remove unused constructor arguments in SearchService

## 1.2.1

### Patch Changes

- 31df3a8: fix(deps): move @o2s/framework to peerDependencies in all published packages

    `@o2s/framework` was listed in `dependencies` of blocks, integrations, modules, and utils packages. When installed from npm with mismatched versions across the dependency tree, npm would create nested copies of `@o2s/framework` with different class references. This caused NestJS to fail resolving DI tokens (e.g. `SearchService`) because injected class instances came from a different `@o2s/framework` copy than the one registered in the application module.

    Moved `@o2s/framework` to `peerDependencies` across all affected packages so that the consuming application always provides a single shared copy. Also moved `@o2s/integrations.mocked` to `peerDependencies` in `@o2s/integrations.mocked-dxp`.

- Updated dependencies [31df3a8]
    - @o2s/integrations.mocked@1.23.1

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

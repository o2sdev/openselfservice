# @o2s/blocks.cart

## 1.0.1

### Patch Changes

- 457b243: feat(framework): add `createBlockRequest` helper for block SDK methods

    Adds `createBlockRequest` to `@o2s/framework/sdk`. It creates the request function used by the methods of a block (or module) SDK and takes care of the boilerplate that was previously copy-pasted into every method: merging the default API headers with the caller's headers and the access token, serializing query params, typing the response and wrapping failures into a `BlockRequestError` (which exposes `status`, `data` and the original error as `cause`).

    `getApiHeaders` is now provided by `@o2s/framework/headers` and re-exported by `@o2s/utils.frontend` (`Utils.Headers.getApiHeaders`), so the default headers are defined in a single place. All block SDKs, the SurveyJS module SDK and the block generator template use the new helper.

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
- Updated dependencies [02401b2]
- Updated dependencies [ee42afd]
- Updated dependencies [ee42afd]
- Updated dependencies [dfc3fbb]
- Updated dependencies [b775189]
- Updated dependencies [ee42afd]
- Updated dependencies [ee42afd]
- Updated dependencies [ee42afd]
- Updated dependencies [ee42afd]
- Updated dependencies [ee42afd]
- Updated dependencies [ee42afd]
- Updated dependencies [ee42afd]
- Updated dependencies [ee42afd]
    - @o2s/configs.integrations@1.1.0
    - @o2s/framework@1.24.0
    - @o2s/utils.frontend@1.1.0
    - @o2s/ui@2.1.0
    - @o2s/utils.api-harmonization@1.1.0
    - @o2s/utils.logger@1.2.4

## 1.0.0

### Patch Changes

- Updated dependencies [86b4c5a]
- Updated dependencies [24fb9a9]
    - @o2s/framework@1.23.0
    - @o2s/ui@2.0.0
    - @o2s/configs.integrations@1.0.0
    - @o2s/utils.api-harmonization@1.0.0
    - @o2s/utils.frontend@1.0.0

## 0.4.3

### Patch Changes

- 30ecae9: Rename server-only environment variables to drop `NEXT_PUBLIC_` prefix (`NEXT_PUBLIC_LOG_LEVEL` → `LOG_LEVEL`, `NEXT_PUBLIC_LOG_FORMAT` → `LOG_FORMAT`, `NEXT_PUBLIC_LOG_COLORS_ENABLED` → `LOG_COLORS_ENABLED`, `NEXT_PUBLIC_API_URL_INTERNAL` → `API_URL_INTERNAL`) and use `next-runtime-env` for client-side access to `NEXT_PUBLIC_API_URL`.

## 0.4.2

### Patch Changes

- 025bfb3: fix(deps): declare `@o2s/utils.frontend` and `@o2s/utils.api-harmonization` as peer dependencies in blocks and surveyjs module

    Moves both shared utils from `dependencies` to `peerDependencies` (with `devDependencies` for monorepo builds) so consuming apps supply a single hoisted version and npm does not nest conflicting copies under published packages.

## 0.4.1

### Patch Changes

- 31df3a8: fix(deps): move @o2s/framework to peerDependencies in all published packages

    `@o2s/framework` was listed in `dependencies` of blocks, integrations, modules, and utils packages. When installed from npm with mismatched versions across the dependency tree, npm would create nested copies of `@o2s/framework` with different class references. This caused NestJS to fail resolving DI tokens (e.g. `SearchService`) because injected class instances came from a different `@o2s/framework` copy than the one registered in the application module.

    Moved `@o2s/framework` to `peerDependencies` across all affected packages so that the consuming application always provides a single shared copy. Also moved `@o2s/integrations.mocked` to `peerDependencies` in `@o2s/integrations.mocked-dxp`.

- Updated dependencies [31df3a8]
    - @o2s/utils.api-harmonization@0.3.4
    - @o2s/utils.frontend@0.6.1

## 0.4.0

### Minor Changes

- 6edc9ca: Updated all block services to use the generic getBlockConfig<T>() method instead of block-specific CMS service methods.

### Patch Changes

- Updated dependencies [7d99d13]
- Updated dependencies [7d99d13]
- Updated dependencies [6edc9ca]
    - @o2s/framework@1.22.0

## 0.3.0

### Minor Changes

- 1dbf967: Add CartStorage utility for org-scoped cart management in localStorage. Replace direct localStorage calls and cartIdLocalStorageKey prop with centralized Utils.CartStorage across all blocks and app components.

### Patch Changes

- Updated dependencies [1dbf967]
    - @o2s/utils.frontend@0.6.0
    - @o2s/ui@1.15.0

## 0.2.2

### Patch Changes

- 7124ed8: fix: replace build-time `NEXT_PUBLIC_CART_ID_LOCAL_STORAGE_KEY` env variable with runtime `CART_ID_LOCAL_STORAGE_KEY` passed as a prop from server components across all shop and checkout blocks

## 0.2.1

### Patch Changes

- e8cdde6: feat: add mitt-based event bus (`@o2s/ui/event-bus`), cart header badge with `cart:changed`, SDK `GET /carts/current`, and emit `cart:changed` from product list, product details, recommended products, and cart block

    refactor: read guest cart localStorage key from `NEXT_PUBLIC_CART_ID_LOCAL_STORAGE_KEY` (required; set in e.g. `apps/frontend/.env.development`) across shop and checkout blocks

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

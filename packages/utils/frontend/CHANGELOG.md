# @o2s/utils.frontend

## 1.1.0

### Minor Changes

- ee42afd: fix(frontend): decide indexing from a filter allowlist, not from any param

    The page metadata treated every query param as a filter, so a link carrying `utm_source`, `gclid` or any other unrelated param dropped the page out of the index, and `?category=TOOLS&utm_source=x` lost its `?category=TOOLS` canonical as well. A campaign link to a category page was therefore worth nothing to a crawler.

    Two allowlists in `@o2s/utils.frontend` now drive the decision: `Utils.Seo.INDEXABLE_FILTERS` for facets whose single value still describes a page, and `Utils.Seo.LISTING_PARAMS` for the params that change a listing without deserving an index entry. Anything outside both is ignored, and a facet keeps its canonical next to them, including next to a deep page, which now canonicalises to the facet listing rather than to the bare page.

    The product list block renders its facet links from the same `INDEXABLE_FILTERS`, so the links and the canonical URLs can no longer drift apart; they were two lists kept in step by a comment.

- ee42afd: refactor(utils.frontend): one hook for wiring a list block to the URL

    Each list block repeated the same forty lines around `useUrlFilters`, which is deliberately framework-agnostic and therefore takes its inputs from the caller: the params snapshot, the History API writer, and the multi-value keys, filter keys and starting view mode derived from the block's CMS filter config.

    `Hooks.useListFilters` does all of it, so a block passes its defaults, its namespace and its filter config. Only the two values that come from `next/navigation` stay with the block, which keeps this package free of a dependency on Next. A block with a namespace gets prefixed params; one without gets plain, linkable ones and its filter keys are derived, so the two conventions need no extra flag.

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
    - @o2s/framework@1.24.0
    - @o2s/ui@2.1.0

## 1.0.0

### Patch Changes

- Updated dependencies [86b4c5a]
- Updated dependencies [24fb9a9]
    - @o2s/framework@1.23.0
    - @o2s/ui@2.0.0

## 0.6.1

### Patch Changes

- 31df3a8: fix(deps): move @o2s/framework to peerDependencies in all published packages

    `@o2s/framework` was listed in `dependencies` of blocks, integrations, modules, and utils packages. When installed from npm with mismatched versions across the dependency tree, npm would create nested copies of `@o2s/framework` with different class references. This caused NestJS to fail resolving DI tokens (e.g. `SearchService`) because injected class instances came from a different `@o2s/framework` copy than the one registered in the application module.

    Moved `@o2s/framework` to `peerDependencies` across all affected packages so that the consuming application always provides a single shared copy. Also moved `@o2s/integrations.mocked` to `peerDependencies` in `@o2s/integrations.mocked-dxp`.

## 0.6.0

### Minor Changes

- 1dbf967: Add CartStorage utility for org-scoped cart management in localStorage. Replace direct localStorage calls and cartIdLocalStorageKey prop with centralized Utils.CartStorage across all blocks and app components.

### Patch Changes

- Updated dependencies [1dbf967]
    - @o2s/ui@1.15.0

## 0.5.2

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
    - @o2s/framework@1.21.0

## 0.5.1

### Patch Changes

- 83a3d13: chore(deps): update dependencies
- 98b2e68: chore(deps): update dependencies
- Updated dependencies [83a3d13]
- Updated dependencies [375cd90]
- Updated dependencies [98b2e68]
    - @o2s/framework@1.20.0

## 0.5.0

### Minor Changes

- 5d36519: Extended framework with e-commerce models: Address (companyName, taxId), Cart, Checkout and Order Confirmation CMS blocks. Added Mocked and Medusa integration support for cart, checkout flow, and guest order retrieval.

### Patch Changes

- Updated dependencies [5d36519]
- Updated dependencies [0e61431]
    - @o2s/framework@1.19.0

## 0.4.1

### Patch Changes

- a288b11: chore(deps): update dependencies
- 3b8ab83: chore(deps): update dependencies
- 8c01be4: added README
- ea200fc: chore(deps): update dependencies
- Updated dependencies [46d4077]
- Updated dependencies [a288b11]
- Updated dependencies [09d7b17]
- Updated dependencies [bbb3b89]
- Updated dependencies [c6ae8e6]
- Updated dependencies [3b8ab83]
- Updated dependencies [88d180a]
- Updated dependencies [8c01be4]
- Updated dependencies [ea200fc]
    - @o2s/framework@1.18.0

## 0.4.0

### Minor Changes

- 72391c1: ### Authorization & PBAC Implementation

    This release introduces a comprehensive Policy-Based Access Control system interlaced with Role-Based Access Control.

    #### Framework & Core
    - **`@o2s/framework` (AuthService)**: Enhanced with abstract permission logic (`getPermissions`, `hasPermission`), role checks (`hasRole`, `requireRoles`), and action batching (`canPerformActions`).
    - **`@o2s/api-harmonization`**: Implemented global `RolesGuard` and `PermissionsGuard` in `AppModule`.
    - **`@o2s/utils.api-harmonization`**: Added `extractUserRolesFromJwt` to unify role extraction from different JWT claims.

    #### Features
    - **Decorators**: New `@Auth.Decorators.Permissions({ resource, actions })` for securing controllers.
    - **Data Filtering**: Mappers (e.g., `page.mapper.ts`) now filter UI elements (header/footer navigation) based on user roles.

    This provides granular control over resource access and UI visibility based on user roles and permissions.

### Patch Changes

- Updated dependencies [1a5a22d]
- Updated dependencies [72391c1]
    - @o2s/framework@1.16.0

## 0.3.0

### Minor Changes

- e11b23a: resolving linter errors

### Patch Changes

- Updated dependencies [e78c11a]
- Updated dependencies [79b7c87]
    - @o2s/framework@1.15.0

## 0.2.1

### Patch Changes

- 221dc2c: fix: added missing Eslint command to list-staged
- Updated dependencies [db5b381]
- Updated dependencies [c2d9438]
    - @o2s/framework@1.14.0

## 0.2.0

### Minor Changes

- 2c780d5: conditionally render button in InfoCard for improved layout

### Patch Changes

- 0354126: reworked turbo dev task to optimize CPU/RAM usage
- Updated dependencies [2c780d5]
- Updated dependencies [1653b74]
- Updated dependencies [c27726a]
- Updated dependencies [2c780d5]
- Updated dependencies [0354126]
- Updated dependencies [1653b74]
    - @o2s/framework@1.13.0

## 0.1.2

### Patch Changes

- b9ba7af: fixed incorrect TS target for react

## 0.1.1

### Patch Changes

- c25f982: added missing dependencies

## 0.1.0

### Minor Changes

- 2421fb2: A major rework of the approach to the blocks - separated all block-related code from `api-harmonization` and `frontend` apps into separate packages, allowing versioning and much easier updates in other apps started using `create-o2s-app` script

### Patch Changes

- Updated dependencies [2421fb2]
    - @o2s/framework@1.11.0

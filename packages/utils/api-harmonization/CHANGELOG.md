# @o2s/utils.api-harmonization

## 1.1.0

### Minor Changes

- ee42afd: refactor(framework): one pagination resolver for the list blocks

    Every list block carried its own copy of the same two helpers, turning a query's `limit`, `offset` and `page` into the window to fetch. `Utils.Pagination.resolvePagination` in `@o2s/utils.api-harmonization` replaces all five: it takes the pagination a URL can carry (`Models.Pagination.PaginatedQuery`, structurally satisfied by any block query, so a block no longer types the helper with its own class) plus the page size to fall back on, and returns the `limit` and `offset` to use. The query shape stays a model in `@o2s/framework`, while the resolving lives with the other API-side helpers.

    `PaginatedQuery` is kept apart from `PaginationQuery`, which the domain modules extend: `page` is consumed by the block API and never reaches them, so advertising it in their contracts would promise integrations something they never receive.

    Two behaviours change with the move. A page size counts only as a whole number of rows above zero, so `?limit=-5` falls back to the CMS config instead of travelling on as a negative limit; the unit tests for the new helper are what surfaced it.

    And the fallback page size is no longer a single row. Four of the five blocks fell back to `limit: 1` when neither the query nor the CMS config named one. That fallback was inherited, and reachable, because `pagination` is optional in the CMS block models, so an entry without it rendered a one-row list. `Utils.Pagination.DEFAULT_LIMIT` (10) is the shared fallback now; the product list keeps its own 12, which matches its three-column grid.

### Patch Changes

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
- Updated dependencies [dfc3fbb]
- Updated dependencies [ee42afd]
- Updated dependencies [ee42afd]
    - @o2s/framework@1.24.0

## 1.0.0

### Patch Changes

- Updated dependencies [86b4c5a]
    - @o2s/framework@1.23.0

## 0.3.4

### Patch Changes

- 31df3a8: fix(deps): move @o2s/framework to peerDependencies in all published packages

    `@o2s/framework` was listed in `dependencies` of blocks, integrations, modules, and utils packages. When installed from npm with mismatched versions across the dependency tree, npm would create nested copies of `@o2s/framework` with different class references. This caused NestJS to fail resolving DI tokens (e.g. `SearchService`) because injected class instances came from a different `@o2s/framework` copy than the one registered in the application module.

    Moved `@o2s/framework` to `peerDependencies` across all affected packages so that the consuming application always provides a single shared copy. Also moved `@o2s/integrations.mocked` to `peerDependencies` in `@o2s/integrations.mocked-dxp`.

## 0.3.3

### Patch Changes

- 338cb01: Introduce typed header name constants (`HeaderName`) using `as const` and
  replace selected magic header strings in API harmonization and frontend code.

    Update SDK header typing to use `AppHeaders` for stronger request typing.

- 338cb01: fix(api-harmonization): align typed header usage across services and generated SDK/controller contracts
- Updated dependencies [fadbc63]
- Updated dependencies [338cb01]
- Updated dependencies [338cb01]
- Updated dependencies [338cb01]
    - @o2s/framework@1.20.1

## 0.3.2

### Patch Changes

- 83a3d13: chore(deps): update dependencies
- 98b2e68: chore(deps): update dependencies
- Updated dependencies [83a3d13]
- Updated dependencies [375cd90]
- Updated dependencies [98b2e68]
    - @o2s/framework@1.20.0

## 0.3.1

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

## 0.3.0

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

## 0.2.0

### Minor Changes

- e11b23a: resolving linter errors

### Patch Changes

- Updated dependencies [e78c11a]
- Updated dependencies [79b7c87]
    - @o2s/framework@1.15.0

## 0.1.3

### Patch Changes

- 221dc2c: fix: added missing Eslint command to list-staged
- Updated dependencies [db5b381]
- Updated dependencies [c2d9438]
    - @o2s/framework@1.14.0

## 0.1.2

### Patch Changes

- 0354126: reworked turbo dev task to optimize CPU/RAM usage
- Updated dependencies [2c780d5]
- Updated dependencies [1653b74]
- Updated dependencies [c27726a]
- Updated dependencies [2c780d5]
- Updated dependencies [0354126]
- Updated dependencies [1653b74]
    - @o2s/framework@1.13.0

## 0.1.1

### Patch Changes

- c25f982: added missing dependencies

## 0.1.0

### Minor Changes

- 2421fb2: A major rework of the approach to the blocks - separated all block-related code from `api-harmonization` and `frontend` apps into separate packages, allowing versioning and much easier updates in other apps started using `create-o2s-app` script

### Patch Changes

- Updated dependencies [2421fb2]
    - @o2s/framework@1.11.0

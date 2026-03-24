# @o2s/blocks.product-details

## 0.4.0

### Minor Changes

- 32183ef: Full list of blocks in packages/blocks - bump minor version

## 0.3.2

### Patch Changes

- a7bb35c: refactor: reorganize blocks into domain folders and update generation/docs tooling
- fab2aea: refactor: group Storybook stories by domain and rename UI component directories to PascalCase
- Updated dependencies [a7bb35c]
- Updated dependencies [fab2aea]
  - @o2s/ui@1.13.1

## 0.3.1

### Patch Changes

- fadbc63: Extract shared block prop types into framework models and migrate block frontend props to the common `BlockWith*` helpers.

  This removes duplicated `slug`, `userId`, and `isDraftModeEnabled` definitions and keeps renderer props aligned across blocks.

- 338cb01: fix(api-harmonization): align typed header usage across services and generated SDK/controller contracts
- 338cb01: Refactor header access to use `HeaderName` constants instead of literal header keys across framework controllers, block harmonization services, and mocked auth guards.

  This unifies header handling, reduces string-key typos, and aligns modules with the typed headers approach exposed by `@o2s/framework/headers`.

- Updated dependencies [fadbc63]
- Updated dependencies [338cb01]
- Updated dependencies [338cb01]
- Updated dependencies [338cb01]
  - @o2s/framework@1.20.1
  - @o2s/utils.api-harmonization@0.3.3

## 0.3.0

### Minor Changes

- 375cd90: feat(blocks, ui): add variantId support to cart item handling, enhance add-to-cart toast with product name and cart link action across ProductDetails, ProductList and RecommendedProducts blocks

### Patch Changes

- 83a3d13: chore(deps): update dependencies
- 98b2e68: chore(deps): update dependencies
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

## 0.2.0

### Minor Changes

- 1f2965c: feat(products): Medusa integration for product catalog
  - Add product list and product detail pages powered by Medusa Admin SDK
  - Support SEO-friendly URLs using product handles and variant slugs (e.g. `/products/sweatpants/s-blue`)
  - Add variant selection with option-based navigation between product variants
  - Map Medusa product data (prices, categories, tags, images, specs) to the unified product model
  - Extract key specs and detailed specs from Medusa variant metadata and attributes
  - Add related products support via custom Medusa product references API
  - Implement lazy initialization for MedusaJS service to improve startup performance
  - Add localized mocked product data (EN, DE, PL) with variant overrides for testing

- fcf14d2: Configure Storybook to use package README.md as documentation source
- 600d5ac: chore: add create-o2s-app flag to package.json in all blocks and integrations

### Patch Changes

- a288b11: chore(deps): update dependencies
- 3b8ab83: chore(deps): update dependencies
- c6ae8e6: added missing auth token to products service calls
- 8c01be4: added README
- ea200fc: chore(deps): update dependencies
- cc2e932: fix: prevent multiple carousels from responding to arrow keys at the same time

  Added managed keyboard control for Swiper-based carousels so only the active carousel handles left/right arrows.
  Keyboard control is activated by focus/pointer interaction on a carousel, without any default active carousel that captures arrow keys before interaction.
  Introduced automatic `keyboardCarouselId` resolution when it is not provided in props.

- Updated dependencies [46d4077]
- Updated dependencies [a288b11]
- Updated dependencies [09d7b17]
- Updated dependencies [bbb3b89]
- Updated dependencies [c6ae8e6]
- Updated dependencies [3b8ab83]
- Updated dependencies [1f2965c]
- Updated dependencies [88d180a]
- Updated dependencies [1804016]
- Updated dependencies [8c01be4]
- Updated dependencies [ea200fc]
- Updated dependencies [cc2e932]
  - @o2s/framework@1.18.0
  - @o2s/utils.api-harmonization@0.3.1
  - @o2s/utils.frontend@0.4.1
  - @o2s/utils.logger@1.2.2
  - @o2s/configs.integrations@0.6.0
  - @o2s/ui@1.11.0

## 0.1.0

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
  - @o2s/utils.api-harmonization@0.3.0
  - @o2s/configs.integrations@0.4.0
  - @o2s/ui@1.9.0
  - @o2s/utils.frontend@0.4.0
  - @o2s/utils.logger@1.2.0

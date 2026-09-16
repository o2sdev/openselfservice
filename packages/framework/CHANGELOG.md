# @o2s/framework

## 1.24.0

### Minor Changes

- 010ae15: Refactored integration configuration by consolidating the 18 individual model files into a single typed `config.ts` backed by a `createIntegrationConfig` helper. Each domain now maps to an integration through a per-domain import alias shared by both the runtime map and its type re-export, so swapping an integration is a single-line change that cannot desync value and types.

    Integration `Config` objects are now declared with `satisfies Partial<ApiConfig['integrations']>` (instead of a type annotation), which lets `createIntegrationConfig` validate domain bindings **at compile time** — assigning an integration to a domain it does not provide is now a type error rather than a runtime crash. The runtime check remains as a defense-in-depth backstop.

- f8591c1: Threaded the CMS `preview` flag through every block so draft content actually renders in draft
  mode. Previously only 5 of ~42 blocks passed it - the rest always fetched published content, so CMS
  live preview (and any draft-mode view) showed stale data for most of the page.

    Per block, the flag now survives all four hops: the renderer forwards `isDraftModeEnabled` (added
    to the framework's `BaseBlockProps` - `renderBlocks` already passed it to every block), the server
    component sends `preview` on its block fetch, the request DTO declares it, and the API
    Harmonization service forwards it to `CmsService.getBlockConfig`.

- c8a58ad: feat(framework): add a declarative page registry and move the mocked integrations onto it

    Adds `CMS.Pages.definePage` and `CMS.Pages.createPageRegistry` to `@o2s/framework/modules`. A page is declared once, with one entry per locale (its localized slug and SEO), and the registry derives the whole `CmsService` page trio from that single declaration: `getPage` (`mapPage`), `getPages` (`getAllPages`) and `getAlternativePages`. Integrations that serve pages without a CMS no longer keep three hand-written lists of the same pages, which is what let them drift apart.

    Dynamic routes are declared as `/cases/:id` instead of a regex kept in the slug field: the registry matches a slug segment by segment, prefers a static route over a dynamic one, exposes the extracted params through `matchPage` and fills them back into the slug of the page it returns. `definePage` validates a definition up front and rejects the mistakes that used to be silent — a slug without a leading slash, a translated slug that drops a param the other locales declare, a breadcrumb parent that does not cover every locale of its child, two pages that can match the same path with neither being more specific, or two pages sharing an id.

    `@o2s/integrations.mocked` and `@o2s/integrations.mocked-dxp` now declare their pages this way, which cuts their page mocks from 9880 to 1673 lines and their page mappers from 973 to 203. Every page of `@o2s/integrations.mocked` comes back field for field as before; in both integrations the derived lists fix what the hand-kept ones had lost:

    - pages that `getPage` served but the page list had forgotten now reach the sitemap and the hreflang alternates (`/help-and-support` and `/help-and-support/troubleshooting` in `mocked`, 10 of the 22 pages in `mocked-dxp`);
    - alternates are emitted per locale instead of being resolved through the requested one, so a page whose slug is not localized (`/`) no longer advertises one locale three times;
    - pages with a dynamic slug are left out of the page list, so the sitemap stops publishing `/cases/(.+)` as a URL;
    - a slug deeper than its route (`/cases/a/b`) is no longer answered with `/cases/b`, and a request is answered with the slug it asked about instead of the one of the requested locale;
    - breadcrumbs come from the page they point at, which corrects the copies that had drifted in `mocked-dxp` (`Geschäftlich` vs `Geschäft`, `Personlich` vs `Persönlich`, `Konten` in a Polish breadcrumb) and gives `/personal/accounts` the breadcrumb it declared in English only;
    - the home page of `mocked-dxp` gets an id of its own (`home-1`): it shared `personal-1` with `/personal`, so the two pages were grouped as one in the sitemap and advertised each other as localized alternates.

- 457b243: feat(framework): add `createBlockRequest` helper for block SDK methods

    Adds `createBlockRequest` to `@o2s/framework/sdk`. It creates the request function used by the methods of a block (or module) SDK and takes care of the boilerplate that was previously copy-pasted into every method: merging the default API headers with the caller's headers and the access token, serializing query params, typing the response and wrapping failures into a `BlockRequestError` (which exposes `status`, `data` and the original error as `cause`).

    `getApiHeaders` is now provided by `@o2s/framework/headers` and re-exported by `@o2s/utils.frontend` (`Utils.Headers.getApiHeaders`), so the default headers are defined in a single place. All block SDKs, the SurveyJS module SDK and the block generator template use the new helper.

- 92c0bf8: fix(framework): merge SDK method groups instead of replacing them

    `extendSdk` spread the groups it was given over the SDK, so naming a group that was already there dropped everything it held. The frontend application hits this today: it passes a `notifications` group of its own, which leaves `sdk.notifications` with that one method and without `getNotifications`, `getNotification` and `markAs`. The returned type never showed it, being an intersection of both sides, so the compiler kept promising methods that were no longer there at runtime.

    A group the SDK already has is now merged one level deep: the methods that were there stay, the new ones land next to them, and a method of the same name replaces the one below it. Anything that is not a group of methods, `makeRequest` for instance, is replaced as before.

    The return type says all of this now, instead of intersecting both sides and hoping they agree. `extendSdk` keeps the type of the SDK it extends rather than narrowing it to `Sdk`, so extending an already extended SDK no longer hides what the first extension added, and a method the extension replaces is typed as the replacement alone rather than as both signatures at once, which used to let a call written against the old signature compile against a value that no longer had it. The type itself is exported as `ExtendedSdk`.

    `getSdk` and `extendSdk` now say in their doc comments what they build and how the merge behaves.

- dfc3fbb: Make non-core `ApiConfig` integration slots optional. Only `cms` and `auth` are required now; every other domain (tickets, orders, carts, checkout, payments, products, customers, invoices, billingAccounts, resources, organizations, users, notifications, articles, search, cache) can be omitted.

    When a domain is omitted, its framework module registers as a no-op instead of crashing, so a project can run a minimal setup (for example a CMS-backed portal) without importing `@o2s/integrations.mocked` to fill unused slots. `createIntegrationConfig` now accepts a partial map (core domains still required) and skips absent domains. A new `DefaultCacheService` is used as a pass-through fallback when no `cache` integration is configured (caching disabled, logged at startup), so services that depend on `Cache.Service` (e.g. the Strapi/Contentful CMS integrations) keep working. The `page` service treats `articles` as optional, and the SurveyJS module registers as a no-op when `tickets` is not configured.

    This also fixes a latent bug in the search module, which previously fell back to the abstract `SearchService` (which cannot be instantiated) when no search service was configured; it now registers as a no-op instead.

    Migration: this is backward compatible for the standard, module-based usage — existing configs that provide all domains keep working unchanged. Custom code that reads an integration slot directly (e.g. `config.integrations.orders.service`) may now need optional chaining, since non-core slots are typed as possibly `undefined`.

- ee42afd: feat(frontend): server-rendered, indexable URLs for list filters

    Filter params reached the browser only: a page always rendered with the default filters and the client
    replaced them afterwards, so `/products?category=TOOLS` served the full catalogue to anyone opening the
    link (a crawler included) and every filtered variant canonicalised to the bare page.

    `searchParams` now travel from the page through `renderBlocks` into the blocks (`BlockSearchParams` on
    `BaseBlockProps`), and the product list resolves them into its query server-side. The block query takes
    a 1-based `page` and turns it into an `offset` with the page size from the CMS config, which only the
    API knows. With the server rendering the filtered state, the client's mount refetch is gone, so a
    shared link costs one request instead of two.

    Its params also lost the `product_` prefix: `useUrlFilters` accepts `filterKeys` in place of a
    `namespace`, which is what a public, indexed list needs to have plain, linkable URLs. Facet values are
    rendered as real links next to the filter controls, because a crawler follows `<a href>` and does not
    operate a select, and `generateSeo` keeps the index clean: one value of one whitelisted facet is
    self-canonical and indexable, while sorting, deep pages and facet combinations canonicalise back and
    are marked `noindex, follow`.

    Multi-value restore from the URL is now limited to toggle groups. A select writes a single string back
    whatever `allowMultiple` says, so restoring an array into one only tripped React's `<select>` check.

- 270355f: feat(utils.frontend): add the shared SDK instance the blocks can build on

    Adds `getSharedSdk` to `@o2s/utils.frontend/sdk`: the API url resolution (internal while rendering on the server, the runtime public url in the browser) and the logger settings now live in one place, and the SDK behind them is built on first use and reused — per process on the server, per bundle in the browser. Each of the 42 blocks used to repeat that setup and end up with an `ofetch` client and a logger of its own; they are migrated onto the shared instance in the same release, each reduced to `extendSdk(sdk, <block>(sdk))`. `extendSdk` copies the instance it extends, so what one block adds to it stays invisible to the others.

    To make that possible without an `@ts-expect-error` per environment variable, `@o2s/framework/sdk` now exports `toLoggerConfig` along with the `LoggerConfig`, `LogLevel` and `LogFormat` types. It turns raw environment values into a logger config and leaves out a level or a format the logger does not know, so a typo in `LOG_LEVEL` falls back to the default instead of reaching winston.

- ee42afd: refactor(framework): one pagination resolver for the list blocks

    Every list block carried its own copy of the same two helpers, turning a query's `limit`, `offset` and `page` into the window to fetch. `Utils.Pagination.resolvePagination` in `@o2s/utils.api-harmonization` replaces all five: it takes the pagination a URL can carry (`Models.Pagination.PaginatedQuery`, structurally satisfied by any block query, so a block no longer types the helper with its own class) plus the page size to fall back on, and returns the `limit` and `offset` to use. The query shape stays a model in `@o2s/framework`, while the resolving lives with the other API-side helpers.

    `PaginatedQuery` is kept apart from `PaginationQuery`, which the domain modules extend: `page` is consumed by the block API and never reaches them, so advertising it in their contracts would promise integrations something they never receive.

    Two behaviours change with the move. A page size counts only as a whole number of rows above zero, so `?limit=-5` falls back to the CMS config instead of travelling on as a negative limit; the unit tests for the new helper are what surfaced it.

    And the fallback page size is no longer a single row. Four of the five blocks fell back to `limit: 1` when neither the query nor the CMS config named one. That fallback was inherited, and reachable, because `pagination` is optional in the CMS block models, so an entry without it rendered a one-row list. `Utils.Pagination.DEFAULT_LIMIT` (10) is the shared fallback now; the product list keeps its own 12, which matches its three-column grid.

### Patch Changes

- cb50455: chore(deps): update dependencies
- 681d153: chore(deps): update dependencies
- 1a520c8: chore: dependency update pass

    Update dependencies across the monorepo. Highlights: NestJS 12 (Express 5),
    TypeScript 6 for type-checking/lint with native TypeScript 7 compiling the
    package builds, Vite 8, Docusaurus 3.10, Storybook 10.6, @medusajs 2.20,
    redis 6, surveyjs (core + react-ui) 3, and assorted minor/patch bumps. No
    public package API changed; peer ranges were bumped to match (notably
    @nestjs/* to ^12).

- cb50455: chore(deps): update dependencies
- Updated dependencies [cb50455]
- Updated dependencies [681d153]
- Updated dependencies [1a520c8]
- Updated dependencies [cb50455]
    - @o2s/utils.logger@1.2.4

## 1.23.0

### Minor Changes

- 86b4c5a: feat(cms): add `activePromoCodesTitle` label to cart and checkout summary blocks

## 1.22.0

### Minor Changes

- 7d99d13: feat(framework): expose richer API surface and add framework API reference docs
- 6edc9ca: Replaced 36+ block-specific abstract methods in CmsService with a single generic getBlockConfig<T>() method. Added Swagger decorators to all CMS block controller endpoints. Extended CmsBlockType union with checkout block types.

### Patch Changes

- 7d99d13: docs(api): REST API reference, OpenAPI tooling, and cross-package alignment

    Expand `@nestjs/swagger` metadata and related types across framework modules, exports, and CMS block
    models. Update billing and orders blocks that call the harmonization API, plus checkout billing
    payment UI where needed. Align Algolia, Contentful, Medusa, mocked, mocked-dxp, Strapi, and Zendesk
    integrations with the updated contracts, mappers, and tests.

## 1.21.0

### Minor Changes

- 7ac16b0: add createModule() factory for custom framework modules

    Enable developers to define new base modules beyond the core modules using createModule(). Custom modules are registered directly in app.module.ts, following the same pattern as SurveyJS.

    Includes example documents module in mocked integration, custom-module Turbo generator, and documentation guide.

## 1.20.1

### Patch Changes

- fadbc63: Extract shared block prop types into framework models and migrate block frontend props to the common `BlockWith*` helpers.

    This removes duplicated `slug`, `userId`, and `isDraftModeEnabled` definitions and keeps renderer props aligned across blocks.

- 338cb01: Introduce typed header name constants (`HeaderName`) using `as const` and
  replace selected magic header strings in API harmonization and frontend code.

    Update SDK header typing to use `AppHeaders` for stronger request typing.

- 338cb01: fix(api-harmonization): align typed header usage across services and generated SDK/controller contracts
- 338cb01: Refactor header access to use `HeaderName` constants instead of literal header keys across framework controllers, block harmonization services, and mocked auth guards.

    This unifies header handling, reduces string-key typos, and aligns modules with the typed headers approach exposed by `@o2s/framework/headers`.

## 1.20.0

### Minor Changes

- 375cd90: feat(framework, integrations): add variantId to AddCartItemBody and cart item models, add viewCartLabel and cartPath to CMS block models. Implement variantId-based cart operations in Medusa integration. Localize CMS mappers (EN/DE/PL) for Contentful and Strapi.

### Patch Changes

- 83a3d13: chore(deps): update dependencies
- 98b2e68: chore(deps): update dependencies
- Updated dependencies [83a3d13]
- Updated dependencies [daf592e]
- Updated dependencies [98b2e68]
    - @o2s/utils.logger@1.2.3

## 1.19.0

### Minor Changes

- 5d36519: Extended framework with e-commerce models: Address (companyName, taxId), Cart, Checkout and Order Confirmation CMS blocks. Added Mocked and Medusa integration support for cart, checkout flow, and guest order retrieval.
- 0e61431: feat: update page model and integration to support redirects

## 1.18.0

### Minor Changes

- c6ae8e6: Added the normalized data model for a cart/checkout system with full CRUD operations for items and promotions:
    - Checkout flow supporting address, shipping, and payment setup
    - Customer address management for authenticated users
    - Payment provider integration and session handling

### Patch Changes

- 46d4077: chore(deps): update dependencies
- a288b11: chore(deps): update dependencies
- 09d7b17: chore(deps): update dependencies
- bbb3b89: chore(deps): update dependencies
- 3b8ab83: chore(deps): update dependencies
- 88d180a: chore(deps): update dependencies
- 8c01be4: added README
- ea200fc: chore(deps): update dependencies
- Updated dependencies [a288b11]
- Updated dependencies [3b8ab83]
- Updated dependencies [8c01be4]
- Updated dependencies [ea200fc]
    - @o2s/utils.logger@1.2.2

## 1.17.0

### Minor Changes

- 5aba06c: add Zendesk Help Center articles integration
- 8702f91: feat(zendesk): remove hardcoded locale base paths from article slugs

### Patch Changes

- dadd9ba: chore(deps): update dependencies
- 7305d03: chore(deps): update dependencies
- 002ff11: chore(deps): update dependencies
- Updated dependencies [3934c6e]
- Updated dependencies [78ea1f7]
- Updated dependencies [241ab52]
    - @o2s/utils.logger@1.2.1

## 1.16.0

### Minor Changes

- 1a5a22d: Added ticket creation functionality to the Zendesk integration. Users can now create tickets via POST /tickets with attachments and custom fields. Added custom field mapping from Survey.js format to Zendesk custom fields via new zendesk-field.mapper. Updated table columns on TicketList component to display: ticket type (topic), status, and last updated date. Added display of custom field values from ticket properties on TicketDetails. Updated mapper mocks in cms
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

- Updated dependencies [72391c1]
    - @o2s/utils.logger@1.2.0

## 1.15.0

### Minor Changes

- e78c11a: feat: Added sorting support for products in mocked integration
    - Added sorting functionality to `mapProducts` and `mapRelatedProducts` in mocked integration
    - Supports sorting by name and price in ascending/descending order (format: `name_ASC`, `name_DESC`, `price_ASC`, `price_DESC`)
    - Sorting is applied to filtered product lists before returning results

- 79b7c87: add inline filters variant with expandable sections

## 1.14.0

### Minor Changes

- db5b381: fixing various bugs related with blocks and ui components, adding sign-in button in navigation
- c2d9438: added new blocks from dxp-starter-kit app

### Patch Changes

- Updated dependencies [221dc2c]
    - @o2s/utils.logger@1.1.3

## 1.13.0

### Minor Changes

- 2c780d5: add NotificationSummary and TicketSummary blocks
- 1653b74: fix: update FilterItem and renderCell components for improved functionality and code clarity
- c27726a: added a new Product List block with list/tile form of presentation
- 2c780d5: conditionally render button in InfoCard for improved layout
- 1653b74: feat(ui): tile version of data lists

### Patch Changes

- 0354126: reworked turbo dev task to optimize CPU/RAM usage
- Updated dependencies [0354126]
    - @o2s/utils.logger@1.1.2

## 1.12.0

### Minor Changes

- 0d1b8cc: Added Live Preview support in blocks
- ac245c5: adding initial filters support to list blocks
- 3da2e69: Added search functionality to invoice list filters

### Patch Changes

- 8ac0de9: added missing dependencies
- Updated dependencies [8ac0de9]
- Updated dependencies [b519464]
    - @o2s/utils.logger@1.1.1

## 1.11.2

### Patch Changes

- 4a42e9c: improvements for knowledge base blocks and layouts

## 1.11.1

### Patch Changes

- 5f25529: added an option to set a page-based themes via CMS config
- 5f25529: added stories for UI components

## 1.11.0

### Minor Changes

- 2421fb2: A major rework of the approach to the blocks - separated all block-related code from `api-harmonization` and `frontend` apps into separate packages, allowing versioning and much easier updates in other apps started using `create-o2s-app` script

## 1.10.0

### Minor Changes

- 6e5f193: feat: update organization role names

## 1.9.3

### Patch Changes

- e240813: added a model for pattern/regex field validation

## 1.9.2

### Patch Changes

- 4c5a8a4: extended `FormField` model into input/select/switch subtypes for future use

## 1.9.1

### Patch Changes

- db8c779: extended `FormField` model with optional description and caption

## 1.9.0

### Minor Changes

- e81621c: added `PROSPECT` role for freshly-created users

## 1.8.0

### Minor Changes

- fb09383: Organizations module:
    - Extending the Organization model with taxId
    - Adding taxId to OrganizationsListQuery and adding CheckMembershipParams class for membership validation
    - Adding GET /membership/:orgId/:userId endpoint to check user membership and implementing checkMembership method in OrganizationController
    - Adding abstract checkMembership method to OrganizationService to support membership verification operations with boolean return type.

    Users module:
    - Extending the User model with username and adding an export of User type
    - Adding GetUsersQuery class to support optional username filtering
    - Adding getUsers method to UserService

## 1.7.0

### Minor Changes

- c13192c: refactored user roles to allow more than one role on organization level and added permission fields on `Page` and `Article` models to allow displaying them based on user roles

## 1.6.2

### Patch Changes

- 97264f1: feat: replace To be Paid column with Net amount on invoices

## 1.6.1

### Patch Changes

- 36463a4: refactored how modules dependencies are defined to improve extending integrations with multiple modules within them

## 1.6.0

### Minor Changes

- 2a0475c: feat: update products, resources mocks, InfoCard - layout fix
    - updated model for GetRelatedProductListParams - renamed id and variantId to inform that we need to provide product data as params,
    - added natural data to products and resources mocks,
    - added sorting and filtering to products.mapper.ts,
    - fixed InfoCard layout issue,

## 1.5.1

### Patch Changes

- 7fdb9c9: added delete user with id method in users module

## 1.5.0

### Minor Changes

- 6949717: feat: updated resource integration - added product to the Resource model
    - updated service-list and service-details blocks,
    - added sorting and filters to mocks,

## 1.4.0

### Minor Changes

- 027ed39: featuredServiceListBlock - list of available services
    - added new UI componetnt from Shadcn - Switch,
    - extended ProductCard with action property,
    - implemented model and mock for FeatureServiceListBlock,
    - integrated with strapi,

- 985780a: added passing of authorization header to most of crucial services
- 9c31433: - added endOfWarranty attribute on asset model
    - fixed German labels in English mocks
    - fixed incorrect imports in framework modules configuration
    - added optional authorization param in most service methods

## 1.3.0

### Minor Changes

- 8c29a31: moved mocked auth integration (with a local database) to a separate package to allow easier switching between other integrations

## 1.2.0

### Minor Changes

- 1ee5be1: feat: aligned buttons - used ActionList component with dropdown menu
    - used ActionList in the OrderDetailBlock to display buttons,
    - updated the mock and strapi - now an action is a Link,
    - used the format method from the string-template to inject a value into a string,

## 1.1.0

### Minor Changes

- 565b63d: feat: fixed pagination issue in articleList
    - added new mocked articles
    - implemented new additionalLink in ArticleList

- 5d16edf: orderDetails fixes:
    - order model update - product is required now,
    - filtering moved to order mapper,
    - PayOnline button visible only when the order is overdue,

- 61d4f2f: Added integration of services and assets with MedusaJS
- f015c2b: New block ArticleSearch - Input field with suggestions to find appropriate article.
    - added new UI component - Command,
    - added new articles mock,
    - added mock for ArticleSearchBlock,
    - added strapi integration for ArticleSearchBlock,
    - added new component Autocomplete,

## 1.0.0

### Major Changes

- 0e0c816: Official stable release

## 0.24.0

### Minor Changes

- 05eea01: chore: update dependencies
- 44653fb: feat: orderDetails page implemented
    - added new UI component: InfoCard,
    - used InfoCard in PaymentsSummaryBlock, OrdersSummary and OrderDetails,
    - fixed ordersSummaryBlock integration with strapi,
    - used DynamicIcon in CategoryBlock,
    - added orientation prop for Progress component

## 0.23.0

### Minor Changes

- 2e81dca: added possibility to defined unprotected pages

## 0.22.1

### Patch Changes

- 87185e9: feat: updated mocked content for knowledge base

## 0.22.0

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
- 8d92afc: Adding label clickToSelect for reseting filters
- 30f3524: added `OrdersSummary` block and reworked mocked orders to return random orders instead of them being hardcoded
- 8b93cbf: feat: Integrated SurveyJS
- 30f3524: feat: implemented orderListBlock
    - new page /orders,
    - added strapi integration for page /orders
    - new UI dropdown-menu component

- 8b93cbf: feat: implement surveyJS forms
- 84b9002: modified `OrdersSummary` to make range filters optional
- 6d63cb1: feat: added surveyJS module
- ba125d6: Added orders module
- bb46536: feat: cases submission
    - new component DynamicIcon - for loading icons dinamicly,
    - new component ActionLinks - for showing button list with dropdown-menu,
    - new pages: /contact-us, /submit-complaint, /request-device-maintenance,
    - fixed placeholders and disabled state in SurveyJS fields,

- 68f7858: chore: updated dependencies

### Patch Changes

- e4ebc5a: updated dependencies

## 0.21.1

### Patch Changes

- 0e8409e: fixed a typo in class name

## 0.21.0

### Minor Changes

- c0ff0a7: implement context switch
- de00274: updated dependencies
- c0ff0a7: implement context change, user roles
- e9dc277: feat: handle user's timezone
- e9dc277: feat: handle user's timezone

## 0.20.0

### Minor Changes

- 98b2b61: implemented breadcrumbs

## 0.19.0

### Minor Changes

- 35eeac7: implement service details page
- 92be116: added Price model, services page implemented
- 92be116: implement services page
- 35eeac7: implement service details page
- 52b3e0a: add tooltips to mocked buttons

## 0.18.0

### Minor Changes

- 3a1ff43: replace axios with ofetch

## 0.17.0

### Minor Changes

- 477ca3e: bug-43 - pagination component shows wrong number of total pages - fix

## 0.16.0

### Minor Changes

- db41474: naming fix, added error message when invalid credentials

## 0.15.1

### Patch Changes

- 5b48057: updated dependencies

## 0.15.0

### Minor Changes

- db32d1c: unified naming of the related objects in the api-harmonization and frontend apps - from now on, they are called `blocks` (instead of `components` in api-harmonization and `containers` in frontend)

## 0.14.0

### Minor Changes

- 80b678a: Added search integration with Algolia

## 0.13.1

### Patch Changes

- 8c8bcf4: SEO and accessibility improvements

## 0.13.0

### Minor Changes

- 7959037: improved error handling across the app

## 0.12.0

### Minor Changes

- b4cddfb: add seo, add headers

### Patch Changes

- f2a6781: fixed an issue with alternative URLs for pages - on pages with dynamic URLs (e.g. /cases/(.+)) switching to another locale caused route to change to /cases/(.+) instead of /cases/12345
- eea2896: added recent tickets component

## 0.11.0

### Minor Changes

- e0ce5cb: Added localized mocks

## 0.10.1

### Patch Changes

- 2c79c35: initial release

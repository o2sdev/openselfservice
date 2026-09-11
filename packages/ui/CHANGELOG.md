# @o2s/ui

## 2.1.0

### Minor Changes

- ee42afd: feat(blocks): render list filters from the URL on the server

    Opening a filtered list link rendered the unfiltered list first and let the client replace it, so the page showed the wrong data until the second request landed. The ticket, order, invoice and notification lists now resolve the query params into their own query on the server, and each block query takes a 1-based `page` that the API turns into an `offset` with the page size from the CMS config. With the server rendering the filtered state, the client's refetch on mount is gone: a filtered link costs one request instead of two.

    The parsing lives in `@o2s/ui` as `parseFiltersFromSearchParams`, next to the hook that writes those params, so both ends of the URL contract stay in one place; the product list uses it too, and `searchParamsKey` keys each block on the params it was rendered for. Multi-value filters are named per block, because whether a filter accepts more than one value is part of the API contract: the tickets module takes repeated `status` values, the others take one value per filter.

    The mocked tickets integration now honours that array form, which its own contract documents ("use a single value or repeat the query parameter for multiple"): it compared the filter as a single string, so any multi-status selection returned nothing.

- b775189: Upgrade `react-day-picker` to v10. The custom `Calendar` (`@o2s/ui`) drops the `caption` classNames slot removed in v10 — styling is unchanged, as it is already covered by `month_caption` and `caption_label` — along with the now-obsolete `captionClassName` prop. The surveyjs date-picker question uses `autoFocus` in place of the removed `initialFocus` prop.
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

- ee42afd: feat(ui): bidirectional URL query params sync for list block filters

    List block filter state is now kept in the URL, so filtered views can be shared, bookmarked and linked
    to from elsewhere in the application.

    New `useUrlFilters` hook (plus `use-url-filters.utils` serialization helpers) in `@o2s/ui`, replacing
    `useState(initialFilters)` in the ticket, order, invoice, product and notification list blocks.
    Params are namespaced per block (`?ticket_status=OPEN`), multi-value filters repeat the key,
    pagination is written as a 1-based `{ns}_page`, view mode as `{ns}_view`, and only values differing
    from the block defaults end up in the URL. Filter changes are written with the History API
    (`replaceUrlParams`), so they add no history entries and trigger no navigation. The list refetches
    its own data client-side instead of the whole route being re-rendered on the server. The hook takes
    `searchParams` and `onUrlChange` as arguments instead of importing `next/navigation`, which keeps
    `@o2s/ui` framework-agnostic.

    Blocks that do not use the hook are unaffected.

### Patch Changes

- 1a520c8: chore: dependency update pass

    Update dependencies across the monorepo. Highlights: NestJS 12 (Express 5),
    TypeScript 6 for type-checking/lint with native TypeScript 7 compiling the
    package builds, Vite 8, Docusaurus 3.10, Storybook 10.6, @medusajs 2.20,
    redis 6, surveyjs (core + react-ui) 3, and assorted minor/patch bumps. No
    public package API changed; peer ranges were bumped to match (notably
    @nestjs/* to ^12).

- 02401b2: Routine dependency maintenance (patch/minor, no code changes): `@medusajs/js-sdk` & `@medusajs/types` to 2.20.1, `survey-core` & `survey-react-ui` to 3.0.3, `lucide-react` to 1.40, `sass` to 1.104, `docusaurus-plugin-sass` to 0.2.7.
- ee42afd: fix(ui): count multi-value list filters correctly in the filters drawer, so clearing every option no longer leaves the "remove filters" counter at one and equal selections are compared by contents instead of by reference
- ee42afd: refactor(ui): one list of the keys that describe a block rather than a filter

    The same idea was written out three times, and the lists had drifted: the active-filter counter skipped `offset`, `limit` and `id`, the filter badges skipped those plus `viewMode`, and the URL serialisation skipped only `id` and `limit` while checking `offset` separately.

    `BLOCK_STATE_KEYS` in `use-url-filters.utils` is now the single list, and the other two are derived from it: `DEFAULT_EXCLUDED_KEYS` drops the offset, because it is not left out of the URL but written as the 1-based `page`, and the badges add the view toggle, which is a display choice rather than a filter. The difference that used to be an accident is now one `filter` call with the reason next to it.

    `parseFiltersFromSearchParams` is also generic over the block's query now, so it returns `Partial<TQuery>` and the five server components no longer cast its result. A query string carries no types, so the assertion happens once inside the helper instead of at every call site, and each call names the query it is building.

- ee42afd: fix(ui): derive list filter URL writes from the next state, so a filter change and a view mode change applied in one batch no longer write the URL from each other's stale value
- ee42afd: fix(ui): merge list filter URL writes into the live query string, so a write queued before `useSearchParams` catches up (another block's filter change, or a debounced one) no longer drops the params written in between
- Updated dependencies [010ae15]
- Updated dependencies [457b243]
- Updated dependencies [1a520c8]
- Updated dependencies [dfc3fbb]
- Updated dependencies [ee42afd]
- Updated dependencies [ee42afd]
    - @o2s/configs.integrations@1.1.0
    - @o2s/framework@1.24.0

## 2.0.0

### Patch Changes

- 24fb9a9: fix(ui): use div instead of p tag in RichText paragraph override to prevent hydration errors from nested block-level elements
- Updated dependencies [86b4c5a]
    - @o2s/framework@1.23.0
    - @o2s/configs.integrations@1.0.0

## 1.15.0

### Minor Changes

- 1dbf967: Add CartStorage utility for org-scoped cart management in localStorage. Replace direct localStorage calls and cartIdLocalStorageKey prop with centralized Utils.CartStorage across all blocks and app components.

## 1.14.0

### Minor Changes

- e8cdde6: feat: add mitt-based event bus (`@o2s/ui/event-bus`), cart header badge with `cart:changed`, SDK `GET /carts/current`, and emit `cart:changed` from product list, product details, recommended products, and cart block

    refactor: read guest cart localStorage key from `NEXT_PUBLIC_CART_ID_LOCAL_STORAGE_KEY` (required; set in e.g. `apps/frontend/.env.development`) across shop and checkout blocks

- 0aaac5b: feat: add form components for user management

    Add `FormField`, `FormFieldWrapper`, and `InputValidations` components with shared Yup validation schemas for email, phone, password, and role fields.

### Patch Changes

- 0aaac5b: fix: add missing dependency declarations for turbo boundaries compliance

    Declare previously undeclared imports as explicit dependencies across 55 packages. This resolves all `turbo boundaries` violations where packages imported modules not listed in their `package.json`.

    Key dependency categories added:
    - `@storybook/nextjs-vite`, `@storybook/react`, `storybook` for story files
    - `vitest`, `@nestjs/testing`, `@o2s/vitest-config` for test files
    - `lucide-react`, `dayjs`, `string-template`, `class-variance-authority` for runtime code
    - `vite` for vitest configs in integrations
    - `@o2s/api-harmonization`, `@auth/core`, `@docusaurus/*` for app-level imports

- 0aaac5b: fix: improve accessibility and flexibility of UI form elements
    - `PhoneInput`: add `label` and `caption` props for proper form labeling
    - `SelectWithDetails`: add `isLabelHidden` prop for visually hidden but accessible labels
    - `Switch`: add `SwitchWithLabelAndDetails` variant with description, error, and read-only support
    - `LoadingOverlay`: ensure full-width/height coverage on container
    - `GlobalProvider`: update CMS import path to use `@o2s/configs.integrations`

- Updated dependencies [7ac16b0]
    - @o2s/configs.integrations@0.7.0
    - @o2s/framework@1.21.0

## 1.13.1

### Patch Changes

- a7bb35c: refactor: reorganize blocks into domain folders and update generation/docs tooling
- fab2aea: refactor: group Storybook stories by domain and rename UI component directories to PascalCase

## 1.13.0

### Minor Changes

- 375cd90: feat(blocks, ui): add variantId support to cart item handling, enhance add-to-cart toast with product name and cart link action across ProductDetails, ProductList and RecommendedProducts blocks

### Patch Changes

- Updated dependencies [83a3d13]
- Updated dependencies [375cd90]
- Updated dependencies [98b2e68]
    - @o2s/framework@1.20.0

## 1.12.0

### Minor Changes

- 5d36519: Added new blocks: Cart, Checkout (Summary, Shipping Address, Company Data, Billing Payment) and Order Confirmation. Includes checkout forms validation (Formik + Yup), error handling, promo code support in cart, and new UI components (StepIndicator, RadioTile, AddressFields, CartSummary, QuantityInput, FormField).

### Patch Changes

- Updated dependencies [5d36519]
- Updated dependencies [0e61431]
    - @o2s/framework@1.19.0

## 1.11.0

### Minor Changes

- 1804016: update article slugs to be relative and adjust mapping logic

### Patch Changes

- 8c01be4: added README
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
- Updated dependencies [88d180a]
- Updated dependencies [8c01be4]
- Updated dependencies [ea200fc]
    - @o2s/framework@1.18.0

## 1.10.0

### Minor Changes

- 5aba06c: add Zendesk Help Center articles integration

### Patch Changes

- Updated dependencies [dadd9ba]
- Updated dependencies [7305d03]
- Updated dependencies [5aba06c]
- Updated dependencies [8702f91]
- Updated dependencies [002ff11]
    - @o2s/framework@1.17.0

## 1.9.0

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

## 1.8.0

### Minor Changes

- 5947ca4: added an `inline` variant to the `Filters` component that renders filters immediately, instead of in a draawer component
- 8f39c25: feat: enhance ProductCard component with new layout adjustments
- 79b7c87: add inline filters variant with expandable sections
- cd483b7: - add MoreActionsMenu component and refactor ActionList
    - migrate OrderDetails and TicketList to unified ActionList API
    - improve breadcrumbs visibility and card border styling

### Patch Changes

- d197b89: fixed incorrect price rendering in `DataView` component
- d197b89: removed unnecessary prop destructuring
- Updated dependencies [e78c11a]
- Updated dependencies [79b7c87]
    - @o2s/framework@1.15.0

## 1.7.1

### Patch Changes

- abd3b41: added missing `getRowKey` prop that is passed down to inner components
- be6f80b: fixed incorrect price mapping
- f999bb1: extended `Collapsible` component with an option to define whether it's open by default

## 1.7.0

### Minor Changes

- db5b381: fixing various bugs related with blocks and ui components, adding sign-in button in navigation
- c2d9438: added new blocks from dxp-starter-kit app

### Patch Changes

- 221dc2c: fix: added missing Eslint command to list-staged
- Updated dependencies [db5b381]
- Updated dependencies [c2d9438]
    - @o2s/framework@1.14.0

## 1.6.0

### Minor Changes

- 1653b74: fix: update FilterItem and renderCell components for improved functionality and code clarity
- 2c780d5: conditionally render button in InfoCard for improved layout
- 1653b74: feat(ui): tile version of data lists

### Patch Changes

- 0354126: reworked turbo dev task to optimize CPU/RAM usage
- Updated dependencies [2c780d5]
- Updated dependencies [1653b74]
- Updated dependencies [c27726a]
- Updated dependencies [2c780d5]
- Updated dependencies [0354126]
- Updated dependencies [1653b74]
    - @o2s/framework@1.13.0

## 1.5.0

### Minor Changes

- 0d1b8cc: Added Live Preview support in blocks
- 485731c: enhance Checkbox, Select and Input components with error support
- 51b17ed: Adding new Carousel component
- 3da2e69: Added search functionality to invoice list filters

### Patch Changes

- 8ac0de9: added missing dependencies
- Updated dependencies [0d1b8cc]
- Updated dependencies [8ac0de9]
- Updated dependencies [ac245c5]
- Updated dependencies [3da2e69]
    - @o2s/framework@1.12.0

## 1.4.0

### Minor Changes

- 9ad8658: added support for prioritizing image rendering in order to disable lazyloading for images above the fold
- 9ad8658: reduced JS bundle size by not moving to dynamic icon loading

## 1.3.2

### Patch Changes

- 4a42e9c: improvements for knowledge base blocks and layouts
- Updated dependencies [4a42e9c]
    - @o2s/framework@1.11.2

## 1.3.1

### Patch Changes

- 5f25529: added stories for UI components
- Updated dependencies [5f25529]
- Updated dependencies [5f25529]
    - @o2s/framework@1.11.1

## 1.3.0

### Minor Changes

- 2421fb2: A major rework of the approach to the blocks - separated all block-related code from `api-harmonization` and `frontend` apps into separate packages, allowing versioning and much easier updates in other apps started using `create-o2s-app` script

### Patch Changes

- Updated dependencies [2421fb2]
    - @o2s/framework@1.11.0

## 1.2.0

### Minor Changes

- 027ed39: featuredServiceListBlock - list of available services
    - added new UI componetnt from Shadcn - Switch,
    - extended ProductCard with action property,
    - implemented model and mock for FeatureServiceListBlock,
    - integrated with strapi,

## 1.1.0

### Minor Changes

- f015c2b: New block ArticleSearch - Input field with suggestions to find appropriate article.
    - added new UI component - Command,
    - added new articles mock,
    - added mock for ArticleSearchBlock,
    - added strapi integration for ArticleSearchBlock,
    - added new component Autocomplete,

## 1.0.0

### Major Changes

- 0e0c816: Official stable release

## 0.16.0

### Minor Changes

- 05eea01: chore: update dependencies
- 44653fb: feat: orderDetails page implemented
    - added new UI component: InfoCard,
    - used InfoCard in PaymentsSummaryBlock, OrdersSummary and OrderDetails,
    - fixed ordersSummaryBlock integration with strapi,
    - used DynamicIcon in CategoryBlock,
    - added orientation prop for Progress component

## 0.15.0

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
- 30f3524: added `OrdersSummary` block and reworked mocked orders to return random orders instead of them being hardcoded
- 8b93cbf: feat: Integrated SurveyJS
- 30f3524: feat: implemented orderListBlock
    - new page /orders,
    - added strapi integration for page /orders
    - new UI dropdown-menu component

- 8b93cbf: feat: implement surveyJS forms
- bb46536: feat: cases submission
    - new component DynamicIcon - for loading icons dinamicly,
    - new component ActionLinks - for showing button list with dropdown-menu,
    - new pages: /contact-us, /submit-complaint, /request-device-maintenance,
    - fixed placeholders and disabled state in SurveyJS fields,

- 68f7858: chore: updated dependencies

### Patch Changes

- e4ebc5a: updated dependencies

## 0.14.0

### Minor Changes

- c0ff0a7: implement context switch
- de00274: updated dependencies
- a854c74: upgraded Tailwind to v4
- c0ff0a7: added `toast` component; added pointers to `radio` and `label` components; added `size` to `loading-overlay` component

## 0.13.0

### Minor Changes

- b9090bc: incorrect colors on hover in the Navbar and the Footer

## 0.12.0

### Minor Changes

- 77f9dc4: added nwe variants to `button`, `avatar` and `select` components
- 77f9dc4: updated CSS variables with the new UI theme
- 77f9dc4: UI theme update

## 0.11.0

### Minor Changes

- 92be116: added Price model, services page implemented
- 52b3e0a: add tooltips to mocked buttons

## 0.10.2

### Patch Changes

- 5b48057: updated dependencies

## 0.10.1

### Patch Changes

- 8c8bcf4: SEO and accessibility improvements

## 0.10.0

### Minor Changes

- e0ce5cb: Fixed use of label for pagination button

## 0.9.1

### Patch Changes

- 2c79c35: initial release

# @o2s/integrations.mocked-dxp

## 2.1.0

### Minor Changes

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

### Patch Changes

- 010ae15: Refactored integration configuration by consolidating the 18 individual model files into a single typed `config.ts` backed by a `createIntegrationConfig` helper. Each domain now maps to an integration through a per-domain import alias shared by both the runtime map and its type re-export, so swapping an integration is a single-line change that cannot desync value and types.

    Integration `Config` objects are now declared with `satisfies Partial<ApiConfig['integrations']>` (instead of a type annotation), which lets `createIntegrationConfig` validate domain bindings **at compile time** — assigning an integration to a domain it does not provide is now a type error rather than a runtime crash. The runtime check remains as a defense-in-depth backstop.

- cb50455: chore(deps): update dependencies
- 681d153: chore(deps): update dependencies
- 1a520c8: chore: dependency update pass

    Update dependencies across the monorepo. Highlights: NestJS 12 (Express 5),
    TypeScript 6 for type-checking/lint with native TypeScript 7 compiling the
    package builds, Vite 8, Docusaurus 3.10, Storybook 10.6, @medusajs 2.20,
    redis 6, surveyjs (core + react-ui) 3, and assorted minor/patch bumps. No
    public package API changed; peer ranges were bumped to match (notably
    @nestjs/* to ^12).

- c8a58ad: fix(integrations): correct titles and slugs of the mocked pages

    The detail pages of `@o2s/integrations.mocked` carried the title of their list page in Polish and in German — the ticket details page was titled "Zgłoszenia" and "Fälle" — so the ticket, notification, order and service details pages now use a title of their own, as the product details page already did. The German slug of the warranty category lost its trailing typo (`garantie-und-reparaturt`) and the German slug of the complaint form its Polish wording (`/einreichen-reklamacji` became `/beschwerde-einreichen`).

    The product list mock no longer stamps itself with `new Date()` on every boot, so its `lastMod` in the sitemap stops moving between restarts, and it carries the same fixed date as every other page.

    In `@o2s/integrations.mocked-dxp` the credit and debit card pages had localized slugs but the English title in all three locales, and the savings account page was titled "Sparen Konto" in German.

- cb50455: chore(deps): update dependencies
- Updated dependencies [010ae15]
- Updated dependencies [f8591c1]
- Updated dependencies [cb50455]
- Updated dependencies [c8a58ad]
- Updated dependencies [681d153]
- Updated dependencies [457b243]
- Updated dependencies [1a520c8]
- Updated dependencies [92c0bf8]
- Updated dependencies [ee42afd]
- Updated dependencies [692ecf4]
- Updated dependencies [c4aa242]
- Updated dependencies [c4aa242]
- Updated dependencies [c8a58ad]
- Updated dependencies [cb50455]
- Updated dependencies [dfc3fbb]
- Updated dependencies [ee42afd]
- Updated dependencies [270355f]
- Updated dependencies [ee42afd]
    - @o2s/framework@1.24.0
    - @o2s/integrations.mocked@2.1.0
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

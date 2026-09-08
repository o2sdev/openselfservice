---
'@o2s/framework': minor
'@o2s/integrations.mocked': minor
'@o2s/integrations.mocked-dxp': minor
---

feat(framework): add a declarative page registry and move the mocked integrations onto it

Adds `CMS.Pages.definePage` and `CMS.Pages.createPageRegistry` to `@o2s/framework/modules`. A page is declared once, with one entry per locale (its localized slug and SEO), and the registry derives the whole `CmsService` page trio from that single declaration: `getPage` (`mapPage`), `getPages` (`getAllPages`) and `getAlternativePages`. Integrations that serve pages without a CMS no longer keep three hand-written lists of the same pages, which is what let them drift apart.

Dynamic routes are declared as `/cases/:id` instead of a regex kept in the slug field: the registry matches a slug segment by segment, prefers a static route over a dynamic one, exposes the extracted params through `matchPage` and fills them back into the slug of the page it returns. `definePage` validates a definition up front and rejects the mistakes that used to be silent — a slug without a leading slash, a translated slug that drops a param the other locales declare, a breadcrumb parent that does not cover every locale of its child, two pages claiming the same route or the same id.

`@o2s/integrations.mocked` and `@o2s/integrations.mocked-dxp` now declare their pages this way, which cuts their page mocks from 9880 to 1673 lines and their page mappers from 973 to 203. Every page of `@o2s/integrations.mocked` comes back field for field as before; in both integrations the derived lists fix what the hand-kept ones had lost:

- pages that `getPage` served but the page list had forgotten now reach the sitemap and the hreflang alternates (`/help-and-support` and `/help-and-support/troubleshooting` in `mocked`, 10 of the 22 pages in `mocked-dxp`);
- alternates are emitted per locale instead of being resolved through the requested one, so a page whose slug is not localized (`/`) no longer advertises one locale three times;
- pages with a dynamic slug are left out of the page list, so the sitemap stops publishing `/cases/(.+)` as a URL;
- a slug deeper than its route (`/cases/a/b`) is no longer answered with `/cases/b`, and a request is answered with the slug it asked about instead of the one of the requested locale;
- breadcrumbs come from the page they point at, which corrects the copies that had drifted in `mocked-dxp` (`Geschäftlich` vs `Geschäft`, `Personlich` vs `Persönlich`, `Konten` in a Polish breadcrumb) and gives `/personal/accounts` the breadcrumb it declared in English only;
- the home page of `mocked-dxp` gets an id of its own (`home-1`): it shared `personal-1` with `/personal`, so the two pages were grouped as one in the sitemap and advertised each other as localized alternates.

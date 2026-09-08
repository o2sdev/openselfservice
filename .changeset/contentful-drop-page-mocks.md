---
'@o2s/integrations.contentful-cms': patch
---

chore(integrations.contentful-cms): drop the unreachable page mocks

Removes `mapMockPage`, the mock `getAllPages` and the mock `getAlternativePages` from `cms.page.mapper.ts`, together with the 15 files of mock page objects under `mappers/mocks/pages`. Nothing reached that code: `CmsService` imports only `mapPage` (which maps real Contentful entries) and answers `getPages` and `getAlternativePages` from Contentful itself, `mapMockPage` was called only by the mock `getAlternativePages` next to it, and the package exports just `./integration` and `./live-preview`. The mocks came in with the first version of the integration, before the real mapping existed, and had been maintained since — the PBAC change alone rewrote all 15 of them.

`cms.page.mapper.ts` keeps the live mapping (`mapPage`, `mapSeo`, `mapTemplate`, `mapSlot`, `mapLayout`, `mapComponent`) and goes from 531 to 141 lines; ~2930 lines are gone in total.

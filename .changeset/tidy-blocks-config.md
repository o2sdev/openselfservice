---
'create-o2s-app': patch
---

fix(cli): remove unselected blocks from `blocks.config.ts` during scaffolding

Block registration moved to `apps/api-harmonization/src/blocks.config.ts`, but the scaffolder only cleaned `app.module.ts` and `page.model.ts`. Projects generated without the full set of blocks (e.g. the `o2s` template) failed to build because `blocks.config.ts` still imported the removed block packages.

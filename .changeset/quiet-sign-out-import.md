---
'create-o2s-app': patch
---

fix(cli): drop the `onSignOut` import from `renderBlocks.tsx` when the user-account block is not selected

Without the user-account block the import was left unused, so `npm run lint` failed in generated projects (e.g. the `dxp` template or a custom block selection).

---
"create-o2s-app": patch
---

fix: preserve private modules during project scaffolding

Previously, the CLI removed the entire `packages/modules` directory during scaffolding. Now only public (non-private) modules are removed, while private modules (e.g. `packages/modules/documents`) are kept as local workspace packages in the scaffolded project.
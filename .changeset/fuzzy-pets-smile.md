---
'@o2s/frontend': patch
---

Replace the `renderBlocks` switch with a typed block registry to enforce
compile-time coverage of all `Modules.Page.Model.Blocks` entries.

Keep runtime handling for unknown block types with a warning log and `null`
fallback.

---
'@o2s/frontend': patch
---

Add a warning log in `renderBlocks` when an unknown block type is encountered.

This makes missing block registration visible during development instead of silently rendering `null`.

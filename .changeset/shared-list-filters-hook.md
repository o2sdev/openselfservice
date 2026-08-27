---
'@o2s/utils.frontend': minor
'@o2s/blocks.ticket-list': patch
'@o2s/blocks.order-list': patch
'@o2s/blocks.invoice-list': patch
'@o2s/blocks.notification-list': patch
'@o2s/blocks.product-list': patch
---

refactor(utils.frontend): one hook for wiring a list block to the URL

Each list block repeated the same forty lines around `useUrlFilters`, which is deliberately framework-agnostic and therefore takes its inputs from the caller: the params snapshot, the History API writer, and the multi-value keys, filter keys and starting view mode derived from the block's CMS filter config.

`Hooks.useListFilters` does all of it, so a block passes its defaults, its namespace and its filter config. Only the two values that come from `next/navigation` stay with the block, which keeps this package free of a dependency on Next. A block with a namespace gets prefixed params; one without gets plain, linkable ones and its filter keys are derived, so the two conventions need no extra flag.

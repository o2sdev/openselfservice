---
'@o2s/ui': minor
'@o2s/blocks.ticket-list': minor
'@o2s/blocks.order-list': minor
'@o2s/blocks.invoice-list': minor
'@o2s/blocks.product-list': minor
'@o2s/blocks.notification-list': minor
---

feat(ui): bidirectional URL query params sync for list block filters

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

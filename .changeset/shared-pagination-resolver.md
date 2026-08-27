---
'@o2s/framework': minor
'@o2s/blocks.ticket-list': patch
'@o2s/blocks.order-list': patch
'@o2s/blocks.invoice-list': patch
'@o2s/blocks.notification-list': patch
'@o2s/blocks.product-list': patch
---

refactor(framework): one pagination resolver for the list blocks

Every list block carried its own copy of the same two helpers, turning a query's `limit`, `offset` and `page` into the window to fetch. `Models.Pagination.resolvePagination` replaces all five: it takes the pagination a URL can carry (`PaginatedQuery`, structurally satisfied by any block query, so a block no longer types the helper with its own class) plus the page size to fall back on, and returns the `limit` and `offset` to use.

`PaginatedQuery` is kept apart from `PaginationQuery`, which the domain modules extend: `page` is consumed by the block API and never reaches them, so advertising it in their contracts would promise integrations something they never receive.

One behaviour changes with the move. A page size counts only as a whole number of rows above zero, so `?limit=-5` falls back to the CMS config instead of travelling on as a negative limit; the unit tests for the new helper are what surfaced it.

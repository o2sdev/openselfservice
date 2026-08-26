---
'@o2s/blocks.ticket-list': minor
'@o2s/blocks.order-list': minor
'@o2s/blocks.invoice-list': minor
'@o2s/blocks.notification-list': minor
'@o2s/ui': minor
'@o2s/integrations.mocked': patch
'@o2s/blocks.product-list': patch
---

feat(blocks): render list filters from the URL on the server

Opening a filtered list link rendered the unfiltered list first and let the client replace it, so the page showed the wrong data until the second request landed. The ticket, order, invoice and notification lists now resolve the query params into their own query on the server, and each block query takes a 1-based `page` that the API turns into an `offset` with the page size from the CMS config. With the server rendering the filtered state, the client's refetch on mount is gone: a filtered link costs one request instead of two.

The parsing lives in `@o2s/ui` as `parseFiltersFromSearchParams`, next to the hook that writes those params, so both ends of the URL contract stay in one place; the product list uses it too, and `searchParamsKey` keys each block on the params it was rendered for. Multi-value filters are named per block, because whether a filter accepts more than one value is part of the API contract — the tickets module takes repeated `status` values, the others take one value per filter.

The mocked tickets integration now honours that array form, which its own contract documents ("use a single value or repeat the query parameter for multiple"): it compared the filter as a single string, so any multi-status selection returned nothing.

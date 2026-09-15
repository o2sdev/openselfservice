---
'@o2s/framework': minor
'@o2s/blocks.article': patch
'@o2s/blocks.article-search': patch
'@o2s/blocks.bento-grid': patch
'@o2s/blocks.cart': patch
'@o2s/blocks.category': patch
'@o2s/blocks.checkout-billing-payment': patch
'@o2s/blocks.checkout-company-data': patch
'@o2s/blocks.checkout-shipping-address': patch
'@o2s/blocks.checkout-summary': patch
'@o2s/blocks.cta-section': patch
'@o2s/blocks.document-list': patch
'@o2s/blocks.featured-service-list': patch
'@o2s/blocks.feature-section': patch
'@o2s/blocks.feature-section-grid': patch
'@o2s/blocks.hero-section': patch
'@o2s/blocks.invoice-list': patch
'@o2s/blocks.media-section': patch
'@o2s/blocks.notification-details': patch
'@o2s/blocks.notification-list': patch
'@o2s/blocks.notification-summary': patch
'@o2s/blocks.order-confirmation': patch
'@o2s/blocks.order-details': patch
'@o2s/blocks.order-list': patch
'@o2s/blocks.orders-summary': patch
'@o2s/blocks.payments-history': patch
'@o2s/blocks.payments-summary': patch
'@o2s/blocks.pricing-section': patch
'@o2s/blocks.product-details': patch
'@o2s/blocks.product-list': patch
'@o2s/blocks.recommended-products': patch
'@o2s/blocks.service-details': patch
'@o2s/blocks.service-list': patch
'@o2s/blocks.surveyjs-form': patch
'@o2s/blocks.ticket-details': patch
'@o2s/blocks.ticket-recent': patch
'@o2s/blocks.ticket-summary': patch
'@o2s/blocks.user-account': patch
---

Threaded the CMS `preview` flag through every block so draft content actually renders in draft
mode. Previously only 5 of ~42 blocks passed it - the rest always fetched published content, so CMS
live preview (and any draft-mode view) showed stale data for most of the page.

Per block, the flag now survives all four hops: the renderer forwards `isDraftModeEnabled` (added
to the framework's `BaseBlockProps` - `renderBlocks` already passed it to every block), the server
component sends `preview` on its block fetch, the request DTO declares it, and the API
Harmonization service forwards it to `CmsService.getBlockConfig`.

---
'@o2s/framework': patch
'@o2s/blocks.article': patch
'@o2s/blocks.article-list': patch
'@o2s/blocks.article-search': patch
'@o2s/blocks.bento-grid': patch
'@o2s/blocks.category': patch
'@o2s/blocks.category-list': patch
'@o2s/blocks.cta-section': patch
'@o2s/blocks.document-list': patch
'@o2s/blocks.faq': patch
'@o2s/blocks.feature-section': patch
'@o2s/blocks.feature-section-grid': patch
'@o2s/blocks.featured-service-list': patch
'@o2s/blocks.hero-section': patch
'@o2s/blocks.invoice-list': patch
'@o2s/blocks.media-section': patch
'@o2s/blocks.notification-details': patch
'@o2s/blocks.notification-list': patch
'@o2s/blocks.notification-summary': patch
'@o2s/blocks.order-details': patch
'@o2s/blocks.order-list': patch
'@o2s/blocks.orders-summary': patch
'@o2s/blocks.payments-history': patch
'@o2s/blocks.payments-summary': patch
'@o2s/blocks.pricing-section': patch
'@o2s/blocks.product-details': patch
'@o2s/blocks.product-list': patch
'@o2s/blocks.quick-links': patch
'@o2s/blocks.recommended-products': patch
'@o2s/blocks.service-details': patch
'@o2s/blocks.service-list': patch
'@o2s/blocks.surveyjs-form': patch
'@o2s/blocks.ticket-details': patch
'@o2s/blocks.ticket-list': patch
'@o2s/blocks.ticket-recent': patch
'@o2s/blocks.ticket-summary': patch
'@o2s/blocks.user-account': patch
---

Extract shared block prop types into framework models and migrate block frontend props to the common `BlockWith*` helpers.

This removes duplicated `slug`, `userId`, and `isDraftModeEnabled` definitions and keeps renderer props aligned across blocks.


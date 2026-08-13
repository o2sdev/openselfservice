---
'@o2s/framework': minor
'@o2s/utils.frontend': patch
'@o2s/modules.surveyjs': patch
'@o2s/blocks.article': patch
'@o2s/blocks.article-list': patch
'@o2s/blocks.article-search': patch
'@o2s/blocks.bento-grid': patch
'@o2s/blocks.cart': patch
'@o2s/blocks.category': patch
'@o2s/blocks.category-list': patch
'@o2s/blocks.checkout-billing-payment': patch
'@o2s/blocks.checkout-company-data': patch
'@o2s/blocks.checkout-shipping-address': patch
'@o2s/blocks.checkout-summary': patch
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
'@o2s/blocks.order-confirmation': patch
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

feat(framework): add `createBlockMethod` helper for block SDK methods

Adds `createBlockMethod` to `@o2s/framework/sdk`. It creates the request function used by the methods of a block (or module) SDK and takes care of the boilerplate that was previously copy-pasted into every method: merging the default API headers with the caller's headers and the access token, serializing query params, typing the response and wrapping failures into a `BlockRequestError` (which exposes `status`, `data` and the original error as `cause`).

`getApiHeaders` is now provided by `@o2s/framework/headers` and re-exported by `@o2s/utils.frontend` (`Utils.Headers.getApiHeaders`), so the default headers are defined in a single place. All block SDKs, the SurveyJS module SDK and the block generator template use the new helper.

---
'@o2s/api-harmonization': patch
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
'@o2s/configs.integrations': patch
'@o2s/framework': patch
'@o2s/integrations.algolia': patch
'@o2s/integrations.contentful-cms': patch
'@o2s/integrations.medusajs': patch
'@o2s/integrations.mocked': patch
'@o2s/integrations.mocked-dxp': patch
'@o2s/integrations.redis': patch
'@o2s/integrations.strapi-cms': patch
'@o2s/integrations.zendesk': patch
'@o2s/modules.documents': patch
'@o2s/modules.surveyjs': patch
'@o2s/telemetry': patch
'@o2s/ui': patch
'@o2s/utils.api-harmonization': patch
'@o2s/utils.frontend': patch
'@o2s/utils.logger': patch
'create-o2s-app': patch
---

chore: dependency update pass

Update dependencies across the monorepo. Highlights: NestJS 12 (Express 5),
TypeScript 6 for type-checking/lint with native TypeScript 7 compiling the
package builds, Vite 8, Docusaurus 3.10, Storybook 10.6, @medusajs 2.20,
redis 6, surveyjs (core + react-ui) 3, and assorted minor/patch bumps. No
public package API changed; peer ranges were bumped to match (notably
@nestjs/* to ^12).

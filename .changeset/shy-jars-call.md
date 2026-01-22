---
'@o2s/blocks.featured-service-list': minor
'@o2s/blocks.notification-details': minor
'@o2s/blocks.notification-summary': minor
'@o2s/integrations.contentful-cms': minor
'@o2s/blocks.notification-list': minor
'@o2s/blocks.payments-history': minor
'@o2s/blocks.payments-summary': minor
'@o2s/integrations.strapi-cms': minor
'@o2s/utils.api-harmonization': minor
'@o2s/blocks.product-details': minor
'@o2s/blocks.service-details': minor
'@o2s/blocks.orders-summary': minor
'@o2s/blocks.ticket-details': minor
'@o2s/blocks.ticket-summary': minor
'@o2s/integrations.medusajs': minor
'@o2s/blocks.order-details': minor
'@o2s/blocks.ticket-recent': minor
'@o2s/configs.integrations': minor
'@o2s/integrations.algolia': minor
'@o2s/blocks.article-list': minor
'@o2s/blocks.invoice-list': minor
'@o2s/blocks.product-list': minor
'@o2s/blocks.service-list': minor
'@o2s/blocks.user-account': minor
'@o2s/integrations.mocked': minor
'@o2s/blocks.ticket-list': minor
'@o2s/blocks.order-list': minor
'@o2s/modules.surveyjs': minor
'@o2s/blocks.category': minor
'@o2s/blocks.article': minor
'@o2s/api-harmonization': minor
'@o2s/framework': minor
'@o2s/frontend': minor
'@o2s/docs': minor
'@o2s/blocks.article-search': minor
'@o2s/blocks.bento-grid': minor
'@o2s/blocks.category-list': minor
'@o2s/blocks.cta-section': minor
'@o2s/blocks.document-list': minor
'@o2s/blocks.faq': minor
'@o2s/blocks.feature-section': minor
'@o2s/blocks.feature-section-grid': minor
'@o2s/blocks.hero-section': minor
'@o2s/blocks.media-section': minor
'@o2s/blocks.pricing-section': minor
'@o2s/blocks.quick-links': minor
'@o2s/blocks.recommended-products': minor
'@o2s/blocks.surveyjs-form': minor
'create-o2s-app': minor
'@o2s/eslint-config': minor
'@o2s/lint-staged-config': minor
'@o2s/prettier-config': minor
'@o2s/typescript-config': minor
'@o2s/vitest-config': minor
'@o2s/integrations.redis': minor
'@o2s/integrations.zendesk': minor
'@o2s/telemetry': minor
'@o2s/ui': minor
'@o2s/utils.frontend': minor
'@o2s/utils.logger': minor
---

### Authorization & PBAC Implementation

This release introduces a comprehensive Policy-Based Access Control system interlaced with Role-Based Access Control.

#### Framework & Core
- **`@o2s/framework` (AuthService)**: Enhanced with abstract permission logic (`getPermissions`, `hasPermission`), role checks (`hasRole`, `requireRoles`), and action batching (`canPerformActions`).
- **`@o2s/api-harmonization`**: Implemented global `RolesGuard` and `PermissionsGuard` in `AppModule`.
- **`@o2s/utils.api-harmonization`**: Added `extractUserRolesFromJwt` to unify role extraction from different JWT claims.

#### Features
- **Decorators**: New `@Auth.Decorators.Permissions({ resource, actions })` for securing controllers.
- **Data Filtering**: Mappers (e.g., `page.mapper.ts`) now filter UI elements (header/footer navigation) based on user roles.

This provides granular control over resource access and UI visibility based on user roles and permissions.

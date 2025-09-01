---
'@o2s/blocks.featured-service-list': major
'@o2s/blocks.notification-details': major
'@o2s/typescript-config': minor
'@o2s/blocks.notification-list': major
'@o2s/blocks.payments-history': major
'@o2s/blocks.payments-summary': major
'@o2s/prettier-config': minor
'@o2s/utils.api-harmonization': minor
'@o2s/blocks.service-details': major
'@o2s/blocks.article-search': major
'@o2s/blocks.orders-summary': major
'@o2s/blocks.ticket-details': major
'@o2s/integrations.medusajs': minor
'@o2s/blocks.category-list': major
'@o2s/blocks.order-details': major
'@o2s/blocks.surveyjs-form': major
'@o2s/blocks.ticket-recent': major
'@o2s/configs.integrations': minor
'@o2s/integrations.algolia': minor
'@o2s/blocks.article-list': major
'@o2s/blocks.invoice-list': major
'@o2s/blocks.service-list': major
'@o2s/blocks.user-account': major
'@o2s/integrations.mocked': minor
'@o2s/blocks.quick-links': major
'@o2s/blocks.ticket-list': major
'create-o2s-app': minor
'@o2s/integrations.redis': minor
'@o2s/blocks.order-list': major
'@o2s/modules.surveyjs': minor
'@o2s/blocks.category': major
'@o2s/blocks.article': major
'@o2s/utils.frontend': minor
'@o2s/api-harmonization': minor
'@o2s/blocks.faq': major
'@o2s/framework': minor
'@o2s/frontend': minor
'@o2s/ui': minor
'@o2s/docs': minor
---

A major rework of the approach to the blocks - separated all block-related code from `api-harmonization` and `frontend` apps into separate packages, allowing versioning and much easier updates in other apps started using `create-o2s-app` script

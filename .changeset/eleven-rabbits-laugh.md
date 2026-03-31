---
'@o2s/integrations.contentful-cms': minor
'@o2s/integrations.mocked-dxp': minor
'@o2s/integrations.strapi-cms': minor
'@o2s/integrations.mocked': minor
---

Added checkout block type cases (Cart, CheckoutCompanyData, CheckoutShippingAddress, CheckoutBillingPayment, CheckoutSummary, OrderConfirmation) to the getBlockConfig switch in mocked CMS service. Refactored mocked-dxp to use getBlockConfig override instead of individual block method overrides.

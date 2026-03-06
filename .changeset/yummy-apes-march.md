---
'@o2s/blocks.checkout-shipping-address': minor
'@o2s/blocks.checkout-billing-payment': minor
'@o2s/blocks.checkout-company-data': minor
'@o2s/blocks.order-confirmation': minor
'@o2s/blocks.checkout-summary': minor
'@o2s/integrations.medusajs': minor
'@o2s/integrations.mocked': minor
'@o2s/utils.frontend': minor
'@o2s/api-harmonization': minor
'@o2s/blocks.cart': minor
'@o2s/framework': minor
'@o2s/frontend': minor
'@o2s/ui': minor
'@o2s/docs': minor
---

added new blocks: Cart, Checkout (Summary, Shipping Address, Company Data, Billing Payment) and Order Confirmation with full API integration (Mocked + Medusa). Extended Address models with new fields (companyName, taxId), added checkout forms validation (Formik + Yup), error handling, promo code support in cart, guest order retrieval, and new UI components (StepIndicator, RadioTile, AddressFields and CartSummary).

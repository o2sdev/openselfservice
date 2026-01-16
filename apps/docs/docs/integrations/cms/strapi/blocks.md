---
sidebar_position: 250
---

# Supported blocks

This document provides an overview of block implementation status in the Strapi CMS integration.

All blocks in the Strapi integration are fully implemented with:

- Complete GraphQL fragments for data fetching
- Mappers that transform Strapi data to the O2S block model
- Cache integration for optimized performance

## Implementation status

The following table shows the implementation status of all blocks available in the O2S framework:

| Block                 | Status | Strapi Type                            | Notes             |
| --------------------- | ------ | -------------------------------------- | ----------------- |
| article               | ✅     | Article (separate module)              | Fully implemented |
| article-list          | ✅     | ComponentComponentsArticleList         | Fully implemented |
| article-search        | ✅     | ComponentComponentsArticleSearch       | Fully implemented |
| category              | ✅     | ComponentComponentsCategory            | Fully implemented |
| category-list         | ✅     | ComponentComponentsCategoryList        | Fully implemented |
| faq                   | ✅     | ComponentComponentsFaq                 | Fully implemented |
| featured-service-list | ✅     | ComponentComponentsFeaturedServiceList | Fully implemented |
| invoice-list          | ✅     | ComponentComponentsInvoiceList         | Fully implemented |
| notification-list     | ✅     | ComponentComponentsNotificationList    | Fully implemented |
| order-details         | ✅     | ComponentComponentsOrderDetails        | Fully implemented |
| order-list            | ✅     | ComponentComponentsOrderList           | Fully implemented |
| orders-summary        | ✅     | ComponentComponentsOrdersSummary       | Fully implemented |
| payments-history      | ✅     | ComponentComponentsPaymentsHistory     | Fully implemented |
| payments-summary      | ✅     | ComponentComponentsPaymentsSummary     | Fully implemented |
| quick-links           | ✅     | ComponentComponentsQuickLinks          | Fully implemented |
| service-details       | ✅     | ComponentComponentsServiceDetails      | Fully implemented |
| service-list          | ✅     | ComponentComponentsServiceList         | Fully implemented |
| surveyjs-form         | ✅     | ComponentComponentsSurveyJS            | Fully implemented |
| ticket-details        | ✅     | ComponentComponentsTicketDetails       | Fully implemented |
| ticket-list           | ✅     | ComponentComponentsTicketList          | Fully implemented |
| ticket-recent         | ✅     | ComponentComponentsTicketRecent        | Fully implemented |
| user-account          | ✅     | ComponentComponentsUserAccount         | Fully implemented |
| product-details       | ❌     | -                                      | Not implemented   |
| product-list          | ❌     | -                                      | Not implemented   |
| recommended-products  | ❌     | -                                      | Not implemented   |
| bento-grid            | ❌     | -                                      | Not implemented   |
| cta-section           | ❌     | -                                      | Not implemented   |
| document-list         | ❌     | -                                      | Not implemented   |
| feature-section       | ❌     | -                                      | Not implemented   |
| feature-section-grid  | ❌     | -                                      | Not implemented   |
| hero-section          | ❌     | -                                      | Not implemented   |
| media-section         | ❌     | -                                      | Not implemented   |
| notification-summary  | ❌     | -                                      | Not implemented   |
| notification-details  | ❌     | -                                      | Not implemented   |
| pricing-section       | ❌     | -                                      | Not implemented   |
| ticket-summary        | ❌     | -                                      | Not implemented   |

## Blocks with mock data

Some blocks return static mock data instead of fetching content from Strapi. This is typically used for blocks where the actual data comes from external backend services rather than CMS content:

- `notification-details` - Returns mock notification details (data comes from notifications service)
- `product-details` - Returns mock product details (pending full Strapi integration)
- `product-list` - Returns mock product list configuration (pending full Strapi integration)
- `recommended-products` - Returns mock recommended products labels (pending full Strapi integration)

These blocks have their visual configuration (labels, table columns, etc.) managed in Strapi, but the actual data is fetched from their respective backend services.

## Block structure

Each block in Strapi follows a consistent structure:

1. **GraphQL Fragment** - Located in `./src/modules/cms/graphql/fragments/blocks/` - defines what data to fetch
2. **Mapper** - Located in `./src/modules/cms/mappers/blocks/` - transforms Strapi data to O2S model
3. **Service Method** - Defined in `CmsService` - provides cached access to block data

### Example: FAQ Block

**GraphQL Fragment:**

```graphql
fragment FaqComponent on ComponentComponentsFaq {
    __typename
    id
    title
    subtitle
    items {
        title
        description
    }
}
```

**Service Method:**

```typescript
getFaqBlock(options: CMS.Request.GetCmsEntryParams) {
    const key = `faq-component-${options.id}-${options.locale}`;
    return this.getCachedBlock(key, () => this.getBlock(options).pipe(map(mapFaqBlock)));
}
```

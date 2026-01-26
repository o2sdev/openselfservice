---
sidebar_position: 250
---

# Supported blocks

This document provides an overview of block implementation status in the Contentful CMS integration.

- All implemented blocks support Live Preview when metadata is included in the mapper
- Block mappers should handle both published and draft content based on the `preview` parameter
- Metadata should only be included when `isPreview` is `true` to avoid unnecessary data for regular users

## Implementation status

The following table shows the implementation status of all blocks available in the O2S framework:

| Block                 | Status | Contentful Type   | Notes             |
| --------------------- | ------ | ----------------- | ----------------- |
| article-list          | ✅     | BlockArticleList  | Fully implemented |
| category-list         | ✅     | BlockCategoryList | Fully implemented |
| faq                   | ✅     | BlockFaq          | Fully implemented |
| quick-links           | ✅     | BlockQuickLinks   | Fully implemented |
| ticket-list           | ✅     | BlockTicketList   | Fully implemented |
| category              | ❌     | -                 | Not implemented   |
| article-search        | ❌     | -                 | Not implemented   |
| featured-service-list | ❌     | -                 | Not implemented   |
| invoice-details       | ❌     | -                 | Not implemented   |
| invoice-list          | ❌     | -                 | Not implemented   |
| notification-details  | ❌     | -                 | Not implemented   |
| notification-list     | ❌     | -                 | Not implemented   |
| order-details         | ❌     | -                 | Not implemented   |
| order-list            | ❌     | -                 | Not implemented   |
| orders-summary        | ❌     | -                 | Not implemented   |
| payments-history      | ❌     | -                 | Not implemented   |
| payments-summary      | ❌     | -                 | Not implemented   |
| product-details       | ❌     | -                 | Not implemented   |
| product-list          | ❌     | -                 | Not implemented   |
| recommended-products  | ❌     | -                 | Not implemented   |
| service-details       | ❌     | -                 | Not implemented   |
| service-list          | ❌     | -                 | Not implemented   |
| surveyjs-form         | ❌     | -                 | Not implemented   |
| ticket-details        | ❌     | -                 | Not implemented   |
| ticket-recent         | ❌     | -                 | Not implemented   |
| user-account          | ❌     | -                 | Not implemented   |
| article               | ❌     | -                 | Not implemented   |
| bento-grid            | ❌     | -                 | Not implemented   |
| cta-section           | ❌     | -                 | Not implemented   |
| document-list         | ❌     | -                 | Not implemented   |
| feature-section       | ❌     | -                 | Not implemented   |
| feature-section-grid  | ❌     | -                 | Not implemented   |
| hero-section          | ❌     | -                 | Not implemented   |
| media-section         | ❌     | -                 | Not implemented   |
| notification-summary  | ❌     | -                 | Not implemented   |
| pricing-section       | ❌     | -                 | Not implemented   |
| ticket-summary        | ❌     | -                 | Not implemented   |

## Mocked blocks

Mocked blocks are useful for development and testing but should be replaced with real Contentful content types for production use.
The following blocks return static mock data instead of fetching content from Contentful:

- `article-search` - Returns mock search results
- `category` - Returns mock category data
- `featured-service-list` - Returns mock service list
- `invoice-details` - Returns mock invoice details
- `invoice-list` - Returns mock invoice list
- `notification-details` - Returns mock notification details
- `notification-list` - Returns mock notification list
- `order-details` - Returns mock order details
- `order-list` - Returns mock order list
- `orders-summary` - Returns mock orders summary
- `payments-history` - Returns mock payment history
- `payments-summary` - Returns mock payments summary
- `product-details` - Returns mock product details
- `product-list` - Returns mock product list
- `recommended-products` - Returns mock recommended products
- `service-details` - Returns mock service details
- `service-list` - Returns mock service list
- `surveyjs-form` - Returns mock survey form
- `ticket-details` - Returns mock ticket details
- `ticket-recent` - Returns mock recent tickets
- `user-account` - Returns mock user account data

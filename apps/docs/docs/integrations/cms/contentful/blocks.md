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
| category              | ✅     | BlockCategory     | Returns mock data |
| article-search        | ✅     | -                 | Returns mock data |
| featured-service-list | ✅     | -                 | Returns mock data |
| invoice-details       | ✅     | -                 | Returns mock data |
| invoice-list          | ✅     | -                 | Returns mock data |
| notification-details  | ✅     | -                 | Returns mock data |
| notification-list     | ✅     | -                 | Returns mock data |
| order-details         | ✅     | -                 | Returns mock data |
| order-list            | ✅     | -                 | Returns mock data |
| orders-summary        | ✅     | -                 | Returns mock data |
| payments-history      | ✅     | -                 | Returns mock data |
| payments-summary      | ✅     | -                 | Returns mock data |
| product-details       | ✅     | -                 | Returns mock data |
| product-list          | ✅     | -                 | Returns mock data |
| recommended-products  | ✅     | -                 | Returns mock data |
| service-details       | ✅     | -                 | Returns mock data |
| service-list          | ✅     | -                 | Returns mock data |
| surveyjs-form         | ✅     | -                 | Returns mock data |
| ticket-details        | ✅     | -                 | Returns mock data |
| ticket-recent         | ✅     | -                 | Returns mock data |
| user-account          | ✅     | -                 | Returns mock data |
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

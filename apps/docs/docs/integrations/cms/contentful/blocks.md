---
sidebar_position: 100
---

# Blocks

This document provides an overview of block implementation status in the Contentful CMS integration.

## Implementation status

The following table shows the implementation status of all blocks available in the O2S framework:

| Block                 | Status | Contentful Type   | Notes             |
| --------------------- | ------ | ----------------- | ----------------- |
| article               | ❌     | -                 | Not implemented   |
| article-list          | ✅     | BlockArticleList  | Fully implemented |
| article-search        | ❌     | -                 | Not implemented   |
| category              | ✅     | BlockCategory     | Fully implemented |
| category-list         | ✅     | BlockCategoryList | Fully implemented |
| faq                   | ✅     | BlockFaq          | Fully implemented |
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
| quick-links           | ✅     | BlockQuickLinks   | Fully implemented |
| resource-details      | ❌     | -                 | Not implemented   |
| resource-list         | ❌     | -                 | Not implemented   |
| service-details       | ❌     | -                 | Not implemented   |
| service-list          | ❌     | -                 | Not implemented   |
| surveyjs-form         | ❌     | -                 | Not implemented   |
| ticket-details        | ❌     | -                 | Not implemented   |
| ticket-list           | ✅     | BlockTicketList   | Fully implemented |
| ticket-recent         | ❌     | -                 | Not implemented   |
| user-account          | ❌     | -                 | Not implemented   |

## Mocked blocks

The following blocks return static mock data instead of fetching content from Contentful:

- `article-search` - Returns mock search results
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
- `resource-details` - Returns mock resource details
- `resource-list` - Returns mock resource list
- `service-details` - Returns mock service details
- `service-list` - Returns mock service list
- `surveyjs-form` - Returns mock survey form
- `ticket-details` - Returns mock ticket details
- `ticket-recent` - Returns mock recent tickets
- `user-account` - Returns mock user account data

## Notes

- Mocked blocks are useful for development and testing but should be replaced with real Contentful content types for production use
- All implemented blocks support Live Preview when metadata is included in the mapper
- Block mappers should handle both published and draft content based on the `preview` parameter
- Metadata should only be included when `isPreview` is `true` to avoid unnecessary data for regular users

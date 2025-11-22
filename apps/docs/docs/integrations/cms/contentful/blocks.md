---
sidebar_position: 700
---

# Blocks

This document provides an overview of block implementation status in the Contentful CMS integration.

## Implementation status

The following table shows the implementation status of all blocks available in the O2S framework:

| Block                  | Status | Contentful Type      | Notes                                    |
|------------------------|--------|----------------------|------------------------------------------|
| article                | ❌     | -                    | Not implemented                          |
| article-list           | ✅     | BlockArticleList     | Fully implemented with Contentful mapping |
| article-search         | ⚠️     | -                    | Returns mock data                        |
| category               | ✅     | BlockCategory        | Fully implemented with Contentful mapping |
| category-list          | ✅     | BlockCategoryList    | Fully implemented with Contentful mapping |
| faq                    | ✅     | BlockFaq             | Fully implemented with Contentful mapping |
| featured-service-list | ⚠️     | -                    | Returns mock data                        |
| invoice-details        | ⚠️     | -                    | Returns mock data                        |
| invoice-list           | ⚠️     | -                    | Returns mock data                        |
| notification-details   | ⚠️     | -                    | Returns mock data                        |
| notification-list      | ⚠️     | -                    | Returns mock data                        |
| order-details          | ⚠️     | -                    | Returns mock data                        |
| order-list             | ⚠️     | -                    | Returns mock data                        |
| orders-summary         | ⚠️     | -                    | Returns mock data                        |
| payments-history       | ⚠️     | -                    | Returns mock data                        |
| payments-summary       | ⚠️     | -                    | Returns mock data                        |
| quick-links            | ✅     | BlockQuickLinks      | Fully implemented with Contentful mapping |
| resource-details       | ⚠️     | -                    | Returns mock data                        |
| resource-list          | ⚠️     | -                    | Returns mock data                        |
| service-details        | ⚠️     | -                    | Returns mock data                        |
| service-list           | ⚠️     | -                    | Returns mock data                        |
| surveyjs-form          | ⚠️     | -                    | Returns mock data                        |
| ticket-details         | ⚠️     | -                    | Returns mock data                        |
| ticket-list            | ✅     | BlockTicketList      | Fully implemented with Contentful mapping |
| ticket-recent          | ⚠️     | -                    | Returns mock data                        |
| user-account           | ⚠️     | -                    | Returns mock data                        |

## Status legend

- ✅ **Fully implemented** - Block has a corresponding Contentful content type and mapper that fetches real data from Contentful
- ⚠️ **Mocked** - Block mapper exists but returns static mock data instead of fetching from Contentful
- ❌ **Not implemented** - Block has no mapper or Contentful content type

## Implemented blocks

The following blocks are fully implemented with Contentful content types and mappers:

### BlockArticleList

Article list block for displaying a list of articles.

**Contentful type:** `BlockArticleList`

**Features:**
- Article listing with pagination
- Category filtering
- Search functionality
- Customizable display options

### BlockCategory

Category display block for showing a single category.

**Contentful type:** `BlockCategory`

**Features:**
- Category information display
- Related content links
- Category description

### BlockCategoryList

Category list block for displaying multiple categories.

**Contentful type:** `BlockCategoryList`

**Features:**
- Multiple category display
- Grid or list layout options
- Category filtering

### BlockFaq

FAQ block for displaying frequently asked questions.

**Contentful type:** `BlockFaq`

**Features:**
- Accordion-style FAQ items
- Title and subtitle
- Optional banner component
- Live Preview support with metadata

**Example usage:**
```typescript
// GraphQL fragment
fragment FaqComponent on BlockFaq {
    __typename
    sys { ...Sys }
    title
    subtitle
    itemsCollection {
        items {
            sys { ...Sys }
            title
            content
        }
    }
}
```

### BlockQuickLinks

Quick links block for navigation shortcuts.

**Contentful type:** `BlockQuickLinks`

**Features:**
- Link collection
- Icon support
- Customizable layout

### BlockTicketList

Ticket list block for displaying support tickets.

**Contentful type:** `BlockTicketList`

**Features:**
- Table display with configurable columns
- Field mapping for custom labels
- Pagination support
- Filtering and sorting options

## Mocked blocks

The following blocks have mappers but return static mock data instead of fetching from Contentful:

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

These blocks are functional but use hardcoded mock data. To implement them fully:

1. Create the corresponding Contentful content type
2. Update the GraphQL fragments to include the new block type
3. Update the mapper to fetch real data from Contentful instead of returning mock data
4. Add the block to the `Component` fragment's union type

## Not implemented blocks

The following block has no implementation:

- `article` - No mapper or Contentful content type exists

## Adding new blocks

To add a new block to the Contentful integration:

1. **Create Contentful content type** - Define the block structure in Contentful
2. **Create GraphQL fragment** - Add a fragment in `./src/modules/cms/graphql/fragments/blocks/`
3. **Update Component fragment** - Add the new block type to the `Component` fragment union
4. **Create mapper** - Implement the mapper in `./src/modules/cms/mappers/blocks/`
5. **Update CMS service** - Register the mapper in the CMS service
6. **Generate types** - Run `npm run generate` to generate TypeScript types
7. **Test** - Verify the block works with both published and draft content

## Notes

- Mocked blocks are useful for development and testing but should be replaced with real Contentful content types for production use
- All implemented blocks support Live Preview when metadata is included in the mapper
- Block mappers should handle both published and draft content based on the `preview` parameter
- Metadata should only be included when `isPreview` is `true` to avoid unnecessary data for regular users


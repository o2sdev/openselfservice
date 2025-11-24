---
sidebar_position: 200
---

# Content model

The Contentful content model for O2S is based on three main types:

- **Page** that represents any route within the frontend app; we do not model specific pages within the CMS, and instead allow editors to compose the pages they need out of generic types,
- **Template** that defines the layout of the page and can include simple one- or two-column layouts or more complex ones, and allows the editors to decide where each component should be rendered,
- **Block** that represents some (smaller or larger) piece of UI that can be placed anywhere in the page layout by the editors.

This structure is similar to the Strapi content model but adapted for Contentful's entry reference system, which uses linked entries instead of dynamic zones.

## Pages

A model for the page is the most important one, as it defines:

- the slug for the page, which is matched against the URL in the browser, and which is a localized text field (which means that the page can have different slugs in each language),
- the template for the page that stores the components' definitions for that page, and which is a reference to a Template content type,
- SEO metadata for the page,
- optional permissions field for access control.

### Resolving pages

To resolve a single page to an entry within the CMS, the following process happens:

1. A GraphQL query is executed using `pageCollection` with a filter on the `slug` field
2. The query matches pages by exact slug for the given locale
3. The first matching page is returned (limit: 1)
4. The page's template and all referenced blocks are resolved through linked entries

Contentful uses collection-based queries (`pageCollection`) rather than direct queries, which allows for more flexible filtering and pagination.

### Sys metadata

Each Contentful entry includes system metadata in the `sys` field:

- `id` - the unique entry ID
- `publishedAt` - timestamp when the entry was first published
- `firstPublishedAt` - timestamp when the entry was first published
- `publishedVersion` - the version number when published
- `contentfulMetadata` - additional metadata including tags and taxonomy

This metadata is used for versioning, publishing workflow, and cache invalidation.

## Templates

The content type for the templates is based on a simple system of slots that define some predefined location within the frontend app. The available templates are highly configurable and tailored to UI needs.

Currently supported templates:

- **OneColumnTemplate** - a single column layout with top, main, and bottom slots
- **TwoColumnTemplate** - a two-column layout with top, left, right, and bottom slots

Each slot is a reference field to a Block content type, where multiple instances can be placed (so, in other words, a single slot can accept multiple blocks through a collection reference).

Unlike Strapi's dynamic zones, Contentful uses linked entry references. This means blocks are stored as separate entries and referenced by their entry ID, allowing for better reusability and content management.

## Blocks

Before we started modeling the content, we established a few additional requirements that would allow the content editors to work efficiently.

One of those was to have the possibility to reuse the same components on different pages, without having to maintain duplicates. Having to keep track of, for example, the same generic FAQ for the app that appears on most pages, without having a single instance of it, would be a nightmare – especially as the app grows and expands.

To solve this issue, we've introduced a Block content type that represents a single instance of some piece of content. It consists of:

- a name mostly for internal use by the editors to identify each instance, e.g. "FAQ about the tickets" and "FAQ about the invoices",
- content that's a reference to specific block content types (like BlockFaq, BlockTicketList, etc.).

### Block variants

Currently implemented block types include:

- **BlockFaq** - FAQ component with title, subtitle, and accordion items
- **BlockTicketList** - Ticket list with table configuration and field mappings
- **BlockQuickLinks** - Quick links navigation component
- **BlockCategory** - Category display component
- **BlockCategoryList** - Category list component
- **BlockArticleList** - Article list component

Each block type has its own specific fields and configuration options. For example, the FAQ component consists of:

- title and subtitle text fields
- items collection (linked entries to ComponentFaqItem)
- optional banner component

While the FAQ component is quite simple and on the frontend renders only the static content from the CMS, it doesn't mean that only such components can be defined within Contentful. Another component example is the Ticket List, which on the frontend renders a table with the user's tickets. This one is more complex - aside from the title, it also handles:

- fields that use a generic component that allows mapping fields in the API data model to more user-friendly labels (ComponentFieldMapping),
- a table configuration that defines which columns should be displayed on the frontend (ComponentTable),
- pagination settings (ComponentPagination).

## Entry references vs dynamic zones

A key difference between Contentful and Strapi is how they handle component composition:

- **Strapi** uses dynamic zones, where components are embedded directly within the parent entry
- **Contentful** uses entry references (linked entries), where components are stored as separate entries and referenced by ID

This approach in Contentful provides several advantages:

- Better content reusability (the same block can be referenced from multiple pages)
- Easier content management (blocks can be edited independently)
- Better performance (blocks can be cached separately)
- More flexible content modeling (blocks can have their own relationships)

However, it also requires more complex queries to resolve all referenced content, which is handled automatically by the integration's GraphQL queries.


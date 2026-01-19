---
sidebar_position: 300
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
- optional roles field for access control.

The roles field allows content editors to configure which user roles can access the page. This gives content editors flexibility to control page access without requiring code changes. When a page is requested, the API Harmonization server checks if the user has at least one of the required roles. If no roles are specified, the page is publicly accessible.

Pages can also use permission-based access control via decorators in addition to CMS-configured roles. For more details on how roles and permissions work together, see the [authentication documentation](../../main-components/harmonization-app/authentication.md).

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

Each slot is a reference field to a Block content type, where multiple instances can be placed (so, in other words, a single slot can accept multiple blocks through a collection reference).

Unlike Strapi's dynamic zones, Contentful uses linked entry references. This means blocks are stored as separate entries and referenced by their entry ID, allowing for better reusability and content management.

## Blocks

Before we started modeling the content, we established a few additional requirements that would allow the content editors to work efficiently.

One of those was to have the possibility to reuse the same components on different pages, without having to maintain duplicates. Having to keep track of, for example, the same generic FAQ for the app that appears on most pages, without having a single instance of it, would be a nightmare – especially as the app grows and expands.

To solve this issue, we've introduced a Block content type that represents a single instance of some piece of content. It consists of:

- a name mostly for internal use by the editors to identify each instance, e.g. "FAQ about the tickets" and "FAQ about the invoices",
- content that's a reference to specific block content types (like BlockFaq, BlockTicketList, etc.).

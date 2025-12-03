---
sidebar_position: 200
---

# Features

This document provides an overview of features supported by the Contentful CMS integration.

## Overview

| Feature              | Status | Notes                                                                                 |
|----------------------| ------ |---------------------------------------------------------------------------------------|
| [GraphQL API](#graphql-api)          | ✅     | Primary API for all content operations                                                |
| [REST Delivery API](#rest-delivery-api)    | ✅     | Used for specific operations like retrieving locales via getLocales                   |
| [Preview API](#preview-api)          | ✅     | Supported for draft/unpublished content                                               |
| [Content Localization](#content-localization) | ✅     | Full multi-locale support                                                             |
| [Multi-environment](#multi-environment)    | ✅     | Supported via CF_ENV environment variable                                             |
| [Live Preview](#live-preview)         | ✅     | Supported with LivePreviewProvider and metadata pattern                               |
| [Themes/Layouts](#themeslayouts)       | ✅     | Supported via OneColumn and TwoColumn templates                                       |
| [Media Management](#media-management)     | ✅     | Supported via ComponentMedia content type                                             |
| [SEO Metadata](#seo-metadata)         | ✅     | Supported via PageSeo component                                                       |
| [Field Mapping](#field-mapping)        | ✅     | Supported via ComponentFieldMapping for custom labels                                 |
| [Table Configuration](#table-configuration)  | ✅     | Supported via ComponentTable for data table setup                                     |
| [Pagination](#pagination)           | ✅     | Supported via ComponentPagination                                                     |
| [Cache Integration](#cache-integration)    | ✅     | Full cache support for optimized performance                                          |
| [Code Generation](#code-generation)      | ✅     | TypeScript types and SDK generated from GraphQL schema via graphql-codegen            |
| [Type Safety](#type-safety)          | ✅     | Full TypeScript type safety from GraphQL schema                                       |
| [Permissions/Roles](#permissionsroles)    | ⚠️     | Partially supported - permissions field exists on Page, but full RBAC not implemented |
| [Live updates](#live-updates)         | ❌     | Not supported                                                                         |

## Feature details

### GraphQL API {#graphql-api}

GraphQL is the primary API for all content operations, providing type-safe queries, efficient data fetching, and automatic SDK generation.

For detailed information, see the [GraphQL documentation](./graphql.md).

### REST Delivery API {#rest-delivery-api}

The REST Delivery API is used for specific operations that are not available through GraphQL, such as:

- Retrieving locale information via `getLocales()`

The REST API client is available through `RestDeliveryService` and uses the Contentful JavaScript SDK.

### Preview API {#preview-api}

The Preview API allows access to draft and unpublished content. It works alongside the Delivery API:

- **Delivery API** - Returns only published content (uses `CF_TOKEN`)
- **Preview API** - Returns both published and draft content (uses `CF_PREVIEW_TOKEN`)

The integration automatically switches between APIs based on the `preview` parameter in queries.

### Content Localization {#content-localization}

Contentful supports multiple locales out of the box. The integration:

- Fetches content for the specified locale
- Supports locale fallback (if content is not available in the requested locale)
- Handles locale-specific slugs for pages
- Maintains locale context throughout the data flow

### Multi-environment {#multi-environment}

Contentful supports multiple environments (e.g., `master`, `staging`, `development`). The integration:

- Uses the `CF_ENV` environment variable to specify the environment
- Supports environment-specific content
- Allows separate content models per environment

### Live Preview {#live-preview}

Live Preview allows content editors to see their changes in real-time as they edit content in Contentful. The implementation uses a metadata pattern to bridge the gap between our normalized data model and Contentful's structure.

For detailed information, see the [Live Preview documentation](./live-preview.md).

### Themes/Layouts {#themeslayouts}

Page layouts are defined through Template content types:

- **OneColumnTemplate** - Single column layout with top, main, and bottom slots
- **TwoColumnTemplate** - Two column layout with top, left, right, and bottom slots

Templates can be extended with additional layout variants as needed.

### Media Management {#media-management}

Media assets are managed through Contentful's Asset API and accessed via the `ComponentMedia` content type:

- Image optimization through Contentful's Image API
- Responsive image support
- Asset metadata (alt text, title, description)

### SEO Metadata {#seo-metadata}

SEO metadata is managed through the `ComponentSeo` content type, which includes:

- Page title
- Meta description
- Keywords
- Open Graph image
- Additional SEO fields

### Field Mapping {#field-mapping}

Field mapping allows customizing labels for API field values. This is useful for:

- Displaying user-friendly labels for enum values
- Localizing field labels
- Customizing table column headers

Implemented via `ComponentFieldMapping` and `ComponentKeyValue` content types.

### Table Configuration {#table-configuration}

Table configuration allows defining which columns to display and how to display them. This is useful for:

- Data tables (invoices, orders, tickets, etc.)
- Customizable column visibility
- Sortable and filterable tables

Implemented via `ComponentTable` content type.

### Pagination {#pagination}

Pagination is supported through the `ComponentPagination` content type, which allows:

- Configuring items per page
- Enabling/disabling pagination controls
- Custom pagination settings per block

### Cache Integration {#cache-integration}

The integration uses the framework's cache module for:

- Caching page data
- Caching component data
- Cache invalidation on content updates
- Performance optimization

Cached entries are stored using `{id}-{locale}` keys to ensure uniqueness.

### Code Generation {#code-generation}

TypeScript types and SDK methods are automatically generated from GraphQL queries using `graphql-codegen`. For detailed information, see the [GraphQL documentation](./graphql.md#code-generation).

### Type Safety {#type-safety}

Full TypeScript type safety is provided through generated types from the GraphQL schema, ensuring compile-time validation. For detailed information, see the [GraphQL documentation](./graphql.md#type-safety-benefits).

### Permissions/Roles {#permissionsroles}

The Page content type includes a `permissions` field that can store permission strings. However, full role-based access control (RBAC) is not currently implemented in the integration. The permissions field is available in the data model but requires custom implementation for enforcement.

### Live updates {#live-updates}

Live updates are currently not supported. The integration does not provide real-time content synchronization when content is updated in Contentful. Content changes require a page refresh or cache invalidation to be visible.

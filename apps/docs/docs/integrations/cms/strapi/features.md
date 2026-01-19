---
sidebar_position: 200
---

# Features

This document provides an overview of features supported by the Strapi CMS integration.

## Overview

| Feature                                       | Status | Notes                                                                      |
| --------------------------------------------- | ------ | -------------------------------------------------------------------------- |
| [GraphQL API](#graphql-api)                   | ✅     | Primary API for all content operations                                     |
| [Content Localization](#content-localization) | ✅     | Full multi-locale support                                                  |
| [Dynamic Routing](#dynamic-routing)           | ✅     | Regex-based slug matching for dynamic pages                                |
| [Themes/Layouts](#themeslayouts)              | ✅     | Supported via OneColumn and TwoColumn templates                            |
| [Media Management](#media-management)         | ✅     | Via Strapi media library                                                   |
| [SEO Metadata](#seo-metadata)                 | ✅     | Supported via ComponentSeo                                                 |
| [Field Mapping](#field-mapping)               | ✅     | Supported via ComponentFieldMapping for custom labels                      |
| [Table Configuration](#table-configuration)   | ✅     | Supported via ComponentTable for data table setup                          |
| [Pagination](#pagination)                     | ✅     | Supported via ComponentPagination                                          |
| [Cache Integration](#cache-integration)       | ✅     | Full cache support for optimized performance                               |
| [Code Generation](#code-generation)           | ✅     | TypeScript types and SDK generated from GraphQL schema via graphql-codegen |
| [Type Safety](#type-safety)                   | ✅     | Full TypeScript type safety from GraphQL schema                            |
| [Permissions/Roles](#permissionsroles)        | ✅     | Role-based content access control                                          |
| [Survey Forms](#survey-forms)                 | ✅     | SurveyJS integration for dynamic forms                                     |
| [Organization List](#organization-list)       | ✅     | Multi-organization support                                                 |
| [Login Page](#login-page)                     | ✅     | Customizable login page content                                            |
| [Not Found Page](#not-found-page)             | ✅     | Customizable 404 page content                                              |
| [Live Preview](#live-preview)                 | ❌     | Not supported                                                              |
| [Live Updates](#live-updates)                 | ❌     | Not supported                                                              |

## Feature details

### GraphQL API {#graphql-api}

GraphQL is the primary API for all content operations, providing type-safe queries, efficient data fetching, and automatic SDK generation.

For detailed information, see the [GraphQL documentation](./graphql.md).

### Content Localization {#content-localization}

Strapi supports multiple locales out of the box through its i18n plugin. The integration:

- Fetches content for the specified locale
- Supports locale fallback (if content is not available in the requested locale)
- Handles locale-specific slugs for pages
- Maintains locale context throughout the data flow
- Retrieves available locales via the `getLocales` operation

### Dynamic Routing {#dynamic-routing}

The integration supports dynamic routing with regex-based slug matching. This allows:

- Pages with dynamic segments like `/tickets/{.+}` to be defined in Strapi
- Matching URLs with dynamic IDs (e.g., `/tickets/123`)
- Flexible URL patterns for various content types

The matching process works by fetching all pages for a locale and finding one whose slug matches the requested URL using a regex pattern.

### Themes/Layouts {#themeslayouts}

Page layouts are defined through Template content types:

- **OneColumnTemplate** - Single column layout with top, main, and bottom slots
- **TwoColumnTemplate** - Two column layout with top, left, right, and bottom slots

Templates can be extended with additional layout variants as needed.

### Media Management {#media-management}

Media assets are managed through Strapi's built-in Media Library:

- Image optimization and responsive images
- Asset metadata (alt text, title, caption)
- Multiple format support
- Centralized media management

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

Implemented via `ComponentFieldMapping` and related content types.

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

Cached entries are [stringified](https://www.npmjs.com/package/flatted) and stored using `{id}-{locale}` keys to ensure uniqueness.

### Code Generation {#code-generation}

TypeScript types and SDK methods are automatically generated from GraphQL queries using `graphql-codegen`. For detailed information, see
the [GraphQL documentation](./graphql.md#code-generation).

### Type Safety {#type-safety}

Full TypeScript type safety is provided through generated types from the GraphQL schema, ensuring compile-time validation. For detailed information, see
the [GraphQL documentation](./graphql.md).

### Permissions/Roles {#permissionsroles}

Role-based content access control is fully supported in the Strapi integration. The `roles` field on Pages, Articles, and Navigation Items allows content
editors to restrict access based on user roles.

This gives content editors flexibility to control page access without requiring code changes. When a page is requested, the API Harmonization server checks if
the user has at least one of the required roles. If the user doesn't have the required role, access is denied.

Supported roles:

- `prospect` - Maps to `PROSPECT` role
- `user` - Maps to `ORG_USER` role
- `admin` - Maps to `ORG_ADMIN` role

The roles are defined in Strapi via `ComponentSeoUserRoles` and mapped to the framework's authentication constants, enabling seamless integration with the
frontend's access control system.

Pages can also use permission-based access control via decorators in addition to CMS-configured roles. For more details on how roles and permissions work
together, see the [authentication documentation](../../../main-components/harmonization-app/authentication.md).

### Survey Forms {#survey-forms}

The integration includes support for SurveyJS forms:

- Dynamic form definitions stored in Strapi
- Survey retrieval via `getSurvey` operation
- Integration with the SurveyJS module for form rendering

### Organization List {#organization-list}

Multi-organization support is available through:

- `getOrganizationList` operation for retrieving organization data
- Organization-specific content management
- Multi-tenant content capabilities

### Login Page {#login-page}

Customizable login page content is supported via:

- `getLoginPage` operation for fetching login page content
- Localized login page content
- Custom branding and messaging for the authentication flow

### Not Found Page {#not-found-page}

Customizable 404 page content is supported via:

- `getNotFoundPage` operation for fetching 404 page content
- Localized error page content
- Custom messaging for missing pages

### Live Preview {#live-preview}

Live Preview is not supported in the Strapi integration. Unlike the Contentful integration, Strapi does not provide native Live Preview capabilities. The
`LivePreviewProvider` and `useInspector` hook exist in the codebase as no-op placeholders to maintain API compatibility with other CMS integrations.

### Live Updates {#live-updates}

Live updates are currently not supported. The integration does not provide real-time content synchronization when content is updated in Strapi. Content changes
require a page refresh or cache invalidation to be visible.

---
sidebar_position: 200
---

# Features

This page provides an overview of the features and capabilities provided by the Zendesk Help Center integration.

## Core functionality

The Zendesk Help Center integration implements the framework's `Articles.Service` interface, providing knowledge base functionality that works with the Zendesk Help Center API.

## Features

The Zendesk Help Center integration provides:

- **Viewing individual articles** - Retrieve full article details including content, author, and attachments
- **Listing articles** - Get a list of articles with optional category filtering and pagination
- **Viewing categories** - Retrieve category details with localized content
- **Listing categories** - Get all available categories
- **Searching articles** - Full-text search across articles with filters
- **Multi-language support** - Automatic locale mapping (en → en-us, de → de-de, pl → pl)
- **Data normalization** - Automatic conversion of Zendesk data structures to the standard article model
- **Author information** - Fetch author details for articles
- **Attachment handling** - Extract images and attachments from articles

## Supported ArticleService Methods

The following table shows which methods from the base ArticleService are currently supported by the Zendesk integration:

| Method          | Description                                | Supported |
| --------------- | ------------------------------------------ | --------- |
| getArticle      | Retrieve a single article by slug/ID       | ✓         |
| getArticleList  | Retrieve a list of articles with filtering | ✓         |
| getCategory     | Retrieve a single category by ID or slug   | ✓         |
| getCategoryList | Retrieve a list of categories              | ✓         |
| searchArticles  | Search articles with query and filters     | ✓         |

## Module Structure

The Zendesk Help Center integration is structured into several components:

### 1. API Client Generation

The integration uses an automated process to generate TypeScript types and API client methods from the Zendesk OpenAPI specification:

- **Source**: Fetches OpenAPI specification from Zendesk
- **Tool**: Uses `@hey-api/openapi-ts` to generate TypeScript types
- **Output**: Generated files are placed in `generated/help-center` directory
- **Automation**: Scripts run automatically during `npm run prepare`

**Available scripts:**

```shell
# Fetch the latest OpenAPI specification
npm run fetch-oas

# Generate TypeScript types and API client
npm run generate-types
```

These scripts are automatically run during the package preparation phase, ensuring that the API client is always up-to-date with the latest Zendesk API.

### 2. Article Service

The `ZendeskArticleService` handles:

- **Authentication** - Configures API client with Base64-encoded token
- **Locale mapping** - Converts application locales to Zendesk format
- **Article retrieval** - Fetches articles with sections, attachments, and author info
- **Category resolution** - Resolves category IDs from slugs or numeric IDs
- **Search** - Implements full-text search with category filtering
- **Error handling** - Gracefully handles 404 errors and missing data

### 3. Data Normalization

The integration automatically converts Zendesk-specific data structures to the standard article model:

- Maps Zendesk fields to normalized article properties
- Converts HTML body to article sections
- Extracts lead text from article body
- Builds localized slugs with category paths
- Processes attachments for images and thumbnails
- Handles author information with avatars

## Locale Mapping

The integration automatically maps application locales to Zendesk Help Center format:

| Application Locale | Zendesk Locale |
| ------------------ | -------------- |
| en                 | en-us          |
| de                 | de-de          |
| pl                 | pl             |

This mapping is applied automatically when making API requests to ensure proper locale-specific content is returned.

## Module Configuration

The integration exports the following components:

- **Service** - `ZendeskArticleService` implementing `Articles.Service`
- **Module** - `ZendeskArticleModule` for NestJS dependency injection

The integration is configured with:

```typescript
{
  name: 'zendesk',
  service: ZendeskArticleService,
  imports: [HttpModule]
}
```

## Data Normalization

The integration maps Zendesk article data to the standard article model with the following transformations:

### Field Mapping

| Zendesk Field  | Normalized Field | Notes                                  |
| -------------- | ---------------- | -------------------------------------- |
| id             | id               | Converted to string                    |
| created_at     | createdAt        | ISO date string                        |
| updated_at     | updatedAt        | ISO date string                        |
| title          | title            | Article title                          |
| body           | sections         | Parsed into ArticleSectionText         |
| body (excerpt) | lead             | First 300 characters of plain text     |
| label_names    | tags             | Article labels/tags                    |
| html_url       | slug             | Article segment extracted from URL     |
| author_id      | author           | Fetched separately with avatar         |
| section_id     | category         | Resolved via section → category lookup |

### Category Field Mapping

| Zendesk Field | Normalized Field | Notes                                |
| ------------- | ---------------- | ------------------------------------ |
| id            | id               | Converted to string                  |
| created_at    | createdAt        | ISO date string                      |
| updated_at    | updatedAt        | ISO date string                      |
| name          | title            | Category name                        |
| description   | description      | Category description                 |
| html_url      | slug             | Category segment only (no base path) |

### Slug Generation

The Zendesk integration returns article and category slugs as segments extracted from Zendesk URLs:

**Article slug format:**

```
{category-id}-{category-name}/{article-id}-{article-title}
```

**Category slug format:**

```
{category-id}-{category-name}
```

The base path (e.g., `/help-and-support`) is **not** included in the slug returned by the integration. Instead, it's configured in the CMS block configuration via `parent.slug` property. This allows for flexible URL structures without hardcoding locale-specific paths in the integration code.

**Example slugs returned by the integration:**

- Article: `12345-Maintenance/67890-Tool-Care-Guide`
- Category: `12345-Maintenance`

**Full URL construction happens in:**

- CMS blocks (ArticleList, CategoryList) using `cms.parent.slug`
- Page mapper for article detail pages using extracted base path from URL

### Article Sections

Article body content is converted into sections:

- **ArticleSectionText** - HTML content from article body
- Images embedded in HTML are preserved inline
- Attachments are processed for featured images and thumbnails

### Image Handling

The integration extracts images from article attachments:

- **Featured image**: First non-inline attachment, fallback to first inline
- **Thumbnail**: First inline attachment, fallback to first non-inline
- Images must have `content_type` starting with `image/`

### Author Mapping

When fetching article author:

- Uses Zendesk Ticketing API to fetch user details
- Extracts avatar from `photo.content_url` or `remote_photo_url`
- Maps role to position field

## Zendesk Help Center Structure

Understanding Zendesk Help Center hierarchy:

```
Help Center
├── Categories (e.g., "Help and Support")
│   ├── Sections (e.g., "Maintenance", "Warranty")
│   │   └── Articles (e.g., "Tool Care Guide")
```

The integration:

1. Fetches articles with their section IDs
2. Resolves section → category relationship
3. Builds proper slugs with category information

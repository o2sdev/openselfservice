---
sidebar_position: 200
---

# Features

This page provides an overview of the features and capabilities provided by the Algolia integration.

## Core functionality

The Algolia integration implements the framework's `Search.Service` interface, providing two main search methods that work with Algolia indexes.

## Search methods

### Generic search: `search<T>()`

Performs a generic search across any type of data stored in Algolia indexes. Returns raw search results from Algolia.

**Method signature:**

```typescript
search<T>(indexName: string, payload: Search.Model.SearchPayload): Observable<Search.Model.SearchResult<T>>
```

**What it does:**

- Executes a search query against the specified Algolia index
- Transforms the `SearchPayload` into Algolia query parameters
- Returns results in the framework's `SearchResult<T>` format
- Handles errors gracefully (returns empty results for 404 errors)

**Use cases:**

- Searching any custom data types stored in Algolia
- Generic content search across different index types
- When you need raw Algolia results without transformation

### Article search: `searchArticles()`

Performs a specialized search for articles with automatic mapping to the framework's article model.

**Method signature:**

```typescript
searchArticles(indexName: string, payload: Search.Model.SearchPayload): Observable<Articles.Model.Articles>
```

**What it does:**

- Uses `search<SearchEngineArticleModel>()` internally
- Automatically maps `SearchEngineArticleModel` results to `Articles.Model.Articles`
- Returns articles in the framework's standard article format

**Use cases:**

- Knowledge base article search
- Documentation search
- Content search that needs to match the framework's article model

## Supported query features

The integration supports the following query parameters from `SearchPayload`:

### Text search (`query`)

Full-text search across indexed content. The query string is passed directly to Algolia's search API.

```typescript
{
    query: 'getting started';
}
```

### Locale filtering (`locale`)

Filters results by locale using Algolia facet filters. The locale is converted to `locale:{locale}` format.

```typescript
{
    locale: 'en';
}
```

### Exact matching (`exact`)

Filters by exact field values using Algolia facet filters. Supports:

- Single values: `{ category: "guides" }`
- Array values: `{ tags: ["javascript", "typescript"] }` (creates multiple filters)

```typescript
{
  exact: {
    category: "guides",
    status: "published",
    tags: ["javascript", "typescript"]
  }
}
```

### Range filtering (`range`)

Filters numeric or date fields by range using Algolia numeric filters. Supports `min` and `max` values.

```typescript
{
  range: {
    price: {
      min: 10,
      max: 100
    },
    publishedAt: {
      min: "2024-01-01"
    }
  }
}
```

### Pagination (`pagination`)

Controls result pagination. The integration converts `offset` to Algolia's `page` parameter:

- `limit`: Number of results per page
- `offset`: Starting position (converted to page number)

**Conversion formula:** `page = Math.floor(offset / limit)`
**Default limit:** `20` (if not specified)

```typescript
{
  pagination: {
    limit: 10,
    offset: 40  // Will be converted to page 4
  }
}
```

### Sorting (`sort`)

Sorts results by field. **Important:** Only the first sort configuration is used, and it modifies the index name.

**Index name modification:**

- Original: `articles`
- With sort: `{ field: "publishedAt", order: "desc" }`
- Modified: `articles_publishedAt_desc`

This means you need separate Algolia indexes for each sort configuration.

```typescript
{
    sort: [
        {
            field: 'publishedAt',
            order: 'desc',
        },
    ];
}
```

## Automatic features

### Facets

The integration automatically adds `facets: ['*']` to all search queries. This enables facet filtering capabilities in Algolia, allowing you to use the `exact` filter on any facetable attribute.

### Error handling

- **Missing environment variables**: Throws error during service initialization
- **Missing index name**: Throws error if index name is not provided
- **Index not found (404)**: Returns empty result set (`{ hits: [], total: 0 }`) gracefully
- **Other API errors**: Logged and re-thrown for framework error handling

### Logging

The integration logs at debug level:

- Original search payload
- Transformed Algolia query

Errors are logged at error level with full details.

## Article data model

When using `searchArticles()`, the integration expects articles in Algolia to follow the `SearchEngineArticleModel` structure:

```typescript
type SearchEngineArticleModel = {
    id: string;
    documentId: string;
    slug: string;
    locale?: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    SEO: {
        title: string;
        noIndex: boolean;
        noFollow: boolean;
        description: string;
        keywords?: Array<{ keyword: string }>;
        image?: {
            url: string;
            alternativeText?: string;
            width?: number;
            height?: number;
            name: string;
        };
    };
};
```

### Mapping to Articles.Model.Article

The `searchArticles()` method maps fields as follows:

| Article Model Field | Source Field      | Notes                             |
| ------------------- | ----------------- | --------------------------------- |
| `id`                | `documentId`      | Uses documentId as the article ID |
| `slug`              | `slug`            | Direct mapping                    |
| `title`             | `SEO.title`       | From SEO object                   |
| `lead`              | `SEO.description` | From SEO object                   |
| `createdAt`         | `updatedAt`       | Uses updatedAt for both           |
| `updatedAt`         | `updatedAt`       | Uses updatedAt for both           |
| `permissions`       | -                 | Initialized as empty array        |
| `tags`              | -                 | Initialized as empty array        |
| `sections`          | -                 | Initialized as empty array        |

**Note:** The mapper uses `updatedAt` for both `createdAt` and `updatedAt` fields, and initializes `permissions`, `tags`, and `sections` as empty arrays.

## Limitations

The following `SearchPayload` fields are **not implemented** in the Algolia integration:

- `exists` - Field existence filtering (not converted to Algolia query)
- `notExists` - Field non-existence filtering (not converted to Algolia query)
- `filter` - Custom filters (not converted to Algolia query)

These fields are part of the `SearchPayload` model but are not processed by the `buildQuery()` method.

## Response structure

All search methods return results in the `SearchResult<T>` format:

```typescript
{
  hits: T[];              // Array of search results
  total: number;          // Total number of matching results
  page?: number;          // Current page (if pagination used)
  nbPages?: number;      // Total number of pages (if pagination used)
  processingTimeMS?: number; // Query processing time
}
```

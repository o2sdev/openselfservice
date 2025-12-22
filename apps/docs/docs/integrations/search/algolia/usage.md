---
sidebar_position: 250
---

# Usage

This page provides practical examples and API reference for using the Algolia integration.

## API endpoint

The integration provides access to search functionality through the framework's search controller:

### GET /search

Performs a search query against a specified Algolia index.

**Endpoint:** `GET /search?index={indexName}`

**Query parameters:**

| parameter | type   | description                    | required |
|-----------|--------|--------------------------------|----------|
| index     | `string` | Name of the Algolia index      | yes      |

**Request body:**

The request body should contain a `SearchPayload` object with search parameters.

**Response:**

Returns a `SearchResult<T>` object with search results.

**Example using cURL:**

```bash
curl -X GET "http://localhost:3000/search?index=articles" \
  -H "Content-Type: application/json" \
  -d '{
    "query": "getting started",
    "locale": "en",
    "pagination": {
      "limit": 10,
      "offset": 0
    }
  }'
```

## SearchPayload structure

The `SearchPayload` class defines the structure for search queries. All fields are optional and can be combined.

| field      | type                                                      | description                                                                 |
|------------|-----------------------------------------------------------|-----------------------------------------------------------------------------|
| query      | `string`                                                  | Text search query                                                           |
| locale     | `string`                                                  | Filter results by locale (e.g., "en", "pl")                                 |
| exact      | `Record<string, string \| number \| boolean \| null \| object \| array>` | Exact match filters (converted to Algolia facet filters)                    |
| range      | `Record<string, { min?: string \| number \| Date \| boolean; max?: string \| number \| Date \| boolean }>` | Range filters for numeric or date fields (converted to Algolia numeric filters) |
| pagination | `{ offset?: number; limit?: number }`                    | Pagination parameters                                                        |
| sort       | `Array<{ field: string; order: 'asc' \| 'desc' }>`       | Sort configuration (only first element used, modifies index name)          |

**Note:** The `exists`, `notExists`, and `filter` fields from `SearchPayload` are not implemented in the Algolia integration.

### Query examples

**Simple text search:**

```json
{
  "query": "getting started"
}
```

**With locale filter:**

```json
{
  "query": "documentation",
  "locale": "en"
}
```

**With exact filters:**

```json
{
  "query": "tutorial",
  "exact": {
    "category": "guides",
    "status": "published",
    "tags": ["javascript", "typescript"]
  }
}
```

**With range filters:**

```json
{
  "range": {
    "price": {
      "min": 500,
      "max": 2000
    },
    "publishedAt": {
      "min": "2024-01-01"
    }
  }
}
```

**With pagination:**

```json
{
  "pagination": {
    "limit": 20,
    "offset": 40
  }
}
```

**With sorting:**

```json
{
  "sort": [
    {
      "field": "publishedAt",
      "order": "desc"
    }
  ]
}
```

**Note:** Sorting modifies the index name. You need an index named `articles_publishedAt_desc` for the above example to work.

## SearchResult structure

The `SearchResult<T>` class defines the structure of search responses.

| field            | type       | description                                    |
|------------------|------------|------------------------------------------------|
| hits             | `T[]`      | Array of search results matching the query     |
| total            | `number`   | Total number of matching results                |
| page             | `number`   | Current page number (if pagination is used)    |
| nbPages          | `number`   | Total number of pages (if pagination is used)  |
| processingTimeMS | `number`   | Query processing time in milliseconds          |

## Usage examples

### SDK imports

For article search, use the article-search block SDK:

```typescript
import { sdk } from '@o2s/blocks.article-search/sdk';
```

For generic search, use the framework SDK:

```typescript
import { sdk } from '@o2s/framework/sdk';
```

### Example 1: Article search

**Using SDK for article search (recommended):**

```typescript
import { sdk } from '@o2s/blocks.article-search/sdk';

const results = await sdk.blocks.searchArticles(
  {
    query: 'getting started',
    limit: 10,
    offset: 0,
    category: 'guides', // Optional: filters by category
  },
  { 'x-locale': 'en' }
);

console.log(`Found ${results.total} articles`);
results.articles.forEach(article => {
  console.log(`- ${article.title}`);
});
```

### Example 2: Generic search

**Using SDK for generic search:**

```typescript
import { sdk } from '@o2s/framework/sdk';

const results = await sdk.makeRequest<SearchResult<Product>>({
  method: 'get',
  url: '/search',
  params: { index: 'products' },
  data: {
    query: 'laptop',
    locale: 'en',
    exact: {
      status: 'available',
    },
    range: {
      price: {
        min: 500,
        max: 2000,
      },
    },
    pagination: {
      limit: 20,
      offset: 0,
    },
  },
  headers: {
    'Content-Type': 'application/json',
    'x-locale': 'en',
  },
});

console.log(`Found ${results.total} results`);
results.hits.forEach(hit => {
  console.log(hit);
});
```

### Example 3: Frontend search component

**Using SDK for article search:**

```typescript
'use client';

import { useState } from 'react';
import { sdk } from '@o2s/blocks.article-search/sdk';

const ArticleSearch = ({ locale }: { locale: string }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{ articles: Array<{ id: string; title: string }>; total: number } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    try {
      const data = await sdk.blocks.searchArticles(
        {
          query,
          limit: 10,
          offset: 0,
        },
        { 'x-locale': locale }
      );
      setResults(data);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search articles..."
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>
      {results && (
        <div>
          <p>Found {results.total} results</p>
          {results.articles.map((article) => (
            <div key={article.id}>{article.title}</div>
          ))}
        </div>
      )}
    </div>
  );
};
```

## Error handling

### Missing environment variables

**Error:** `Please provide a valid Algolia app ID` or `Please provide a valid Algolia API key`

**When it occurs:** During service initialization

**Solution:** Ensure both `ALGOLIA_APP_ID` and `ALGOLIA_API_KEY` are set in your environment variables.

### Missing index name

**Error:** `Index name is required`

**When it occurs:** When calling search methods without providing an index name

**Solution:** Always provide an `indexName` parameter when calling search methods.

### Index not found (404)

**Error:** Logged as: `Algolia index with name {indexName} not found, please check your environment variables`

**Behavior:** Returns an empty result set:
```json
{
  "hits": [],
  "total": 0
}
```

**Solution:** 
- Verify the index name is correct
- Ensure the index exists in your Algolia dashboard
- Check that your API key has read access to the index

### Other API errors

**Behavior:** Errors are logged with full details and re-thrown to be handled by the framework's error handling system.

**Solution:** Check the error logs for specific details about the API error.

## Best practices

1. **Use search-only API keys**: Never use admin keys with write permissions in your application
2. **Index naming for sorting**: Create separate indexes for each sort configuration (e.g., `articles_publishedAt_desc`)
3. **Pagination**: Use appropriate page sizes (10-50 items) for better performance
4. **Error handling**: Always handle errors gracefully and provide fallback behavior
5. **Logging**: Enable debug logging during development to see query details
6. **Index configuration**: Configure your Algolia indexes properly with appropriate attributes for faceting and filtering
7. **Locale filtering**: Use locale filtering to ensure users only see content in their language
8. **Combine filters**: Use `exact` and `range` filters together for precise results

## Pagination notes

The integration converts `offset` to Algolia's `page` parameter:

- Formula: `page = Math.floor(offset / limit)`
- Default limit: `20` (if not specified)
- Example: `offset: 40, limit: 20` → `page: 2`

To get page 3 with 10 items per page:
```typescript
{
  pagination: {
    limit: 10,
    offset: 20  // (page 3 - 1) * 10 = 20
  }
}
```

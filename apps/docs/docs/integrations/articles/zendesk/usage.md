---
sidebar_position: 300
---

# Usage

This page provides examples and API reference for using the Zendesk Help Center integration for articles.

## API Endpoints

The Zendesk Help Center integration is automatically available when installed in the API Harmonization server. It provides standard article endpoints that follow the framework's article API specification.

### List Articles

Retrieve a list of articles with optional filtering and pagination.

**Endpoint:** `GET /articles`

**Query Parameters:**

| Parameter | Type   | Description                                         | Required |
| --------- | ------ | --------------------------------------------------- | -------- |
| locale    | string | Language code (en, de, pl)                          | Yes      |
| category  | string | Filter by category ID or slug                       | No       |
| offset    | number | Pagination offset                                   | No       |
| limit     | number | Number of articles per page (default: 10)           | No       |
| sortBy    | string | Sort field                                          | No       |
| sortOrder | string | Sort direction (asc, desc)                          | No       |

**Example Request:**

```bash
GET /articles?locale=en&limit=10&offset=0
```

**Example Response:**

```json
{
    "total": 25,
    "data": [
        {
            "id": "12345",
            "slug": "/help-and-support/67890-Maintenance/12345-Tool-Care-Guide",
            "createdAt": "2024-01-15T10:30:00Z",
            "updatedAt": "2024-01-16T14:20:00Z",
            "title": "Tool Care Guide",
            "lead": "Learn how to properly maintain your tools for optimal performance...",
            "tags": ["maintenance", "tools", "guide"],
            "thumbnail": {
                "url": "https://zendesk.com/attachments/thumbnail.jpg",
                "alt": "Tool maintenance"
            },
            "author": {
                "name": "John Doe",
                "position": "admin",
                "avatar": {
                    "url": "https://zendesk.com/photos/johndoe.jpg",
                    "alt": ""
                }
            }
        }
    ]
}
```

### Get Single Article

Retrieve a specific article by slug with full content.

**Endpoint:** `GET /articles/:slug`

**Path Parameters:**

| Parameter | Type   | Description                                    | Required |
| --------- | ------ | ---------------------------------------------- | -------- |
| slug      | string | Article slug or ID (e.g., "12345-article-title") | Yes      |

**Query Parameters:**

| Parameter | Type   | Description                | Required |
| --------- | ------ | -------------------------- | -------- |
| locale    | string | Language code (en, de, pl) | Yes      |

**Example Request:**

```bash
GET /articles/12345-tool-care-guide?locale=en
```

**Example Response:**

```json
{
    "id": "12345",
    "slug": "/help-and-support/67890-Maintenance/12345-Tool-Care-Guide",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-16T14:20:00Z",
    "title": "Tool Care Guide",
    "lead": "Learn how to properly maintain your tools for optimal performance...",
    "tags": ["maintenance", "tools", "guide"],
    "image": {
        "url": "https://zendesk.com/attachments/featured.jpg",
        "alt": "Tool maintenance"
    },
    "thumbnail": {
        "url": "https://zendesk.com/attachments/thumbnail.jpg",
        "alt": "Tool maintenance"
    },
    "category": {
        "id": "67890",
        "title": "Maintenance"
    },
    "author": {
        "name": "John Doe",
        "email": "john@example.com",
        "position": "admin",
        "avatar": {
            "url": "https://zendesk.com/photos/johndoe.jpg",
            "alt": ""
        }
    },
    "sections": [
        {
            "id": "section-text-12345",
            "__typename": "ArticleSectionText",
            "createdAt": "2024-01-15T10:30:00Z",
            "updatedAt": "2024-01-16T14:20:00Z",
            "content": "<h1>Tool Care Guide</h1><p>Proper maintenance is essential...</p>"
        }
    ]
}
```

### List Categories

Retrieve a list of categories.

**Endpoint:** `GET /articles/categories`

**Query Parameters:**

| Parameter | Type   | Description                | Required |
| --------- | ------ | -------------------------- | -------- |
| locale    | string | Language code (en, de, pl) | Yes      |
| offset    | number | Pagination offset          | No       |
| limit     | number | Number of categories       | No       |

**Example Request:**

```bash
GET /articles/categories?locale=en
```

**Example Response:**

```json
{
    "total": 5,
    "data": [
        {
            "id": "67890",
            "slug": "/help-and-support/67890-Maintenance",
            "createdAt": "2024-01-01T00:00:00Z",
            "updatedAt": "2024-01-10T00:00:00Z",
            "title": "Maintenance",
            "description": "Maintenance guides and tutorials"
        }
    ]
}
```

### Get Single Category

Retrieve a specific category by ID or slug.

**Endpoint:** `GET /articles/categories/:id`

**Path Parameters:**

| Parameter | Type   | Description           | Required |
| --------- | ------ | --------------------- | -------- |
| id        | string | Category ID or slug   | Yes      |

**Query Parameters:**

| Parameter | Type   | Description                | Required |
| --------- | ------ | -------------------------- | -------- |
| locale    | string | Language code (en, de, pl) | Yes      |

**Example Request:**

```bash
GET /articles/categories/67890?locale=en
```

**Example Response:**

```json
{
    "id": "67890",
    "slug": "/help-and-support/67890-Maintenance",
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-10T00:00:00Z",
    "title": "Maintenance",
    "description": "Maintenance guides and tutorials"
}
```

### Search Articles

Search articles with full-text query.

**Endpoint:** `POST /articles/search`

**Body Parameters:**

| Parameter | Type   | Description                            | Required |
| --------- | ------ | -------------------------------------- | -------- |
| locale    | string | Language code (en, de, pl)             | Yes      |
| query     | string | Search query                           | No       |
| category  | string | Filter by category ID                  | No       |
| dateFrom  | string | Filter articles created after (ISO)    | No       |
| dateTo    | string | Filter articles created before (ISO)   | No       |
| sortBy    | string | Sort field                             | No       |
| sortOrder | string | Sort direction (asc, desc)             | No       |

**Example Request:**

```bash
POST /articles/search
Content-Type: application/json

{
    "locale": "en",
    "query": "maintenance guide",
    "category": "67890"
}
```

**Example Response:**

```json
{
    "total": 3,
    "data": [
        {
            "id": "12345",
            "slug": "/help-and-support/67890-Maintenance/12345-Tool-Care-Guide",
            "createdAt": "2024-01-15T10:30:00Z",
            "updatedAt": "2024-01-16T14:20:00Z",
            "title": "Tool Care Guide",
            "lead": "Learn how to properly maintain your tools...",
            "tags": ["maintenance", "tools"]
        }
    ]
}
```

## Locale Handling

The integration automatically maps application locales to Zendesk Help Center format:

| Application Request | Zendesk API Call |
| ------------------- | ---------------- |
| `locale=en`         | `locale=en-us`   |
| `locale=de`         | `locale=de-de`   |
| `locale=pl`         | `locale=pl`      |

You should always use the short locale format (en, de, pl) in your API requests.

## Slug Format

Article slugs follow a hierarchical pattern that includes the category:

```
/{locale-base}/{category-id}-{category-name}/{article-id}-{article-title}
```

**Examples:**

| Locale | Slug Example                                                |
| ------ | ----------------------------------------------------------- |
| en     | `/help-and-support/67890-Maintenance/12345-Tool-Care-Guide` |
| de     | `/hilfe-und-support/67890-Wartung/12345-Werkzeugpflege`     |
| pl     | `/pomoc-i-wsparcie/67890-Konserwacja/12345-Pielegnacja`     |

## Filtering Examples

### Filter by Category

Get articles from a specific category:

```bash
GET /articles?locale=en&category=67890
```

Or using category slug:

```bash
GET /articles?locale=en&category=maintenance
```

### Pagination

Get the second page of results:

```bash
GET /articles?locale=en&limit=10&offset=10
```

### Combined Filters

Get articles from maintenance category with pagination:

```bash
GET /articles?locale=en&category=67890&limit=20&offset=0
```

## Best Practices

### 1. Always Specify Locale

Always include the `locale` parameter in your requests:

```typescript
// ✓ Good
const articles = await getArticleList({ locale: 'en' });

// ✗ Bad - might get wrong language
const articles = await getArticleList({});
```

### 2. Handle Undefined Responses

Always check if the response is `undefined` before accessing article properties:

```typescript
const article = await getArticle({ slug, locale });
if (!article) {
    // Handle article not found
    return;
}
// Use article safely
```

### 3. Use Pagination

For large article lists, always use pagination:

```typescript
const articles = await getArticleList({
    locale: 'en',
    limit: 20,
    offset: 0,
});

// Load more
const moreArticles = await getArticleList({
    locale: 'en',
    limit: 20,
    offset: 20,
});
```

### 4. Cache Article Lists

Consider caching article lists to reduce API calls:

```typescript
const cacheKey = `articles:${locale}:${category}`;
const cached = await cache.get(cacheKey);
if (cached) {
    return cached;
}

const articles = await getArticleList({ locale, category });
await cache.set(cacheKey, articles, 300); // 5 minutes
```

### 5. Pre-fetch Categories

If you need category information for multiple articles, fetch categories once:

```typescript
// Fetch all categories once
const categories = await getCategoryList({ locale });

// Use for display
articles.forEach((article) => {
    const category = categories.data.find((c) => c.id === article.category?.id);
    // Use category details
});
```

## Integration with Frontend

The Zendesk Help Center integration works seamlessly with the O2S frontend SDK:

```typescript
import { sdk } from '@/api/sdk';

// Get article list
const articles = await sdk.articles.getArticleList({
    locale: 'en',
    limit: 20,
});

// Get single article
const article = await sdk.articles.getArticle({
    slug: '12345-tool-care-guide',
    locale: 'en',
});

// Search articles
const searchResults = await sdk.articles.searchArticles({
    locale: 'en',
    query: 'maintenance',
});

// Get categories
const categories = await sdk.articles.getCategoryList({
    locale: 'en',
});
```

The SDK automatically handles:

- Locale mapping
- Error handling
- Response normalization
- Type safety

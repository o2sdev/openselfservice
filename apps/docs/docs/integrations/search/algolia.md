---
sidebar_position: 100
---

# Algolia

This integration provides a full integration with [Algolia](https://www.algolia.com/), the AI-powered search and discovery platform. It enables powerful search capabilities for your application, particularly for knowledge base articles.

## Requirements

To use it, you must install it into the API Harmonization server by running:

```shell
npm install @o2s/integrations.algolia --workspace=@o2s/api
```

This integration relies upon the following environmental variables:

| name           | type   | description                                    |
|----------------|--------|------------------------------------------------|
| ALGOLIA_APP_ID | string | Your Algolia application ID                    |
| ALGOLIA_API_KEY| string | Your Algolia API key with search permissions   |

You'll need to create an account on [Algolia](https://www.algolia.com/) and set up appropriate indexes for your data.

## Supported modules

This integration handles the following base module from the framework:

- search

## Algolia client

This integration relies on the official [Algoliasearch](https://www.npmjs.com/package/algoliasearch) client for:

- Creating a client, where it is initialized using the env variables:
  ```typescript
  algoliasearch(appId, apiKey);
  ```
- Performing searches with support for:
  - Text search
  - Filtering by locale
  - Exact matching (facet filters)
  - Range filtering (numeric filters)
  - Pagination
  - Sorting

## Features

The integration provides specialized methods for:

- Generic search across any type of data
- Article search with appropriate mapping to the framework's article model

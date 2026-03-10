---
sidebar_position: 100
---

# Redis Cache

this package provides caching capabilities using [Redis](https://redis.io/). It implements the framework's `Cache.Service` interface and is used by CMS integrations (Strapi, Contentful) to cache pages, components, and configuration.

## In this section

- [How to set up](./how-to-setup.md) - Installation and configuration guide
- [Features](./features.md) - Capabilities and cache operations
- [Usage](./usage.md) - Examples and best practices

## Installation

```shell
npm install @o2s/integrations.redis --workspace=@o2s/api
```

## Environment variables

| name             | type    | description                   | required | default |
| ---------------- | ------- | ----------------------------- | -------- | ------- |
| CACHE_ENABLED    | boolean | enables/disables cache        | no       | false   |
| CACHE_TTL        | number  | key expiration time (seconds) | no       | 300     |
| CACHE_REDIS_HOST | string  | Redis host                    | yes      | -       |
| CACHE_REDIS_PORT | number  | Redis port                    | yes      | -       |
| CACHE_REDIS_PASS | string  | Redis password                | no       | -       |

## Quick start

1. Install the package
2. Set up a Redis instance (see [How to set up](./how-to-setup.md))
3. Configure environment variables
4. Set `CACHE_ENABLED=true`

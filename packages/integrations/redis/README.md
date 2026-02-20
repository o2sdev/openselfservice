# @o2s/integrations.redis

Redis integration for O2S, providing caching functionality.

The Redis integration implements the O2S Cache module using Redis. It provides `get`, `set`, and `del` operations with TTL (time-to-live) for string keys. When caching is disabled (`CACHE_ENABLED=false`), get operations return undefined. Used by CMS integrations (Strapi, Contentful) and others to cache block and page data for better performance.

- **Cache operations** – get, set, del with TTL
- **Optional** – Enable/disable via `CACHE_ENABLED`
- **Configurable** – Host, port, password via env vars
- **Performance** – Reduces repeated API calls to CMS and other backends

Developers configure `CACHE_REDIS_HOST`, `CACHE_REDIS_PORT`, and optionally `CACHE_REDIS_PASS`. No content editor involvement.

## Installation

```bash
npm install @o2s/integrations.redis
```

## Configuration

Configure the integration via `@o2s/configs.integrations` in your `AppConfig`:

```typescript
import { Config } from '@o2s/integrations.redis/integration';

export const AppConfig: ApiConfig = {
    integrations: {
        cache: Config.cache,
    },
};
```

Alternatively, use the pre-configured integration from `@o2s/configs.integrations`:

```typescript
import { Cache } from '@o2s/configs.integrations';

export const AppConfig: ApiConfig = {
    integrations: {
        cache: Cache.CacheIntegrationConfig,
    },
};
```

## Environment Variables

### Optional

- `CACHE_ENABLED` - Enable or disable caching (default: `false`)
- `CACHE_REDIS_HOST` - Redis host (required if `CACHE_ENABLED=true`, e.g., `localhost`)
- `CACHE_REDIS_PORT` - Redis port (required if `CACHE_ENABLED=true`, e.g., `6379`)
- `CACHE_REDIS_PASS` - Redis password (if required)
- `CACHE_TTL` - Cache TTL in seconds (default: `300`)

## Example .env

```bash
CACHE_ENABLED=true
CACHE_REDIS_HOST=localhost
CACHE_REDIS_PORT=6379
CACHE_REDIS_PASS=your-password
CACHE_TTL=300
```

## Features

- Key-value caching
- TTL support
- Error handling

## Related Packages

- `@o2s/configs.integrations` - Integration configuration
- `redis` - Redis client library


## About Integrations in O2S

Integrations are adapters that connect O2S to external backend services. They handle API communication and normalize data from various backend services into an API-agnostic format. The frontend app communicates only with the API Harmonization server, never directly with backend services, enabling you to swap integrations without breaking the frontend.

**Documentation**: [Redis cache](https://www.openselfservice.com/docs/integrations/cache/redis/overview)

## About O2S

**Part of [Open Self Service (O2S)](https://www.openselfservice.com/)** - an open-source framework for building composable customer self-service portals. O2S simplifies integration of multiple headless APIs into a scalable frontend, providing an API-agnostic architecture with a normalization layer.

- **Website**: [https://www.openselfservice.com/](https://www.openselfservice.com/)
- **GitHub**: [https://github.com/o2sdev/openselfservice](https://github.com/o2sdev/openselfservice)
- **Documentation**: [https://www.openselfservice.com/docs](https://www.openselfservice.com/docs)
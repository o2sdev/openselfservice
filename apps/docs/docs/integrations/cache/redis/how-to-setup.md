---
sidebar_position: 150
---

# How to set up

## Install

```shell
npm install @o2s/integrations.redis --workspace=@o2s/configs.integrations
```

## Set up Redis instance

You need to set up your own Redis instance. We do not provide a Docker configuration for Redis. For detailed installation and setup instructions, refer to the [official Redis documentation](https://redis.io/docs/).

### Local installation

For local installation instructions, refer to the [official Redis installation guide](https://redis.io/docs/latest/operate/oss_and_stack/install/archive/install-redis/).

### Production

Consider managed services: [Redis Cloud](https://redis.com/cloud), [AWS ElastiCache](https://aws.amazon.com/elasticache/), [Azure Cache](https://azure.microsoft.com/services/cache/), [Google Memorystore](https://cloud.google.com/memorystore).

## Configuration

After installing the package, you need to configure the integration in the `@o2s/configs.integrations` package. This tells the framework to use Redis Cache instead of the default mocked integration.

### Step 1: Update the integration config

All integration assignments are configured in a single file: `packages/configs/integrations/src/config.ts`. Each domain has its own import alias (for example `CacheSource`), shared by both the `createIntegrationConfig` assignment and the `export import` type export, so switching a domain is a single-line change.

Find the `cache` domain's import line and point it at Redis:

```typescript
// before: import * as CacheSource from '@o2s/integrations.mocked/integration';
import * as CacheSource from '@o2s/integrations.redis/integration';
```

That is the only change needed: the `cache: CacheSource` assignment and the `export import Cache = CacheSource.Integration.Cache` type export both follow the same alias. Assigning an integration to a domain it does not provide is a compile error.

### Step 2: Verify AppConfig

The `AppConfig` in `apps/api-harmonization/src/app.config.ts` already imports from `@o2s/configs.integrations`. You don't need to modify this file.

## Configure environment variables

```env
CACHE_ENABLED=true
CACHE_TTL=3600
CACHE_REDIS_HOST=localhost
CACHE_REDIS_PORT=6379
CACHE_REDIS_PASS=REDIS_PASS
```

### TTL recommendations

- **Short (300-1800s)**: Frequently changing data
- **Medium (1800-7200s)**: CMS content, API responses
- **Long (7200-86400s)**: Static configuration

## Verify connection

Start the API Harmonization server. Successful connection logs:

```log
[REDIS] Successfully connected to redis
```

Test manually:

```shell
redis-cli -h localhost -p 6379 -a REDIS_PASS ping
# Expected: PONG
```

## Troubleshooting

| Problem                 | Solution                                        |
| ----------------------- | ----------------------------------------------- |
| Cannot connect          | Verify Redis is running: `redis-cli ping`       |
| Authentication failed   | Check `CACHE_REDIS_PASS` matches Redis password |
| Cache returns undefined | Verify `CACHE_ENABLED=true`                     |

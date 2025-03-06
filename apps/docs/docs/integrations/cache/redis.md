---
sidebar_position: 100
---

# Redis

This integration provides a full integration with [Redis](https://redis.io/).

## Requirements

To use it, you must install it into the API Harmonization server by running:

```shell
npm install @o2s/integrations.redis --workspace=@o2s/api
```

This integration relies upon the following environmental variables:

| name             | type    | description                                       |
|------------------|---------|---------------------------------------------------|
| CACHE_ENABLED    | boolean | determines whether cache should be enabled or not |
| CACHE_TTL        | number  | time (in seconds) until cached key expires        |
| CACHE_REDIS_HOST | string  | domain under which Redis instance is available    |
| CACHE_REDIS_PORT | number  | port of the Redis instance                        |
| CACHE_REDIS_PASS | string  | Redis password                                    |

## Supported modules

This integration handles following base module from the framework:

- cache

## Redis client

This integration relies on the official [Redis client](https://www.npmjs.com/package/redis) for:

- creating a client, where it is initialized using the env variables:
    ```typescript
    createClient({
        url: `redis://${configService.get('CACHE_REDIS_HOST')}:${configService.get('CACHE_REDIS_PORT')}`,
        password: configService.get('CACHE_REDIS_PASS'),
    });
    ```
- error handling and connection retries,
- getting/setting/deleting keys.

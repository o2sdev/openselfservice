---
sidebar_position: 200
---

# Features

## Overview

| Feature | Status | Notes |
|---------|--------|-------|
| Cache Operations | ✅ | get, set, del |
| TTL Management | ✅ | Automatic key expiration |
| Conditional Caching | ✅ | Toggle via CACHE_ENABLED |
| Error Handling | ✅ | Graceful fallback on failures |
| Framework Integration | ✅ | Implements Cache.Service |
| CMS Integration | ✅ | Used by Strapi/Contentful |

## Cache operations

```typescript
interface CacheService {
    get(key: string): Promise<string | undefined>;
    set(key: string, value: string): Promise<void>;
    del(key: string): Promise<void>;
}
```

All operations are no-ops when `CACHE_ENABLED=false` or Redis is unavailable.

## TTL management

- All keys expire after `CACHE_TTL` seconds (default: 300)
- Each key has independent expiration based on when it was set
- No manual TTL management required

## Connection behavior

- Connection established only when `CACHE_ENABLED=true`
- No automatic reconnection on connection loss (restart required)
- All errors are logged but don't crash the application

## CMS integration

CMS integrations cache content using consistent key patterns:

```text
component-{id}-{locale}
page-{id}-{locale}
app-config-{locale}
```

Cache flow:
1. Check cache for content
2. If cached → return immediately
3. If not cached → fetch from CMS API → store in cache → return

## Limitations

- **No auto-reconnection**: Restart required if connection lost
- **String values only**: Objects must be serialized (JSON.stringify or flatted)
- **No tag-based invalidation**: Keys must be deleted manually
- **Single instance**: No built-in Sentinel/Cluster support

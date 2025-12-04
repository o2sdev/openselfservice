---
sidebar_position: 300
---

# Usage

## Injecting the service

```typescript
import { Injectable } from '@nestjs/common';
import { Cache } from '@o2s/framework/modules';

@Injectable()
export class MyService {
    constructor(private readonly cacheService: Cache.Service) {}
}
```

## Cache-aside pattern

The standard pattern used throughout the framework:

```typescript
async getData(id: string): Promise<Data> {
    const key = `data-${id}`;
    
    const cached = await this.cacheService.get(key);
    if (cached) {
        return JSON.parse(cached);
    }
    
    const data = await this.fetchFromSource(id);
    await this.cacheService.set(key, JSON.stringify(data));
    
    return data;
}
```

## RxJS pattern (used in CMS)

```typescript
import { from, of } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

private getCachedData<T>(key: string, fetchData: () => Observable<T>): Observable<T> {
    return from(this.cacheService.get(key)).pipe(
        mergeMap((cached) => {
            if (cached) return of(JSON.parse(cached));
            
            return fetchData().pipe(
                map((data) => {
                    this.cacheService.set(key, JSON.stringify(data));
                    return data;
                }),
            );
        }),
    );
}
```

## Cache key patterns

```typescript
// CMS content
`component-${id}-${locale}`
`page-${id}-${locale}`
`app-config-${locale}`

// Custom data
`user-${userId}-profile`
`product-${productId}-details`
```

**Conventions:**
- Use hyphens as separators
- Include identifiers (ID, locale)
- Use descriptive prefixes

## Serialization

```typescript
// Simple objects
await this.cacheService.set(key, JSON.stringify(data));
const parsed = JSON.parse(await this.cacheService.get(key));

// Objects with circular references (use flatted)
import { stringify, parse } from 'flatted';
await this.cacheService.set(key, stringify(data));
const parsed = parse(await this.cacheService.get(key));
```

## Cache invalidation

```typescript
async updateData(id: string, newData: Data): Promise<void> {
    await this.repository.update(id, newData);
    await this.cacheService.del(`data-${id}`);
}
```

## Debugging

```shell
redis-cli KEYS *                    # List all keys
redis-cli GET component-123-en      # Get specific key
redis-cli TTL component-123-en      # Check TTL
redis-cli DBSIZE                    # Count keys
```

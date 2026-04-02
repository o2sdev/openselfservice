import { Injectable } from '@nestjs/common';

/**
 * Abstract cache service. Implementation is provided by API Harmonization.
 * Key-value store for string data. All methods return Promises.
 */
@Injectable()
export abstract class CacheService {
    protected constructor(..._services: unknown[]) {}

    /** Returns cached value by key. Returns undefined if not found or expired. */
    abstract get(key: string): Promise<string | undefined>;
    /** Stores value in cache under key. */
    abstract set(key: string, value: string): Promise<void>;
    /** Removes key from cache. */
    abstract del(key: string): Promise<void>;
}

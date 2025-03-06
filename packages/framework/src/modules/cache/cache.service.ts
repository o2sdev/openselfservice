import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class CacheService {
    protected constructor(..._services: unknown[]) {}

    abstract get(key: string): Promise<string | undefined>;
    abstract set(key: string, value: string): Promise<void>;
    abstract del(key: string): Promise<void>;
}

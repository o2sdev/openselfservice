import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RedisClientType, createClient } from 'redis';

import { LoggerService } from '@o2s/utils.logger';

import { Cache } from '@o2s/framework/modules';

@Injectable()
export class RedisCacheService implements Cache.Service {
    private readonly isEnabled: boolean = false;
    private readonly expires: number = 300;
    private client!: RedisClientType;

    constructor(
        @Inject(LoggerService) private readonly logger: LoggerService,
        private readonly configService: ConfigService,
    ) {
        this.isEnabled = this.configService.get('CACHE_ENABLED') === 'true';
        this.expires = this.configService.get('CACHE_TTL') || 300;

        if (this.isEnabled) {
            this.client = createClient({
                url: `redis://${configService.get('CACHE_REDIS_HOST')}:${configService.get('CACHE_REDIS_PORT')}`,
                password: configService.get('CACHE_REDIS_PASS'),
                socket: {
                    reconnectStrategy: () => {
                        return false;
                    },
                },
            });

            this.client.on('error', (err) => {
                logger.log(
                    {
                        data: `Error while connecting to redis: ${err}`,
                        name: 'REDIS',
                    },
                    'error',
                );
            });
            this.client.on('connect', () => {
                logger.log(
                    {
                        data: 'Trying to connect to redis...',
                        name: 'REDIS',
                    },
                    'info',
                );
            });
            this.client.on('ready', () => {
                logger.log(
                    {
                        data: 'Successfully connected to redis',
                        name: 'REDIS',
                    },
                    'info',
                );
            });

            this.connect();
        }
    }

    private connect() {
        this.client.connect().catch((err) => {
            this.logger.log(
                {
                    data: `Error while connecting to redis: ${err}`,
                    name: 'REDIS',
                },
                'error',
            );
        });
    }

    async get(key: string): Promise<string | undefined> {
        if (this.isEnabled && this.client.isReady) {
            const result = await this.client.get(key);
            return result as string | undefined;
        }
        return undefined;
    }

    async set(key: string, value: string): Promise<void> {
        if (this.isEnabled && this.client.isReady) {
            await this.client.set(key, value, {
                EX: this.expires,
            });
        }
    }

    async del(key: string): Promise<void> {
        if (this.isEnabled && this.client.isReady) {
            await this.client.del(key);
        }
    }
}

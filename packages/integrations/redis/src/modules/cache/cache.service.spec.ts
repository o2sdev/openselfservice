import { ConfigService } from '@nestjs/config';
import { createClient } from 'redis';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { RedisCacheService } from './cache.service';

vi.mock('redis', () => ({
    createClient: vi.fn(),
}));

function defaultConfig(key: string): string | number | undefined {
    if (key === 'CACHE_ENABLED') return 'true';
    if (key === 'CACHE_TTL') return 300;
    if (key === 'CACHE_REDIS_HOST') return 'localhost';
    if (key === 'CACHE_REDIS_PORT') return '6379';
    if (key === 'CACHE_REDIS_PASS') return undefined;
    return undefined;
}

describe('RedisCacheService', () => {
    let service: RedisCacheService;
    let mockClient: {
        connect: ReturnType<typeof vi.fn>;
        on: ReturnType<typeof vi.fn>;
        get: ReturnType<typeof vi.fn>;
        set: ReturnType<typeof vi.fn>;
        del: ReturnType<typeof vi.fn>;
        isReady: boolean;
    };
    let mockConfig: { get: ReturnType<typeof vi.fn> };
    let mockLogger: { log: ReturnType<typeof vi.fn> };

    beforeEach(() => {
        vi.restoreAllMocks();
        mockClient = {
            connect: vi.fn().mockResolvedValue(undefined),
            on: vi.fn(),
            get: vi.fn(),
            set: vi.fn(),
            del: vi.fn(),
            isReady: true,
        };
        vi.mocked(createClient).mockReturnValue(mockClient as unknown as ReturnType<typeof createClient>);

        mockConfig = {
            get: vi.fn((key: string) => defaultConfig(key)),
        };
        mockLogger = {
            log: vi.fn(),
        };

        service = new RedisCacheService(
            mockLogger as unknown as import('@o2s/utils.logger').LoggerService,
            mockConfig as unknown as ConfigService,
        );
    });

    describe('constructor', () => {
        it('should not call createClient when CACHE_ENABLED is not "true"', () => {
            vi.mocked(mockConfig.get).mockImplementation((key: string) =>
                key === 'CACHE_ENABLED' ? 'false' : defaultConfig(key),
            );
            vi.mocked(createClient).mockClear();

            new RedisCacheService(
                mockLogger as unknown as import('@o2s/utils.logger').LoggerService,
                mockConfig as unknown as ConfigService,
            );

            expect(createClient).not.toHaveBeenCalled();
        });

        it('should call createClient with url, password, and socket when CACHE_ENABLED is "true"', () => {
            vi.mocked(createClient).mockClear();
            vi.mocked(mockConfig.get).mockImplementation((key: string) => defaultConfig(key));

            new RedisCacheService(
                mockLogger as unknown as import('@o2s/utils.logger').LoggerService,
                mockConfig as unknown as ConfigService,
            );

            expect(createClient).toHaveBeenCalledTimes(1);
            expect(createClient).toHaveBeenCalledWith({
                url: 'redis://localhost:6379',
                password: undefined,
                socket: {
                    reconnectStrategy: expect.any(Function),
                },
            });
        });

        it('should register on("error"), on("connect"), on("ready") and call connect when enabled', () => {
            vi.mocked(createClient).mockClear();
            vi.mocked(mockConfig.get).mockImplementation((key: string) => defaultConfig(key));

            new RedisCacheService(
                mockLogger as unknown as import('@o2s/utils.logger').LoggerService,
                mockConfig as unknown as ConfigService,
            );

            expect(mockClient.on).toHaveBeenCalledWith('error', expect.any(Function));
            expect(mockClient.on).toHaveBeenCalledWith('connect', expect.any(Function));
            expect(mockClient.on).toHaveBeenCalledWith('ready', expect.any(Function));
            expect(mockClient.connect).toHaveBeenCalled();
        });
    });

    describe('get', () => {
        it('should return undefined and not call client.get when cache is disabled', async () => {
            vi.mocked(mockConfig.get).mockImplementation((key: string) =>
                key === 'CACHE_ENABLED' ? 'false' : defaultConfig(key),
            );
            const disabledService = new RedisCacheService(
                mockLogger as unknown as import('@o2s/utils.logger').LoggerService,
                mockConfig as unknown as ConfigService,
            );

            const result = await disabledService.get('key');

            expect(result).toBeUndefined();
            expect(mockClient.get).not.toHaveBeenCalled();
        });

        it('should return undefined and not call client.get when client is not ready', async () => {
            mockClient.isReady = false;

            const result = await service.get('key');

            expect(result).toBeUndefined();
            expect(mockClient.get).not.toHaveBeenCalled();
        });

        it('should call client.get and return value when enabled and ready', async () => {
            mockClient.get.mockResolvedValue('cached-value');

            const result = await service.get('my-key');

            expect(mockClient.get).toHaveBeenCalledWith('my-key');
            expect(result).toBe('cached-value');
        });

        it('should return undefined when client.get returns null', async () => {
            mockClient.get.mockResolvedValue(null);

            const result = await service.get('key');

            expect(result).toBeUndefined();
        });
    });

    describe('set', () => {
        it('should not call client.set when cache is disabled', async () => {
            vi.mocked(mockConfig.get).mockImplementation((key: string) =>
                key === 'CACHE_ENABLED' ? 'false' : defaultConfig(key),
            );
            const disabledService = new RedisCacheService(
                mockLogger as unknown as import('@o2s/utils.logger').LoggerService,
                mockConfig as unknown as ConfigService,
            );

            await disabledService.set('key', 'value');

            expect(mockClient.set).not.toHaveBeenCalled();
        });

        it('should not call client.set when client is not ready', async () => {
            mockClient.isReady = false;

            await service.set('key', 'value');

            expect(mockClient.set).not.toHaveBeenCalled();
        });

        it('should call client.set with key, value and EX when enabled and ready', async () => {
            await service.set('key', 'value');

            expect(mockClient.set).toHaveBeenCalledWith('key', 'value', { EX: 300 });
        });

        it('should use CACHE_TTL from config for EX', async () => {
            vi.mocked(mockConfig.get).mockImplementation((key: string) =>
                key === 'CACHE_TTL' ? 600 : defaultConfig(key),
            );
            const serviceWithTtl = new RedisCacheService(
                mockLogger as unknown as import('@o2s/utils.logger').LoggerService,
                mockConfig as unknown as ConfigService,
            );

            await serviceWithTtl.set('k', 'v');

            expect(mockClient.set).toHaveBeenCalledWith('k', 'v', { EX: 600 });
        });
    });

    describe('del', () => {
        it('should not call client.del when cache is disabled', async () => {
            vi.mocked(mockConfig.get).mockImplementation((key: string) =>
                key === 'CACHE_ENABLED' ? 'false' : defaultConfig(key),
            );
            const disabledService = new RedisCacheService(
                mockLogger as unknown as import('@o2s/utils.logger').LoggerService,
                mockConfig as unknown as ConfigService,
            );

            await disabledService.del('key');

            expect(mockClient.del).not.toHaveBeenCalled();
        });

        it('should not call client.del when client is not ready', async () => {
            mockClient.isReady = false;

            await service.del('key');

            expect(mockClient.del).not.toHaveBeenCalled();
        });

        it('should call client.del with key when enabled and ready', async () => {
            await service.del('key-to-delete');

            expect(mockClient.del).toHaveBeenCalledWith('key-to-delete');
        });
    });
});

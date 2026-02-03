import { ConfigService } from '@nestjs/config';
import { createClient } from 'contentful';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { RestDeliveryService } from './delivery.service';

vi.mock('contentful', () => ({
    createClient: vi.fn(),
}));

describe('RestDeliveryService', () => {
    let mockConfig: { get: ReturnType<typeof vi.fn> };
    let mockClient: { getLocales: ReturnType<typeof vi.fn> };

    beforeEach(() => {
        vi.restoreAllMocks();
        mockClient = {
            getLocales: vi.fn(),
        };
        mockConfig = {
            get: vi.fn((key: string) => {
                switch (key) {
                    case 'CF_SPACE_ID':
                        return 'space-from-config';
                    case 'CF_ENV':
                        return 'env-from-config';
                    case 'CF_TOKEN':
                        return 'token-from-config';
                    default:
                        return undefined;
                }
            }),
        };

        vi.mocked(createClient).mockReturnValue(mockClient as unknown as ReturnType<typeof createClient>);
    });

    describe('constructor', () => {
        it('should create contentful client with values from ConfigService when set', () => {
            new RestDeliveryService(mockConfig as unknown as ConfigService);

            expect(createClient).toHaveBeenCalledWith({
                space: 'space-from-config',
                environment: 'env-from-config',
                accessToken: 'token-from-config',
            });
        });

        it('should fall back to environment variables when ConfigService returns undefined', () => {
            vi.mocked(mockConfig.get).mockReturnValue(undefined);
            process.env.CF_SPACE_ID = 'space-from-env';
            process.env.CF_ENV = 'env-from-env';
            process.env.CF_TOKEN = 'token-from-env';

            try {
                new RestDeliveryService(mockConfig as unknown as ConfigService);

                expect(createClient).toHaveBeenCalledWith({
                    space: 'space-from-env',
                    environment: 'env-from-env',
                    accessToken: 'token-from-env',
                });
            } finally {
                delete process.env.CF_SPACE_ID;
                delete process.env.CF_ENV;
                delete process.env.CF_TOKEN;
            }
        });
    });

    describe('getLocales', () => {
        it('should map locales from contentful response to value/label pairs', async () => {
            mockClient.getLocales.mockResolvedValue({
                items: [
                    { code: 'en-US', name: 'English (US)' },
                    { code: 'pl-PL', name: 'Polski' },
                ],
            });

            const service = new RestDeliveryService(mockConfig as unknown as ConfigService);

            const result = await service.getLocales();

            expect(mockClient.getLocales).toHaveBeenCalled();
            expect(result).toEqual([
                { value: 'en-US', label: 'English (US)' },
                { value: 'pl-PL', label: 'Polski' },
            ]);
        });

        it('should return empty array when items is empty', async () => {
            mockClient.getLocales.mockResolvedValue({
                items: [],
            });

            const service = new RestDeliveryService(mockConfig as unknown as ConfigService);

            const result = await service.getLocales();

            expect(result).toEqual([]);
        });

        it('should return empty array when items is undefined', async () => {
            mockClient.getLocales.mockResolvedValue({} as never);

            const service = new RestDeliveryService(mockConfig as unknown as ConfigService);

            const result = await service.getLocales();

            expect(result).toEqual([]);
        });

        it('should return empty array when getLocales throws', async () => {
            mockClient.getLocales.mockRejectedValue(new Error('network error'));

            const service = new RestDeliveryService(mockConfig as unknown as ConfigService);

            const result = await service.getLocales();

            expect(result).toEqual([]);
        });
    });
});

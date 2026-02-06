import Medusa from '@medusajs/js-sdk';
import { ConfigService } from '@nestjs/config';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { MedusaJsService } from './medusajs.service';

const mockSdk = {};

vi.mock('@medusajs/js-sdk', () => ({
    default: vi.fn().mockImplementation(function (this: unknown) {
        return mockSdk;
    }),
}));

describe('MedusaJsService', () => {
    let mockConfig: { get: ReturnType<typeof vi.fn> };

    function defaultConfig(key: string): string {
        if (key === 'MEDUSAJS_BASE_URL') return 'https://api.medusa.test';
        if (key === 'MEDUSAJS_PUBLISHABLE_API_KEY') return 'pk_test';
        if (key === 'MEDUSAJS_ADMIN_API_KEY') return 'admin_secret';
        if (key === 'LOG_LEVEL') return '';
        return '';
    }

    beforeEach(() => {
        vi.restoreAllMocks();
        vi.mocked(Medusa).mockClear();
        mockConfig = {
            get: vi.fn((key: string) => defaultConfig(key)),
        };
    });

    describe('constructor', () => {
        it('should throw when MEDUSAJS_BASE_URL is not defined', () => {
            vi.mocked(mockConfig.get).mockImplementation((key: string) =>
                key === 'MEDUSAJS_BASE_URL' ? '' : defaultConfig(key),
            );

            expect(() => new MedusaJsService(mockConfig as unknown as ConfigService)).toThrow(
                'MEDUSAJS_BASE_URL is not defined',
            );
        });

        it('should throw when MEDUSAJS_PUBLISHABLE_API_KEY is not defined', () => {
            vi.mocked(mockConfig.get).mockImplementation((key: string) =>
                key === 'MEDUSAJS_PUBLISHABLE_API_KEY' ? '' : defaultConfig(key),
            );

            expect(() => new MedusaJsService(mockConfig as unknown as ConfigService)).toThrow(
                'MEDUSAJS_PUBLISHABLE_API_KEY is not defined',
            );
        });

        it('should throw when MEDUSAJS_ADMIN_API_KEY is not defined', () => {
            vi.mocked(mockConfig.get).mockImplementation((key: string) =>
                key === 'MEDUSAJS_ADMIN_API_KEY' ? '' : defaultConfig(key),
            );

            expect(() => new MedusaJsService(mockConfig as unknown as ConfigService)).toThrow(
                'MEDUSAJS_ADMIN_API_KEY is not defined',
            );
        });

        it('should create Medusa SDK with config and debug false when LOG_LEVEL is not debug', () => {
            new MedusaJsService(mockConfig as unknown as ConfigService);

            expect(Medusa).toHaveBeenCalledWith({
                baseUrl: 'https://api.medusa.test',
                debug: false,
                publishableKey: 'pk_test',
                apiKey: 'admin_secret',
            });
        });

        it('should create Medusa SDK with debug true when LOG_LEVEL is debug', () => {
            vi.mocked(mockConfig.get).mockImplementation((key: string) =>
                key === 'LOG_LEVEL' ? 'debug' : defaultConfig(key),
            );

            new MedusaJsService(mockConfig as unknown as ConfigService);

            expect(Medusa).toHaveBeenCalledWith(
                expect.objectContaining({
                    debug: true,
                }),
            );
        });
    });

    describe('getters', () => {
        it('getSdk should return SDK instance', () => {
            const service = new MedusaJsService(mockConfig as unknown as ConfigService);
            expect(service.getSdk()).toBe(mockSdk);
        });

        it('getBaseUrl should return base URL', () => {
            const service = new MedusaJsService(mockConfig as unknown as ConfigService);
            expect(service.getBaseUrl()).toBe('https://api.medusa.test');
        });

        it('getPublishableKey should return publishable key', () => {
            const service = new MedusaJsService(mockConfig as unknown as ConfigService);
            expect(service.getPublishableKey()).toBe('pk_test');
        });

        it('getAdminKey should return admin key', () => {
            const service = new MedusaJsService(mockConfig as unknown as ConfigService);
            expect(service.getAdminKey()).toBe('admin_secret');
        });

        it('getAdminKeyEncoded should return base64 of admin key', () => {
            const service = new MedusaJsService(mockConfig as unknown as ConfigService);
            expect(service.getAdminKeyEncoded()).toBe(Buffer.from('admin_secret').toString('base64'));
        });

        it('getMedusaAdminApiHeaders should return headers with publishable key and Basic auth', () => {
            const service = new MedusaJsService(mockConfig as unknown as ConfigService);
            const headers = service.getMedusaAdminApiHeaders();
            expect(headers['x-publishable-api-key']).toBe('pk_test');
            expect(headers.Authorization).toBe(`Basic ${Buffer.from('admin_secret').toString('base64')}`);
        });
    });
});

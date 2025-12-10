import { HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { LoggerService } from '@o2s/utils.logger';

import { AppService } from './app.service';

describe('AppService', () => {
    let service: AppService;
    let httpService: HttpService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppService,
                {
                    provide: HttpService,
                    useValue: {
                        axiosRef: {
                            interceptors: {
                                request: { use: vi.fn() },
                                response: { use: vi.fn() },
                            },
                        },
                    },
                },
                {
                    provide: LoggerService,
                    useValue: {
                        apiRequest: vi.fn(),
                        apiRequestError: vi.fn(),
                        apiResponse: vi.fn(),
                        apiResponseError: vi.fn(),
                    },
                },
            ],
        }).compile();

        service = module.get<AppService>(AppService);
        httpService = module.get<HttpService>(HttpService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should configure axios interceptors on module init', () => {
        service.onModuleInit();
        expect(httpService.axiosRef.interceptors.request.use).toHaveBeenCalled();
        expect(httpService.axiosRef.interceptors.response.use).toHaveBeenCalled();
    });
});

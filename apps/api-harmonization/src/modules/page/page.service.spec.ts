import { NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { Articles, Auth as AuthIntegration, CMS } from '@o2s/configs.integrations';
import { firstValueFrom, of } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Auth } from '@o2s/framework/modules';

import { PageService } from './page.service';

describe('PageService', () => {
    let service: PageService;
    let cmsService: CMS.Service;
    let articlesService: Articles.Service;
    let authService: AuthIntegration.Service;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                PageService,
                {
                    provide: ConfigService,
                    useValue: {
                        get: vi.fn().mockReturnValue('en,pl,de'),
                    },
                },
                {
                    provide: CMS.Service,
                    useValue: {
                        getPage: vi.fn(),
                        getPages: vi.fn(),
                        getAppConfig: vi.fn(),
                        getHeader: vi.fn(),
                        getFooter: vi.fn(),
                        getAlternativePages: vi.fn(),
                    },
                },
                {
                    provide: Articles.Service,
                    useValue: {
                        getArticle: vi.fn(),
                        getCategory: vi.fn(),
                    },
                },
                {
                    provide: AuthIntegration.Service,
                    useValue: {
                        extractUserRoles: vi.fn().mockReturnValue([]),
                    },
                },
            ],
        }).compile();

        service = module.get<PageService>(PageService);
        cmsService = module.get<CMS.Service>(CMS.Service);
        articlesService = module.get<Articles.Service>(Articles.Service);
        authService = module.get<AuthIntegration.Service>(AuthIntegration.Service);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('getPage', () => {
        const mockHeaders = { 'x-locale': 'en', authorization: 'Bearer token' };
        const mockQuery = { slug: 'test-page' };

        it('should return page when it exists', async () => {
            const mockPage = {
                id: 'page-1',
                slug: 'test-page',
                permissions: [],
                blocks: [],
                seo: {
                    title: 'Test Page',
                    description: 'Test Description',
                    keywords: 'test, page',
                    image: null,
                    noIndex: false,
                    noFollow: false,
                },
                theme: null,
                template: 'default',
                hasOwnTitle: true,
                breadcrumbs: [],
            };

            vi.spyOn(cmsService, 'getPage').mockReturnValue(of(mockPage as unknown as CMS.Model.Page.Page));
            vi.spyOn(cmsService, 'getAlternativePages').mockReturnValue(
                of([mockPage as unknown as CMS.Model.Page.Page]),
            );

            const result = await firstValueFrom(service.getPage(mockQuery, mockHeaders));

            expect(result).toBeDefined();
            expect(cmsService.getPage).toHaveBeenCalledWith({
                slug: 'test-page',
                locale: 'en',
            });
        });

        it('should fallback to article when page not found', async () => {
            const mockArticle = {
                id: 'article-1',
                slug: 'test-page',
                permissions: [],
                category: { id: 'cat-1' },
            };
            const mockCategory = { id: 'cat-1', title: 'Test Category' };

            vi.spyOn(cmsService, 'getPage').mockReturnValue(of(undefined));
            vi.spyOn(articlesService, 'getArticle').mockReturnValue(
                of(mockArticle as unknown as Articles.Model.Article),
            );
            vi.spyOn(articlesService, 'getCategory').mockReturnValue(
                of(mockCategory as unknown as Articles.Model.Category),
            );

            const result = await firstValueFrom(service.getPage(mockQuery, mockHeaders));

            expect(result).toBeDefined();
            expect(articlesService.getArticle).toHaveBeenCalledWith({
                slug: 'test-page',
                locale: 'en',
            });
        });

        it('should throw NotFoundException when neither page nor article exists', async () => {
            vi.spyOn(cmsService, 'getPage').mockReturnValue(of(undefined));
            vi.spyOn(articlesService, 'getArticle').mockReturnValue(of(undefined));

            await expect(firstValueFrom(service.getPage(mockQuery, mockHeaders))).rejects.toThrow(NotFoundException);
        });

        it('should extract user roles from authorization header', async () => {
            const mockPage = {
                id: 'page-1',
                slug: 'test-page',
                permissions: [],
                blocks: [],
                seo: {
                    title: 'Test Page',
                    description: 'Test Description',
                    keywords: 'test',
                    image: null,
                    noIndex: false,
                    noFollow: false,
                },
                theme: null,
                template: 'default',
                hasOwnTitle: true,
                breadcrumbs: [],
            };

            vi.spyOn(cmsService, 'getPage').mockReturnValue(of(mockPage as unknown as CMS.Model.Page.Page));
            vi.spyOn(cmsService, 'getAlternativePages').mockReturnValue(
                of([mockPage as unknown as CMS.Model.Page.Page]),
            );
            vi.spyOn(authService, 'extractUserRoles').mockReturnValue([
                Auth.Constants.Roles.ORG_ADMIN,
                Auth.Constants.Roles.ORG_USER,
            ]);

            await firstValueFrom(service.getPage(mockQuery, mockHeaders));

            expect(authService.extractUserRoles).toHaveBeenCalledWith('Bearer token');
        });
    });

    describe('getInit', () => {
        const mockHeaders = { 'x-locale': 'en', authorization: 'Bearer token' };
        const mockQuery = { referrer: 'test-app' };

        it('should load app config with header and footer', async () => {
            const mockAppConfig = {
                header: 'header-1',
                footer: 'footer-1',
                locales: ['en', 'pl'],
                labels: {},
                themes: [],
            };
            const mockHeader = {
                id: 'header-1',
                items: [],
            };
            const mockFooter = {
                id: 'footer-1',
                items: [],
            };

            vi.spyOn(cmsService, 'getAppConfig').mockReturnValue(
                of(mockAppConfig as unknown as CMS.Model.AppConfig.AppConfig),
            );
            vi.spyOn(cmsService, 'getHeader').mockReturnValue(of(mockHeader as unknown as CMS.Model.Header.Header));
            vi.spyOn(cmsService, 'getFooter').mockReturnValue(of(mockFooter as unknown as CMS.Model.Footer.Footer));

            const result = await firstValueFrom(service.getInit(mockQuery, mockHeaders));

            expect(result).toBeDefined();
            expect(cmsService.getAppConfig).toHaveBeenCalledWith({
                referrer: 'test-app',
                locale: 'en',
            });
            expect(cmsService.getHeader).toHaveBeenCalledWith({
                id: 'header-1',
                locale: 'en',
            });
            expect(cmsService.getFooter).toHaveBeenCalledWith({
                id: 'footer-1',
                locale: 'en',
            });
        });
    });
});

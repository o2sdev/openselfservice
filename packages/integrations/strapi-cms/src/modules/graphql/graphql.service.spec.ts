import { ConfigService } from '@nestjs/config';
import { GraphQLClient } from 'graphql-request';
import { type Mock, beforeEach, describe, expect, it, vi } from 'vitest';

import { GraphqlService } from './graphql.service';

interface StrapiSdkMock {
    getAppConfig: Mock;
    getLocales: Mock;
    getPage: Mock;
    getPages: Mock;
    getLoginPage: Mock;
    getNotFoundPage: Mock;
    getHeader: Mock;
    getFooter: Mock;
    getComponent: Mock;
    getOrganizationList: Mock;
    getSurvey: Mock;
    getCategories: Mock;
    getArticle: Mock;
    getArticles: Mock;
}

vi.mock('graphql-request', () => {
    const GraphQLClientMock = vi.fn().mockImplementation(function GraphQLClient(this: unknown) {
        return {} as GraphQLClient;
    });

    return {
        GraphQLClient: GraphQLClientMock,
    };
});

vi.mock('../../../generated/strapi', () => {
    const sdkMock: StrapiSdkMock = {
        getAppConfig: vi.fn(),
        getLocales: vi.fn(),
        getPage: vi.fn(),
        getPages: vi.fn(),
        getLoginPage: vi.fn(),
        getNotFoundPage: vi.fn(),
        getHeader: vi.fn(),
        getFooter: vi.fn(),
        getComponent: vi.fn(),
        getOrganizationList: vi.fn(),
        getSurvey: vi.fn(),
        getCategories: vi.fn(),
        getArticle: vi.fn(),
        getArticles: vi.fn(),
    };

    (globalThis as { __strapiSdkMock?: StrapiSdkMock }).__strapiSdkMock = sdkMock;

    return {
        getSdk: () => sdkMock,
    };
});

describe('GraphqlService', () => {
    const mockedGraphQLClient = GraphQLClient as unknown as Mock;

    const getSdkMock = () => (globalThis as { __strapiSdkMock?: StrapiSdkMock }).__strapiSdkMock as StrapiSdkMock;

    let configService: ConfigService;

    beforeEach(() => {
        mockedGraphQLClient.mockReset();

        const sdkMock = getSdkMock();
        Object.values(sdkMock).forEach((fn) => fn.mockReset());

        configService = {
            get: vi.fn((key: string) => {
                if (key === 'CMS_STRAPI_BASE_URL') {
                    return 'https://strapi.test';
                }

                return undefined;
            }),
        } as unknown as ConfigService;
    });

    it('should create GraphQLClient with URL from config', () => {
        new GraphqlService(configService);

        // Assert
        expect(mockedGraphQLClient).toHaveBeenCalledTimes(1);
        expect(mockedGraphQLClient).toHaveBeenCalledWith('https://strapi.test/graphql');
    });

    it('should delegate methods to sdk', () => {
        const service = new GraphqlService(configService);
        const sdkMock = getSdkMock();

        const appConfigParams = {} as unknown;
        const pageParams = {} as unknown;
        const pagesParams = {} as unknown;
        const loginPageParams = {} as unknown;
        const notFoundPageParams = {} as unknown;
        const headerParams = {} as unknown;
        const footerParams = {} as unknown;
        const componentParams = {} as unknown;
        const organizationListParams = {} as unknown;
        const surveyParams = {} as unknown;
        const categoriesParams = {} as unknown;
        const articleParams = {} as unknown;
        const articlesParams = {} as unknown;

        service.getAppConfig(appConfigParams as never);
        service.getLocales();
        service.getPage(pageParams as never);
        service.getPages(pagesParams as never);
        service.getLoginPage(loginPageParams as never);
        service.getNotFoundPage(notFoundPageParams as never);
        service.getHeader(headerParams as never);
        service.getFooter(footerParams as never);
        service.getComponent(componentParams as never);
        service.getOrganizationList(organizationListParams as never);
        service.getSurvey(surveyParams as never);
        service.getCategories(categoriesParams as never);
        service.getArticle(articleParams as never);
        service.getArticles(articlesParams as never);

        expect(sdkMock.getAppConfig).toHaveBeenCalledWith(appConfigParams);
        expect(sdkMock.getLocales).toHaveBeenCalled();
        expect(sdkMock.getPage).toHaveBeenCalledWith(pageParams);
        expect(sdkMock.getPages).toHaveBeenCalledWith(pagesParams);
        expect(sdkMock.getLoginPage).toHaveBeenCalledWith(loginPageParams);
        expect(sdkMock.getNotFoundPage).toHaveBeenCalledWith(notFoundPageParams);
        expect(sdkMock.getHeader).toHaveBeenCalledWith(headerParams);
        expect(sdkMock.getFooter).toHaveBeenCalledWith(footerParams);
        expect(sdkMock.getComponent).toHaveBeenCalledWith(componentParams, undefined);
        expect(sdkMock.getOrganizationList).toHaveBeenCalledWith(organizationListParams);
        expect(sdkMock.getSurvey).toHaveBeenCalledWith(surveyParams);
        expect(sdkMock.getCategories).toHaveBeenCalledWith(categoriesParams);
        expect(sdkMock.getArticle).toHaveBeenCalledWith(articleParams);
        expect(sdkMock.getArticles).toHaveBeenCalledWith(articlesParams);
    });

    it('should send a bearer token to getComponent in preview mode when configured', () => {
        const configWithToken = {
            get: vi.fn((key: string) => {
                if (key === 'CMS_STRAPI_BASE_URL') {
                    return 'https://strapi.test';
                }
                if (key === 'CMS_STRAPI_PREVIEW_TOKEN') {
                    return 'preview-token';
                }
                return undefined;
            }),
        } as unknown as ConfigService;
        const service = new GraphqlService(configWithToken);
        const sdkMock = getSdkMock();
        const componentParams = {} as unknown;

        service.getComponent(componentParams as never, { preview: true });

        expect(sdkMock.getComponent).toHaveBeenCalledWith(componentParams, {
            Authorization: 'Bearer preview-token',
        });
    });

    it('should not send a token to getComponent when not previewing or not configured', () => {
        const service = new GraphqlService(configService);
        const sdkMock = getSdkMock();
        const componentParams = {} as unknown;

        // No token configured, preview true → no headers
        service.getComponent(componentParams as never, { preview: true });
        expect(sdkMock.getComponent).toHaveBeenCalledWith(componentParams, undefined);
    });

    it('should not send the configured token on published (non-preview) requests', () => {
        const configWithToken = {
            get: vi.fn((key: string) => {
                if (key === 'CMS_STRAPI_BASE_URL') {
                    return 'https://strapi.test';
                }
                if (key === 'CMS_STRAPI_PREVIEW_TOKEN') {
                    return 'preview-token';
                }
                return undefined;
            }),
        } as unknown as ConfigService;
        const service = new GraphqlService(configWithToken);
        const sdkMock = getSdkMock();
        const componentParams = {} as unknown;

        // Token configured but preview false → the token must NOT leak onto published requests
        service.getComponent(componentParams as never, { preview: false });
        expect(sdkMock.getComponent).toHaveBeenCalledWith(componentParams, undefined);
    });
});

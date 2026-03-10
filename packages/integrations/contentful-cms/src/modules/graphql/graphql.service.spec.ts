import { ConfigService } from '@nestjs/config';
import { GraphQLClient } from 'graphql-request';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { GraphqlService } from './graphql.service';

vi.mock('@/generated/contentful', () => {
    return {
        getSdk: (client: { request: (vars: unknown) => unknown }) => ({
            getPage: (vars: unknown) => client.request(vars),
            getPages: (vars: unknown) => client.request(vars),
            getComponent: (vars: unknown) => client.request(vars),
            getHeader: (vars: unknown) => client.request(vars),
            getAppConfig: (vars: unknown) => client.request(vars),
            getFooter: (vars: unknown) => client.request(vars),
        }),
    };
});

vi.mock('graphql-request', () => ({
    GraphQLClient: vi.fn(),
}));

describe('GraphqlService', () => {
    const originalEnv = process.env;
    const mockedGraphQLClient = GraphQLClient as unknown as ReturnType<typeof vi.fn>;

    let mockConfig: { get: ReturnType<typeof vi.fn> };
    let deliveryClientMock: { request: (vars: unknown) => unknown };
    let previewClientMock: { request: (vars: unknown) => unknown };

    beforeEach(() => {
        vi.restoreAllMocks();
        process.env = { ...originalEnv };
        process.env.CF_SPACE_ID = 'space-id';
        process.env.CF_ENV = 'env-id';
        process.env.CF_PREVIEW_TOKEN = 'preview-token';

        mockConfig = {
            get: vi.fn((key: string) => {
                if (key === 'CF_TOKEN') {
                    return 'delivery-token';
                }
                return undefined;
            }),
        };

        deliveryClientMock = { request: vi.fn() };
        previewClientMock = { request: vi.fn() };

        mockedGraphQLClient.mockReset();
        mockedGraphQLClient
            .mockImplementationOnce(function GraphQLClient(this: unknown) {
                return deliveryClientMock;
            })
            .mockImplementationOnce(function GraphQLClient(this: unknown) {
                return previewClientMock;
            });
    });

    afterEach(() => {
        process.env = originalEnv;
    });

    it('should configure GraphQL clients with correct base URL and headers', () => {
        new GraphqlService(mockConfig as unknown as ConfigService);

        const calls = mockedGraphQLClient.mock.calls;
        expect(calls).toHaveLength(2);

        const expectedBaseUrl = 'https://graphql.contentful.com/content/v1/spaces/space-id/environments/env-id';

        const [deliveryUrl, deliveryOptions] = calls[0] as [string, unknown];
        expect(deliveryUrl).toBe(expectedBaseUrl);
        expect(deliveryOptions).toMatchObject({
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer delivery-token',
            },
        });

        const [previewUrl, previewOptions] = calls[1] as [string, unknown];
        expect(previewUrl).toBe(expectedBaseUrl);
        expect(previewOptions).toMatchObject({
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer preview-token',
            },
        });
    });

    it('should use preview client when preview flag is true', () => {
        const service = new GraphqlService(mockConfig as unknown as ConfigService);

        service.getPage({ preview: true } as never);
        expect(previewClientMock.request).toHaveBeenCalled();
        expect(deliveryClientMock.request).not.toHaveBeenCalled();
    });

    it('should use delivery client when preview flag is false or undefined', () => {
        const service = new GraphqlService(mockConfig as unknown as ConfigService);

        service.getPage({ preview: false } as never);
        service.getFooter({ preview: undefined } as never);

        expect(previewClientMock.request).not.toHaveBeenCalled();
        expect(deliveryClientMock.request).toHaveBeenCalledTimes(2);
    });
});

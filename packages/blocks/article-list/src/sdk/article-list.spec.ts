import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Sdk } from '@o2s/framework/sdk';

import { articleList } from './article-list';

describe('ArticleList SDK', () => {
    let mockSdk: Sdk;

    beforeEach(() => {
        mockSdk = {
            makeRequest: vi.fn().mockResolvedValue({
                title: 'Test Articles',
                articles: [],
            }),
        } as unknown as Sdk;
    });

    it('should be defined', () => {
        const sdk = articleList(mockSdk);
        expect(sdk).toBeDefined();
        expect(sdk.blocks).toBeDefined();
        expect(sdk.blocks.getArticleList).toBeDefined();
    });

    it('should call makeRequest with correct parameters', async () => {
        const sdk = articleList(mockSdk);
        const query = { id: 'test-block' };
        const headers = { 'x-locale': 'en' };

        await sdk.blocks.getArticleList(query, headers);

        expect(mockSdk.makeRequest).toHaveBeenCalledWith({
            method: 'get',
            url: '/blocks/article-list',
            headers: expect.objectContaining({
                'x-locale': 'en',
            }),
            params: query,
        });
    });

    it('should include authorization header when provided', async () => {
        const sdk = articleList(mockSdk);
        const query = { id: 'test-block' };
        const headers = { 'x-locale': 'en' };
        const authorization = 'test-token';

        await sdk.blocks.getArticleList(query, headers, authorization);

        expect(mockSdk.makeRequest).toHaveBeenCalledWith(
            expect.objectContaining({
                headers: expect.objectContaining({
                    Authorization: 'Bearer test-token',
                }),
            }),
        );
    });
});

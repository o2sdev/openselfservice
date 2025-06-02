/* eslint-disable @typescript-eslint/no-explicit-any */
export type SearchEngineArticleModel = {
    id: string;
    documentId: string;
    slug: string;
    locale?: string;
    createdAt?: any;
    updatedAt?: any;
    publishedAt?: any;
    SEO: {
        title: string;
        noIndex: boolean;
        noFollow: boolean;
        description: string;
        keywords?: Array<{ keyword: string }>;
        image?: { url: string; alternativeText?: string; width?: number; height?: number; name: string };
    };
};

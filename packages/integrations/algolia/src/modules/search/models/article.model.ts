export type SearchEngineArticleModel = {
    id: string;
    documentId: string;
    slug: string;
    locale?: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    SEO: {
        title: string;
        noIndex: boolean;
        noFollow: boolean;
        description: string;
        keywords?: Array<{ keyword: string }>;
        image?: { url: string; alternativeText?: string; width?: number; height?: number; name: string };
    };
};

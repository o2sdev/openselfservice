import { NotFoundException } from '@nestjs/common';

import { Articles } from '@o2s/framework/modules';

const dateToday = new Date();
const dateYesterday = new Date();
dateYesterday.setDate(dateYesterday.getDate() - 1);

const MOCK_ARTICLE_1: Articles.Model.Article = {
    id: 'ART-001',
    title: 'First Article',
    lead: 'This is the lead for the first article.',
    createdAt: dateToday.toISOString(),
    updatedAt: dateToday.toISOString(),
    image: 'https://example.com/image1.jpg',
    thumbnail: 'https://example.com/thumbnail1.jpg',
    sections: [
        {
            __typename: 'ArticleSectionText',
            id: 'section-text-1',
            createdAt: dateToday.toISOString(),
            updatedAt: dateToday.toISOString(),
            title: 'Text Section Title',
            content: 'This is the content of the text section.',
        },
    ],
};

const MOCK_ARTICLE_2: Articles.Model.Article = {
    id: 'ART-002',
    title: 'Second Article',
    lead: 'This is the lead for the second article.',
    createdAt: dateYesterday.toISOString(),
    updatedAt: dateYesterday.toISOString(),
    image: 'https://example.com/image2.jpg',
    thumbnail: 'https://example.com/thumbnail2.jpg',
    sections: [
        {
            __typename: 'ArticleSectionText',
            id: 'section-text-2',
            createdAt: dateYesterday.toISOString(),
            updatedAt: dateYesterday.toISOString(),
            title: 'Text Section Title',
            content: 'This is the content of the text section.',
        },
    ],
};

const MOCK_ARTICLE_3: Articles.Model.Article = {
    id: 'ART-003',
    title: 'Third Article',
    lead: 'This is the lead for the third article.',
    createdAt: '2024-03-17T15:30:00Z',
    updatedAt: '2024-03-17T15:30:00Z',
    image: 'https://example.com/image3.jpg',
    thumbnail: 'https://example.com/thumbnail3.jpg',
    sections: [
        {
            __typename: 'ArticleSectionImage',
            id: 'section-image-1',
            createdAt: '2024-03-17T15:30:00Z',
            updatedAt: '2024-03-17T15:30:00Z',
            url: 'https://example.com/image3.jpg',
            alt: 'Image description',
            caption: 'This is a caption for the image section.',
        },
    ],
};

const MOCK_ARTICLES = [MOCK_ARTICLE_1, MOCK_ARTICLE_2, MOCK_ARTICLE_3];

export const mapArticle = (id: string): Articles.Model.Article => {
    const article = MOCK_ARTICLES.find((article) => article.id === id);
    if (!article) {
        throw new NotFoundException(`Article with id ${id} not found`);
    }
    return article;
};

export const mapArticles = (options: Articles.Request.GetArticleListQuery): Articles.Model.Articles => {
    const { offset = 0, limit = 10 } = options;
    const filteredArticles = MOCK_ARTICLES.filter((article) => {
        if (options.dateFrom && new Date(article.createdAt) < new Date(options.dateFrom)) {
            return false;
        }
        if (options.dateTo && new Date(article.createdAt) > new Date(options.dateTo)) {
            return false;
        }
        return true;
    });

    return {
        data: filteredArticles.slice(offset, offset + limit),
        total: filteredArticles.length,
    };
};

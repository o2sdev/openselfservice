import { NotFoundException } from '@nestjs/common';

import { Articles } from '@o2s/framework/modules';

import {
    MOCK_ARTICLES_DE,
    MOCK_ARTICLES_EN,
    MOCK_ARTICLES_PL,
    MOCK_CATEGORIES_DE,
    MOCK_CATEGORIES_EN,
    MOCK_CATEGORIES_PL,
} from './mocks';

export const mapCategory = (locale: string, id: string): Articles.Model.Category => {
    const categories = locale === 'pl' ? MOCK_CATEGORIES_PL : locale === 'de' ? MOCK_CATEGORIES_DE : MOCK_CATEGORIES_EN;
    const category = categories.find((category) => category.id === id);
    if (!category) {
        throw new NotFoundException(`Category with id ${id} not found`);
    }
    return category;
};

export const mapCategories = (
    locale: string,
    options: Articles.Request.GetCategoryListQuery,
): Articles.Model.Categories => {
    const { offset = 0, limit = 10 } = options;
    const categories = locale === 'pl' ? MOCK_CATEGORIES_PL : locale === 'de' ? MOCK_CATEGORIES_DE : MOCK_CATEGORIES_EN;

    // Apply sorting if provided
    const sortedCategories = [...categories];
    const sort = options.sort;
    if (sort) {
        sortedCategories.sort((a, b) => {
            const fieldA = a[sort.field as keyof Omit<Articles.Model.Category, 'icon' | 'parent'>];
            const fieldB = b[sort.field as keyof Omit<Articles.Model.Category, 'icon' | 'parent'>];

            if (fieldA && fieldB) {
                return sort.order === 'asc' ? fieldA.localeCompare(fieldB) : fieldB.localeCompare(fieldA);
            }

            return 0;
        });
    }

    return {
        data: sortedCategories.slice(offset, offset + limit),
        total: sortedCategories.length,
    };
};

export const mapArticle = (locale: string, slug: string, theme?: string): Articles.Model.Article | undefined => {
    const articles = locale === 'pl' ? MOCK_ARTICLES_PL : locale === 'de' ? MOCK_ARTICLES_DE : MOCK_ARTICLES_EN;
    return articles.find((article) => article.slug === slug && (!theme || article.theme === theme));
};

export const mapArticles = (
    locale: string,
    options: Articles.Request.GetArticleListQuery & { theme?: string },
): Articles.Model.Articles => {
    const { offset = 0, limit = 10, theme } = options;
    const articles = locale === 'pl' ? MOCK_ARTICLES_PL : locale === 'de' ? MOCK_ARTICLES_DE : MOCK_ARTICLES_EN;
    const filteredArticles = articles.filter((article) => {
        if (options.dateFrom && new Date(article.createdAt) < new Date(options.dateFrom)) {
            return false;
        }
        if (options.dateTo && new Date(article.createdAt) > new Date(options.dateTo)) {
            return false;
        }
        if (theme && article.theme !== theme) {
            return false;
        }
        return true;
    });

    return {
        data: filteredArticles.slice(offset, offset + limit),
        total: filteredArticles.length,
    };
};

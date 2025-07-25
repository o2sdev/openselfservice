// this unused import is necessary for TypeScript to properly resolve API methods
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Blocks, Headers, Modules } from '@o2s/api-harmonization';

import { extendSdk, getSdk } from '@o2s/framework/sdk';

import { Notifications } from '@o2s/integrations.mocked/sdk';

import { articleSearch } from '@/api/blocks/article-search';
import { category } from '@/api/blocks/category';
import { surveyJSBlock } from '@/api/blocks/surveyjs';
// BLOCK IMPORT
import { loginPage } from '@/api/modules/login-page';
import { notFoundPage } from '@/api/modules/not-found-page';
import { organizations } from '@/api/modules/organizations';
import { page } from '@/api/modules/page';
import { surveyjs } from '@/api/modules/surveyjs';

const API_URL =
    (typeof window === 'undefined' ? process.env.NEXT_PUBLIC_API_URL_INTERNAL : process.env.NEXT_PUBLIC_API_URL) ||
    process.env.NEXT_PUBLIC_API_URL;

const internalSdk = getSdk({
    apiUrl: API_URL!,
    logger: {
        // @ts-expect-error missing types
        level: process.env.NEXT_PUBLIC_LOG_LEVEL,
        // @ts-expect-error missing types
        format: process.env.NEXT_PUBLIC_LOG_FORMAT,
        colorsEnabled: process.env.NEXT_PUBLIC_LOG_COLORS_ENABLED === 'true',
    },
});

export const sdk = extendSdk(internalSdk, {
    notifications: {
        ...Notifications.extend(internalSdk),
    },
    blocks: {
        getSurveyJsBlock: surveyJSBlock(internalSdk).blocks.getSurveyjsBlock,
        getCategory: category(internalSdk).blocks.getCategory,
        getCategoryArticles: category(internalSdk).blocks.getCategoryArticles,
        getArticleSearch: articleSearch(internalSdk).blocks.getArticleSearch,
        searchArticles: articleSearch(internalSdk).blocks.searchArticles,
        // BLOCK REGISTER
    },
    modules: {
        getInit: page(internalSdk).modules.getInit,
        getPage: page(internalSdk).modules.getPage,
        getLoginPage: loginPage(internalSdk).modules.getLoginPage,
        getNotFoundPage: notFoundPage(internalSdk).modules.getNotFoundPage,
        getCustomers: organizations(internalSdk).modules.getCustomers,
        getSurvey: surveyjs(internalSdk).modules.getSurvey,
        submitSurvey: surveyjs(internalSdk).modules.submitSurvey,
    },
});

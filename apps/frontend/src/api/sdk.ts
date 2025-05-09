// this unused import is necessary for TypeScript to properly resolve API methods
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Blocks, Headers, Modules } from '@o2s/api-harmonization';
import { Notifications } from '@o2s/integrations.mocked/sdk';
import { ordersSummary } from 'src/api/blocks/orders-summary';

import { extendSdk, getSdk } from '@o2s/framework/sdk';

import { article } from '@/api/blocks/article';
import { articleList } from '@/api/blocks/article-list';
import { category } from '@/api/blocks/category';
import { categoryList } from '@/api/blocks/category-list';
import { faq } from '@/api/blocks/faq';
import { invoiceList } from '@/api/blocks/invoice-list';
import { notificationDetails } from '@/api/blocks/notification-details';
import { notificationList } from '@/api/blocks/notification-list';
import { orderList } from '@/api/blocks/order-list';
import { paymentsHistory } from '@/api/blocks/payments-history';
import { paymentsSummary } from '@/api/blocks/payments-summary';
import { quickLinks } from '@/api/blocks/quick-links';
import { serviceDetails } from '@/api/blocks/service-details';
import { serviceList } from '@/api/blocks/services-list';
import { surveyJSBlock } from '@/api/blocks/surveyjs';
import { ticketDetails } from '@/api/blocks/ticket-details';
import { ticketList } from '@/api/blocks/ticket-list';
import { ticketRecent } from '@/api/blocks/ticket-recent';
import { userAccount } from '@/api/blocks/user-account';
// BLOCK IMPORT
import { loginPage } from '@/api/modules/login-page';
import { notFoundPage } from '@/api/modules/not-found-page';
import { organizations } from '@/api/modules/organizations';
import { page } from '@/api/modules/page';
import { surveyjs } from '@/api/modules/surveyjs';

const internalSdk = getSdk({
    apiUrl: process.env.NEXT_PUBLIC_API_URL as string,
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
        getTicketList: ticketList(internalSdk).blocks.getTicketList,
        getTicketRecent: ticketRecent(internalSdk).blocks.getTicketRecent,
        getTicketDetails: ticketDetails(internalSdk).blocks.getTicketDetails,
        getNotificationList: notificationList(internalSdk).blocks.getNotificationList,
        getNotificationDetails: notificationDetails(internalSdk).blocks.getNotificationDetails,
        markNotificationAs: notificationDetails(internalSdk).blocks.markNotificationAs,
        getInvoiceList: invoiceList(internalSdk).blocks.getInvoiceList,
        getInvoicePdf: invoiceList(internalSdk).blocks.getInvoicePdf,
        getPaymentsSummary: paymentsSummary(internalSdk).blocks.getPaymentsSummary,
        getPaymentsHistory: paymentsHistory(internalSdk).blocks.getPaymentsHistory,
        getServiceList: serviceList(internalSdk).blocks.getServiceList,
        getServiceDetails: serviceDetails(internalSdk).blocks.getServiceDetails,
        getFaq: faq(internalSdk).blocks.getFaq,
        getUserAccount: userAccount(internalSdk).blocks.getUserAccount,
        getSurveyJsBlock: surveyJSBlock(internalSdk).blocks.getSurveyjsBlock,
        getOrderList: orderList(internalSdk).blocks.getOrderList,
        getOrdersSummary: ordersSummary(internalSdk).blocks.getOrdersSummary,
        getQuickLinks: quickLinks(internalSdk).blocks.getQuickLinks,
        getCategoryList: categoryList(internalSdk).blocks.getCategoryList,
        getArticleList: articleList(internalSdk).blocks.getArticleList,
        getCategory: category(internalSdk).blocks.getCategory,
        getCategoryArticles: category(internalSdk).blocks.getCategoryArticles,
        getArticle: article(internalSdk).blocks.getArticle,
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

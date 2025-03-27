// this unused import is necessary for TypeScript to properly resolve API methods
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Blocks, Headers, Modules } from '@o2s/api-harmonization';
import { Notifications } from '@o2s/integrations.mocked/sdk';

import { extendSdk, getSdk } from '@o2s/framework/sdk';

import { faq } from '@/api/blocks/faq';
import { invoiceList } from '@/api/blocks/invoice-list';
import { notificationDetails } from '@/api/blocks/notification-details';
import { notificationList } from '@/api/blocks/notification-list';
import { paymentsHistory } from '@/api/blocks/payments-history';
import { paymentsSummary } from '@/api/blocks/payments-summary';
import { serviceDetails } from '@/api/blocks/service-details';
import { serviceList } from '@/api/blocks/services-list';
import { ticketDetails } from '@/api/blocks/ticket-details';
import { ticketList } from '@/api/blocks/ticket-list';
import { ticketRecent } from '@/api/blocks/ticket-recent';
import { userAccount } from '@/api/blocks/user-account';
import { loginPage } from '@/api/modules/login-page';
import { notFoundPage } from '@/api/modules/not-found-page';
import { page } from '@/api/modules/page';

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
    },
    modules: {
        getInit: page(internalSdk).modules.getInit,
        getPage: page(internalSdk).modules.getPage,
        getLoginPage: loginPage(internalSdk).modules.getLoginPage,
        getNotFoundPage: notFoundPage(internalSdk).modules.getNotFoundPage,
    },
});

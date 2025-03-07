// this unused import is necessary for TypeScript to properly resolve API methods
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Components, Headers, Modules } from '@o2s/api-harmonization';
import { Notifications } from '@o2s/integrations.mocked/sdk';

import { extendSdk, getSdk } from '@o2s/framework/sdk';

import { faq } from '@/api/components/faq';
import { invoiceList } from '@/api/components/invoice-list';
import { notificationDetails } from '@/api/components/notification-details';
import { notificationList } from '@/api/components/notification-list';
import { paymentsHistory } from '@/api/components/payments-history';
import { paymentsSummary } from '@/api/components/payments-summary';
import { ticketDetails } from '@/api/components/ticket-details';
import { ticketList } from '@/api/components/ticket-list';
import { ticketRecent } from '@/api/components/ticket-recent';
import { userAccount } from '@/api/components/user-account';
import { loginPage } from '@/api/modules/login-page';
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
    components: {
        getTicketList: ticketList(internalSdk).components.getTicketList,
        getTicketRecent: ticketRecent(internalSdk).components.getTicketRecent,
        getTicketDetails: ticketDetails(internalSdk).components.getTicketDetails,
        getNotificationList: notificationList(internalSdk).components.getNotificationList,
        getNotificationDetails: notificationDetails(internalSdk).components.getNotificationDetails,
        markNotificationAs: notificationDetails(internalSdk).components.markNotificationAs,
        getInvoiceList: invoiceList(internalSdk).components.getInvoiceList,
        getInvoicePdf: invoiceList(internalSdk).components.getInvoicePdf,
        getPaymentsSummary: paymentsSummary(internalSdk).components.getPaymentsSummary,
        getPaymentsHistory: paymentsHistory(internalSdk).components.getPaymentsHistory,
        getFaq: faq(internalSdk).components.getFaq,
        getUserAccount: userAccount(internalSdk).components.getUserAccount,
    },
    modules: {
        getInit: page(internalSdk).modules.getInit,
        getPage: page(internalSdk).modules.getPage,
        getLoginPage: loginPage(internalSdk).modules.getLoginPage,
    },
});

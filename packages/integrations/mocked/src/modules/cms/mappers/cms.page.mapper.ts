import { CMS } from '@o2s/framework/modules';

import { cartPage } from './mocks/pages/cart.page';
import {
    accessoriesPage,
    maintenancePage,
    safetyPage,
    troubleshootingPage,
    warrantyAndRepairPage,
    zendeskMaintenancePage,
    zendeskWarrantyAndRepairPage,
} from './mocks/pages/category.page';
import {
    checkoutBillingPaymentPage,
    checkoutCompanyDataPage,
    checkoutShippingAddressPage,
    checkoutSummaryPage,
} from './mocks/pages/checkout.page';
import { dashboardPage } from './mocks/pages/dashboard.page';
import { invoiceListPage } from './mocks/pages/invoice-list.page';
import { helpAndSupportPage } from './mocks/pages/knowledge-base.page';
import { notificationDetailsPage } from './mocks/pages/notification-details.page';
import { notificationListPage } from './mocks/pages/notification-list.page';
import { orderConfirmationPage } from './mocks/pages/order-confirmation.page';
import { orderDetailsPage } from './mocks/pages/order-details.page';
import { orderListPage } from './mocks/pages/order-list.page';
import { productDetailsPage } from './mocks/pages/product-details.page';
import { productListPage } from './mocks/pages/product-list.page';
import { serviceDetailsPage } from './mocks/pages/service-details.page';
import { serviceListPage } from './mocks/pages/service-list.page';
import { complaintFormPage, contactUsPage, requestDeviceMaintenancePage } from './mocks/pages/surveyjs-forms.page';
import { ticketDetailsPage } from './mocks/pages/ticket-details.page';
import { ticketListPage } from './mocks/pages/ticket-list.page';
import { userAccountPage } from './mocks/pages/user-account.page';

/**
 * Every page this integration serves. Each one is declared once, with an entry per locale, and the
 * registry derives the routing, the page list and the localized alternates from those declarations,
 * so the three cannot list different pages.
 */
export const pages = CMS.Pages.createPageRegistry(
    [
        dashboardPage,
        ticketListPage,
        ticketDetailsPage,
        notificationListPage,
        notificationDetailsPage,
        invoiceListPage,
        userAccountPage,
        serviceListPage,
        serviceDetailsPage,
        productListPage,
        productDetailsPage,
        contactUsPage,
        complaintFormPage,
        requestDeviceMaintenancePage,
        orderListPage,
        orderDetailsPage,
        cartPage,
        checkoutCompanyDataPage,
        checkoutShippingAddressPage,
        checkoutBillingPaymentPage,
        checkoutSummaryPage,
        orderConfirmationPage,
        helpAndSupportPage,
        warrantyAndRepairPage,
        maintenancePage,
        safetyPage,
        accessoriesPage,
        troubleshootingPage,
        zendeskWarrantyAndRepairPage,
        zendeskMaintenancePage,
    ],
    {
        defaults: {
            createdAt: '2025-01-01',
            updatedAt: '2025-01-01',
            seo: {
                noIndex: false,
                noFollow: false,
                keywords: [],
                image: {
                    url: 'https://picsum.photos/150',
                    width: 150,
                    height: 150,
                    alt: 'Placeholder',
                },
            },
        },
    },
);

export const mapPage = (slug: string, locale: string): CMS.Model.Page.Page | undefined => pages.mapPage(slug, locale);

// the pages with a dynamic slug are left out: their pattern is not a URL, and this list feeds the sitemap
export const getAllPages = (locale: string): CMS.Model.Page.Page[] =>
    pages.getAllPages(locale, { includeDynamic: false });

export const getAlternativePages = (id: string, slug: string, locale: string): CMS.Model.Page.Page[] =>
    pages.getAlternativePages(id, slug, locale);

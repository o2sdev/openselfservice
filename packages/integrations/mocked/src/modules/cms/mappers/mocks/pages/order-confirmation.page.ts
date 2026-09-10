import { CMS } from '@o2s/framework/modules';

export const orderConfirmationPage = CMS.Pages.definePage({
    id: 'order-confirmation-1',
    hasOwnTitle: true,
    locales: {
        en: {
            slug: '/order-confirmation/:id',
            seo: { title: 'Order confirmation', description: 'Your order has been placed' },
        },
        pl: {
            slug: '/potwierdzenie-zamowienia/:id',
            seo: { title: 'Potwierdzenie zamówienia', description: 'Twoje zamówienie zostało złożone' },
        },
        de: {
            slug: '/bestellbestaetigung/:id',
            seo: { title: 'Bestellbestätigung', description: 'Ihre Bestellung wurde aufgegeben' },
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: { main: [{ __typename: 'OrderConfirmationBlock', id: 'order-confirmation-1' }] },
    },
});

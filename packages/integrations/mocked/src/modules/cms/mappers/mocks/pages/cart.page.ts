import { CMS } from '@o2s/framework/modules';

export const cartPage = CMS.Pages.definePage({
    id: 'cart-1',
    hasOwnTitle: true,
    locales: {
        en: { slug: '/cart', seo: { title: 'Cart', description: 'Your shopping cart' } },
        pl: { slug: '/koszyk', seo: { title: 'Koszyk', description: 'Twój koszyk zakupów' } },
        de: { slug: '/warenkorb', seo: { title: 'Warenkorb', description: 'Ihr Warenkorb' } },
    },
    template: { __typename: 'OneColumnTemplate', slots: { main: [{ __typename: 'CartBlock', id: 'cart-1' }] } },
});

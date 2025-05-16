import { CMS } from '@o2s/framework/modules';

const MOCK_QUICK_LINKS_BLOCK_EN: CMS.Model.QuickLinksBlock.QuickLinksBlock = {
    id: 'quick-links-1',
    title: 'Find it in an instant',
    description: 'Quick access to our most popular tools and services to help you get what you need without delay.',
    items: [
        {
            label: 'Find a retailer',
            url: '/help-and-support/warranty-and-repair',
            description:
                'Locate authorized retailers and service centers near you for in-person assistance, product demos, and expert advice.',
            icon: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/MapPin.svg',
                alt: '',
            },
        },
        {
            label: 'Online repair',
            url: '/help-and-support/warranty-and-repair/managing-your-powerpro-tools-online',
            description:
                'Diagnose and schedule repairs for your tools online. Get quick service estimates and track repair status in real-time.',
            icon: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/Drill.svg',
                alt: '',
            },
        },
        {
            label: 'View Invoices',
            url: '/invoices',
            description:
                'Access and download your invoices and payment history. Keep track of all your transactions in one place.',
            icon: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/CreditCard.svg',
                alt: '',
            },
        },
        {
            label: 'View Orders',
            url: '/orders',
            description:
                'Track and manage your orders. View order history, check status, and access order details in one place.',
            icon: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/ShoppingBag.svg',
                alt: '',
            },
        },
    ],
};

const MOCK_QUICK_LINKS_BLOCK_DE: CMS.Model.QuickLinksBlock.QuickLinksBlock = {
    id: 'quick-links-1',
    title: 'Finden Sie es im Handumdrehen',
    description:
        'Schneller Zugriff auf unsere beliebtesten Tools und Dienste, um Ihnen zu helfen, das zu bekommen, was Sie ohne Verzögerung benötigen.',
    items: [
        {
            label: 'Händler finden',
            url: '/hilfe-und-support/garantie-und-reparatur',
            description:
                'Finden Sie autorisierte Händler und Servicezentren in Ihrer Nähe für persönliche Unterstützung, Produktdemonstrationen und Expertenberatung.',
            icon: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/MapPin.svg',
                alt: '',
            },
        },
        {
            label: 'Reparatur online',
            url: '/hilfe-und-support/garantie-und-reparatur/verwalten-ihrer-powerpro-werkzeuge-online',
            description:
                'Diagnostizieren und planen Sie Reparaturen für Ihre Werkzeuge online. Erhalten Sie schnelle Serviceschätzungen und verfolgen Sie den Reparaturstatus in Echtzeit.',
            icon: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/Drill.svg',
                alt: '',
            },
        },
        {
            label: 'Rechnungen anzeigen',
            url: '/rechnungen',
            description:
                'Greifen Sie auf Ihre Rechnungen und Zahlungshistorie zu. Behalten Sie alle Ihre Transaktionen an einem Ort im Blick.',
            icon: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/CreditCard.svg',
                alt: '',
            },
        },
        {
            label: 'Bestellungen anzeigen',
            url: '/bestellungen',
            description:
                'Verfolgen und verwalten Sie Ihre Bestellungen. Sehen Sie Ihre Bestellhistorie, prüfen Sie den Status und greifen Sie auf Bestelldetails an einem Ort zu.',
            icon: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/ShoppingBag.svg',
                alt: '',
            },
        },
    ],
};

const MOCK_QUICK_LINKS_BLOCK_PL: CMS.Model.QuickLinksBlock.QuickLinksBlock = {
    id: 'quick-links-1',
    title: 'Znajdź to w mgnieniu oka',
    description:
        'Szybki dostęp do naszych najpopularniejszych narzędzi i usług, aby pomóc Ci uzyskać to, czego potrzebujesz bez opóźnień.',
    items: [
        {
            label: 'Znajdź sprzedawcę',
            url: '/pomoc-i-wsparcie/gwarancja-i-naprawa',
            description:
                'Znajdź autoryzowanych sprzedawców i centra serwisowe w Twojej okolicy, aby uzyskać osobistą pomoc, demonstracje produktów i porady ekspertów.',
            icon: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/MapPin.svg',
                alt: '',
            },
        },
        {
            label: 'Naprawa online',
            url: '/pomoc-i-wsparcie/gwarancja-i-naprawa/zarzadzanie-narzedziami-powerpro-online',
            description:
                'Diagnozuj i planuj naprawy swoich narzędzi online. Otrzymuj szybkie wyceny serwisowe i śledź status naprawy w czasie rzeczywistym.',
            icon: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/Drill.svg',
                alt: '',
            },
        },
        {
            label: 'Przeglądaj faktury',
            url: '/rachunki',
            description:
                'Uzyskaj dostęp do swoich faktur i historii płatności. Śledź wszystkie swoje transakcje w jednym miejscu.',
            icon: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/CreditCard.svg',
                alt: '',
            },
        },
        {
            label: 'Przeglądaj zamówienia',
            url: '/zamowienia',
            description:
                'Śledź i zarządzaj swoimi zamówieniami. Przeglądaj historię zamówień, sprawdzaj status i uzyskaj dostęp do szczegółów zamówień w jednym miejscu.',
            icon: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/ShoppingBag.svg',
                alt: '',
            },
        },
    ],
};

export const mapQuickLinksBlock = (locale: string): CMS.Model.QuickLinksBlock.QuickLinksBlock => {
    switch (locale) {
        case 'de':
            return {
                ...MOCK_QUICK_LINKS_BLOCK_DE,
            };
        case 'pl':
            return {
                ...MOCK_QUICK_LINKS_BLOCK_PL,
            };
        case 'en':
        default:
            return {
                ...MOCK_QUICK_LINKS_BLOCK_EN,
            };
    }
};

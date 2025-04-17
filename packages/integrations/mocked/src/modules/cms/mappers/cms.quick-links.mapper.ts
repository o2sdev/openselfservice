import { CMS } from '@o2s/framework/modules';

const MOCK_QUICK_LINKS_BLOCK_EN: CMS.Model.QuickLinksBlock.QuickLinksBlock = {
    id: 'quick-links-1',
    title: 'Find it in an instant',
    description: 'A short description of the heading H2',
    links: [
        {
            label: 'Find a retailer',
            url: 'https://www.google.com',
            description: 'A short description of the action, limited to two lines.',
            icon: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-1.svg',
                alt: '',
            },
        },
        {
            label: 'Online repair',
            url: 'https://www.google.com',
            description: 'A short description of the action, limited to two lines.',
            icon: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-2.svg',
                alt: '',
            },
        },
        {
            label: 'Quick action 3',
            url: 'https://www.google.com',
            description: 'A short description of the action, limited to two lines.',
            icon: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-3.svg',
                alt: '',
            },
        },
        {
            label: 'Quick action 4',
            url: 'https://www.google.com',
            description: 'A short description of the action, limited to two lines.',
            icon: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-4.svg',
                alt: '',
            },
        },
    ],
};

const MOCK_QUICK_LINKS_BLOCK_DE: CMS.Model.QuickLinksBlock.QuickLinksBlock = {
    id: 'quick-links-1',
    title: 'Finden Sie es im Handumdrehen',
    description: 'Eine kurze Beschreibung der Überschrift H2',
    links: [
        {
            label: 'Händler finden',
            url: 'https://www.google.com',
            description: 'Eine kurze Beschreibung der Aktion, auf zwei Zeilen beschränkt.',
            icon: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-1.svg',
                alt: '',
            },
        },
        {
            label: 'Reparatur online',
            url: 'https://www.google.com',
            description: 'Eine kurze Beschreibung der Aktion, auf zwei Zeilen beschränkt.',
            icon: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-2.svg',
                alt: '',
            },
        },
        {
            label: 'Schnellaktion 3',
            url: 'https://www.google.com',
            description: 'Eine kurze Beschreibung der Aktion, auf zwei Zeilen beschränkt.',
            icon: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-3.svg',
                alt: '',
            },
        },
        {
            label: 'Schnellaktion 4',
            url: 'https://www.google.com',
            description: 'Eine kurze Beschreibung der Aktion, auf zwei Zeilen beschränkt.',
            icon: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-4.svg',
                alt: '',
            },
        },
    ],
};

const MOCK_QUICK_LINKS_BLOCK_PL: CMS.Model.QuickLinksBlock.QuickLinksBlock = {
    id: 'quick-links-1',
    title: 'Znajdź to w mgnieniu oka',
    description: 'Krótki opis nagłówka H2',
    links: [
        {
            label: 'Znajdź sprzedawcę',
            url: 'https://www.google.com',
            description: 'Krótki opis akcji, ograniczony do dwóch linii.',
            icon: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-1.svg',
                alt: '',
            },
        },
        {
            label: 'Naprawa online',
            url: 'https://www.google.com',
            description: 'Krótki opis akcji, ograniczony do dwóch linii.',
            icon: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-2.svg',
                alt: '',
            },
        },
        {
            label: 'Szybka akcja 3',
            url: 'https://www.google.com',
            description: 'Krótki opis akcji, ograniczony do dwóch linii.',
            icon: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-3.svg',
                alt: '',
            },
        },
        {
            label: 'Szybka akcja 4',
            url: 'https://www.google.com',
            description: 'Krótki opis akcji, ograniczony do dwóch linii.',
            icon: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-4.svg',
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

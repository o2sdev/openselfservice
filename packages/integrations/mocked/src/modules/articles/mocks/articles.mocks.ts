import { Articles } from '@o2s/framework/modules';

import { markdownContent } from './articles.content.mocks';

export const MOCK_ARTICLES_EN: Articles.Model.Article[] = [
    {
        id: 'art-001',
        slug: '/help-and-support/warranty-and-repair/managing-your-powerpro-tools-online',
        createdAt: '2023-05-12T08:30:00Z',
        updatedAt: '2023-06-15T14:25:00Z',
        title: 'Managing Your PowerPro Tools Online',
        lead: 'Learn how to efficiently manage your PowerPro tools through our self-service portal available 24/7.',
        tags: ['tag1', 'tag2'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
            width: 640,
            height: 656,
            alt: '',
        },
        thumbnail: {
            url: 'https://example.com/images/tool-management-thumb.jpg',
            alt: '',
        },
        category: {
            id: 'warranty-and-repair',
            title: 'Warranty & Repair',
        },
        author: {
            name: 'Lando Norris',
            position: 'Content Creator',
            avatar: 'https://example.com/images/user-001.jpg',
        },
        sections: [
            {
                id: 'sect-001-1',
                createdAt: '2023-05-12T08:30:00Z',
                updatedAt: '2023-06-15T14:25:00Z',
                __typename: 'ArticleSectionText',
                title: 'Getting Started',
                content:
                    "To begin managing your PowerPro tools online, log into your account at powerprotools.com and navigate to the 'My Tools' section.",
            },
            {
                id: 'sect-001-2',
                createdAt: '2023-05-12T09:15:00Z',
                updatedAt: '2023-06-15T14:25:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://picsum.photos/400/400',
                    alt: 'PowerPro dashboard view',
                },
                caption:
                    'The PowerPro tool management dashboard provides a comprehensive overview of your registered tools.',
            },
            {
                id: 'sect-001-3',
                createdAt: '2023-05-12T08:30:00Z',
                updatedAt: '2023-06-15T14:25:00Z',
                __typename: 'ArticleSectionText',
                title: 'Getting Started',
                content: markdownContent,
            },
            {
                id: 'sect-001-4',
                createdAt: '2023-05-12T09:15:00Z',
                updatedAt: '2023-06-15T14:25:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://picsum.photos/1200/800',
                    alt: 'PowerPro dashboard view',
                },
                caption:
                    'The PowerPro tool management dashboard provides a comprehensive overview of your registered tools.',
            },
        ],
    },
    {
        id: 'art-002',
        slug: '/help-and-support/warranty-and-repair/managing-your-powerpro-tools-online',
        createdAt: '2023-05-12T08:30:00Z',
        updatedAt: '2023-06-15T14:25:00Z',
        title: 'Managing Your PowerPro Tools Online',
        lead: 'Learn how to efficiently manage your PowerPro tools through our self-service portal available 24/7.',
        tags: ['tag1', 'tag2'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
            width: 640,
            height: 656,
            alt: '',
        },
        thumbnail: {
            url: 'https://example.com/images/tool-management-thumb.jpg',
            alt: '',
        },
        category: {
            id: 'warranty-and-repair',
            title: 'Warranty & Repair',
        },
        author: {
            name: 'Lando Norris',
            position: 'Content Creator',
            avatar: 'https://example.com/images/user-001.jpg',
        },
        sections: [
            {
                id: 'sect-001-1',
                createdAt: '2023-05-12T08:30:00Z',
                updatedAt: '2023-06-15T14:25:00Z',
                __typename: 'ArticleSectionText',
                title: 'Getting Started',
                content:
                    "To begin managing your PowerPro tools online, log into your account at powerprotools.com and navigate to the 'My Tools' section.",
            },
            {
                id: 'sect-001-2',
                createdAt: '2023-05-12T09:15:00Z',
                updatedAt: '2023-06-15T14:25:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://picsum.photos/400/400',
                    alt: 'PowerPro dashboard view',
                },
                caption:
                    'The PowerPro tool management dashboard provides a comprehensive overview of your registered tools.',
            },
            {
                id: 'sect-001-3',
                createdAt: '2023-05-12T08:30:00Z',
                updatedAt: '2023-06-15T14:25:00Z',
                __typename: 'ArticleSectionText',
                title: 'Getting Started',
                content: markdownContent,
            },
            {
                id: 'sect-001-4',
                createdAt: '2023-05-12T09:15:00Z',
                updatedAt: '2023-06-15T14:25:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://picsum.photos/1200/800',
                    alt: 'PowerPro dashboard view',
                },
                caption:
                    'The PowerPro tool management dashboard provides a comprehensive overview of your registered tools.',
            },
        ],
    },
];

export const MOCK_ARTICLES_DE: Articles.Model.Article[] = [
    {
        id: 'art-001',
        slug: '/hilfe-und-support/garantie-und-reparatur/verwalten-ihrer-powerpro-werkzeuge-online',
        createdAt: '2023-05-12T08:30:00Z',
        updatedAt: '2023-06-15T14:25:00Z',
        title: 'Verwalten Ihrer PowerPro-Werkzeuge online',
        lead: 'Erfahren Sie, wie Sie Ihre PowerPro-Werkzeuge effizient über unser rund um die Uhr verfügbares Selbstbedienungsportal verwalten können.',
        tags: ['tag1', 'tag2'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
            width: 640,
            height: 656,
            alt: '',
        },
        thumbnail: {
            url: 'https://example.com/images/tool-management-thumb.jpg',
            alt: '',
        },
        category: {
            id: 'warranty-and-repair',
            title: 'Warranty & Repair',
        },
        sections: [
            {
                id: 'sect-001-1',
                createdAt: '2023-05-12T08:30:00Z',
                updatedAt: '2023-06-15T14:25:00Z',
                __typename: 'ArticleSectionText',
                title: 'Erste Schritte',
                content:
                    "Um mit der Online-Verwaltung Ihrer PowerPro-Werkzeuge zu beginnen, melden Sie sich bei Ihrem Konto auf powerprotools.com an und navigieren Sie zum Bereich 'Meine Werkzeuge'.",
            },
            {
                id: 'sect-001-2',
                createdAt: '2023-05-12T09:15:00Z',
                updatedAt: '2023-06-15T14:25:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://picsum.photos/1200/800',
                    alt: 'PowerPro-Dashboard-Ansicht',
                },
                caption:
                    'Das PowerPro-Werkzeugverwaltungs-Dashboard bietet einen umfassenden Überblick über Ihre registrierten Werkzeuge.',
            },
        ],
    },
];

export const MOCK_ARTICLES_PL: Articles.Model.Article[] = [
    {
        id: 'art-001',
        slug: '/pomoc-i-wsparcie/gwarancja-i-naprawa/zarzadzanie-narzedziami-powerpro-online',
        createdAt: '2023-05-12T08:30:00Z',
        updatedAt: '2023-06-15T14:25:00Z',
        title: 'Zarządzanie narzędziami PowerPro online',
        lead: 'Dowiedz się, jak efektywnie zarządzać narzędziami PowerPro za pomocą naszego portalu samoobsługowego dostępnego 24/7.',
        tags: ['tag1', 'tag2'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/empty.jpg',
            width: 640,
            height: 656,
            alt: '',
        },
        thumbnail: {
            url: 'https://example.com/images/tool-management-thumb.jpg',
            alt: '',
        },
        category: {
            id: 'warranty-and-repair',
            title: 'Warranty & Repair',
        },
        sections: [
            {
                id: 'sect-001-1',
                createdAt: '2023-05-12T08:30:00Z',
                updatedAt: '2023-06-15T14:25:00Z',
                __typename: 'ArticleSectionText',
                title: 'Pierwsze kroki',
                content:
                    "Aby rozpocząć zarządzanie narzędziami PowerPro online, zaloguj się na swoje konto na stronie powerprotools.com i przejdź do sekcji 'Moje narzędzia'.",
            },
            {
                id: 'sect-001-2',
                createdAt: '2023-05-12T09:15:00Z',
                updatedAt: '2023-06-15T14:25:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://picsum.photos/1200/800',
                    alt: 'Widok panelu PowerPro',
                },
                caption:
                    'Panel zarządzania narzędziami PowerPro zapewnia kompleksowy przegląd zarejestrowanych narzędzi.',
            },
        ],
    },
];

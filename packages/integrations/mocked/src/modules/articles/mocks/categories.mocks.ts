import { Articles } from '@o2s/framework/modules';

export const MOCK_CATEGORIES_EN: Articles.Model.Category[] = [
    {
        id: 'warranty-and-repair',
        slug: '/help-and-support/warranty-and-repair',
        createdAt: '2023-05-12T08:30:00Z',
        updatedAt: '2023-06-15T14:25:00Z',
        title: 'Warranty & Repair',
        icon: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-1.svg',
            alt: '',
        },
        description:
            'The Warranty & Repair category offers FAQs, troubleshooting guides, step-by-step tutorials, and support contacts to help users resolve issues and navigate services efficiently.',
        parent: {
            slug: '/help-and-support',
            title: 'Help & Support',
        },
    },
    {
        id: 'maintenance',
        slug: '/help-and-support/maintenance',
        createdAt: '2023-06-10T10:15:00Z',
        updatedAt: '2023-07-20T16:30:00Z',
        title: 'Maintenance',
        icon: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-2.svg',
            alt: '',
        },
        description:
            'The Maintenance category provides guides, tips, and best practices for keeping your PowerPro tools in optimal condition, ensuring longevity and peak performance.',
        parent: {
            slug: '/help-and-support',
            title: 'Help & Support',
        },
    },
    {
        id: 'safety',
        slug: '/help-and-support/safety',
        createdAt: '2023-07-15T09:45:00Z',
        updatedAt: '2023-08-25T13:20:00Z',
        title: 'Safety',
        icon: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-3.svg',
            alt: '',
        },
        description:
            'The Safety category offers essential guidelines, precautions, and best practices to ensure safe operation of PowerPro tools, preventing accidents and injuries.',
        parent: {
            slug: '/help-and-support',
            title: 'Help & Support',
        },
    },
    {
        id: 'accessories',
        slug: '/help-and-support/accessories',
        createdAt: '2023-08-20T11:30:00Z',
        updatedAt: '2023-09-30T15:45:00Z',
        title: 'Accessories',
        icon: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-4.svg',
            alt: '',
        },
        description:
            'The Accessories category showcases the wide range of attachments, add-ons, and enhancements available for PowerPro tools, helping you expand functionality and tackle specialized projects.',
        parent: {
            slug: '/help-and-support',
            title: 'Help & Support',
        },
    },
];

export const MOCK_CATEGORIES_DE: Articles.Model.Category[] = [
    {
        id: 'warranty-and-repair',
        slug: '/hilfe-und-support/garantie-und-reparatur',
        createdAt: '2023-05-12T08:30:00Z',
        updatedAt: '2023-06-15T14:25:00Z',
        title: 'Garantie & Reparatur',
        icon: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-1.svg',
            alt: '',
        },
        description:
            'Die Kategorie Garantie & Reparatur bietet FAQs, Fehlerbehebungsanleitungen, Schritt-für-Schritt-Tutorials und Support-Kontakte, um Benutzern zu helfen, Probleme effizient zu lösen und Services zu navigieren.',
        parent: {
            slug: '/hilfe-und-support',
            title: 'Hilfe und Support',
        },
    },
    {
        id: 'maintenance',
        slug: '/hilfe-und-support/wartung',
        createdAt: '2023-06-10T10:15:00Z',
        updatedAt: '2023-07-20T16:30:00Z',
        title: 'Wartung',
        icon: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-2.svg',
            alt: '',
        },
        description:
            'Die Kategorie Wartung bietet Anleitungen, Tipps und bewährte Praktiken zur Erhaltung Ihrer PowerPro-Werkzeuge in optimalem Zustand, um Langlebigkeit und Höchstleistung zu gewährleisten.',
        parent: {
            slug: '/hilfe-und-support',
            title: 'Hilfe und Support',
        },
    },
    {
        id: 'safety',
        slug: '/hilfe-und-support/sicherheit',
        createdAt: '2023-07-15T09:45:00Z',
        updatedAt: '2023-08-25T13:20:00Z',
        title: 'Sicherheit',
        icon: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-3.svg',
            alt: '',
        },
        description:
            'Die Kategorie Sicherheit bietet wesentliche Richtlinien, Vorsichtsmaßnahmen und bewährte Praktiken, um den sicheren Betrieb von PowerPro-Werkzeugen zu gewährleisten und Unfälle und Verletzungen zu vermeiden.',
        parent: {
            slug: '/hilfe-und-support',
            title: 'Hilfe und Support',
        },
    },
    {
        id: 'accessories',
        slug: '/hilfe-und-support/zubehoer',
        createdAt: '2023-08-20T11:30:00Z',
        updatedAt: '2023-09-30T15:45:00Z',
        title: 'Zubehör',
        icon: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-4.svg',
            alt: '',
        },
        description:
            'Die Kategorie Zubehör präsentiert die breite Palette an Aufsätzen, Erweiterungen und Verbesserungen, die für PowerPro-Werkzeuge erhältlich sind, und hilft Ihnen, die Funktionalität zu erweitern und spezialisierte Projekte anzugehen.',
        parent: {
            slug: '/hilfe-und-support',
            title: 'Hilfe und Support',
        },
    },
];

export const MOCK_CATEGORIES_PL: Articles.Model.Category[] = [
    {
        id: 'warranty-and-repair',
        slug: '/pomoc-i-wsparcie/gwarancja-i-naprawa',
        createdAt: '2023-05-12T08:30:00Z',
        updatedAt: '2023-06-15T14:25:00Z',
        title: 'Gwarancja i Naprawa',
        icon: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-1.svg',
            alt: '',
        },
        description:
            'Kategoria Gwarancja i Naprawa oferuje FAQ, poradniki rozwiązywania problemów, szczegółowe instrukcje oraz dane kontaktowe wsparcia technicznego, aby pomóc użytkownikom efektywnie rozwiązywać problemy i korzystać z usług serwisowych.',
        parent: {
            slug: '/pomoc-i-wsparcie',
            title: 'Pomoc i Wsparcie',
        },
    },
    {
        id: 'maintenance',
        slug: '/pomoc-i-wsparcie/konserwacja',
        createdAt: '2023-06-10T10:15:00Z',
        updatedAt: '2023-07-20T16:30:00Z',
        title: 'Konserwacja',
        icon: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-2.svg',
            alt: '',
        },
        description:
            'Kategoria Konserwacja zawiera przewodniki, wskazówki i najlepsze praktyki dotyczące utrzymania narzędzi PowerPro w optymalnym stanie, zapewniając ich długą żywotność i najwyższą wydajność.',
        parent: {
            slug: '/pomoc-i-wsparcie',
            title: 'Pomoc i Wsparcie',
        },
    },
    {
        id: 'safety',
        slug: '/pomoc-i-wsparcie/bezpieczenstwo',
        createdAt: '2023-07-15T09:45:00Z',
        updatedAt: '2023-08-25T13:20:00Z',
        title: 'Bezpieczeństwo',
        icon: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-3.svg',
            alt: '',
        },
        description:
            'Kategoria Bezpieczeństwo oferuje niezbędne wytyczne, środki ostrożności i najlepsze praktyki zapewniające bezpieczną obsługę narzędzi PowerPro, zapobiegając wypadkom i obrażeniom.',
        parent: {
            slug: '/pomoc-i-wsparcie',
            title: 'Pomoc i Wsparcie',
        },
    },
    {
        id: 'accessories',
        slug: '/pomoc-i-wsparcie/akcesoria',
        createdAt: '2023-08-20T11:30:00Z',
        updatedAt: '2023-09-30T15:45:00Z',
        title: 'Akcesoria',
        icon: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-4.svg',
            alt: '',
        },
        description:
            'Kategoria Akcesoria prezentuje szeroki zakres przystawek, dodatków i ulepszeń dostępnych dla narzędzi PowerPro, pomagając rozszerzyć ich funkcjonalność i realizować specjalistyczne projekty.',
        parent: {
            slug: '/pomoc-i-wsparcie',
            title: 'Pomoc i Wsparcie',
        },
    },
];

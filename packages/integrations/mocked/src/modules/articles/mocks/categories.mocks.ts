import { Articles } from '@o2s/framework/modules';

export const MOCK_CATEGORIES_EN: Articles.Model.Category[] = [
    {
        id: 'warranty-and-repair',
        slug: '/help-and-support/warranty-and-repair',
        createdAt: '2023-05-12T08:30:00Z',
        updatedAt: '2023-06-15T14:25:00Z',
        title: 'Warranty & Repair',
        icon: 'Wrench',
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
        icon: 'Wrench',
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
        icon: 'ShieldCheck',
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
        icon: 'ShieldCheck',
        description:
            'The Accessories category showcases the wide range of attachments, add-ons, and enhancements available for PowerPro tools, helping you expand functionality and tackle specialized projects.',
        parent: {
            slug: '/help-and-support',
            title: 'Help & Support',
        },
    },
    {
        id: 'troubleshooting',
        slug: '/help-and-support/troubleshooting',
        createdAt: '2023-08-20T11:30:00Z',
        updatedAt: '2023-09-30T15:45:00Z',
        title: 'Troubleshooting',
        icon: 'Settings',
        description:
            'The Troubleshooting category provides solutions to common problems and issues with PowerPro tools, offering step-by-step guides, troubleshooting tips, and support contacts to help users resolve issues quickly and efficiently.',
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
        icon: 'Wrench',
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
        icon: 'Wrench',
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
        icon: 'ShieldCheck',
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
        icon: 'ShieldCheck',
        description:
            'Die Kategorie Zubehör präsentiert die breite Palette an Aufsätzen, Erweiterungen und Verbesserungen, die für PowerPro-Werkzeuge erhältlich sind, und hilft Ihnen, die Funktionalität zu erweitern und spezialisierte Projekte anzugehen.',
        parent: {
            slug: '/hilfe-und-support',
            title: 'Hilfe und Support',
        },
    },
    {
        id: 'troubleshooting',
        slug: '/hilfe-und-support/fehlerbehebung',
        createdAt: '2023-08-20T11:30:00Z',
        updatedAt: '2023-09-30T15:45:00Z',
        title: 'Fehlerbehebung',
        icon: 'Settings',
        description:
            'Die Kategorie Fehlerbehebung stellt Lösungen für häufige Probleme und Fragen mit PowerPro-Werkzeugen bereit, indem sie Schritt-für-Schritt-Anleitungen, Fehlerbehebungshinweise und Support-Kontakte bereitstellt, um Benutzern zu helfen, Probleme schnell und effizient zu lösen.',
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
        icon: 'Wrench',
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
        icon: 'Wrench',
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
        icon: 'ShieldCheck',
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
        icon: 'ShieldCheck',
        description:
            'Kategoria Akcesoria prezentuje szeroki zakres przystawek, dodatków i ulepszeń dostępnych dla narzędzi PowerPro, pomagając rozszerzyć ich funkcjonalność i realizować specjalistyczne projekty.',
        parent: {
            slug: '/pomoc-i-wsparcie',
            title: 'Pomoc i Wsparcie',
        },
    },
    {
        id: 'troubleshooting',
        slug: '/pomoc-i-wsparcie/rozwiązywanie-problemów',
        createdAt: '2023-08-20T11:30:00Z',
        updatedAt: '2023-09-30T15:45:00Z',
        title: 'Rozwiązywanie problemów',
        icon: 'Settings',
        description:
            'Kategoria Rozwiązywanie problemów zawiera rozwiązania dla typowych problemów i pytań dotyczących narzędzi PowerPro, oferując kroki po kroku, porady dotyczące rozwiązywania problemów i dane kontaktowe wsparcia technicznego, aby pomóc użytkownikom szybko i efektywnie rozwiązywać problemy.',
        parent: {
            slug: '/pomoc-i-wsparcie',
            title: 'Pomoc i Wsparcie',
        },
    },
];

import { Articles } from '@o2s/framework/modules';

export const MOCK_CATEGORIES_EN: Articles.Model.Category[] = [
    {
        id: 'warranty-and-repair',
        slug: '/help-and-support/warranty-and-repair',
        createdAt: '2023-05-12T08:30:00Z',
        updatedAt: '2023-06-15T14:25:00Z',
        title: 'Warranty & Repair',
        description:
            'The Warranty & Repair category offers FAQs, troubleshooting guides, step-by-step tutorials, and support contacts to help users resolve issues and navigate services efficiently.',
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
        description:
            'Die Kategorie Garantie & Reparatur bietet FAQs, Fehlerbehebungsanleitungen, Schritt-für-Schritt-Tutorials und Support-Kontakte, um Benutzern zu helfen, Probleme effizient zu lösen und Services zu navigieren.',
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
        description:
            'Kategoria Gwarancja i Naprawa oferuje FAQ, poradniki rozwiązywania problemów, szczegółowe instrukcje oraz dane kontaktowe wsparcia technicznego, aby pomóc użytkownikom efektywnie rozwiązywać problemy i korzystać z usług serwisowych.',
        parent: {
            slug: '/pomoc-i-wsparcie',
            title: 'Pomoc i Wsparcie',
        },
    },
];

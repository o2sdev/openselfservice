import { CMS } from '@o2s/framework/modules';

const MOCK_ARTICLE_LIST_BLOCK_EN: CMS.Model.CategoryListBlock.CategoryListBlock = {
    id: 'category-list-1',
    title: 'Warranty & Repair',
    description:
        'The Warranty & Repair category offers FAQs, troubleshooting guides, step-by-step tutorials, and support contacts to help users resolve issues and navigate services efficiently.',

    items: [
        {
            id: 'warranty-and-repair',
            slug: '/help-and-support/warranty-and-repair',
            title: 'Warranty & Repair',
            description:
                'The Warranty & Repair category offers FAQs, troubleshooting guides, step-by-step tutorials, and support contacts to help users resolve issues and navigate services efficiently.',
            icon: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-1.svg',
                alt: '',
            },
        },
    ],
};
const MOCK_ARTICLE_LIST_BLOCK_DE: CMS.Model.CategoryListBlock.CategoryListBlock = {
    id: 'category-list-1',
    title: 'Garantie & Reparatur',
    description:
        'Die Kategorie Garantie & Reparatur bietet FAQs, Fehlerbehebungsanleitungen, Schritt-für-Schritt-Tutorials und Support-Kontakte, um Benutzern bei der Lösung von Problemen und der effizienten Nutzung von Dienstleistungen zu helfen.',

    items: [
        {
            id: 'warranty-and-repair',
            slug: '/hilfe-und-support/garantie-und-reparatur',
            title: 'Garantie & Reparatur',
            description:
                'Die Kategorie Garantie & Reparatur bietet FAQs, Fehlerbehebungsanleitungen, Schritt-für-Schritt-Tutorials und Support-Kontakte, um Benutzern bei der Lösung von Problemen und der effizienten Nutzung von Dienstleistungen zu helfen.',
            icon: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-1.svg',
                alt: '',
            },
        },
    ],
};
const MOCK_ARTICLE_LIST_BLOCK_PL: CMS.Model.CategoryListBlock.CategoryListBlock = {
    id: 'category-list-1',
    title: 'Gwarancja i Naprawa',
    description:
        'Kategoria Gwarancja i Naprawa oferuje najczęściej zadawane pytania, przewodniki rozwiązywania problemów, samouczki krok po kroku oraz dane kontaktowe wsparcia, aby pomóc użytkownikom w rozwiązywaniu problemów i efektywnym korzystaniu z usług.',

    items: [
        {
            id: 'warranty-and-repair',
            slug: '/pomoc-i-wsparcie/gwarancja-i-naprawa',
            title: 'Gwarancja i Naprawa',
            description:
                'Kategoria Gwarancja i Naprawa oferuje najczęściej zadawane pytania, przewodniki rozwiązywania problemów, samouczki krok po kroku oraz dane kontaktowe wsparcia, aby pomóc użytkownikom w rozwiązywaniu problemów i efektywnym korzystaniu z usług.',
            icon: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-1.svg',
                alt: '',
            },
        },
    ],
};

export const mapCategoryListBlock = (locale: string): CMS.Model.CategoryListBlock.CategoryListBlock => {
    switch (locale) {
        case 'de':
            return {
                ...MOCK_ARTICLE_LIST_BLOCK_DE,
            };
        case 'pl':
            return {
                ...MOCK_ARTICLE_LIST_BLOCK_PL,
            };
        case 'en':
        default:
            return {
                ...MOCK_ARTICLE_LIST_BLOCK_EN,
            };
    }
};

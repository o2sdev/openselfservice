import { CMS } from '@o2s/framework/modules';

const MOCK_CATEGORY_BLOCK_EN: CMS.Model.CategoryBlock.CategoryBlock = {
    id: 'category-1',
    title: 'Warranty & Repair',
    description:
        'The Warranty & Repair category offers FAQs, troubleshooting guides, step-by-step tutorials, and support contacts to help users resolve issues and navigate services efficiently.',
    icon: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-1.svg',
        alt: '',
    },
    components: [
        {
            __typename: 'FaqBlock',
            id: 'faq-1',
        },
    ],
    items: [
        {
            id: 'article-1',
            slug: '/help-and-support/warranty-and-repair/managing-your-powerpro-tools-online',
            createdAt: '2024-12-12T10:00:00',
            updatedAt: '2024-12-14T16:00:00',
            title: 'This is a subtitle that provides more detail and context, enhancing the reader’s understanding',
            lead: 'A brief yet informative line of text that expands on the main title, providing additional context or clarity to engage the reader.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-2.svg',
                alt: '',
            },
            thumbnail: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-2.svg',
                alt: '',
            },
            category: {
                id: 'warranty-and-repair',
                title: 'Warranty & Repair',
            },
        },
        {
            id: 'article-2',
            slug: '/help-and-support/warranty-and-repair/managing-your-powerpro-tools-online',
            createdAt: '2024-12-12T10:00:00',
            updatedAt: '2024-12-14T16:00:00',
            title: 'This is a subtitle that provides more detail and context, enhancing the reader’s understanding',
            lead: 'A brief yet informative line of text that expands on the main title, providing additional context or clarity to engage the reader.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-2.svg',
                alt: '',
            },
            thumbnail: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-2.svg',
                alt: '',
            },
            category: {
                id: 'warranty-and-repair',
                title: 'Warranty & Repair',
            },
        },
        {
            id: 'article-3',
            slug: '/help-and-support/warranty-and-repair/managing-your-powerpro-tools-online',
            createdAt: '2024-12-12T10:00:00',
            updatedAt: '2024-12-14T16:00:00',
            title: 'This is a subtitle that provides more detail and context, enhancing the reader’s understanding',
            lead: 'A brief yet informative line of text that expands on the main title, providing additional context or clarity to engage the reader.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-2.svg',
                alt: '',
            },
            thumbnail: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-2.svg',
                alt: '',
            },
            category: {
                id: 'warranty-and-repair',
                title: 'Warranty & Repair',
            },
        },
    ],
};
const MOCK_CATEGORY_BLOCK_DE: CMS.Model.CategoryBlock.CategoryBlock = {
    id: 'category-1',
    title: 'Garantie & Reparatur',
    description:
        'Die Kategorie Garantie & Reparatur bietet FAQs, Anleitung zur Fehlerbehebung, Schritt-für-Schritt-Tutorials und Support-Kontakte, um Benutzern zu helfen, Probleme zu lösen und Dienste effizient zu nutzen.',
    icon: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-1.svg',
        alt: '',
    },
    components: [
        {
            __typename: 'FaqBlock',
            id: 'faq-1',
        },
    ],
    items: [
        {
            id: 'article-1',
            slug: '/hilfe-und-support/garantie-und-reparatur/verwalten-ihrer-powerpro-werkzeuge-online',
            createdAt: '2024-12-12T10:00:00',
            updatedAt: '2024-12-14T16:00:00',
            title: 'Dies ist ein Untertitel, der mehr Details und Kontext bietet, um das Verständnis des Lesers zu verbessern',
            lead: 'Eine kurze und dennoch informative Textzeile, die den Haupttitel erweitert, zusätzlichen Kontext bietet oder die Zielgruppe anspricht.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-2.svg',
                alt: '',
            },
            thumbnail: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-2.svg',
                alt: '',
            },
            category: {
                id: 'warranty-and-repair',
                title: 'Garantie & Reparatur',
            },
        },
        {
            id: 'article-2',
            slug: '/hilfe-und-support/garantie-und-reparatur/verwalten-ihrer-powerpro-werkzeuge-online',
            createdAt: '2024-12-12T10:00:00',
            updatedAt: '2024-12-14T16:00:00',
            title: 'Dies ist ein Untertitel, der mehr Details und Kontext bietet, um das Verständnis des Lesers zu verbessern',
            lead: 'Eine kurze und dennoch informative Textzeile, die den Haupttitel erweitert, zusätzlichen Kontext bietet oder die Zielgruppe anspricht.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-2.svg',
                alt: '',
            },
            thumbnail: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-2.svg',
                alt: '',
            },
            category: {
                id: 'warranty-and-repair',
                title: 'Garantie & Reparatur',
            },
        },
        {
            id: 'article-3',
            slug: '/hilfe-und-support/garantie-und-reparatur/verwalten-ihrer-powerpro-werkzeuge-online',
            createdAt: '2024-12-12T10:00:00',
            updatedAt: '2024-12-14T16:00:00',
            title: 'Dies ist ein Untertitel, der mehr Details und Kontext bietet, um das Verständnis des Lesers zu verbessern',
            lead: 'Eine kurze und dennoch informative Textzeile, die den Haupttitel erweitert, zusätzlichen Kontext bietet oder die Zielgruppe anspricht.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-2.svg',
                alt: '',
            },
            thumbnail: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-2.svg',
                alt: '',
            },
            category: {
                id: 'warranty-and-repair',
                title: 'Garantie & Reparatur',
            },
        },
    ],
};

const MOCK_CATEGORY_BLOCK_PL: CMS.Model.CategoryBlock.CategoryBlock = {
    id: 'category-1',
    title: 'Gwarancja i Naprawa',
    description:
        'Kategoria Gwarancja i Naprawa oferuje FAQ, przewodniki rozwiązywania problemów, samouczki krok po kroku oraz kontakty wsparcia, aby pomóc użytkownikom w rozwiązywaniu problemów i efektywnym korzystaniu z usług.',
    icon: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-1.svg',
        alt: '',
    },
    components: [
        {
            __typename: 'FaqBlock',
            id: 'faq-1',
        },
    ],
    items: [
        {
            id: 'article-1',
            slug: '/pomoc-i-wsparcie/gwarancja-i-naprawa/zarzadzanie-narzedziami-powerpro-online',
            createdAt: '2024-12-12T10:00:00',
            updatedAt: '2024-12-14T16:00:00',
            title: 'To jest podtytuł, który dostarcza więcej szczegółów i kontekstu, poprawiając zrozumienie czytelnika',
            lead: 'Krótka, ale treściwa linia tekstu, która rozwija główny tytuł, dostarczając dodatkowego kontekstu lub jasności, aby przyciągnąć uwagę czytelnika.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-2.svg',
                alt: '',
            },
            thumbnail: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-2.svg',
                alt: '',
            },
            category: {
                id: 'warranty-and-repair',
                title: 'Gwarancja i Naprawa',
            },
        },
        {
            id: 'article-2',
            slug: '/pomoc-i-wsparcie/gwarancja-i-naprawa/zarzadzanie-narzedziami-powerpro-online',
            createdAt: '2024-12-12T10:00:00',
            updatedAt: '2024-12-14T16:00:00',
            title: 'To jest podtytuł, który dostarcza więcej szczegółów i kontekstu, poprawiając zrozumienie czytelnika',
            lead: 'Krótka, ale treściwa linia tekstu, która rozwija główny tytuł, dostarczając dodatkowego kontekstu lub jasności, aby przyciągnąć uwagę czytelnika.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-2.svg',
                alt: '',
            },
            thumbnail: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-2.svg',
                alt: '',
            },
            category: {
                id: 'warranty-and-repair',
                title: 'Gwarancja i Naprawa',
            },
        },
        {
            id: 'article-3',
            slug: '/pomoc-i-wsparcie/gwarancja-i-naprawa/zarzadzanie-narzedziami-powerpro-online',
            createdAt: '2024-12-12T10:00:00',
            updatedAt: '2024-12-14T16:00:00',
            title: 'To jest podtytuł, który dostarcza więcej szczegółów i kontekstu, poprawiając zrozumienie czytelnika',
            lead: 'Krótka, ale treściwa linia tekstu, która rozwija główny tytuł, dostarczając dodatkowego kontekstu lub jasności, aby przyciągnąć uwagę czytelnika.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-2.svg',
                alt: '',
            },
            thumbnail: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-2.svg',
                alt: '',
            },
            category: {
                id: 'warranty-and-repair',
                title: 'Gwarancja i Naprawa',
            },
        },
    ],
};

export const mapCategoryBlock = (locale: string): CMS.Model.CategoryBlock.CategoryBlock => {
    switch (locale) {
        case 'de':
            return {
                ...MOCK_CATEGORY_BLOCK_DE,
            };
        case 'pl':
            return {
                ...MOCK_CATEGORY_BLOCK_PL,
            };
        case 'en':
        default:
            return {
                ...MOCK_CATEGORY_BLOCK_EN,
            };
    }
};

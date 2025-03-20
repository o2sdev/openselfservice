import { CMS } from '@o2s/framework/modules';

const MOCK_CATEGORY_BLOCK_EN: CMS.Model.CategoryBlock.CategoryBlock = {
    id: 'category-1',
    title: 'Warranty & Repair',
    description:
        'The Warranty & Repair category offers FAQs, troubleshooting guides, step-by-step tutorials, and support contacts to help users resolve issues and navigate services efficiently.',
    icon: {
        url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-1.svg',
    },
    components: [
        {
            __typename: 'FaqBlock',
            id: 'faq-1',
        },
    ],
    articles: [
        {
            id: 'article-1',
            createdAt: '2024-12-12T10:00:00',
            updatedAt: '2024-12-14T16:00:00',
            title: 'This is a subtitle that provides more detail and context, enhancing the reader’s understanding',
            lead: 'A brief yet informative line of text that expands on the main title, providing additional context or clarity to engage the reader.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-2.svg',
            },
            thumbnail: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-2.svg',
            },
            category: {
                id: 'category-1',
                title: 'Warranty & Repair',
            },
        },
        {
            id: 'article-2',
            createdAt: '2024-12-12T10:00:00',
            updatedAt: '2024-12-14T16:00:00',
            title: 'This is a subtitle that provides more detail and context, enhancing the reader’s understanding',
            lead: 'A brief yet informative line of text that expands on the main title, providing additional context or clarity to engage the reader.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-2.svg',
            },
            thumbnail: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-2.svg',
            },
            category: {
                id: 'category-1',
                title: 'Warranty & Repair',
            },
        },
        {
            id: 'article-3',
            createdAt: '2024-12-12T10:00:00',
            updatedAt: '2024-12-14T16:00:00',
            title: 'This is a subtitle that provides more detail and context, enhancing the reader’s understanding',
            lead: 'A brief yet informative line of text that expands on the main title, providing additional context or clarity to engage the reader.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-2.svg',
            },
            thumbnail: {
                url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/icons/icon-2.svg',
            },
            category: {
                id: 'category-1',
                title: 'Warranty & Repair',
            },
        },
    ],
};

export const mapCategoryBlock = (locale: string): CMS.Model.CategoryBlock.CategoryBlock => {
    const getDetailsUrl = () => {
        switch (locale) {
            case 'en':
                return `/articles/{id}`;
            case 'de':
                return `/artikel/{id}`;
            case 'pl':
                return `/artykuły/{id}`;
        }

        return '';
    };

    switch (locale) {
        case 'de':
            return {
                ...MOCK_CATEGORY_BLOCK_DE,
                detailsUrl: getDetailsUrl(),
            };
        case 'pl':
            return {
                ...MOCK_CATEGORY_BLOCK_PL,
                detailsUrl: getDetailsUrl(),
            };
        case 'en':
        default:
            return {
                ...MOCK_CATEGORY_BLOCK_EN,
            };
    }
};

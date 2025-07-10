import { Articles } from '@o2s/framework/modules';

export const MOCK_ARTICLE12_EN: Articles.Model.Article[] = [
    {
        id: 'art-004',
        slug: '/help-and-support/warranty-and-repair/understanding-powerpro-warranty',
        permissions: [],
        createdAt: '2023-06-24T10:15:00Z',
        updatedAt: '2023-08-15T16:40:00Z',
        title: 'Understanding Your PowerPro Warranty',
        lead: "Everything you need to know about PowerPro's warranty coverage for your professional tools.",
        tags: ['warranty', 'coverage', 'terms'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
            width: 640,
            height: 427,
            alt: 'PowerPro warranty coverage',
        },
        thumbnail: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
            alt: 'PowerPro warranty coverage thumbnail',
        },
        category: {
            id: 'warranty-and-repair',
            title: 'Warranty & Repair',
        },
        author: {
            name: 'Emily Wilson',
            position: 'Warranty Specialist',
            avatar: {
                url: 'https://avatar.iran.liara.run/public/girl',
                alt: '',
            },
        },
        sections: [
            {
                id: 'sect-004-1',
                createdAt: '2023-06-24T10:15:00Z',
                updatedAt: '2023-08-15T16:40:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/warranty-card.jpg',
                    alt: 'PowerPro warranty card',
                },
                caption: 'Your warranty card contains important information about your coverage terms.',
            },
            {
                id: 'sect-004-2',
                createdAt: '2023-06-24T10:15:00Z',
                updatedAt: '2023-08-15T16:40:00Z',
                __typename: 'ArticleSectionText',
                title: 'Standard Warranty Coverage',
                content:
                    'All PowerPro professional tools come with a 3-year standard warranty that covers manufacturing defects and failures during normal use.',
            },
            {
                id: 'sect-004-3',
                createdAt: '2023-06-24T10:15:00Z',
                updatedAt: '2023-08-15T16:40:00Z',
                __typename: 'ArticleSectionText',
                title: 'Extended Warranty Options',
                content:
                    'For additional protection, consider our PowerPro+ extended warranty program, which adds up to 2 additional years of coverage and includes accidental damage protection.',
            },
        ],
    },
    {
        id: 'art-009',
        slug: '/help-and-support/warranty/repair-or-replace-decision-guide',
        permissions: [],
        createdAt: '2023-05-19T09:10:00Z',
        updatedAt: '2023-06-30T14:25:00Z',
        title: 'Repair or Replace? Making the Right Decision',
        lead: 'Guidelines to help you decide whether to repair your PowerPro tool or invest in a replacement.',
        tags: ['repair', 'replacement', 'decision'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
            width: 640,
            height: 427,
            alt: 'Repair or replace decision',
        },
        thumbnail: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
            alt: 'Repair or replace decision thumbnail',
        },
        category: {
            id: 'warranty_repair',
            title: 'Warranty & Repair',
        },
        author: {
            name: 'David Miller',
            position: 'Technical Advisor',
            avatar: {
                url: 'https://avatar.iran.liara.run/public/boy',
                alt: '',
            },
        },
        sections: [
            {
                id: 'sect-009-1',
                createdAt: '2023-05-19T09:10:00Z',
                updatedAt: '2023-06-30T14:25:00Z',
                __typename: 'ArticleSectionText',
                title: 'Age and Condition Assessment',
                content:
                    'Consider the age of your tool and its overall condition. Tools nearing the end of their expected lifespan may be better candidates for replacement.',
            },
            {
                id: 'sect-009-2',
                createdAt: '2023-05-19T09:10:00Z',
                updatedAt: '2023-06-30T14:25:00Z',
                __typename: 'ArticleSectionText',
                title: 'Cost Analysis',
                content:
                    'Compare the repair cost against the price of a new tool. As a general rule, if repairs exceed 50% of the replacement cost, upgrading may be more economical.',
            },
            {
                id: 'sect-009-3',
                createdAt: '2023-05-19T09:10:00Z',
                updatedAt: '2023-06-30T14:25:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/decision-flowchart.jpg',
                    alt: 'Repair or replace decision flowchart',
                },
                caption: 'This flowchart can help guide your decision-making process when evaluating a damaged tool.',
            },
        ],
    },
];

export const MOCK_ARTICLE12_DE: Articles.Model.Article[] = [
    {
        id: 'art-004',
        slug: '/hilfe-und-support/garantie/powerpro-garantie-verstehen',
        permissions: [],
        createdAt: '2023-06-24T10:15:00Z',
        updatedAt: '2023-08-15T16:40:00Z',
        title: 'Ihre PowerPro-Garantie verstehen',
        lead: 'Alles, was Sie über die PowerPro-Garantieabdeckung für Ihre professionellen Werkzeuge wissen müssen.',
        tags: ['garantie', 'abdeckung', 'bedingungen'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
            width: 640,
            height: 427,
            alt: 'PowerPro Garantieabdeckung',
        },
        thumbnail: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
            alt: 'PowerPro Garantieabdeckung Thumbnail',
        },
        category: {
            id: 'warranty_repair',
            title: 'Garantie & Reparatur',
        },
        author: {
            name: 'Emily Wilson',
            position: 'Garantiespezialistin',
            avatar: {
                url: 'https://avatar.iran.liara.run/public/girl',
                alt: '',
            },
        },
        sections: [
            {
                id: 'sect-004-1',
                createdAt: '2023-06-24T10:15:00Z',
                updatedAt: '2023-08-15T16:40:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/warranty-card.jpg',
                    alt: 'PowerPro Garantiekarte',
                },
                caption: 'Ihre Garantiekarte enthält wichtige Informationen über Ihre Abdeckungsbedingungen.',
            },
            {
                id: 'sect-004-2',
                createdAt: '2023-06-24T10:15:00Z',
                updatedAt: '2023-08-15T16:40:00Z',
                __typename: 'ArticleSectionText',
                title: 'Standard-Garantieabdeckung',
                content:
                    'Alle PowerPro-Professionalswerkzeuge kommen mit einer 3-jährigen Standardgarantie, die Herstellungsfehler und Ausfälle während des normalen Gebrauchs abdeckt.',
            },
            {
                id: 'sect-004-3',
                createdAt: '2023-06-24T10:15:00Z',
                updatedAt: '2023-08-15T16:40:00Z',
                __typename: 'ArticleSectionText',
                title: 'Erweiterte Garantieoptionen',
                content:
                    'Für zusätzlichen Schutz empfehlen wir unser PowerPro+ erweitertes Garantieprogramm, das bis zu 2 zusätzliche Jahre Abdeckung bietet und auch Schutz vor Unfallschäden einschließt.',
            },
        ],
    },
];

export const MOCK_ARTICLE12_PL: Articles.Model.Article[] = [
    {
        id: 'art-004',
        slug: '/pomoc-i-wsparcie/gwarancja/rozumienie-gwarancji-powerpro',
        permissions: [],
        createdAt: '2023-06-24T10:15:00Z',
        updatedAt: '2023-08-15T16:40:00Z',
        title: 'Zrozumienie gwarancji PowerPro',
        lead: 'Wszystko, co musisz wiedzieć o zakresie gwarancji PowerPro dla Twoich profesjonalnych narzędzi.',
        tags: ['gwarancja', 'zakres', 'warunki'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
            width: 640,
            height: 427,
            alt: 'Zakres gwarancji PowerPro',
        },
        thumbnail: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-maintenance-thumb.jpg',
            alt: 'Miniatura zakresu gwarancji PowerPro',
        },
        category: {
            id: 'warranty_repair',
            title: 'Gwarancja i Naprawa',
        },
        author: {
            name: 'Emily Wilson',
            position: 'Specjalistka ds. Gwarancji',
            avatar: {
                url: 'https://avatar.iran.liara.run/public/girl',
                alt: '',
            },
        },
        sections: [
            {
                id: 'sect-004-1',
                createdAt: '2023-06-24T10:15:00Z',
                updatedAt: '2023-08-15T16:40:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/warranty-card.jpg',
                    alt: 'Karta gwarancyjna PowerPro',
                },
                caption: 'Twoja karta gwarancyjna zawiera ważne informacje o warunkach gwarancji.',
            },
            {
                id: 'sect-004-2',
                createdAt: '2023-06-24T10:15:00Z',
                updatedAt: '2023-08-15T16:40:00Z',
                __typename: 'ArticleSectionText',
                title: 'Standardowy zakres gwarancji',
                content:
                    'Wszystkie profesjonalne narzędzia PowerPro są objęte 3-letnią standardową gwarancją, która obejmuje wady produkcyjne i awarie podczas normalnego użytkowania.',
            },
            {
                id: 'sect-004-3',
                createdAt: '2023-06-24T10:15:00Z',
                updatedAt: '2023-08-15T16:40:00Z',
                __typename: 'ArticleSectionText',
                title: 'Opcje rozszerzonej gwarancji',
                content:
                    'Dla dodatkowej ochrony rozważ nasz program rozszerzonej gwarancji PowerPro+, który dodaje do 2 dodatkowych lat ochrony i obejmuje również ochronę przed uszkodzeniami przypadkowymi.',
            },
        ],
    },
];

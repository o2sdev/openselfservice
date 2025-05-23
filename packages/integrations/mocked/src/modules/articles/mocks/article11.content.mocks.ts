import { Articles } from '@o2s/framework/modules';

export const MOCK_ARTICLE11_EN: Articles.Model.Article[] = [
    {
        id: 'art-011',
        slug: '/help-and-support/warranty-and-repair/powerpro-tool-certification-program',
        isProtected: false,
        createdAt: '2023-09-12T14:50:00Z',
        updatedAt: '2023-09-12T14:50:00Z',
        title: 'PowerPro Tool Certification Program',
        lead: 'Learn about our certification program ensuring your tools meet industry safety standards.',
        tags: ['certification', 'safety', 'standards'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/certification-program.jpg',
            width: 640,
            height: 427,
            alt: 'PowerPro certification program',
        },
        thumbnail: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/certification-program-thumb.jpg',
            alt: 'PowerPro certification program thumbnail',
        },
        category: {
            id: 'warranty-and-repair',
            title: 'Warranty & Repair',
        },
        author: {
            name: 'John Smith',
            position: 'Certification Specialist',
            avatar: {
                url: 'https://avatar.iran.liara.run/public/boy',
                alt: '',
            },
        },
        sections: [
            {
                id: 'sect-011-1',
                createdAt: '2023-09-12T14:50:00Z',
                updatedAt: '2023-09-12T14:50:00Z',
                __typename: 'ArticleSectionText',
                title: 'Certification Benefits',
                content:
                    'Certified tools undergo rigorous testing to ensure they meet safety and performance standards. Certification can be required for certain job sites and helps maintain tool value.',
            },
            {
                id: 'sect-011-2',
                createdAt: '2023-09-12T14:50:00Z',
                updatedAt: '2023-09-12T14:50:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/certification-badge.jpg',
                    alt: 'PowerPro certification badge',
                },
                caption:
                    'Look for this certification badge on your tool and documentation to verify its certified status.',
            },
            {
                id: 'sect-011-3',
                createdAt: '2023-09-12T14:50:00Z',
                updatedAt: '2023-09-12T14:50:00Z',
                __typename: 'ArticleSectionText',
                title: 'Certification Process',
                content:
                    'Schedule a certification appointment through your PowerPro account. Bring your tools to an authorized service center where they will be tested according to industry standards.',
            },
        ],
    },
    {
        id: 'art-015',
        slug: '/help-and-support/warranty/expedited-repair-service-options',
        isProtected: false,
        createdAt: '2023-07-30T12:10:00Z',
        updatedAt: '2023-07-30T12:10:00Z',
        title: 'Expedited Repair Service Options',
        lead: "Learn about PowerPro's expedited repair services to minimize downtime on critical projects.",
        tags: ['repair', 'service', 'expedited'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/expedited-repair.jpg',
            width: 640,
            height: 427,
            alt: 'Expedited repair service',
        },
        thumbnail: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/expedited-repair-thumb.jpg',
            alt: 'Expedited repair service thumbnail',
        },
        category: {
            id: 'warranty_repair',
            title: 'Warranty & Repair',
        },
        author: {
            name: 'Sarah Johnson',
            position: 'Service Manager',
            avatar: {
                url: 'https://avatar.iran.liara.run/public/girl',
                alt: '',
            },
        },
        sections: [
            {
                id: 'sect-015-1',
                createdAt: '2023-07-30T12:10:00Z',
                updatedAt: '2023-07-30T12:10:00Z',
                __typename: 'ArticleSectionText',
                title: 'Priority Service Plans',
                content:
                    'PowerPro offers several levels of priority service plans that guarantee faster turnaround times for tool repairs, from same-day service to 48-hour guaranteed completion.',
            },
        ],
    },
    {
        id: 'art-017',
        slug: '/help-and-support/warranty/repair-tracking-system-benefits',
        isProtected: false,
        createdAt: '2023-01-15T13:30:00Z',
        updatedAt: '2023-04-22T15:45:00Z',
        title: "Benefits of PowerPro's Repair Tracking System",
        lead: 'How our advanced repair tracking system keeps you informed throughout the repair process.',
        tags: ['tracking', 'repair', 'system'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/repair-tracking.jpg',
            width: 640,
            height: 427,
            alt: 'Repair tracking system',
        },
        thumbnail: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/repair-tracking-thumb.jpg',
            alt: 'Repair tracking system thumbnail',
        },
        category: {
            id: 'warranty_repair',
            title: 'Warranty & Repair',
        },
        author: {
            name: 'Michael Brown',
            position: 'IT Systems Manager',
            avatar: {
                url: 'https://avatar.iran.liara.run/public/boy',
                alt: '',
            },
        },
        sections: [
            {
                id: 'sect-017-1',
                createdAt: '2023-01-15T13:30:00Z',
                updatedAt: '2023-04-22T15:45:00Z',
                __typename: 'ArticleSectionText',
                title: 'Real-Time Status Updates',
                content:
                    'Receive automated notifications at each stage of the repair process, from initial receipt to final quality testing and shipping.',
            },
            {
                id: 'sect-017-2',
                createdAt: '2023-01-15T13:30:00Z',
                updatedAt: '2023-04-22T15:45:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/tracking-mobile.jpg',
                    alt: 'Repair tracking on mobile app',
                },
                caption:
                    'The PowerPro mobile app provides convenient access to repair status information anytime, anywhere.',
            },
        ],
    },
];

export const MOCK_ARTICLE11_DE: Articles.Model.Article[] = [
    {
        id: 'art-011',
        slug: '/hilfe-und-support/garantie/powerpro-werkzeug-zertifizierungsprogramm',
        isProtected: false,
        createdAt: '2023-09-12T14:50:00Z',
        updatedAt: '2023-09-12T14:50:00Z',
        title: 'PowerPro-Werkzeug-Zertifizierungsprogramm',
        lead: 'Erfahren Sie mehr über unser Zertifizierungsprogramm, das sicherstellt, dass Ihre Werkzeuge den Sicherheitsstandards der Branche entsprechen.',
        tags: ['zertifizierung', 'sicherheit', 'standards'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/certification-program.jpg',
            width: 640,
            height: 427,
            alt: 'PowerPro Zertifizierungsprogramm',
        },
        thumbnail: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/certification-program-thumb.jpg',
            alt: 'PowerPro Zertifizierungsprogramm Thumbnail',
        },
        category: {
            id: 'warranty_repair',
            title: 'Garantie & Reparatur',
        },
        author: {
            name: 'John Smith',
            position: 'Zertifizierungsspezialist',
            avatar: {
                url: 'https://avatar.iran.liara.run/public/boy',
                alt: '',
            },
        },
        sections: [
            {
                id: 'sect-011-1',
                createdAt: '2023-09-12T14:50:00Z',
                updatedAt: '2023-09-12T14:50:00Z',
                __typename: 'ArticleSectionText',
                title: 'Vorteile der Zertifizierung',
                content:
                    'Zertifizierte Werkzeuge durchlaufen strenge Tests, um sicherzustellen, dass sie den Sicherheits- und Leistungsstandards entsprechen. Die Zertifizierung kann für bestimmte Arbeitsplätze erforderlich sein und hilft, den Werkzeugwert zu erhalten.',
            },
            {
                id: 'sect-011-2',
                createdAt: '2023-09-12T14:50:00Z',
                updatedAt: '2023-09-12T14:50:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/certification-badge.jpg',
                    alt: 'PowerPro Zertifizierungsabzeichen',
                },
                caption:
                    'Suchen Sie nach diesem Zertifizierungsabzeichen auf Ihrem Werkzeug und in der Dokumentation, um den zertifizierten Status zu überprüfen.',
            },
            {
                id: 'sect-011-3',
                createdAt: '2023-09-12T14:50:00Z',
                updatedAt: '2023-09-12T14:50:00Z',
                __typename: 'ArticleSectionText',
                title: 'Zertifizierungsprozess',
                content:
                    'Vereinbaren Sie einen Zertifizierungstermin über Ihr PowerPro-Konto. Bringen Sie Ihre Werkzeuge zu einem autorisierten Servicecenter, wo sie gemäß Branchenstandards getestet werden.',
            },
        ],
    },
];

export const MOCK_ARTICLE11_PL: Articles.Model.Article[] = [
    {
        id: 'art-011',
        slug: '/pomoc-i-wsparcie/gwarancja/program-certyfikacji-narzedzi-powerpro',
        isProtected: false,
        createdAt: '2023-09-12T14:50:00Z',
        updatedAt: '2023-09-12T14:50:00Z',
        title: 'Program certyfikacji narzędzi PowerPro',
        lead: 'Dowiedz się więcej o naszym programie certyfikacji, który zapewnia, że Twoje narzędzia spełniają standardy bezpieczeństwa branży.',
        tags: ['certyfikacja', 'bezpieczenstwo', 'standardy'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/certification-program.jpg',
            width: 640,
            height: 427,
            alt: 'Program certyfikacji PowerPro',
        },
        thumbnail: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/certification-program-thumb.jpg',
            alt: 'Miniatura programu certyfikacji PowerPro',
        },
        category: {
            id: 'warranty_repair',
            title: 'Gwarancja i Naprawa',
        },
        author: {
            name: 'John Smith',
            position: 'Specjalista ds. Certyfikacji',
            avatar: {
                url: 'https://avatar.iran.liara.run/public/boy',
                alt: '',
            },
        },
        sections: [
            {
                id: 'sect-011-1',
                createdAt: '2023-09-12T14:50:00Z',
                updatedAt: '2023-09-12T14:50:00Z',
                __typename: 'ArticleSectionText',
                title: 'Korzyści z certyfikacji',
                content:
                    'Certyfikowane narzędzia przechodzą rygorystyczne testy, aby zapewnić spełnienie standardów bezpieczeństwa i wydajności. Certyfikacja może być wymagana na niektórych placach budowy i pomaga utrzymać wartość narzędzi.',
            },
            {
                id: 'sect-011-2',
                createdAt: '2023-09-12T14:50:00Z',
                updatedAt: '2023-09-12T14:50:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/certification-badge.jpg',
                    alt: 'Odznaka certyfikacji PowerPro',
                },
                caption:
                    'Szukaj tej odznaki certyfikacji na narzędziu i w dokumentacji, aby zweryfikować jego certyfikowany status.',
            },
            {
                id: 'sect-011-3',
                createdAt: '2023-09-12T14:50:00Z',
                updatedAt: '2023-09-12T14:50:00Z',
                __typename: 'ArticleSectionText',
                title: 'Proces certyfikacji',
                content:
                    'Umów się na wizytę certyfikacyjną przez swoje konto PowerPro. Przynieś narzędzia do autoryzowanego centrum serwisowego, gdzie zostaną przetestowane zgodnie ze standardami branżowymi.',
            },
        ],
    },
];

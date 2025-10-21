import { Articles } from '@o2s/framework/modules';

export const MOCK_ARTICLE13_EN: Articles.Model.Article[] = [
    {
        id: 'art-012',
        slug: '/help-and-support/warranty-and-repair/preventive-maintenance-guide',
        permissions: [],
        createdAt: '2023-08-20T11:30:00Z',
        updatedAt: '2023-09-05T15:20:00Z',
        title: 'Preventive Maintenance Guide for PowerPro Tools',
        lead: "Learn how regular maintenance can extend your tool's lifespan and prevent costly repairs.",
        tags: ['maintenance', 'prevention', 'care'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-safety-thumb.jpg',
            width: 640,
            height: 427,
            alt: 'Preventive maintenance of PowerPro tools',
        },
        thumbnail: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-safety-thumb.jpg',
            alt: 'Preventive maintenance thumbnail',
        },
        category: {
            id: 'warranty-and-repair',
            title: 'Warranty & Repair',
        },
        author: {
            name: 'Robert Chen',
            position: 'Maintenance Specialist',
            avatar: {
                url: 'https://avatar.iran.liara.run/public/boy',
                alt: '',
            },
        },
        sections: [
            {
                id: 'sect-012-1',
                createdAt: '2023-08-20T11:30:00Z',
                updatedAt: '2023-09-05T15:20:00Z',
                __typename: 'ArticleSectionText',
                title: 'Regular Maintenance Schedule',
                content:
                    'Follow our recommended maintenance schedule to keep your PowerPro tools in optimal condition. Regular cleaning, lubrication, and inspection can prevent up to 80% of common tool failures.',
            },
            {
                id: 'sect-012-2',
                createdAt: '2023-08-20T11:30:00Z',
                updatedAt: '2023-09-05T15:20:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/maintenance-checklist.jpg',
                    alt: 'Maintenance checklist for PowerPro tools',
                },
                caption: "Use this checklist to ensure you don't miss any important maintenance steps.",
            },
            {
                id: 'sect-012-3',
                createdAt: '2023-08-20T11:30:00Z',
                updatedAt: '2023-09-05T15:20:00Z',
                __typename: 'ArticleSectionText',
                title: 'Common Issues and Solutions',
                content:
                    'Learn to identify early warning signs of potential problems. Unusual noises, decreased performance, or excessive vibration often indicate the need for maintenance or repair.',
            },
        ],
    },
];

export const MOCK_ARTICLE13_DE: Articles.Model.Article[] = [
    {
        id: 'art-012',
        slug: '/hilfe-und-support/garantie/vorbeugende-wartung-leitfaden',
        permissions: [],
        createdAt: '2023-08-20T11:30:00Z',
        updatedAt: '2023-09-05T15:20:00Z',
        title: 'Leitfaden zur vorbeugenden Wartung von PowerPro-Werkzeugen',
        lead: 'Erfahren Sie, wie regelmäßige Wartung die Lebensdauer Ihrer Werkzeuge verlängern und teure Reparaturen verhindern kann.',
        tags: ['wartung', 'vorbeugung', 'pflege'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-safety-thumb.jpg',
            width: 640,
            height: 427,
            alt: 'Vorbeugende Wartung von PowerPro-Werkzeugen',
        },
        thumbnail: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-safety-thumb.jpg',
            alt: 'Vorbeugende Wartung Thumbnail',
        },
        category: {
            id: 'warranty_repair',
            title: 'Garantie & Reparatur',
        },
        author: {
            name: 'Robert Chen',
            position: 'Wartungsspezialist',
            avatar: {
                url: 'https://avatar.iran.liara.run/public/boy',
                alt: '',
            },
        },
        sections: [
            {
                id: 'sect-012-1',
                createdAt: '2023-08-20T11:30:00Z',
                updatedAt: '2023-09-05T15:20:00Z',
                __typename: 'ArticleSectionText',
                title: 'Regelmäßiger Wartungsplan',
                content:
                    'Befolgen Sie unseren empfohlenen Wartungsplan, um Ihre PowerPro-Werkzeuge in optimalem Zustand zu halten. Regelmäßige Reinigung, Schmierung und Inspektion können bis zu 80% der üblichen Werkzeugausfälle verhindern.',
            },
            {
                id: 'sect-012-2',
                createdAt: '2023-08-20T11:30:00Z',
                updatedAt: '2023-09-05T15:20:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/maintenance-checklist.jpg',
                    alt: 'Wartungscheckliste für PowerPro-Werkzeuge',
                },
                caption:
                    'Verwenden Sie diese Checkliste, um sicherzustellen, dass Sie keine wichtigen Wartungsschritte verpassen.',
            },
            {
                id: 'sect-012-3',
                createdAt: '2023-08-20T11:30:00Z',
                updatedAt: '2023-09-05T15:20:00Z',
                __typename: 'ArticleSectionText',
                title: 'Häufige Probleme und Lösungen',
                content:
                    'Lernen Sie, frühe Warnzeichen potenzieller Probleme zu erkennen. Ungewöhnliche Geräusche, verminderte Leistung oder übermäßige Vibrationen deuten oft auf die Notwendigkeit von Wartung oder Reparatur hin.',
            },
        ],
    },
];

export const MOCK_ARTICLE13_PL: Articles.Model.Article[] = [
    {
        id: 'art-012',
        slug: '/pomoc-i-wsparcie/gwarancja/przewodnik-po-konserwacji-zapobiegawczej',
        permissions: [],
        createdAt: '2023-08-20T11:30:00Z',
        updatedAt: '2023-09-05T15:20:00Z',
        title: 'Przewodnik po konserwacji zapobiegawczej narzędzi PowerPro',
        lead: 'Dowiedz się, jak regularna konserwacja może wydłużyć żywotność narzędzi i zapobiec kosztownym naprawom.',
        tags: ['konserwacja', 'zapobieganie', 'pielęgnacja'],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-safety-thumb.jpg',
            width: 640,
            height: 427,
            alt: 'Konserwacja zapobiegawcza narzędzi PowerPro',
        },
        thumbnail: {
            url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/article-safety-thumb.jpg',
            alt: 'Miniatura konserwacji zapobiegawczej',
        },
        category: {
            id: 'warranty_repair',
            title: 'Gwarancja i Naprawa',
        },
        author: {
            name: 'Robert Chen',
            position: 'Specjalista ds. Konserwacji',
            avatar: {
                url: 'https://avatar.iran.liara.run/public/boy',
                alt: '',
            },
        },
        sections: [
            {
                id: 'sect-012-1',
                createdAt: '2023-08-20T11:30:00Z',
                updatedAt: '2023-09-05T15:20:00Z',
                __typename: 'ArticleSectionText',
                title: 'Harmonogram regularnej konserwacji',
                content:
                    'Postępuj zgodnie z naszym zalecanym harmonogramem konserwacji, aby utrzymać narzędzia PowerPro w optymalnym stanie. Regularne czyszczenie, smarowanie i kontrola mogą zapobiec nawet 80% typowych awarii narzędzi.',
            },
            {
                id: 'sect-012-2',
                createdAt: '2023-08-20T11:30:00Z',
                updatedAt: '2023-09-05T15:20:00Z',
                __typename: 'ArticleSectionImage',
                image: {
                    url: 'https://raw.githubusercontent.com/o2sdev/openselfservice/refs/heads/main/packages/integrations/mocked/public/images/maintenance-checklist.jpg',
                    alt: 'Lista kontrolna konserwacji narzędzi PowerPro',
                },
                caption:
                    'Użyj tej listy kontrolnej, aby upewnić się, że nie pomijasz żadnych ważnych kroków konserwacji.',
            },
            {
                id: 'sect-012-3',
                createdAt: '2023-08-20T11:30:00Z',
                updatedAt: '2023-09-05T15:20:00Z',
                __typename: 'ArticleSectionText',
                title: 'Typowe problemy i rozwiązania',
                content:
                    'Naucz się rozpoznawać wczesne oznaki potencjalnych problemów. Nietypowe dźwięki, zmniejszona wydajność lub nadmierne wibracje często wskazują na potrzebę konserwacji lub naprawy.',
            },
        ],
    },
];

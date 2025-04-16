import { NotFoundException } from '@nestjs/common';

import { Articles } from '@o2s/framework/modules';

export const MOCK_ARTICLES_EN: Articles.Model.Article[] = [
    {
        id: 'art-001',
        createdAt: '2023-05-12T08:30:00Z',
        updatedAt: '2023-06-15T14:25:00Z',
        title: 'Managing Your PowerPro Tools Online',
        lead: 'Learn how to efficiently manage your PowerPro tools through our self-service portal available 24/7.',
        image: {
            url: 'https://example.com/images/tool-management.jpg',
            alt: '',
        },
        thumbnail: {
            url: 'https://example.com/images/tool-management-thumb.jpg',
            alt: '',
        },
        category: {
            id: 'category-1',
            title: 'Warranty & Repair',
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
                url: 'https://example.com/images/dashboard-view.jpg',
                alt: 'PowerPro dashboard view',
                caption:
                    'The PowerPro tool management dashboard provides a comprehensive overview of your registered tools.',
            },
        ],
    },
    {
        id: 'art-002',
        createdAt: '2023-01-20T11:45:00Z',
        updatedAt: '2023-03-05T13:20:00Z',
        title: 'Registering Your PowerPro Tool for Warranty',
        lead: 'Protect your investment by properly registering your PowerPro tools for warranty coverage.',
        image: {
            url: 'https://example.com/images/tool-management.jpg',
            alt: '',
        },
        thumbnail: {
            url: 'https://example.com/images/tool-management-thumb.jpg',
            alt: '',
        },
        category: {
            id: 'category-1',
            title: 'Warranty & Repair',
        },
        sections: [
            {
                id: 'sect-002-1',
                createdAt: '2023-01-20T11:45:00Z',
                updatedAt: '2023-03-05T13:20:00Z',
                __typename: 'ArticleSectionText',
                title: 'Online Registration Process',
                content:
                    "Visit powerprotools.com/register and enter your tool's serial number and purchase information. You'll need your original receipt and the tool's model number.",
            },
            {
                id: 'sect-002-2',
                createdAt: '2023-01-20T12:30:00Z',
                updatedAt: '2023-03-05T13:20:00Z',
                __typename: 'ArticleSectionImage',
                url: 'https://example.com/images/serial-number-location.jpg',
                alt: 'Tool serial number location',
                caption:
                    'The serial number can be found on the base of the tool or on the battery slot as shown above.',
            },
        ],
    },
    {
        id: 'art-003',
        createdAt: '2023-03-10T14:22:00Z',
        updatedAt: '2023-03-10T15:30:00Z',
        title: 'Introduction to PowerPro Tool Park Management',
        lead: 'Discover how Tool Park Management can revolutionize how your company tracks and maintains its PowerPro tools.',
        image: {
            url: 'https://example.com/images/tool-management.jpg',
            alt: '',
        },
        thumbnail: {
            url: 'https://example.com/images/tool-management-thumb.jpg',
            alt: '',
        },
        category: {
            id: 'category-1',
            title: 'Warranty & Repair',
        },
        sections: [
            {
                id: 'sect-003-1',
                createdAt: '2023-03-10T14:22:00Z',
                updatedAt: '2023-03-10T14:22:00Z',
                __typename: 'ArticleSectionText',
                title: 'What is Tool Park Management?',
                content:
                    "Tool Park Management is PowerPro's comprehensive system for tracking, maintaining, and optimizing your entire tool inventory across locations and projects.",
            },
            {
                id: 'sect-003-2',
                createdAt: '2023-03-10T14:22:00Z',
                updatedAt: '2023-03-10T14:22:00Z',
                __typename: 'ArticleSectionText',
                title: 'Setting Up Your Tool Park',
                content:
                    'Begin by inventorying all your PowerPro tools and entering them into the system. You can import existing inventory lists or add tools individually.',
            },
            {
                id: 'sect-003-3',
                createdAt: '2023-03-10T15:30:00Z',
                updatedAt: '2023-03-10T15:30:00Z',
                __typename: 'ArticleSectionImage',
                url: 'https://example.com/images/tool-park-dashboard.jpg',
                alt: 'Tool park management dashboard',
                caption: "The intuitive dashboard gives you a bird's-eye view of your entire tool inventory.",
            },
        ],
    },
    {
        id: 'art-004',
        createdAt: '2023-06-24T10:15:00Z',
        updatedAt: '2023-08-15T16:40:00Z',
        title: 'Understanding Your PowerPro Warranty',
        lead: "Everything you need to know about PowerPro's warranty coverage for your professional tools.",
        image: {
            url: 'https://example.com/images/tool-management.jpg',
            alt: '',
        },
        thumbnail: {
            url: 'https://example.com/images/tool-management-thumb.jpg',
            alt: '',
        },
        category: {
            id: 'category-1',
            title: 'Warranty & Repair',
        },
        sections: [
            {
                id: 'sect-004-1',
                createdAt: '2023-06-24T10:15:00Z',
                updatedAt: '2023-08-15T16:40:00Z',
                __typename: 'ArticleSectionImage',
                url: 'https://example.com/images/warranty-card.jpg',
                alt: 'PowerPro warranty card',
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
        id: 'art-005',
        createdAt: '2023-04-15T09:50:00Z',
        updatedAt: '2023-05-20T11:35:00Z',
        title: 'Scheduling a PowerPro Tool Service Appointment',
        lead: 'Learn how to easily schedule service for your PowerPro tools through our online portal.',
        image: {
            url: 'https://example.com/images/tool-management.jpg',
            alt: '',
        },
        thumbnail: {
            url: 'https://example.com/images/tool-management-thumb.jpg',
            alt: '',
        },
        category: {
            id: 'category-1',
            title: 'Warranty & Repair',
        },
        sections: [
            {
                id: 'sect-005-1',
                createdAt: '2023-04-15T09:50:00Z',
                updatedAt: '2023-05-20T11:35:00Z',
                __typename: 'ArticleSectionText',
                title: 'Accessing the Service Portal',
                content:
                    "Log into your PowerPro account and select 'Schedule Service' from the main menu. You'll be able to see all your registered tools and select which ones need attention.",
            },
            {
                id: 'sect-005-2',
                createdAt: '2023-04-15T09:50:00Z',
                updatedAt: '2023-05-20T11:35:00Z',
                __typename: 'ArticleSectionText',
                title: 'Service Options',
                content:
                    'Choose between bringing your tool to a service center, scheduling a pickup, or requesting on-site service for eligible enterprise customers.',
            },
        ],
    },
];

export const MOCK_ARTICLES_PL: Articles.Model.Article[] = [
    {
        id: 'art-001',
        createdAt: '2023-05-12T08:30:00Z',
        updatedAt: '2023-06-15T14:25:00Z',
        title: 'Zarządzanie narzędziami PowerPro online',
        lead: 'Dowiedz się, jak efektywnie zarządzać narzędziami PowerPro za pomocą naszego portalu samoobsługowego dostępnego 24/7.',
        image: {
            url: 'https://example.com/images/tool-management.jpg',
            alt: '',
        },
        thumbnail: {
            url: 'https://example.com/images/tool-management-thumb.jpg',
            alt: '',
        },
        category: {
            id: 'category-1',
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
                url: 'https://example.com/images/dashboard-view.jpg',
                alt: 'Widok panelu PowerPro',
                caption:
                    'Panel zarządzania narzędziami PowerPro zapewnia kompleksowy przegląd zarejestrowanych narzędzi.',
            },
        ],
    },
    {
        id: 'art-002',
        createdAt: '2023-01-20T11:45:00Z',
        updatedAt: '2023-03-05T13:20:00Z',
        title: 'Rejestracja narzędzia PowerPro w celu uzyskania gwarancji',
        lead: 'Chroń swoją inwestycję, prawidłowo rejestrując narzędzia PowerPro w celu objęcia ich gwarancją.',
        image: {
            url: 'https://example.com/images/tool-management.jpg',
            alt: '',
        },
        thumbnail: {
            url: 'https://example.com/images/tool-management-thumb.jpg',
            alt: '',
        },
        category: {
            id: 'category-1',
            title: 'Warranty & Repair',
        },
        sections: [
            {
                id: 'sect-002-1',
                createdAt: '2023-01-20T11:45:00Z',
                updatedAt: '2023-03-05T13:20:00Z',
                __typename: 'ArticleSectionText',
                title: 'Proces rejestracji online',
                content:
                    'Odwiedź powerprotools.com/register i wprowadź numer seryjny narzędzia oraz informacje o zakupie. Będziesz potrzebować oryginalnego paragonu i numeru modelu narzędzia.',
            },
            {
                id: 'sect-002-2',
                createdAt: '2023-01-20T12:30:00Z',
                updatedAt: '2023-03-05T13:20:00Z',
                __typename: 'ArticleSectionImage',
                url: 'https://example.com/images/serial-number-location.jpg',
                alt: 'Lokalizacja numeru seryjnego narzędzia',
                caption:
                    'Numer seryjny można znaleźć na podstawie narzędzia lub na gnieździe akumulatora, jak pokazano powyżej.',
            },
        ],
    },
    {
        id: 'art-003',
        createdAt: '2023-03-10T14:22:00Z',
        updatedAt: '2023-03-10T15:30:00Z',
        title: 'Wprowadzenie do zarządzania parkiem narzędzi PowerPro',
        lead: 'Odkryj, jak zarządzanie parkiem narzędzi może zrewolucjonizować sposób, w jaki Twoja firma śledzi i konserwuje narzędzia PowerPro.',
        image: {
            url: 'https://example.com/images/tool-management.jpg',
            alt: '',
        },
        thumbnail: {
            url: 'https://example.com/images/tool-management-thumb.jpg',
            alt: '',
        },
        category: {
            id: 'category-1',
            title: 'Warranty & Repair',
        },
        sections: [
            {
                id: 'sect-003-1',
                createdAt: '2023-03-10T14:22:00Z',
                updatedAt: '2023-03-10T14:22:00Z',
                __typename: 'ArticleSectionText',
                title: 'Czym jest zarządzanie parkiem narzędzi?',
                content:
                    'Zarządzanie parkiem narzędzi to kompleksowy system PowerPro do śledzenia, konserwacji i optymalizacji całego inwentarza narzędzi w różnych lokalizacjach i projektach.',
            },
            {
                id: 'sect-003-2',
                createdAt: '2023-03-10T14:22:00Z',
                updatedAt: '2023-03-10T14:22:00Z',
                __typename: 'ArticleSectionText',
                title: 'Konfiguracja parku narzędzi',
                content:
                    'Zacznij od zinwentaryzowania wszystkich narzędzi PowerPro i wprowadzenia ich do systemu. Możesz importować istniejące listy inwentarzowe lub dodawać narzędzia pojedynczo.',
            },
            {
                id: 'sect-003-3',
                createdAt: '2023-03-10T15:30:00Z',
                updatedAt: '2023-03-10T15:30:00Z',
                __typename: 'ArticleSectionImage',
                url: 'https://example.com/images/tool-park-dashboard.jpg',
                alt: 'Panel zarządzania parkiem narzędzi',
                caption: 'Intuicyjny panel daje ci widok z lotu ptaka na cały inwentarz narzędzi.',
            },
        ],
    },
    {
        id: 'art-004',
        createdAt: '2023-06-24T10:15:00Z',
        updatedAt: '2023-08-15T16:40:00Z',
        title: 'Zrozumienie gwarancji PowerPro',
        lead: 'Wszystko, co musisz wiedzieć o ochronie gwarancyjnej PowerPro dla twoich profesjonalnych narzędzi.',
        image: {
            url: 'https://example.com/images/tool-management.jpg',
            alt: '',
        },
        thumbnail: {
            url: 'https://example.com/images/tool-management-thumb.jpg',
            alt: '',
        },
        category: {
            id: 'category-1',
            title: 'Warranty & Repair',
        },
        sections: [
            {
                id: 'sect-004-1',
                createdAt: '2023-06-24T10:15:00Z',
                updatedAt: '2023-08-15T16:40:00Z',
                __typename: 'ArticleSectionImage',
                url: 'https://example.com/images/warranty-card.jpg',
                alt: 'Karta gwarancyjna PowerPro',
                caption: 'Twoja karta gwarancyjna zawiera ważne informacje o warunkach ochrony.',
            },
            {
                id: 'sect-004-2',
                createdAt: '2023-06-24T10:15:00Z',
                updatedAt: '2023-08-15T16:40:00Z',
                __typename: 'ArticleSectionText',
                title: 'Standardowa ochrona gwarancyjna',
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
                    'Dla dodatkowej ochrony, rozważ nasz program rozszerzonej gwarancji PowerPro+, który dodaje do 2 dodatkowych lat ochrony i obejmuje ochronę przed przypadkowymi uszkodzeniami.',
            },
        ],
    },
    {
        id: 'art-005',
        createdAt: '2023-04-15T09:50:00Z',
        updatedAt: '2023-05-20T11:35:00Z',
        title: 'Planowanie wizyty serwisowej narzędzia PowerPro',
        lead: 'Dowiedz się, jak łatwo zaplanować serwis dla swoich narzędzi PowerPro za pośrednictwem naszego portalu internetowego.',
        image: {
            url: 'https://example.com/images/tool-management.jpg',
            alt: '',
        },
        thumbnail: {
            url: 'https://example.com/images/tool-management-thumb.jpg',
            alt: '',
        },
        category: {
            id: 'category-1',
            title: 'Warranty & Repair',
        },
        sections: [
            {
                id: 'sect-005-1',
                createdAt: '2023-04-15T09:50:00Z',
                updatedAt: '2023-05-20T11:35:00Z',
                __typename: 'ArticleSectionText',
                title: 'Dostęp do portalu serwisowego',
                content:
                    "Zaloguj się na swoje konto PowerPro i wybierz 'Zaplanuj serwis' z głównego menu. Będziesz mógł zobaczyć wszystkie zarejestrowane narzędzia i wybrać te, które wymagają uwagi.",
            },
            {
                id: 'sect-005-2',
                createdAt: '2023-04-15T09:50:00Z',
                updatedAt: '2023-05-20T11:35:00Z',
                __typename: 'ArticleSectionText',
                title: 'Opcje serwisowe',
                content:
                    'Wybierz między dostarczeniem narzędzia do centrum serwisowego, zaplanowaniem odbioru lub zamówieniem serwisu na miejscu dla uprawnionych klientów korporacyjnych.',
            },
        ],
    },
];

export const MOCK_ARTICLES_DE: Articles.Model.Article[] = [
    {
        id: 'art-001',
        createdAt: '2023-05-12T08:30:00Z',
        updatedAt: '2023-06-15T14:25:00Z',
        title: 'Verwalten Ihrer PowerPro-Werkzeuge online',
        lead: 'Erfahren Sie, wie Sie Ihre PowerPro-Werkzeuge effizient über unser rund um die Uhr verfügbares Selbstbedienungsportal verwalten können.',
        image: {
            url: 'https://example.com/images/tool-management.jpg',
            alt: '',
        },
        thumbnail: {
            url: 'https://example.com/images/tool-management-thumb.jpg',
            alt: '',
        },
        category: {
            id: 'category-1',
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
                url: 'https://example.com/images/dashboard-view.jpg',
                alt: 'PowerPro-Dashboard-Ansicht',
                caption:
                    'Das PowerPro-Werkzeugverwaltungs-Dashboard bietet einen umfassenden Überblick über Ihre registrierten Werkzeuge.',
            },
        ],
    },
    {
        id: 'art-002',
        createdAt: '2023-01-20T11:45:00Z',
        updatedAt: '2023-03-05T13:20:00Z',
        title: 'Registrieren Ihres PowerPro-Werkzeugs für die Garantie',
        lead: 'Schützen Sie Ihre Investition, indem Sie Ihre PowerPro-Werkzeuge ordnungsgemäß für den Garantieschutz registrieren.',
        image: {
            url: 'https://example.com/images/tool-management.jpg',
            alt: '',
        },
        thumbnail: {
            url: 'https://example.com/images/tool-management-thumb.jpg',
            alt: '',
        },
        category: {
            id: 'category-1',
            title: 'Warranty & Repair',
        },
        sections: [
            {
                id: 'sect-002-1',
                createdAt: '2023-01-20T11:45:00Z',
                updatedAt: '2023-03-05T13:20:00Z',
                __typename: 'ArticleSectionText',
                title: 'Online-Registrierungsprozess',
                content:
                    'Besuchen Sie powerprotools.com/register und geben Sie die Seriennummer und Kaufinformationen Ihres Werkzeugs ein. Sie benötigen Ihren Originalkaufbeleg und die Modellnummer des Werkzeugs.',
            },
            {
                id: 'sect-002-2',
                createdAt: '2023-01-20T12:30:00Z',
                updatedAt: '2023-03-05T13:20:00Z',
                __typename: 'ArticleSectionImage',
                url: 'https://example.com/images/serial-number-location.jpg',
                alt: 'Position der Werkzeug-Seriennummer',
                caption:
                    'Die Seriennummer befindet sich auf der Basis des Werkzeugs oder am Batteriefach, wie oben gezeigt.',
            },
        ],
    },
    {
        id: 'art-003',
        createdAt: '2023-03-10T14:22:00Z',
        updatedAt: '2023-03-10T15:30:00Z',
        title: 'Einführung in die PowerPro-Werkzeugpark-Verwaltung',
        lead: 'Entdecken Sie, wie die Werkzeugpark-Verwaltung revolutionieren kann, wie Ihr Unternehmen seine PowerPro-Werkzeuge verfolgt und wartet.',
        image: {
            url: 'https://example.com/images/tool-management.jpg',
            alt: '',
        },
        thumbnail: {
            url: 'https://example.com/images/tool-management-thumb.jpg',
            alt: '',
        },
        category: {
            id: 'category-1',
            title: 'Warranty & Repair',
        },
        sections: [
            {
                id: 'sect-003-1',
                createdAt: '2023-03-10T14:22:00Z',
                updatedAt: '2023-03-10T14:22:00Z',
                __typename: 'ArticleSectionText',
                title: 'Was ist Werkzeugpark-Management?',
                content:
                    'Werkzeugpark-Management ist das umfassende System von PowerPro zur Verfolgung, Wartung und Optimierung Ihres gesamten Werkzeugbestands über Standorte und Projekte hinweg.',
            },
            {
                id: 'sect-003-2',
                createdAt: '2023-03-10T14:22:00Z',
                updatedAt: '2023-03-10T14:22:00Z',
                __typename: 'ArticleSectionText',
                title: 'Einrichten Ihres Werkzeugparks',
                content:
                    'Beginnen Sie mit der Inventarisierung aller Ihrer PowerPro-Werkzeuge und geben Sie sie in das System ein. Sie können bestehende Inventarlisten importieren oder Werkzeuge einzeln hinzufügen.',
            },
            {
                id: 'sect-003-3',
                createdAt: '2023-03-10T15:30:00Z',
                updatedAt: '2023-03-10T15:30:00Z',
                __typename: 'ArticleSectionImage',
                url: 'https://example.com/images/tool-park-dashboard.jpg',
                alt: 'Werkzeugpark-Management-Dashboard',
                caption: 'Das intuitive Dashboard gibt Ihnen einen Überblick über Ihren gesamten Werkzeugbestand.',
            },
        ],
    },
    {
        id: 'art-004',
        createdAt: '2023-06-24T10:15:00Z',
        updatedAt: '2023-08-15T16:40:00Z',
        title: 'Verstehen Ihrer PowerPro-Garantie',
        lead: 'Alles, was Sie über den Garantieschutz von PowerPro für Ihre professionellen Werkzeuge wissen müssen.',
        image: {
            url: 'https://example.com/images/tool-management.jpg',
            alt: '',
        },
        thumbnail: {
            url: 'https://example.com/images/tool-management-thumb.jpg',
            alt: '',
        },
        category: {
            id: 'category-1',
            title: 'Warranty & Repair',
        },
        sections: [
            {
                id: 'sect-004-1',
                createdAt: '2023-06-24T10:15:00Z',
                updatedAt: '2023-08-15T16:40:00Z',
                __typename: 'ArticleSectionImage',
                url: 'https://example.com/images/warranty-card.jpg',
                alt: 'PowerPro-Garantiekarte',
                caption: 'Ihre Garantiekarte enthält wichtige Informationen zu Ihren Garantiebedingungen.',
            },
            {
                id: 'sect-004-2',
                createdAt: '2023-06-24T10:15:00Z',
                updatedAt: '2023-08-15T16:40:00Z',
                __typename: 'ArticleSectionText',
                title: 'Standard-Garantieabdeckung',
                content:
                    'Alle professionellen PowerPro-Werkzeuge werden mit einer 3-jährigen Standardgarantie geliefert, die Herstellungsfehler und Ausfälle bei normalem Gebrauch abdeckt.',
            },
            {
                id: 'sect-004-3',
                createdAt: '2023-06-24T10:15:00Z',
                updatedAt: '2023-08-15T16:40:00Z',
                __typename: 'ArticleSectionText',
                title: 'Erweiterte Garantieoptionen',
                content:
                    'Für zusätzlichen Schutz erwägen Sie unser PowerPro+ erweitertes Garantieprogramm, das bis zu 2 zusätzliche Jahre Deckung bietet und Schutz vor versehentlichen Beschädigungen einschließt.',
            },
        ],
    },
    {
        id: 'art-005',
        createdAt: '2023-04-15T09:50:00Z',
        updatedAt: '2023-05-20T11:35:00Z',
        title: 'Terminvereinbarung für den PowerPro-Werkzeugservice',
        lead: 'Erfahren Sie, wie Sie einfach einen Service für Ihre PowerPro-Werkzeuge über unser Online-Portal planen können.',
        image: {
            url: 'https://example.com/images/tool-management.jpg',
            alt: '',
        },
        thumbnail: {
            url: 'https://example.com/images/tool-management-thumb.jpg',
            alt: '',
        },
        category: {
            id: 'category-1',
            title: 'Warranty & Repair',
        },
        sections: [
            {
                id: 'sect-005-1',
                createdAt: '2023-04-15T09:50:00Z',
                updatedAt: '2023-05-20T11:35:00Z',
                __typename: 'ArticleSectionText',
                title: 'Zugriff auf das Service-Portal',
                content:
                    "Melden Sie sich bei Ihrem PowerPro-Konto an und wählen Sie 'Service planen' aus dem Hauptmenü. Sie können alle Ihre registrierten Werkzeuge sehen und auswählen, welche Aufmerksamkeit benötigen.",
            },
            {
                id: 'sect-005-2',
                createdAt: '2023-04-15T09:50:00Z',
                updatedAt: '2023-05-20T11:35:00Z',
                __typename: 'ArticleSectionText',
                title: 'Service-Optionen',
                content:
                    'Wählen Sie zwischen dem Bringen Ihres Werkzeugs zu einem Servicecenter, der Planung einer Abholung oder der Anforderung eines Service vor Ort für berechtigte Unternehmenskunden.',
            },
        ],
    },
];

export const mapArticle = (locale: string, id: string): Articles.Model.Article => {
    const articles = locale === 'pl' ? MOCK_ARTICLES_PL : locale === 'de' ? MOCK_ARTICLES_DE : MOCK_ARTICLES_EN;
    const article = articles.find((article) => article.id === id);
    if (!article) {
        throw new NotFoundException(`Article with id ${id} not found`);
    }
    return article;
};

export const mapArticles = (locale: string, options: Articles.Request.GetArticleListQuery): Articles.Model.Articles => {
    const { offset = 0, limit = 10 } = options;
    const articles = locale === 'pl' ? MOCK_ARTICLES_PL : locale === 'de' ? MOCK_ARTICLES_DE : MOCK_ARTICLES_EN;
    const filteredArticles = articles.filter((article) => {
        if (options.dateFrom && new Date(article.createdAt) < new Date(options.dateFrom)) {
            return false;
        }
        if (options.dateTo && new Date(article.createdAt) > new Date(options.dateTo)) {
            return false;
        }
        return true;
    });

    return {
        data: filteredArticles.slice(offset, offset + limit),
        total: filteredArticles.length,
    };
};

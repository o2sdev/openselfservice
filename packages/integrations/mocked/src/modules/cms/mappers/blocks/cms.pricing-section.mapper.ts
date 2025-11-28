import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

const MOCK_PRICING_SECTION_BLOCK_1_EN: CMS.Model.PricingSectionBlock.PricingSectionBlock = {
    id: 'pricing-section-1',
    title: 'Accounts',
    description: 'Choose the right account for your needs and enjoy simple, secure banking every day.',
    headingType: 'h1',
    pricingList: [
        {
            title: 'Everyday Account',
            description: 'A flexible account for daily banking, designed to managing your money effortless.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-9.png',
                width: 351,
                height: 233,
                alt: 'Pricing section image',
                priority: true,
            },
            isPromoted: false,
            links: [
                {
                    label: 'Get started',
                    icon: '',
                    description: 'Learn more about our pricing',
                    url: '/personal/accounts/everyday-account',
                    variant: 'secondary',
                },
                {
                    label: 'Learn more',
                    description: 'Learn more about our pricing',
                    icon: 'ArrowRight',
                    url: '/personal/accounts/everyday-account',
                    variant: 'link',
                },
            ],
            featureListTitle: 'What’s included:',
            featureList: [
                {
                    title: 'Instant account opening with no paperwork.',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
                {
                    title: '24/7 in-app support from banking experts',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
            ],
        },
        {
            title: 'Savings Account',
            description: 'Grow your wealth with an account built for easy saving and smart financial planning',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-10.png',
                width: 351,
                height: 233,
                alt: 'Pricing section image',
                priority: true,
            },
            links: [
                {
                    label: 'Get started',
                    icon: '',
                    description: 'Learn more about our pricing',
                    url: '/personal/accounts/savings-account',
                    variant: 'primary',
                },
                {
                    label: 'Learn more',
                    description: 'Learn more about our pricing',
                    icon: 'ArrowRight',
                    url: '/personal/accounts/savings-account',
                    variant: 'link',
                },
            ],
            isPromoted: true,
            tags: [
                {
                    label: 'RECOMMENDED',
                    variant: 'default',
                },
            ],
            featureListTitle: 'Everything in Everyday Account, plus:',
            featureList: [
                {
                    title: 'Automated savings tools to help you reach your goals',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
                {
                    title: 'Higher interest rates than everyday accounts',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
                {
                    title: 'Personalized budgeting and spending insights',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
            ],
        },
    ],
};

const MOCK_PRICING_SECTION_BLOCK_1_DE: CMS.Model.PricingSectionBlock.PricingSectionBlock = {
    id: 'pricing-section-1',
    title: 'Konten',
    description:
        'Wählen Sie das richtige Konto für Ihre Bedürfnisse und genießen Sie jeden Tag einfaches, sicheres Banking.',
    headingType: 'h1',
    pricingList: [
        {
            title: 'Alltagskonto',
            description: 'Ein flexibles Konto für das tägliche Banking, entwickelt, um Ihr Geld mühelos zu verwalten.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-9.png',
                width: 351,
                height: 233,
                alt: 'Bild der Preissektion',
                priority: true,
            },
            isPromoted: false,
            links: [
                {
                    label: 'Loslegen',
                    icon: '',
                    description: 'Erfahren Sie mehr über unsere Preise',
                    url: '/personlich/konten/tageskonto',
                    variant: 'secondary',
                },
                {
                    label: 'Erfahren Sie mehr',
                    description: 'Erfahren Sie mehr über unsere Preise',
                    icon: 'ArrowRight',
                    url: '/personlich/konten/tageskonto',
                    variant: 'link',
                },
            ],
            featureListTitle: 'Was ist enthalten:',
            featureList: [
                {
                    title: 'Sofortige Kontoeröffnung ohne Papierkram.',
                    description:
                        'Beschreiben Sie kurz, wie diese Funktion ein spezifisches Benutzerproblem löst. Konzentrieren Sie sich auf die Vorteile, nicht auf technische Details.',
                    icon: 'Check',
                },
                {
                    title: '24/7 In-App-Support von Bankexperten',
                    description:
                        'Beschreiben Sie kurz, wie diese Funktion ein spezifisches Benutzerproblem löst. Konzentrieren Sie sich auf die Vorteile, nicht auf technische Details.',
                    icon: 'Check',
                },
            ],
        },
        {
            title: 'Sparkonto',
            description:
                'Vermehren Sie Ihr Vermögen mit einem Konto, das für einfaches Sparen und intelligente Finanzplanung entwickelt wurde',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-10.png',
                width: 351,
                height: 233,
                alt: 'Bild der Preissektion',
                priority: true,
            },
            links: [
                {
                    label: 'Loslegen',
                    icon: '',
                    description: 'Erfahren Sie mehr über unsere Preise',
                    url: '/personlich/konten/sparen-konto',
                    variant: 'primary',
                },
                {
                    label: 'Erfahren Sie mehr',
                    description: 'Erfahren Sie mehr über unsere Preise',
                    icon: 'ArrowRight',
                    url: '/personlich/konten/sparen-konto',
                    variant: 'link',
                },
            ],
            isPromoted: true,
            tags: [
                {
                    label: 'RECOMMENDED',
                    variant: 'default',
                },
            ],
            featureListTitle: 'Alles in Everyday Account, plus:',
            featureList: [
                {
                    title: 'Automatisierte Sparwerkzeuge, die Ihnen helfen, Ihre Ziele zu erreichen',
                    description:
                        'Beschreiben Sie kurz, wie diese Funktion ein spezifisches Benutzerproblem löst. Konzentrieren Sie sich auf die Vorteile, nicht auf technische Details.',
                    icon: 'Check',
                },
                {
                    title: 'Höhere Zinssätze als Alltagskonten',
                    description:
                        'Beschreiben Sie kurz, wie diese Funktion ein spezifisches Benutzerproblem löst. Konzentrieren Sie sich auf die Vorteile, nicht auf technische Details.',
                    icon: 'Check',
                },
                {
                    title: 'Personalisierte Budgetierung und Ausgabenanalysen',
                    description:
                        'Beschreiben Sie kurz, wie diese Funktion ein spezifisches Benutzerproblem löst. Konzentrieren Sie sich auf die Vorteile, nicht auf technische Details.',
                    icon: 'Check',
                },
            ],
        },
    ],
};

const MOCK_PRICING_SECTION_BLOCK_1_PL: CMS.Model.PricingSectionBlock.PricingSectionBlock = {
    id: 'pricing-section-1',
    title: 'Konta',
    description:
        'Wybierz odpowiednie konto dla swoich potrzeb i ciesz się prostym, bezpiecznym bankowaniem każdego dnia.',
    headingType: 'h1',
    pricingList: [
        {
            title: 'Konto codzienne',
            description:
                'Elastyczne konto do codziennego bankowania, zaprojektowane tak, aby zarządzanie pieniędzmi było bezwysiłkowe.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-9.png',
                width: 351,
                height: 233,
                alt: 'Obraz sekcji cenowej',
                priority: true,
            },
            isPromoted: false,
            links: [
                {
                    label: 'Rozpocznij',
                    icon: '',
                    description: 'Dowiedz się więcej o naszych cenach',
                    url: '/indywidualny/konta/konto-codzienne',
                    variant: 'secondary',
                },
                {
                    label: 'Dowiedz się więcej',
                    description: 'Dowiedz się więcej o naszych cenach',
                    icon: 'ArrowRight',
                    url: '/indywidualny/konta/konto-codzienne',
                    variant: 'link',
                },
            ],
            featureListTitle: 'Co jest w zestawie:',
            featureList: [
                {
                    title: 'Natychmiastowe otwarcie konta bez papierkowej roboty.',
                    description:
                        'Krótko opisz, jak ta funkcja rozwiązuje konkretny problem użytkownika. Skup się na korzyściach, a nie na szczegółach technicznych.',
                    icon: 'Check',
                },
                {
                    title: 'Całodobowe wsparcie w aplikacji od ekspertów bankowych',
                    description:
                        'Krótko opisz, jak ta funkcja rozwiązuje konkretny problem użytkownika. Skup się na korzyściach, a nie na szczegółach technicznych.',
                    icon: 'Check',
                },
            ],
        },
        {
            title: 'Konto oszczędnościowe',
            description:
                'Pomnażaj swoje bogactwo dzięki kontu stworzonym do łatwego oszczędzania i inteligentnego planowania finansowego',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-10.png',
                width: 351,
                height: 233,
                alt: 'Obraz sekcji cenowej',
                priority: true,
            },
            links: [
                {
                    label: 'Rozpocznij',
                    icon: '',
                    description: 'Dowiedz się więcej o naszych cenach',
                    url: '/indywidualny/konta/konto-oszczednosciowe',
                    variant: 'primary',
                },
                {
                    label: 'Dowiedz się więcej',
                    description: 'Dowiedz się więcej o naszych cenach',
                    icon: 'ArrowRight',
                    url: '/indywidualny/konta/konto-oszczednosciowe',
                    variant: 'link',
                },
            ],
            isPromoted: true,
            tags: [
                {
                    label: 'RECOMMENDED',
                    variant: 'default',
                },
            ],
            featureListTitle: 'Wszystko w koncie codziennym, plus:',
            featureList: [
                {
                    title: 'Zautomatyzowane narzędzia oszczędnościowe, które pomogą Ci osiągnąć cele',
                    description:
                        'Krótko opisz, jak ta funkcja rozwiązuje konkretny problem użytkownika. Skup się na korzyściach, a nie na szczegółach technicznych.',
                    icon: 'Check',
                },
                {
                    title: 'Wyższe oprocentowanie niż w kontach codziennych',
                    description:
                        'Krótko opisz, jak ta funkcja rozwiązuje konkretny problem użytkownika. Skup się na korzyściach, a nie na szczegółach technicznych.',
                    icon: 'Check',
                },
                {
                    title: 'Spersonalizowane budżetowanie i wgląd w wydatki',
                    description:
                        'Krótko opisz, jak ta funkcja rozwiązuje konkretny problem użytkownika. Skup się na korzyściach, a nie na szczegółach technicznych.',
                    icon: 'Check',
                },
            ],
        },
    ],
};

const MOCK_PRICING_SECTION_BLOCK_2_EN: CMS.Model.PricingSectionBlock.PricingSectionBlock = {
    id: 'pricing-section-2',
    title: 'Cards',
    description: 'Choose the right card for your needs and enjoy simple, secure banking every day.',
    headingType: 'h1',
    pricingList: [
        {
            title: 'Debit Card',
            description: 'A flexible card for daily banking, designed to managing your money effortless.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-14.png',
                width: 351,
                height: 233,
                alt: 'Pricing section image',
                priority: true,
            },
            isPromoted: false,
            links: [
                {
                    label: 'Get started',
                    icon: '',
                    description: 'Learn more about our pricing',
                    url: '/personal/cards/debit-card',
                    variant: 'secondary',
                },
                {
                    label: 'Learn more',
                    description: 'Learn more about our pricing',
                    icon: 'ArrowRight',
                    url: '/personal/cards/debit-card',
                    variant: 'link',
                },
            ],
            featureListTitle: 'What’s included:',
            featureList: [
                {
                    title: 'Instant card opening with no paperwork.',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
                {
                    title: '24/7 in-app support from card experts',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
            ],
        },
        {
            title: 'Credit Card',
            description: 'Grow your wealth with a card built for easy saving and smart financial planning',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-15.png',
                width: 351,
                height: 233,
                alt: 'Pricing section image',
                priority: true,
            },
            links: [
                {
                    label: 'Get started',
                    icon: '',
                    description: 'Learn more about our pricing',
                    url: '/personal/cards/credit-card',
                    variant: 'primary',
                },
                {
                    label: 'Learn more',
                    description: 'Learn more about our pricing',
                    icon: 'ArrowRight',
                    url: '/personal/cards/credit-card',
                    variant: 'link',
                },
            ],
            isPromoted: true,
            tags: [
                {
                    label: 'RECOMMENDED',
                    variant: 'default',
                },
            ],
            featureListTitle: 'Everything in Debit Card, plus:',
            featureList: [
                {
                    title: 'Automated card tools to help you reach your goals',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
                {
                    title: 'Higher interest rates than debit cards',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
                {
                    title: 'Personalized budgeting and spending insights for credit cards',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
            ],
        },
    ],
};

const MOCK_PRICING_SECTION_BLOCK_2_DE: CMS.Model.PricingSectionBlock.PricingSectionBlock = {
    id: 'pricing-section-2',
    title: 'Karten',
    description:
        'Wählen Sie die richtige Karte für Ihre Bedürfnisse und genießen Sie jeden Tag einfaches, sicheres Banking.',
    headingType: 'h1',
    pricingList: [
        {
            title: 'Debit-Karte',
            description: 'Eine flexible Karte für das tägliche Banking, entwickelt, um Ihr Geld mühelos zu verwalten.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-14.png',
                width: 351,
                height: 233,
                alt: 'Bild der Preissektion',
                priority: true,
            },
            isPromoted: false,
            links: [
                {
                    label: 'Loslegen',
                    icon: '',
                    description: 'Erfahren Sie mehr über unsere Preise',
                    url: '/personlich/karten/debit-karte',
                    variant: 'secondary',
                },
                {
                    label: 'Erfahren Sie mehr',
                    description: 'Erfahren Sie mehr über unsere Preise',
                    icon: 'ArrowRight',
                    url: '/personlich/karten/debit-karte',
                    variant: 'link',
                },
            ],
            featureListTitle: 'Was ist enthalten:',
            featureList: [
                {
                    title: 'Sofortige Karteneröffnung ohne Papierkram.',
                    description:
                        'Beschreiben Sie kurz, wie diese Funktion ein spezifisches Benutzerproblem löst. Konzentrieren Sie sich auf die Vorteile, nicht auf technische Details.',
                    icon: 'Check',
                },
                {
                    title: '24/7 In-App-Support von Kartenexperten',
                    description:
                        'Beschreiben Sie kurz, wie diese Funktion ein spezifisches Benutzerproblem löst. Konzentrieren Sie sich auf die Vorteile, nicht auf technische Details.',
                    icon: 'Check',
                },
            ],
        },
        {
            title: 'Kreditkarte',
            description:
                'Vermehren Sie Ihr Vermögen mit einer Karte, die für einfaches Sparen und intelligente Finanzplanung entwickelt wurde',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-15.png',
                width: 351,
                height: 233,
                alt: 'Bild der Preissektion',
                priority: true,
            },
            links: [
                {
                    label: 'Loslegen',
                    icon: '',
                    description: 'Erfahren Sie mehr über unsere Preise',
                    url: '/personlich/karten/kredit-karte',
                    variant: 'primary',
                },
                {
                    label: 'Erfahren Sie mehr',
                    description: 'Erfahren Sie mehr über unsere Preise',
                    icon: 'ArrowRight',
                    url: '/personlich/karten/kredit-karte',
                    variant: 'link',
                },
            ],
            isPromoted: true,
            tags: [
                {
                    label: 'RECOMMENDED',
                    variant: 'default',
                },
            ],
            featureListTitle: 'Alles in Debit-Karte, plus:',
            featureList: [
                {
                    title: 'Automatisierte Kartenwerkzeuge, die Ihnen helfen, Ihre Ziele zu erreichen',
                    description:
                        'Beschreiben Sie kurz, wie diese Funktion ein spezifisches Benutzerproblem löst. Konzentrieren Sie sich auf die Vorteile, nicht auf technische Details.',
                    icon: 'Check',
                },
                {
                    title: 'Höhere Zinssätze als Debit-Karten',
                    description:
                        'Beschreiben Sie kurz, wie diese Funktion ein spezifisches Benutzerproblem löst. Konzentrieren Sie sich auf die Vorteile, nicht auf technische Details.',
                    icon: 'Check',
                },
                {
                    title: 'Personalisierte Budgetierung und Ausgabenanalysen für Kreditkarten',
                    description:
                        'Beschreiben Sie kurz, wie diese Funktion ein spezifisches Benutzerproblem löst. Konzentrieren Sie sich auf die Vorteile, nicht auf technische Details.',
                    icon: 'Check',
                },
            ],
        },
    ],
};

const MOCK_PRICING_SECTION_BLOCK_2_PL: CMS.Model.PricingSectionBlock.PricingSectionBlock = {
    id: 'pricing-section-2',
    title: 'Karty',
    description:
        'Wybierz odpowiednią kartę dla swoich potrzeb i ciesz się prostym, bezpiecznym bankowaniem każdego dnia.',
    headingType: 'h1',
    pricingList: [
        {
            title: 'Karta debetowa',
            description:
                'Elastyczna karta do codziennego bankowania, zaprojektowana tak, aby zarządzanie pieniędzmi było bezwysiłkowe.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-14.png',
                width: 351,
                height: 233,
                alt: 'Obraz sekcji cenowej',
                priority: true,
            },
            isPromoted: false,
            links: [
                {
                    label: 'Rozpocznij',
                    icon: '',
                    description: 'Dowiedz się więcej o naszych cenach',
                    url: '/indywidualny/karty/karta-debetowa',
                    variant: 'secondary',
                },
                {
                    label: 'Dowiedz się więcej',
                    description: 'Dowiedz się więcej o naszych cenach',
                    icon: 'ArrowRight',
                    url: '/indywidualny/karty/karta-debetowa',
                    variant: 'link',
                },
            ],
            featureListTitle: 'Co jest w zestawie:',
            featureList: [
                {
                    title: 'Natychmiastowe otwarcie karty bez papierkowej roboty.',
                    description:
                        'Krótko opisz, jak ta funkcja rozwiązuje konkretny problem użytkownika. Skup się na korzyściach, a nie na szczegółach technicznych.',
                    icon: 'Check',
                },
                {
                    title: 'Całodobowe wsparcie w aplikacji od ekspertów kartowych',
                    description:
                        'Krótko opisz, jak ta funkcja rozwiązuje konkretny problem użytkownika. Skup się na korzyściach, a nie na szczegółach technicznych.',
                    icon: 'Check',
                },
            ],
        },
        {
            title: 'Karta kredytowa',
            description:
                'Pomnażaj swoje bogactwo dzięki karcie stworzonej do łatwego oszczędzania i inteligentnego planowania finansowego',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-15.png',
                width: 351,
                height: 233,
                alt: 'Obraz sekcji cenowej',
                priority: true,
            },
            links: [
                {
                    label: 'Rozpocznij',
                    icon: '',
                    description: 'Dowiedz się więcej o naszych cenach',
                    url: '/indywidualny/karty/karta-kredytowa',
                    variant: 'primary',
                },
                {
                    label: 'Dowiedz się więcej',
                    description: 'Dowiedz się więcej o naszych cenach',
                    icon: 'ArrowRight',
                    url: '/indywidualny/karty/karta-kredytowa',
                    variant: 'link',
                },
            ],
            isPromoted: true,
            tags: [
                {
                    label: 'RECOMMENDED',
                    variant: 'default',
                },
            ],
            featureListTitle: 'Wszystko w koncie codziennym, plus:',
            featureList: [
                {
                    title: 'Zautomatyzowane narzędzia kartowe, które pomogą Ci osiągnąć cele',
                    description:
                        'Krótko opisz, jak ta funkcja rozwiązuje konkretny problem użytkownika. Skup się na korzyściach, a nie na szczegółach technicznych.',
                    icon: 'Check',
                },
                {
                    title: 'Wyższe oprocentowanie niż w kartach debetowych',
                    description:
                        'Krótko opisz, jak ta funkcja rozwiązuje konkretny problem użytkownika. Skup się na korzyściach, a nie na szczegółach technicznych.',
                    icon: 'Check',
                },
                {
                    title: 'Spersonalizowane budżetowanie i wgląd w wydatki dla kart kredytowych',
                    description:
                        'Krótko opisz, jak ta funkcja rozwiązuje konkretny problem użytkownika. Skup się na korzyściach, a nie na szczegółach technicznych.',
                    icon: 'Check',
                },
            ],
        },
    ],
};

const MOCK_PRICING_SECTION_BLOCK_3_EN: CMS.Model.PricingSectionBlock.PricingSectionBlock = {
    id: 'pricing-section-3',
    title: 'Insurance',
    description: 'Choose the right insurance for your needs and enjoy simple, secure insurance every day.',
    headingType: 'h1',
    pricingList: [
        {
            title: 'Travel insurance',
            description: 'Protect your trips with comprehensive travel coverage.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-20.png',
                width: 351,
                height: 233,
                alt: 'Pricing section image',
                priority: true,
            },
            isPromoted: false,
            links: [
                {
                    label: 'Get started',
                    icon: '',
                    description: 'Learn more about our pricing',
                    url: '/personal/insurance/travel-insurance',
                    variant: 'secondary',
                },
                {
                    label: 'Learn more',
                    description: 'Learn more about our pricing',
                    icon: 'ArrowRight',
                    url: '/personal/insurance/travel-insurance',
                    variant: 'link',
                },
            ],
            featureListTitle: 'What’s included:',
            featureList: [
                {
                    title: 'Emergency medical assistance worldwide',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
                {
                    title: '24/7 support during your travels',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
            ],
        },
        {
            title: 'Home insurance',
            description: 'Safeguard yourproperty and assets with flexible home insurance solutions.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-21.png',
                width: 351,
                height: 233,
                alt: 'Pricing section image',
                priority: true,
            },
            links: [
                {
                    label: 'Get started',
                    icon: '',
                    description: 'Learn more about our pricing',
                    url: '/personal/insurance/home-insurance',
                    variant: 'primary',
                },
                {
                    label: 'Learn more',
                    description: 'Learn more about our pricing',
                    icon: 'ArrowRight',
                    url: '/personal/insurance/home-insurance',
                    variant: 'link',
                },
            ],
            isPromoted: true,
            tags: [
                {
                    label: 'RECOMMENDED',
                    variant: 'default',
                },
            ],
            featureListTitle: 'What’s included:',
            featureList: [
                {
                    title: 'Protection against fire, theft, and natural disasters',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
                {
                    title: 'Customizable coverage for equipment and inventory.',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
                {
                    title: 'Financial coverage for kitchen and dining equipment.',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
            ],
        },
    ],
};

const MOCK_PRICING_SECTION_BLOCK_3_DE: CMS.Model.PricingSectionBlock.PricingSectionBlock = {
    id: 'pricing-section-3',
    title: 'Versicherung',
    description:
        'Wählen Sie die richtige Versicherung für Ihre Bedürfnisse und genießen Sie jeden Tag eine einfache, sichere Versicherung.',
    headingType: 'h1',
    pricingList: [
        {
            title: 'Reiseversicherung',
            description: 'Schützen Sie Ihre Reisen mit umfassendem Reiseschutz.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-20.png',
                width: 351,
                height: 233,
                alt: 'Preissektionsbild',
                priority: true,
            },
            isPromoted: false,
            links: [
                {
                    label: 'Loslegen',
                    icon: '',
                    description: 'Erfahren Sie mehr über unsere Preise',
                    url: '/personlich/versicherungen/reiseversicherung',
                    variant: 'secondary',
                },
                {
                    label: 'Erfahren Sie mehr',
                    description: 'Erfahren Sie mehr über unsere Preise',
                    icon: 'ArrowRight',
                    url: '/personlich/versicherungen/reiseversicherung',
                    variant: 'link',
                },
            ],
            featureListTitle: 'Was ist enthalten:',
            featureList: [
                {
                    title: 'Weltweite medizinische Notfallhilfe',
                    description:
                        'Beschreiben Sie kurz, wie diese Funktion ein spezifisches Benutzerproblem löst. Konzentrieren Sie sich auf Vorteile, nicht auf technische Details.',
                    icon: 'Check',
                },
                {
                    title: '24/7 Unterstützung während Ihrer Reisen',
                    description:
                        'Beschreiben Sie kurz, wie diese Funktion ein spezifisches Benutzerproblem löst. Konzentrieren Sie sich auf Vorteile, nicht auf technische Details.',
                    icon: 'Check',
                },
            ],
        },
        {
            title: 'Hausversicherung',
            description: 'Schützen Sie Ihr Eigentum und Ihre Vermögenswerte mit flexiblen Hausversicherungslösungen.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-21.png',
                width: 351,
                height: 233,
                alt: 'Preissektionsbild',
                priority: true,
            },
            links: [
                {
                    label: 'Loslegen',
                    icon: '',
                    description: 'Erfahren Sie mehr über unsere Preise',
                    url: '/personlich/versicherungen/hausversicherung',
                    variant: 'primary',
                },
                {
                    label: 'Erfahren Sie mehr',
                    description: 'Erfahren Sie mehr über unsere Preise',
                    icon: 'ArrowRight',
                    url: '/personlich/versicherungen/hausversicherung',
                    variant: 'link',
                },
            ],
            isPromoted: true,
            tags: [
                {
                    label: 'RECOMMENDED',
                    variant: 'default',
                },
            ],
            featureListTitle: 'Was ist enthalten:',
            featureList: [
                {
                    title: 'Schutz vor Feuer, Diebstahl und Naturkatastrophen',
                    description:
                        'Beschreiben Sie kurz, wie diese Funktion ein spezifisches Benutzerproblem löst. Konzentrieren Sie sich auf Vorteile, nicht auf technische Details.',
                    icon: 'Check',
                },
                {
                    title: 'Anpassbare Abdeckung für Ausrüstung und Inventar.',
                    description:
                        'Beschreiben Sie kurz, wie diese Funktion ein spezifisches Benutzerproblem löst. Konzentrieren Sie sich auf Vorteile, nicht auf technische Details.',
                    icon: 'Check',
                },
                {
                    title: 'Finanzielle Abdeckung für Küchen- und Gastronomieausrüstung.',
                    description:
                        'Beschreiben Sie kurz, wie diese Funktion ein spezifisches Benutzerproblem löst. Konzentrieren Sie sich auf Vorteile, nicht auf technische Details.',
                    icon: 'Check',
                },
            ],
        },
    ],
};

const MOCK_PRICING_SECTION_BLOCK_3_PL: CMS.Model.PricingSectionBlock.PricingSectionBlock = {
    id: 'pricing-section-3',
    title: 'Ubezpieczenie',
    description:
        'Wybierz odpowiednie ubezpieczenie dla swoich potrzeb i ciesz się prostym, bezpiecznym ubezpieczeniem każdego dnia.',
    headingType: 'h1',
    pricingList: [
        {
            title: 'Ubezpieczenie podróżne',
            description: 'Chroń swoje podróże dzięki kompleksowemu ubezpieczeniu podróżnemu.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-20.png',
                width: 351,
                height: 233,
                alt: 'Obraz sekcji cenowej',
                priority: true,
            },
            isPromoted: false,
            links: [
                {
                    label: 'Rozpocznij',
                    icon: '',
                    description: 'Dowiedz się więcej o naszych cenach',
                    url: '/indywidualny/ubezpieczenia/ubezpieczenie-podróży',
                    variant: 'secondary',
                },
                {
                    label: 'Dowiedz się więcej',
                    description: 'Dowiedz się więcej o naszych cenach',
                    icon: 'ArrowRight',
                    url: '/indywidualny/ubezpieczenia/ubezpieczenie-podróży',
                    variant: 'link',
                },
            ],
            featureListTitle: 'Co jest wliczone:',
            featureList: [
                {
                    title: 'Pomoc medyczna na całym świecie',
                    description:
                        'Krótko opisz, jak ta funkcja rozwiązuje konkretny problem użytkownika. Skup się na korzyściach, a nie na szczegółach technicznych.',
                    icon: 'Check',
                },
                {
                    title: 'Całodobowe wsparcie podczas podróży',
                    description:
                        'Krótko opisz, jak ta funkcja rozwiązuje konkretny problem użytkownika. Skup się na korzyściach, a nie na szczegółach technicznych.',
                    icon: 'Check',
                },
            ],
        },
        {
            title: 'Ubezpieczenie domu',
            description: 'Chroń swoją własność i aktywa dzięki elastycznym rozwiązaniom ubezpieczeniowym dla domu.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-21.png',
                width: 351,
                height: 233,
                alt: 'Obraz sekcji cenowej',
                priority: true,
            },
            links: [
                {
                    label: 'Rozpocznij',
                    icon: '',
                    description: 'Dowiedz się więcej o naszych cenach',
                    url: '/indywidualny/ubezpieczenia/ubezpieczenie-domu',
                    variant: 'primary',
                },
                {
                    label: 'Dowiedz się więcej',
                    description: 'Dowiedz się więcej o naszych cenach',
                    icon: 'ArrowRight',
                    url: '/indywidualny/ubezpieczenia/ubezpieczenie-domu',
                    variant: 'link',
                },
            ],
            isPromoted: true,
            tags: [
                {
                    label: 'RECOMMENDED',
                    variant: 'default',
                },
            ],
            featureListTitle: 'Co jest wliczone:',
            featureList: [
                {
                    title: 'Ochrona przed pożarem, kradzieżą i klęskami żywiołowymi',
                    description:
                        'Krótko opisz, jak ta funkcja rozwiązuje konkretny problem użytkownika. Skup się na korzyściach, a nie na szczegółach technicznych.',
                    icon: 'Check',
                },
                {
                    title: 'Dostosowywalne pokrycie dla sprzętu i inwentarza.',
                    description:
                        'Krótko opisz, jak ta funkcja rozwiązuje konkretny problem użytkownika. Skup się na korzyściach, a nie na szczegółach technicznych.',
                    icon: 'Check',
                },
                {
                    title: 'Pokrycie finansowe dla sprzętu kuchennego i gastronomicznego.',
                    description:
                        'Krótko opisz, jak ta funkcja rozwiązuje konkretny problem użytkownika. Skup się na korzyściach, a nie na szczegółach technicznych.',
                    icon: 'Check',
                },
            ],
        },
    ],
};

const MOCK_PRICING_SECTION_BLOCK_50_EN: CMS.Model.PricingSectionBlock.PricingSectionBlock = {
    id: 'pricing-section-50',
    title: 'Accounts',
    description: 'Choose the right account for your needs and enjoy simple, secure banking every day.',
    headingType: 'h1',
    pricingList: [
        {
            title: 'Standard',
            description:
                'A flexible solution for everyday transactions, giving your business instant access and effortless money management.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-57.png',
                width: 351,
                height: 233,
                alt: 'Pricing section image',
                priority: true,
            },
            isPromoted: false,
            links: [
                {
                    label: 'Get started',
                    icon: '',
                    description: 'Learn more about our pricing',
                    url: '/business/accounts/standard',
                    variant: 'secondary',
                },
                {
                    label: 'Learn more',
                    description: 'Learn more about our pricing',
                    icon: 'ArrowRight',
                    url: '/business/accounts/standard',
                    variant: 'link',
                },
            ],
            featureListTitle: 'What’s included:',
            featureList: [
                {
                    title: 'Instant account opening with no paperwork.',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
                {
                    title: '24/7 in-app support from banking experts',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
            ],
        },
        {
            title: 'Growth',
            description:
                'Designed for expanding companies, this account offers advanced tools, seamless integrations, and dedicated support to drive your business forward.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-58.png',
                width: 351,
                height: 233,
                alt: 'Pricing section image',
                priority: true,
            },
            links: [
                {
                    label: 'Get started',
                    icon: '',
                    description: 'Learn more about our pricing',
                    url: '/business/accounts/growth',
                    variant: 'primary',
                },
                {
                    label: 'Learn more',
                    description: 'Learn more about our pricing',
                    icon: 'ArrowRight',
                    url: '/business/accounts/growth',
                    variant: 'link',
                },
            ],
            isPromoted: true,
            tags: [
                {
                    label: 'RECOMMENDED',
                    variant: 'default',
                },
            ],
            featureListTitle: 'Everything in Standard, plus:',
            featureList: [
                {
                    title: 'Advanced business tools for seamless operations',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
                {
                    title: 'Seamless integration with your business tools',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
                {
                    title: 'Dedicated business support to help you grow',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
            ],
        },
    ],
};

const MOCK_PRICING_SECTION_BLOCK_50_DE: CMS.Model.PricingSectionBlock.PricingSectionBlock = {
    id: 'pricing-section-50',
    title: 'Konten',
    description:
        'Wählen Sie das richtige Konto für Ihre Bedürfnisse und genießen Sie jeden Tag einfaches, sicheres Banking.',
    headingType: 'h1',
    pricingList: [
        {
            title: 'Standard',
            description:
                'Eine flexible Lösung für alltägliche Transaktionen, die Ihrem Unternehmen sofortigen Zugang und mühelose Geldverwaltung bietet.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-57.png',
                width: 351,
                height: 233,
                alt: 'Pricing section image',
                priority: true,
            },
            isPromoted: false,
            links: [
                {
                    label: 'Loslegen',
                    icon: '',
                    description: 'Erfahren Sie mehr über unsere Preise',
                    url: '/geschaftlich/konten/standard',
                    variant: 'secondary',
                },
                {
                    label: 'Erfahren Sie mehr',
                    description: 'Erfahren Sie mehr über unsere Preise',
                    icon: 'ArrowRight',
                    url: '/geschaftlich/konten/standard',
                    variant: 'link',
                },
            ],
            featureListTitle: 'Was ist enthalten:',
            featureList: [
                {
                    title: 'Sofortige Kontoeröffnung ohne Papierkram.',
                    description:
                        'Beschreiben Sie kurz, wie diese Funktion ein spezifisches Benutzerproblem löst. Konzentrieren Sie sich auf die Vorteile, nicht auf technische Details.',
                    icon: 'Check',
                },
                {
                    title: '24/7 In-App-Support von Bankexperten',
                    description:
                        'Beschreiben Sie kurz, wie diese Funktion ein spezifisches Benutzerproblem löst. Konzentrieren Sie sich auf die Vorteile, nicht auf technische Details.',
                    icon: 'Check',
                },
            ],
        },
        {
            title: 'Growth',
            description:
                'Entwickelt für expandierende Unternehmen, bietet dieses Konto erweiterte Tools, nahtlose Integrationen und dedizierten Support, um Ihr Geschäft voranzutreiben.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-58.png',
                width: 351,
                height: 233,
                alt: 'Pricing section image',
                priority: true,
            },
            links: [
                {
                    label: 'Loslegen',
                    icon: '',
                    description: 'Erfahren Sie mehr über unsere Preise',
                    url: '/geschaftlich/konten/growth',
                    variant: 'primary',
                },
                {
                    label: 'Erfahren Sie mehr',
                    description: 'Erfahren Sie mehr über unsere Preise',
                    icon: 'ArrowRight',
                    url: '/geschaftlich/konten/growth',
                    variant: 'link',
                },
            ],
            isPromoted: true,
            tags: [
                {
                    label: 'RECOMMENDED',
                    variant: 'default',
                },
            ],
            featureListTitle: 'Alles im Standard, plus:',
            featureList: [
                {
                    title: 'Erweiterte Geschäftstools für nahtlose Abläufe',
                    description:
                        'Beschreiben Sie kurz, wie diese Funktion ein spezifisches Benutzerproblem löst. Konzentrieren Sie sich auf die Vorteile, nicht auf technische Details.',
                    icon: 'Check',
                },
                {
                    title: 'Nahtlose Integration mit Ihren Geschäftstools',
                    description:
                        'Beschreiben Sie kurz, wie diese Funktion ein spezifisches Benutzerproblem löst. Konzentrieren Sie sich auf die Vorteile, nicht auf technische Details.',
                    icon: 'Check',
                },
                {
                    title: 'Dedizierter Geschäftssupport, um Ihnen beim Wachstum zu helfen',
                    description:
                        'Beschreiben Sie kurz, wie diese Funktion ein spezifisches Benutzerproblem löst. Konzentrieren Sie sich auf die Vorteile, nicht auf technische Details.',
                    icon: 'Check',
                },
            ],
        },
    ],
};

const MOCK_PRICING_SECTION_BLOCK_50_PL: CMS.Model.PricingSectionBlock.PricingSectionBlock = {
    id: 'pricing-section-50',
    title: 'Konta',
    description:
        'Wybierz odpowiednie konto dla swoich potrzeb i ciesz się prostym, bezpiecznym bankowaniem każdego dnia.',
    headingType: 'h1',
    pricingList: [
        {
            title: 'Standard',
            description:
                'Elastyczne rozwiązanie do codziennych transakcji, dające Twojej firmie natychmiastowy dostęp i bezproblemowe zarządzanie pieniędzmi.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-57.png',
                width: 351,
                height: 233,
                alt: 'Pricing section image',
                priority: true,
            },
            isPromoted: false,
            links: [
                {
                    label: 'Rozpocznij',
                    icon: '',
                    description: 'Dowiedz się więcej o naszych cenach',
                    url: '/firma/konta/standard',
                    variant: 'secondary',
                },
                {
                    label: 'Dowiedz się więcej',
                    description: 'Dowiedz się więcej o naszych cenach',
                    icon: 'ArrowRight',
                    url: '/firma/konta/standard',
                    variant: 'link',
                },
            ],
            featureListTitle: 'Co jest wliczone:',
            featureList: [
                {
                    title: 'Natychmiastowe otwarcie konta bez papierkowej roboty.',
                    description:
                        'Krótko opisz, jak ta funkcja rozwiązuje konkretny problem użytkownika. Skup się na korzyściach, a nie na szczegółach technicznych.',
                    icon: 'Check',
                },
                {
                    title: '24/7 wsparcie w aplikacji od ekspertów bankowych',
                    description:
                        'Krótko opisz, jak ta funkcja rozwiązuje konkretny problem użytkownika. Skup się na korzyściach, a nie na szczegółach technicznych.',
                    icon: 'Check',
                },
            ],
        },
        {
            title: 'Growth',
            description:
                'Zaprojektowane dla rozwijających się firm, to konto oferuje zaawansowane narzędzia, bezproblemowe integracje i dedykowane wsparcie, aby napędzać rozwój Twojej firmy.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-58.png',
                width: 351,
                height: 233,
                alt: 'Pricing section image',
                priority: true,
            },
            links: [
                {
                    label: 'Rozpocznij',
                    icon: '',
                    description: 'Dowiedz się więcej o naszych cenach',
                    url: '/firma/konta/growth',
                    variant: 'primary',
                },
                {
                    label: 'Dowiedz się więcej',
                    description: 'Dowiedz się więcej o naszych cenach',
                    icon: 'ArrowRight',
                    url: '/firma/konta/growth',
                    variant: 'link',
                },
            ],
            isPromoted: true,
            tags: [
                {
                    label: 'RECOMMENDED',
                    variant: 'default',
                },
            ],
            featureListTitle: 'Wszystko w Standardzie, plus:',
            featureList: [
                {
                    title: 'Zaawansowane narzędzia biznesowe do bezproblemowych operacji',
                    description:
                        'Krótko opisz, jak ta funkcja rozwiązuje konkretny problem użytkownika. Skup się na korzyściach, a nie na szczegółach technicznych.',
                    icon: 'Check',
                },
                {
                    title: 'Bezproblemowa integracja z narzędziami biznesowymi',
                    description:
                        'Krótko opisz, jak ta funkcja rozwiązuje konkretny problem użytkownika. Skup się na korzyściach, a nie na szczegółach technicznych.',
                    icon: 'Check',
                },
                {
                    title: 'Dedykowane wsparcie biznesowe, aby pomóc Ci się rozwijać',
                    description:
                        'Krótko opisz, jak ta funkcja rozwiązuje konkretny problem użytkownika. Skup się na korzyściach, a nie na szczegółach technicznych.',
                    icon: 'Check',
                },
            ],
        },
    ],
};

const MOCK_PRICING_SECTION_BLOCK_51_EN: CMS.Model.PricingSectionBlock.PricingSectionBlock = {
    id: 'pricing-section-51',
    title: 'Cards',
    description: 'Choose the right card for your needs and enjoy simple, secure banking every day.',
    headingType: 'h1',
    pricingList: [
        {
            title: 'Business Debit',
            description: 'A convenient, secure way to handle everyday business expenses and manage payments worldwide.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-65.png',
                width: 351,
                height: 233,
                alt: 'Pricing section image',
                priority: true,
            },
            isPromoted: false,
            links: [
                {
                    label: 'Get started',
                    icon: '',
                    description: 'Learn more about our pricing',
                    url: '/business/cards/business-debit',
                    variant: 'secondary',
                },
                {
                    label: 'Learn more',
                    description: 'Learn more about our pricing',
                    icon: 'ArrowRight',
                    url: '/business/cards/business-debit',
                    variant: 'link',
                },
            ],
            featureListTitle: "What's included:",
            featureList: [
                {
                    title: 'Global acceptance: Accepted worldwide for purchases and withdrawals.',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
                {
                    title: 'No annual fees: Enjoy a card that doesn’t cost you anything.',
                    description:
                        'Shortly describe how this feature solves a specific user problem. Focus on benefits not on technical details.',
                    icon: 'Check',
                },
            ],
        },
        {
            title: 'Business Expense',
            description:
                'Empower your team with controlled spending limits and real-time tracking for company purchases.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-66.png',
                width: 351,
                height: 233,
                alt: 'Pricing section image',
                priority: true,
            },
            links: [
                {
                    label: 'Get started',
                    icon: '',
                    description: 'Learn more about our pricing',
                    url: '/business/cards/business-expense',
                    variant: 'primary',
                },
                {
                    label: 'Learn more',
                    description: 'Learn more about our pricing',
                    icon: 'ArrowRight',
                    url: '/business/cards/business-expense',
                    variant: 'link',
                },
            ],
            isPromoted: true,
            tags: [
                {
                    label: 'RECOMMENDED',
                    variant: 'default',
                },
            ],
            featureListTitle: 'Everything in Standard, plus:',
            featureList: [
                {
                    title: 'Advanced business tools for seamless operations',
                    description: 'Automated savings tools to help you reach your goals',
                    icon: 'Check',
                },
                {
                    title: 'Seamless integration with your business tools',
                    description: 'Real-time spending alerts to stay on top of your budget',
                    icon: 'Check',
                },
                {
                    title: 'Dedicated business support to help you grow',
                    description: 'Team spending management with shared cards and budgets',
                    icon: 'Check',
                },
            ],
        },
    ],
};

const MOCK_PRICING_SECTION_BLOCK_51_DE: CMS.Model.PricingSectionBlock.PricingSectionBlock = {
    id: 'pricing-section-51',
    title: 'Karten',
    description:
        'Wählen Sie die richtige Karte für Ihre Bedürfnisse und genießen Sie jeden Tag einfaches, sicheres Banking.',
    headingType: 'h1',
    pricingList: [
        {
            title: 'Business Debit',
            description:
                'Eine bequeme, sichere Möglichkeit, alltägliche Geschäftsausgaben zu verwalten und Zahlungen weltweit zu tätigen.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-65.png',
                width: 351,
                height: 233,
                alt: 'Pricing section image',
                priority: true,
            },
            isPromoted: false,
            links: [
                {
                    label: 'Loslegen',
                    icon: '',
                    description: 'Erfahren Sie mehr über unsere Preise',
                    url: '/geschaftlich/karten/business-debit',
                    variant: 'secondary',
                },
                {
                    label: 'Erfahren Sie mehr',
                    description: 'Erfahren Sie mehr über unsere Preise',
                    icon: 'ArrowRight',
                    url: '/geschaftlich/karten/business-debit',
                    variant: 'link',
                },
            ],
            featureListTitle: 'Was ist enthalten:',
            featureList: [
                {
                    title: 'Globale Akzeptanz: Weltweit für Einkäufe und Abhebungen akzeptiert.',
                    description:
                        'Beschreiben Sie kurz, wie diese Funktion ein spezifisches Benutzerproblem löst. Konzentrieren Sie sich auf die Vorteile, nicht auf technische Details.',
                    icon: 'Check',
                },
                {
                    title: 'Keine Jahresgebühren: Genießen Sie eine Karte, die Sie nichts kostet.',
                    description:
                        'Beschreiben Sie kurz, wie diese Funktion ein spezifisches Benutzerproblem löst. Konzentrieren Sie sich auf die Vorteile, nicht auf technische Details.',
                    icon: 'Check',
                },
            ],
        },
        {
            title: 'Business Expense',
            description:
                'Ermöglichen Sie Ihrem Team kontrollierte Ausgabenlimits und Echtzeit-Tracking für Unternehmenskäufe.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-66.png',
                width: 351,
                height: 233,
                alt: 'Pricing section image',
                priority: true,
            },
            links: [
                {
                    label: 'Loslegen',
                    icon: '',
                    description: 'Erfahren Sie mehr über unsere Preise',
                    url: '/geschaftlich/karten/business-expense',
                    variant: 'primary',
                },
                {
                    label: 'Erfahren Sie mehr',
                    description: 'Erfahren Sie mehr über unsere Preise',
                    icon: 'ArrowRight',
                    url: '/geschaftlich/karten/business-expense',
                    variant: 'link',
                },
            ],
            isPromoted: true,
            tags: [
                {
                    label: 'RECOMMENDED',
                    variant: 'default',
                },
            ],
            featureListTitle: 'Alles im Standard, plus:',
            featureList: [
                {
                    title: 'Erweiterte Geschäftstools für nahtlose Abläufe',
                    description: 'Automatisierte Sparwerkzeuge, um Ihre Ziele zu erreichen',
                    icon: 'Check',
                },
                {
                    title: 'Nahtlose Integration mit Ihren Geschäftstools',
                    description: 'Echtzeit-Ausgabenbenachrichtigungen, um Ihr Budget im Blick zu behalten',
                    icon: 'Check',
                },
                {
                    title: 'Dedizierter Geschäftssupport, um Ihnen beim Wachstum zu helfen',
                    description: 'Verwaltung der Teamausgaben mit gemeinsamen Karten und Budgets',
                    icon: 'Check',
                },
            ],
        },
    ],
};

const MOCK_PRICING_SECTION_BLOCK_51_PL: CMS.Model.PricingSectionBlock.PricingSectionBlock = {
    id: 'pricing-section-51',
    title: 'Karty',
    description:
        'Wybierz odpowiednią kartę dla swoich potrzeb i ciesz się prostym, bezpiecznym bankowaniem każdego dnia.',
    headingType: 'h1',
    pricingList: [
        {
            title: 'Debet biznesowy',
            description:
                'Wygodny, bezpieczny sposób na codzienne wydatki firmowe i zarządzanie płatnościami na całym świecie.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-65.png',
                width: 351,
                height: 233,
                alt: 'Pricing section image',
                priority: true,
            },
            isPromoted: false,
            links: [
                {
                    label: 'Rozpocznij',
                    icon: '',
                    description: 'Dowiedz się więcej o naszych cenach',
                    url: '/firma/karty/business-debit',
                    variant: 'secondary',
                },
                {
                    label: 'Dowiedz się więcej',
                    description: 'Dowiedz się więcej o naszych cenach',
                    icon: 'ArrowRight',
                    url: '/firma/karty/business-debit',
                    variant: 'link',
                },
            ],
            featureListTitle: 'Co jest wliczone:',
            featureList: [
                {
                    title: 'Globalna akceptacja: Akceptowane na całym świecie do zakupów i wypłat.',
                    description:
                        'Krótko opisz, jak ta funkcja rozwiązuje konkretny problem użytkownika. Skup się na korzyściach, a nie na szczegółach technicznych.',
                    icon: 'Check',
                },
                {
                    title: 'Brak opłat rocznych: Ciesz się kartą, która nic Cię nie kosztuje.',
                    description:
                        'Krótko opisz, jak ta funkcja rozwiązuje konkretny problem użytkownika. Skup się na korzyściach, a nie na szczegółach technicznych.',
                    icon: 'Check',
                },
            ],
        },
        {
            title: 'Wydatki biznesowe',
            description:
                'Daj swojemu zespołowi kontrolowane limity wydatków i śledzenie w czasie rzeczywistym zakupów firmowych.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-66.png',
                width: 351,
                height: 233,
                alt: 'Pricing section image',
                priority: true,
            },
            links: [
                {
                    label: 'Rozpocznij',
                    icon: '',
                    description: 'Dowiedz się więcej o naszych cenach',
                    url: '/firma/karty/business-expense',
                    variant: 'primary',
                },
                {
                    label: 'Dowiedz się więcej',
                    description: 'Dowiedz się więcej o naszych cenach',
                    icon: 'ArrowRight',
                    url: '/firma/karty/business-expense',
                    variant: 'link',
                },
            ],
            isPromoted: true,
            tags: [
                {
                    label: 'RECOMMENDED',
                    variant: 'default',
                },
            ],
            featureListTitle: 'Wszystko w Standardzie, plus:',
            featureList: [
                {
                    title: 'Zaawansowane narzędzia biznesowe do bezproblemowych operacji',
                    description: 'Zautomatyzowane narzędzia oszczędnościowe, aby pomóc Ci osiągnąć cele',
                    icon: 'Check',
                },
                {
                    title: 'Bezproblemowa integracja z narzędziami biznesowymi',
                    description: 'Powiadomienia o wydatkach w czasie rzeczywistym, aby mieć kontrolę nad budżetem',
                    icon: 'Check',
                },
                {
                    title: 'Dedykowane wsparcie biznesowe, aby pomóc Ci się rozwijać',
                    description: 'Zarządzanie wydatkami zespołu z kartami i budżetami współdzielonymi',
                    icon: 'Check',
                },
            ],
        },
    ],
};

const MOCK_PRICING_SECTION_BLOCKS_EN = [
    MOCK_PRICING_SECTION_BLOCK_1_EN,
    MOCK_PRICING_SECTION_BLOCK_2_EN,
    MOCK_PRICING_SECTION_BLOCK_3_EN,
    MOCK_PRICING_SECTION_BLOCK_50_EN,
    MOCK_PRICING_SECTION_BLOCK_51_EN,
];
const MOCK_PRICING_SECTION_BLOCKS_DE = [
    MOCK_PRICING_SECTION_BLOCK_1_DE,
    MOCK_PRICING_SECTION_BLOCK_2_DE,
    MOCK_PRICING_SECTION_BLOCK_3_DE,
    MOCK_PRICING_SECTION_BLOCK_50_DE,
    MOCK_PRICING_SECTION_BLOCK_51_DE,
];
const MOCK_PRICING_SECTION_BLOCKS_PL = [
    MOCK_PRICING_SECTION_BLOCK_1_PL,
    MOCK_PRICING_SECTION_BLOCK_2_PL,
    MOCK_PRICING_SECTION_BLOCK_3_PL,
    MOCK_PRICING_SECTION_BLOCK_50_PL,
    MOCK_PRICING_SECTION_BLOCK_51_PL,
];

export const mapPricingSectionBlock = ({
    locale,
    id,
}: CMS.Request.GetCmsEntryParams): CMS.Model.PricingSectionBlock.PricingSectionBlock => {
    switch (locale) {
        case 'de':
            return MOCK_PRICING_SECTION_BLOCKS_DE.find((block) => block.id === id)!;
        case 'pl':
            return MOCK_PRICING_SECTION_BLOCKS_PL.find((block) => block.id === id)!;
        case 'en':
            return MOCK_PRICING_SECTION_BLOCKS_EN.find((block) => block.id === id)!;
        default:
            throw new NotFoundException();
    }
};

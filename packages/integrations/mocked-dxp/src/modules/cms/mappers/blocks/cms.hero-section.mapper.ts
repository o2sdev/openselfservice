import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

const MOCK_HERO_SECTION_BLOCK_1_EN: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-1',
    title: 'Your Money, Your Way.',
    description: 'Modern banking that adapts to your lifestyle  — anytime, anywhere.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-1.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Sign up',
            icon: 'ArrowRight',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_HERO_SECTION_BLOCK_1_DE: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-1',
    title: 'Ihr Geld, Ihre Art.',
    description: 'Modernes Banking, das Ihrem Leben entspricht — jederzeit, überall.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-1.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: false,
    },
    links: [
        {
            label: 'Registrieren',
            icon: 'ArrowRight',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_HERO_SECTION_BLOCK_1_PL: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-1',
    title: 'Twoje pieniądze, Twoja droga.',
    description:
        'Nowoczesne bankowanie, które dostosowuje się do Twojego stylu życia — w każdej chwili, w każdym miejscu.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-1.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: false,
    },
    links: [
        {
            label: 'Zarejestruj się',
            icon: 'ArrowRight',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_HERO_SECTION_BLOCK_2_EN: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-2',
    title: 'Everyday account',
    description: 'Simplify your daily banking with an account designed for convenience, control, and peace of mind.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-2.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Create an account',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Learn more',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_HERO_SECTION_BLOCK_2_DE: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-2',
    title: 'Tageskonto',
    description:
        'Vereinfachen Sie Ihr tägliches Bankwesen mit einem Konto, das für Bequemlichkeit, Kontrolle und Ruhe sorgt.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-2.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: false,
    },
    links: [
        {
            label: 'Konto erstellen',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Mehr erfahren',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_HERO_SECTION_BLOCK_2_PL: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-2',
    title: 'Konto codzienne',
    description: 'Zarządzaj swoimi codziennymi finansami z kontem, które zapewnia wygodę, kontrolę i spokój umysłu.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-2.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: false,
    },
    links: [
        {
            label: 'Utwórz konto',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Dowiedz się więcej',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_HERO_SECTION_BLOCK_3_EN: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-3',
    title: 'Savings account',
    description: 'Simplify your daily banking with an account designed for convenience, control, and peace of mind.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-72.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Create an account',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Learn more',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_HERO_SECTION_BLOCK_3_DE: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-3',
    title: 'Sparbuch',
    description:
        'Vereinfachen Sie Ihr tägliches Bankwesen mit einem Konto, das für Bequemlichkeit, Kontrolle und Ruhe sorgt.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-72.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: false,
    },
    links: [
        {
            label: 'Konto erstellen',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Mehr erfahren',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_HERO_SECTION_BLOCK_3_PL: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-3',
    title: 'Konto oszczędnościowe',
    description: 'Zarządzaj swoimi oszczędnościami z kontem, które zapewnia wygodę, kontrolę i spokój umysłu.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-72.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: false,
    },
    links: [
        {
            label: 'Utwórz konto',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Dowiedz się więcej',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_HERO_SECTION_BLOCK_4_EN: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-4',
    title: 'Debit Card',
    description: 'A flexible card for daily banking, designed to managing your money effortless.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-16.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Get a card',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Learn more',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_HERO_SECTION_BLOCK_4_DE: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-4',
    title: 'Debit-Karte',
    description: 'Eine flexible Karte für das tägliche Banking, entwickelt, um Ihr Geld mühelos zu verwalten.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-16.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: false,
    },
    links: [
        {
            label: 'Karte bekommen',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Erfahren Sie mehr',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_HERO_SECTION_BLOCK_4_PL: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-4',
    title: 'Karta debetowa',
    description: 'Karta do codziennego bankowania, zaprojektowana tak, aby zarządzanie pieniędzmi było bezwysiłkowe.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-16.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: false,
    },
    links: [
        {
            label: 'Zamów kartę',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Dowiedz się więcej',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_HERO_SECTION_BLOCK_5_EN: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-5',
    title: 'Credit Card',
    description: 'Grow your wealth with a card built for easy saving and smart financial planning',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-17.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Get a card',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Learn more',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_HERO_SECTION_BLOCK_5_DE: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-5',
    title: 'Kreditkarte',
    description:
        'Vermehren Sie Ihr Vermögen mit einer Karte, die für einfaches Sparen und intelligente Finanzplanung entwickelt wurde',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-17.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: false,
    },
    links: [
        {
            label: 'Karte bekommen',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Erfahren Sie mehr',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_HERO_SECTION_BLOCK_5_PL: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-5',
    title: 'Karta kredytowa',
    description:
        'Pomnażaj swoje bogactwo dzięki karcie stworzonej do łatwego oszczędzania i inteligentnego planowania finansowego',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-17.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: false,
    },
    links: [
        {
            label: 'Zamów kartę',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Dowiedz się więcej',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_HERO_SECTION_BLOCK_6_EN: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-6',
    title: 'Travel insurance',
    description: 'Simplify your daily banking with an account designed for convenience, control, and peace of mind.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-22.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Get a insurance',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Learn more',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_HERO_SECTION_BLOCK_6_DE: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-6',
    title: 'Reiseversicherung',
    description:
        'Vereinfachen Sie Ihr tägliches Banking mit einem Konto, das für Bequemlichkeit, Kontrolle und Seelenfrieden entwickelt wurde.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-22.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Versicherung abschließen',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Erfahren Sie mehr',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_HERO_SECTION_BLOCK_6_PL: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-6',
    title: 'Ubezpieczenie podróżne',
    description:
        'Uprość swoje codzienne bankowanie dzięki kontu zaprojektowanemu dla wygody, kontroli i spokoju ducha.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-22.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Zdobądź ubezpieczenie',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Dowiedz się więcej',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_HERO_SECTION_BLOCK_7_EN: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-7',
    title: 'Home insurance',
    description: 'Simplify your daily banking with an account designed for convenience, control, and peace of mind.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-22.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Get a insurance',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Learn more',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_HERO_SECTION_BLOCK_7_DE: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-7',
    title: 'Hausversicherung',
    description:
        'Vereinfachen Sie Ihr tägliches Banking mit einem Konto, das für Bequemlichkeit, Kontrolle und Seelenfrieden entwickelt wurde.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-22.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Versicherung abschließen',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Erfahren Sie mehr',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_HERO_SECTION_BLOCK_7_PL: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-7',
    title: 'Ubezpieczenie domu',
    description:
        'Uprość swoje codzienne bankowanie dzięki kontu zaprojektowanemu dla wygody, kontroli i spokoju ducha.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-22.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Zdobądź ubezpieczenie',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Dowiedz się więcej',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_HERO_SECTION_BLOCK_50_EN: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-50',
    title: 'Business Banking, Reimagined.',
    description: 'Manage your finances with speed, flexibility, and total security—wherever work takes you.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-50.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Sign up',
            icon: 'ArrowRight',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_HERO_SECTION_BLOCK_50_DE: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-50',
    title: 'Geschäftsbanking, Neu gedacht.',
    description:
        'Verwalten Sie Ihre Finanzen mit Geschwindigkeit, Flexibilität und absoluter Sicherheit – egal, wohin die Arbeit Sie führt.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-50.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Anmelden',
            icon: 'ArrowRight',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_HERO_SECTION_BLOCK_50_PL: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-50',
    title: 'Bankowość biznesowa, Na nowo.',
    description:
        'Zarządzaj swoimi finansami z szybkością, elastycznością i pełnym bezpieczeństwem – gdziekolwiek praca Cię zaprowadzi.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-50.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Zarejestruj się',
            icon: 'ArrowRight',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_HERO_SECTION_BLOCK_51_EN: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-51',
    title: 'Standard account',
    description:
        'A flexible solution for everyday transactions, giving your business instant access and effortless money management.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-60.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Create an account',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Learn more',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_HERO_SECTION_BLOCK_51_DE: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-51',
    title: 'Standardkonto',
    description:
        'Eine flexible Lösung für alltägliche Transaktionen, die Ihrem Unternehmen sofortigen Zugang und mühelose Geldverwaltung bietet.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-60.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Konto erstellen',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Erfahren Sie mehr',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_HERO_SECTION_BLOCK_51_PL: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-51',
    title: 'Konto standardowe',
    description:
        'Elastyczne rozwiązanie do codziennych transakcji, dające Twojej firmie natychmiastowy dostęp i bezproblemowe zarządzanie pieniędzmi.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-60.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Utwórz konto',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Dowiedz się więcej',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_HERO_SECTION_BLOCK_52_EN: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-52',
    title: 'Growth account',
    description: 'Simplify your daily banking with an account designed for convenience, control, and peace of mind.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-63.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Create an account',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Learn more',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_HERO_SECTION_BLOCK_52_DE: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-52',
    title: 'Wachstumskonto',
    description:
        'Vereinfachen Sie Ihr tägliches Banking mit einem Konto, das für Bequemlichkeit, Kontrolle und Seelenfrieden entwickelt wurde.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-63.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Konto erstellen',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Erfahren Sie mehr',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_HERO_SECTION_BLOCK_52_PL: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-52',
    title: 'Konto wzrostowe',
    description:
        'Uprość swoje codzienne bankowanie dzięki kontu zaprojektowanemu dla wygody, kontroli i spokoju ducha.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-63.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Utwórz konto',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Dowiedz się więcej',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_HERO_SECTION_BLOCK_53_EN: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-53',
    title: 'Business Debit',
    description: 'A convenient, secure way to handle everyday business expenses and manage payments worldwide.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-69.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Get a card',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Learn more',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_HERO_SECTION_BLOCK_53_DE: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-53',
    title: 'Business Debit Karte',
    description:
        'Eine bequeme, sichere Möglichkeit, alltägliche Geschäftsausgaben zu verwalten und Zahlungen weltweit zu tätigen.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-69.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Karte erhalten',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Erfahren Sie mehr',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_HERO_SECTION_BLOCK_53_PL: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-53',
    title: 'Karta biznesowa',
    description: 'Wygodny, bezpieczny sposób na codzienne wydatki firmowe i zarządzanie płatnościami na całym świecie.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-69.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Zdobądź kartę',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Dowiedz się więcej',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_HERO_SECTION_BLOCK_54_EN: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-54',
    title: 'Business Expense',
    description: 'Simplify your daily banking with an account designed for convenience, control, and peace of mind.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-71.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Get a card',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Learn more',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_HERO_SECTION_BLOCK_54_DE: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-54',
    title: 'Business Expense Karte',
    description:
        'Vereinfachen Sie Ihr tägliches Banking mit einem Konto, das für Bequemlichkeit, Kontrolle und Seelenfrieden entwickelt wurde.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-71.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Karte erhalten',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Erfahren Sie mehr',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_HERO_SECTION_BLOCK_54_PL: CMS.Model.HeroSectionBlock.HeroSectionBlock = {
    id: 'hero-section-54',
    title: 'Karta Business Expense',
    description:
        'Uprość swoje codzienne bankowanie dzięki kontu zaprojektowanemu dla wygody, kontroli i spokoju ducha.',
    inverted: false,
    headingType: 'h1',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-71.png',
        width: 560,
        height: 560,
        alt: 'Hero Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Zdobądź kartę',
            url: '/',
            variant: 'primary',
        },
        {
            label: 'Dowiedz się więcej',
            icon: 'ArrowRight',
            url: '/',
            variant: 'link',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const HERO_SECTION_BLOCKS_EN = [
    MOCK_HERO_SECTION_BLOCK_1_EN,
    MOCK_HERO_SECTION_BLOCK_2_EN,
    MOCK_HERO_SECTION_BLOCK_3_EN,
    MOCK_HERO_SECTION_BLOCK_4_EN,
    MOCK_HERO_SECTION_BLOCK_5_EN,
    MOCK_HERO_SECTION_BLOCK_6_EN,
    MOCK_HERO_SECTION_BLOCK_7_EN,
    MOCK_HERO_SECTION_BLOCK_50_EN,
    MOCK_HERO_SECTION_BLOCK_51_EN,
    MOCK_HERO_SECTION_BLOCK_52_EN,
    MOCK_HERO_SECTION_BLOCK_53_EN,
    MOCK_HERO_SECTION_BLOCK_54_EN,
];
const HERO_SECTION_BLOCKS_DE = [
    MOCK_HERO_SECTION_BLOCK_1_DE,
    MOCK_HERO_SECTION_BLOCK_2_DE,
    MOCK_HERO_SECTION_BLOCK_3_DE,
    MOCK_HERO_SECTION_BLOCK_4_DE,
    MOCK_HERO_SECTION_BLOCK_5_DE,
    MOCK_HERO_SECTION_BLOCK_6_DE,
    MOCK_HERO_SECTION_BLOCK_7_DE,
    MOCK_HERO_SECTION_BLOCK_50_DE,
    MOCK_HERO_SECTION_BLOCK_51_DE,
    MOCK_HERO_SECTION_BLOCK_52_DE,
    MOCK_HERO_SECTION_BLOCK_53_DE,
    MOCK_HERO_SECTION_BLOCK_54_DE,
];
const HERO_SECTION_BLOCKS_PL = [
    MOCK_HERO_SECTION_BLOCK_1_PL,
    MOCK_HERO_SECTION_BLOCK_2_PL,
    MOCK_HERO_SECTION_BLOCK_3_PL,
    MOCK_HERO_SECTION_BLOCK_4_PL,
    MOCK_HERO_SECTION_BLOCK_5_PL,
    MOCK_HERO_SECTION_BLOCK_6_PL,
    MOCK_HERO_SECTION_BLOCK_7_PL,
    MOCK_HERO_SECTION_BLOCK_50_PL,
    MOCK_HERO_SECTION_BLOCK_51_PL,
    MOCK_HERO_SECTION_BLOCK_52_PL,
    MOCK_HERO_SECTION_BLOCK_53_PL,
    MOCK_HERO_SECTION_BLOCK_54_PL,
];

export const mapHeroSectionBlock = ({
    locale,
    id,
}: CMS.Request.GetCmsEntryParams): CMS.Model.HeroSectionBlock.HeroSectionBlock => {
    switch (locale) {
        case 'de':
            return HERO_SECTION_BLOCKS_DE.find((block) => block.id === id)!;
        case 'pl':
            return HERO_SECTION_BLOCKS_PL.find((block) => block.id === id)!;
        case 'en':
            return HERO_SECTION_BLOCKS_EN.find((block) => block.id === id)!;
        default:
            throw new NotFoundException();
    }
};

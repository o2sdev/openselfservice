import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

const MOCK_FEATURE_SECTION_BLOCK_1_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-1',
    title: 'Effortless Everyday Banking',
    description: 'Enjoy seamless access to the essential banking features you need, exactly when you need them.',
    featureList: [
        {
            title: 'Instant Account Opening.',
            description: 'No paperwork required.',
            icon: 'Check',
        },
        {
            title: 'Personalized Budgeting.',
            description: 'Create and track budgets tailored to your lifestyle.',
            icon: 'Check',
        },
        {
            title: 'Automated Savings Tools.',
            description: 'Round up purchases to grow your savings.',
            icon: 'Check',
        },
    ],
    inverted: false,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-3.png',
        width: 560,
        height: 560,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Sign up',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_1_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-1',
    title: 'Müheloses tägliches Banking',
    description:
        'Genießen Sie nahtlosen Zugriff auf die wesentlichen Bankfunktionen, die Sie genau dann benötigen, wenn Sie sie brauchen.',
    featureList: [
        {
            title: 'Sofortige Kontoeröffnung.',
            description: 'Keine Papierarbeit erforderlich.',
            icon: 'Check',
        },
        {
            title: 'Personalisierte Budgetierung.',
            description: 'Erstellen und verfolgen Sie Budgets, die auf Ihren Lebensstil zugeschnitten sind.',
            icon: 'Check',
        },
        {
            title: 'Automatisierte Sparwerkzeuge.',
            description: 'Runden Sie Einkäufe auf, um Ihre Ersparnisse zu steigern.',
            icon: 'Check',
        },
    ],
    inverted: false,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-3.png',
        width: 560,
        height: 560,
        alt: 'Feature Section Image',
        priority: false,
    },
    links: [
        {
            label: 'Konto öffnen',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_1_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-1',
    title: 'Bezproblemowe codzienne bankowanie',
    description:
        'Ciesz się płynnym dostępem do niezbędnych funkcji bankowych, których potrzebujesz dokładnie wtedy, gdy ich potrzebujesz.',
    featureList: [
        {
            title: 'Natychmiastowe otwarcie konta.',
            description: 'Bez wymogu papierkowej roboty.',
            icon: 'Check',
        },
        {
            title: 'Spersonalizowane budżetowanie.',
            description: 'Twórz i śledź budżety dostosowane do Twojego stylu życia.',
            icon: 'Check',
        },
        {
            title: 'Zautomatyzowane narzędzia oszczędnościowe.',
            description: 'Zaokrąglaj zakupy, aby zwiększyć swoje oszczędności.',
            icon: 'Check',
        },
    ],
    inverted: false,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-3.png',
        width: 560,
        height: 560,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Otwórz konto',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_2_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-2',
    title: 'Next-Gen Security & Flexibility',
    description:
        'Secure access with biometric login, instantly lock or unlock your card if it’s lost or stolen, and fee-free payments worldwide.',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-4.png',
        width: 560,
        height: 560,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
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

const MOCK_FEATURE_SECTION_BLOCK_2_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-2',
    title: 'Sicherheit & Flexibilität der nächsten Generation',
    description:
        'Sicherer Zugang mit biometrischem Login, sofortiges Sperren oder Entsperren Ihrer Karte, wenn sie verloren geht oder gestohlen wird, und gebührenfreie Zahlungen weltweit.',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-4.png',
        width: 560,
        height: 560,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
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

const MOCK_FEATURE_SECTION_BLOCK_2_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-2',
    title: 'Bezpieczeństwo i elastyczność nowej generacji',
    description:
        'Bezpieczny dostęp z logowaniem biometrycznym, natychmiastowe blokowanie lub odblokowywanie karty, jeśli zostanie zgubiona lub skradziona, oraz bezpłatne płatności na całym świecie.',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-4.png',
        width: 560,
        height: 560,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
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

const MOCK_FEATURE_SECTION_BLOCK_3_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-3',
    iconBorder: true,
    featureList: [
        {
            title: 'Seamless digital access anytime, anywhere.',
            icon: 'Wifi',
        },
        {
            title: 'Advanced security features for peace of mind',
            icon: 'LockKeyhole',
        },
        {
            title: 'Effortless money management with smart tools',
            icon: 'BarChart',
        },
        {
            title: 'Dedicated support whenever you need it',
            icon: 'HandHelping',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_3_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-3',
    iconBorder: true,
    featureList: [
        {
            title: 'Nahtloser digitaler Zugang jederzeit und überall.',
            icon: 'Wifi',
        },
        {
            title: 'Erweiterte Sicherheitsfunktionen für ein beruhigendes Gefühl',
            icon: 'LockKeyhole',
        },
        {
            title: 'Mühelose Geldverwaltung mit intelligenten Tools',
            icon: 'BarChart',
        },
        {
            title: 'Engagierter Support, wann immer Sie ihn brauchen',
            icon: 'HandHelping',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_3_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-3',
    iconBorder: true,
    featureList: [
        {
            title: 'Bezproblemowy dostęp cyfrowy o każdej porze i w każdym miejscu.',
            icon: 'Wifi',
        },
        {
            title: 'Zaawansowane funkcje bezpieczeństwa dla spokoju ducha',
            icon: 'LockKeyhole',
        },
        {
            title: 'Bezproblemowe zarządzanie pieniędzmi za pomocą inteligentnych narzędzi',
            icon: 'BarChart',
        },
        {
            title: 'Dedykowane wsparcie, kiedy tylko go potrzebujesz',
            icon: 'HandHelping',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_4_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-4',
    iconBorder: true,
    featureList: [
        {
            title: 'Instant account setup',
            icon: 'Rocket',
        },
        {
            title: 'Real-time notifications for every transaction.',
            icon: 'Rocket',
        },
        {
            title: '24/7 access and expert support',
            icon: 'Rocket',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_4_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-4',
    iconBorder: true,
    featureList: [
        {
            title: 'Sofortige Kontoeröffnung',
            icon: 'Rocket',
        },
        {
            title: 'Echtzeitbenachrichtigungen für jede Transaktion.',
            icon: 'Rocket',
        },
        {
            title: '24/7 Zugang und Expertenunterstützung',
            icon: 'Rocket',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_4_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-4',
    iconBorder: true,
    featureList: [
        {
            title: 'Natychmiastowe zakładanie konta',
            icon: 'Rocket',
        },
        {
            title: 'Powiadomienia w czasie rzeczywistym dla każdej transakcji.',
            icon: 'Rocket',
        },
        {
            title: 'Dostęp 24/7 i wsparcie ekspertów',
            icon: 'Rocket',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_5_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-5',
    title: 'Effortless Money Management',
    description: 'Track your spending and manage your finances easily with intuitive tools.',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-12.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
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

const MOCK_FEATURE_SECTION_BLOCK_5_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-5',
    title: 'Mühelose Geldverwaltung',
    description: 'Verfolgen Sie Ihre Ausgaben und verwalten Sie Ihre Finanzen einfach mit intuitiven Tools.',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-12.png',
        width: 584,
        height: 584,
        alt: 'Bild des Funktionsabschnitts',
        priority: true,
    },
    links: [
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

const MOCK_FEATURE_SECTION_BLOCK_5_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-5',
    title: 'Bezproblemowe zarządzanie pieniędzmi',
    description: 'Śledź swoje wydatki i zarządzaj finansami łatwo dzięki intuicyjnym narzędziom.',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-12.png',
        width: 584,
        height: 584,
        alt: 'Obraz sekcji funkcji',
        priority: true,
    },
    links: [
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

const MOCK_FEATURE_SECTION_BLOCK_6_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-6',
    title: 'Smart Security',
    description: 'Rest easy with advanced protections for your money and data.',
    inverted: false,
    iconBorder: true,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-13.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    featureList: [
        {
            title: 'Biometric Login',
            description: 'Log in securely using face or fingerprint recognition.',
            icon: 'Rocket',
        },
        {
            title: 'Instant Card Freeze',
            description: 'Lock or unlock your card immediately if it’s lost or stolen.',
            icon: 'Rocket',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_6_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-6',
    title: 'Intelligente Sicherheit',
    description: 'Schlafen Sie ruhig mit fortschrittlichem Schutz für Ihr Geld und Ihre Daten.',
    inverted: false,
    iconBorder: true,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-13.png',
        width: 584,
        height: 584,
        alt: 'Bild des Funktionsabschnitts',
        priority: true,
    },
    featureList: [
        {
            title: 'Biometrische Anmeldung',
            description: 'Melden Sie sich sicher mit Gesichts- oder Fingerabdruckerkennung an.',
            icon: 'Rocket',
        },
        {
            title: 'Instant Card Freeze',
            description: 'Sperren oder entsperren Sie Ihre Karte sofort, wenn sie verloren geht oder gestohlen wird.',
            icon: 'Rocket',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_6_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-6',
    title: 'Inteligentne bezpieczeństwo',
    description: 'Śpij spokojnie dzięki zaawansowanej ochronie Twoich pieniędzy i danych.',
    inverted: false,
    iconBorder: true,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-13.png',
        width: 584,
        height: 584,
        alt: 'Obraz sekcji funkcji',
        priority: true,
    },
    featureList: [
        {
            title: 'Biometryczne logowanie',
            description: 'Zaloguj się bezpiecznie za pomocą rozpoznawania twarzy lub odcisku palca.',
            icon: 'Rocket',
        },
        {
            title: 'Natychmiastowe zawieszenie karty',
            description: 'Zawieś lub odblokuj swoją kartę natychmiastowo, jeśli zostanie zgubiona lub skradziona.',
            icon: 'Rocket',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_7_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-7',
    title: 'Easy Everyday Banking',
    description: 'Enjoy seamless access to the essential banking features you need, exactly when you need them.',
    featureList: [
        {
            title: 'Instant Account Opening.',
            description: 'No paperwork required.',
            icon: 'Check',
        },
        {
            title: 'Personalized Budgeting.',
            description: 'Create and track budgets tailored to your lifestyle.',
            icon: 'Check',
        },
        {
            title: 'Automated Savings Tools.',
            description: 'Round up purchases to grow your savings.',
            icon: 'Check',
        },
    ],
    inverted: false,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-18.png',
        width: 560,
        height: 560,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Sign up',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_7_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-7',
    title: 'Müheloses tägliches Banking',
    description:
        'Genießen Sie nahtlosen Zugriff auf die wesentlichen Bankfunktionen, die Sie genau dann benötigen, wenn Sie sie brauchen.',
    featureList: [
        {
            title: 'Sofortige Kontoeröffnung.',
            description: 'Keine Papierarbeit erforderlich.',
            icon: 'Check',
        },
        {
            title: 'Personalisierte Budgetierung.',
            description: 'Erstellen und verfolgen Sie Budgets, die auf Ihren Lebensstil zugeschnitten sind.',
            icon: 'Check',
        },
        {
            title: 'Automatisierte Sparwerkzeuge.',
            description: 'Runden Sie Einkäufe auf, um Ihre Ersparnisse zu steigern.',
            icon: 'Check',
        },
    ],
    inverted: false,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-18.png',
        width: 560,
        height: 560,
        alt: 'Feature Section Image',
        priority: false,
    },
    links: [
        {
            label: 'Konto öffnen',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_7_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-7',
    title: 'Bezproblemowe codzienne bankowanie',
    description:
        'Ciesz się płynnym dostępem do niezbędnych funkcji bankowych, których potrzebujesz dokładnie wtedy, gdy ich potrzebujesz.',
    featureList: [
        {
            title: 'Natychmiastowe otwarcie konta.',
            description: 'Bez wymogu papierkowej roboty.',
            icon: 'Check',
        },
        {
            title: 'Spersonalizowane budżetowanie.',
            description: 'Twórz i śledź budżety dostosowane do Twojego stylu życia.',
            icon: 'Check',
        },
        {
            title: 'Zautomatyzowane narzędzia oszczędnościowe.',
            description: 'Zaokrąglaj zakupy, aby zwiększyć swoje oszczędności.',
            icon: 'Check',
        },
    ],
    inverted: false,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-18.png',
        width: 560,
        height: 560,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Otwórz konto',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_8_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-8',
    title: 'Unlock more freedom and growth',
    description: 'Choose the account that fits your life and start banking smarter today.',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-11.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_8_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-8',
    title: 'Entfesseln Sie mehr Freiheit und Wachstum',
    description:
        'Wählen Sie das Konto, das zu Ihrem Leben passt, und beginnen Sie noch heute, intelligenter zu bankieren.',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-11.png',
        width: 584,
        height: 584,
        alt: 'Bild des Funktionsabschnitts',
        priority: true,
    },
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_8_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-8',
    title: 'Odkryj więcej wolności i wzrostu',
    description: 'Wybierz konto, które pasuje do Twojego życia i zacznij bankować mądrzej już dziś.',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-11.png',
        width: 584,
        height: 584,
        alt: 'Obraz sekcji funkcji',
        priority: true,
    },
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_9_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-9',
    inverted: false,
    iconBorder: true,
    featureList: [
        {
            title: 'Peace of mind with robust protection for your assets',
            icon: 'Wifi',
        },
        {
            title: 'Fast, transparent claims and dedicated support.',
            icon: 'LockKeyhole',
        },
        {
            title: 'Flexible plans tailored to your needs.',
            icon: 'BarChart',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_9_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-9',
    inverted: false,
    iconBorder: true,
    featureList: [
        {
            title: 'Seelenfrieden mit robustem Schutz für Ihre Vermögenswerte',
            icon: 'Wifi',
        },
        {
            title: 'Schnelle, transparente Schadensabwicklung und engagierter Support.',
            icon: 'LockKeyhole',
        },
        {
            title: 'Flexible Pläne, die auf Ihre Bedürfnisse zugeschnitten sind.',
            icon: 'BarChart',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_9_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-9',
    inverted: false,
    iconBorder: true,
    featureList: [
        {
            title: 'Spokój ducha dzięki solidnej ochronie Twoich aktywów',
            icon: 'Wifi',
        },
        {
            title: 'Szybkie, przejrzyste roszczenia i dedykowane wsparcie.',
            icon: 'LockKeyhole',
        },
        {
            title: 'Elastyczne plany dostosowane do Twoich potrzeb.',
            icon: 'BarChart',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_10_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-10',
    title: 'Flexible Coverage Options',
    description: 'Choose insurance plans that grow with your business and adapt to changing needs.',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-19.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    inverted: true,
    iconBorder: false,
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_10_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-10',
    title: 'Flexible Deckungsoptionen',
    description:
        'Wählen Sie Versicherungspläne, die mit Ihrem Unternehmen wachsen und sich an veränderte Bedürfnisse anpassen.',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-19.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    inverted: true,
    iconBorder: false,
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_10_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-10',
    title: 'Elastyczne opcje ubezpieczenia',
    description:
        'Wybierz plany ubezpieczeniowe, które rosną wraz z Twoją firmą i dostosowują się do zmieniających się potrzeb.',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-19.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    inverted: true,
    iconBorder: false,
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_11_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-11',
    title: 'Emergency medical assistance worldwide',
    description: 'Get fast, reliable help for any medical emergency, wherever you are in the world.',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-23.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
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

const MOCK_FEATURE_SECTION_BLOCK_11_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-11',
    title: 'Weltweite medizinische Notfallhilfe',
    description:
        'Erhalten Sie schnelle, zuverlässige Hilfe bei jedem medizinischen Notfall, egal wo Sie sich auf der Welt befinden.',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-23.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
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

const MOCK_FEATURE_SECTION_BLOCK_11_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-11',
    title: 'Światowa pomoc medyczna w nagłych wypadkach',
    description:
        'Uzyskaj szybką, niezawodną pomoc w przypadku nagłego wypadku medycznego, gdziekolwiek jesteś na świecie.',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-23.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
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

const MOCK_FEATURE_SECTION_BLOCK_12_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-12',
    title: '24/7 support during your travels',
    description: 'Access expert assistance at any time, day or night, no matter where your journey takes you.',
    inverted: false,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-24.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
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

const MOCK_FEATURE_SECTION_BLOCK_12_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-12',
    title: '24/7 Unterstützung während Ihrer Reisen',
    description: 'Erhalten Sie jederzeit, Tag und Nacht, fachkundige Unterstützung, egal wohin Ihre Reise Sie führt.',
    inverted: false,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-24.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
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

const MOCK_FEATURE_SECTION_BLOCK_12_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-12',
    title: 'Całodobowe wsparcie podczas podróży',
    description: 'Uzyskaj fachową pomoc o każdej porze, dzień i noc, bez względu na to, dokąd prowadzi Cię podróż.',
    inverted: false,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-24.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
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

const MOCK_FEATURE_SECTION_BLOCK_13_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-13',
    title: 'Protection against fire, theft, and natural disasters',
    description: 'Safeguard your property from unexpected events and losses',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-25.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
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

const MOCK_FEATURE_SECTION_BLOCK_13_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-13',
    title: 'Schutz vor Feuer, Diebstahl und Naturkatastrophen',
    description: 'Schützen Sie Ihr Eigentum vor unerwarteten Ereignissen und Verlusten',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-25.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
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

const MOCK_FEATURE_SECTION_BLOCK_13_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-13',
    title: 'Ochrona przed pożarem, kradzieżą i klęskami żywiołowymi',
    description: 'Chroń swoją własność przed nieoczekiwanymi zdarzeniami i stratami',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-25.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
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

const MOCK_FEATURE_SECTION_BLOCK_14_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-14',
    title: 'Customizable coverage for equipment and inventory.',
    description: 'Tailor your insurance to fit the unique needs of your assets.',
    inverted: false,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-27.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Sign up',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_14_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-14',
    title: 'Anpassbare Abdeckung für Ausrüstung und Inventar.',
    description: 'Passen Sie Ihre Versicherung an die einzigartigen Bedürfnisse Ihrer Vermögenswerte an.',
    inverted: false,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-27.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Anmelden',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_14_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-14',
    title: 'Dostosowywalne ubezpieczenie dla sprzętu i zapasów.',
    description: 'Dostosuj swoje ubezpieczenie do unikalnych potrzeb swoich zasobów.',
    inverted: false,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-27.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Zarejestruj się',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_50_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-50',
    title: 'Top not financial management',
    description: 'Effortless banking that adapts to your business needs, every step of the way.',
    inverted: false,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-52.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Sign up',
            url: '/',
            variant: 'primary',
        },
    ],
    featureList: [
        {
            title: 'Smart Payments & Invoicing',
            icon: 'Check',
        },
        {
            title: 'Real-Time Cash Flow Tracking',
            icon: 'Check',
        },
        {
            title: 'Multi-User Access',
            icon: 'Check',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_50_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-50',
    title: 'Top-Management der Finanzen',
    description: 'Müheloses Banking, das sich an die Bedürfnisse Ihres Unternehmens anpasst, bei jedem Schritt.',
    inverted: false,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-52.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Anmelden',
            url: '/',
            variant: 'primary',
        },
    ],
    featureList: [
        {
            title: 'Intelligente Zahlungen & Rechnungsstellung',
            icon: 'Check',
        },
        {
            title: 'Echtzeit-Cashflow-Überwachung',
            icon: 'Check',
        },
        {
            title: 'Mehrbenutzerzugriff',
            icon: 'Check',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_50_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-50',
    title: 'Najlepsze zarządzanie finansami',
    description: 'Bezproblemowe bankowość, które dostosowuje się do potrzeb Twojej firmy na każdym kroku.',
    inverted: false,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-52.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Zarejestruj się',
            url: '/',
            variant: 'primary',
        },
    ],
    featureList: [
        {
            title: 'Inteligentne płatności i fakturowanie',
            icon: 'Check',
        },
        {
            title: 'Śledzenie przepływów pieniężnych w czasie rzeczywistym',
            icon: 'Check',
        },
        {
            title: 'Dostęp dla wielu użytkowników',
            icon: 'Check',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_51_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-51',
    title: 'Unlock more freedom and growth',
    description: 'choose the account that fits your life and start banking smarter today.',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-59.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_51_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-51',
    title: 'Mehr Freiheit und Wachstum freischalten',
    description:
        'Wählen Sie das Konto, das zu Ihrem Leben passt, und beginnen Sie noch heute intelligenter zu bankieren.',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-59.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_51_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-51',
    title: 'Odblokuj więcej wolności i wzrostu',
    description: 'Wybierz konto, które pasuje do Twojego życia i zacznij bankować mądrzej już dziś.',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-59.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_52_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-52',
    title: 'Financial Management',
    description:
        'Set up your account in minutes, track cash flow in real time, and securely manage team access with role-based permissions.',
    inverted: true,
    iconBorder: true,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-61.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    featureList: [
        {
            title: 'Seamless digital access anytime, anywhere.',
            icon: 'Wifi',
        },
        {
            title: 'Advanced security features for peace of mind',
            icon: 'LockKeyhole',
        },
        {
            title: 'Effortless money management with smart tools',
            icon: 'BarChart',
        },
        {
            title: 'Dedicated support whenever you need it',
            icon: 'HandHelping',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_52_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-52',
    title: 'Finanzmanagement',
    description:
        'Richten Sie Ihr Konto in wenigen Minuten ein, verfolgen Sie den Cashflow in Echtzeit und verwalten Sie den Teamzugang sicher mit rollenbasierten Berechtigungen.',
    inverted: true,
    iconBorder: true,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-61.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    featureList: [
        {
            title: 'Nahtloser digitaler Zugang jederzeit und überall.',
            icon: 'Wifi',
        },
        {
            title: 'Erweiterte Sicherheitsfunktionen für ein beruhigendes Gefühl',
            icon: 'LockKeyhole',
        },
        {
            title: 'Mühelose Geldverwaltung mit intelligenten Tools',
            icon: 'BarChart',
        },
        {
            title: 'Engagierter Support, wann immer Sie ihn brauchen',
            icon: 'HandHelping',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_52_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-52',
    title: 'Zarządzanie finansami',
    description:
        'Skonfiguruj swoje konto w kilka minut, śledź przepływy pieniężne w czasie rzeczywistym i bezpiecznie zarządzaj dostępem zespołu dzięki uprawnieniom opartym na rolach.',
    inverted: true,
    iconBorder: true,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-61.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    featureList: [
        {
            title: 'Bezproblemowy dostęp cyfrowy w dowolnym miejscu i czasie.',
            icon: 'Wifi',
        },
        {
            title: 'Zaawansowane funkcje bezpieczeństwa dla spokoju ducha',
            icon: 'LockKeyhole',
        },
        {
            title: 'Bezproblemowe zarządzanie pieniędzmi za pomocą inteligentnych narzędzi',
            icon: 'BarChart',
        },
        {
            title: 'Dedykowane wsparcie, kiedy tylko go potrzebujesz',
            icon: 'HandHelping',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_53_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-53',
    title: 'One-Tap Payroll',
    description: 'Pay your team quickly and efficiently from one place',
    inverted: false,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-64.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
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

const MOCK_FEATURE_SECTION_BLOCK_53_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-53',
    title: 'Ein-Klick-Gehaltsabrechnung',
    description: 'Zahlen Sie Ihr Team schnell und effizient von einem Ort aus',
    inverted: false,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-64.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
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

const MOCK_FEATURE_SECTION_BLOCK_53_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-53',
    title: 'Jedno kliknięcie do listy płac',
    description: 'Płać swojemu zespołowi szybko i efektywnie z jednego miejsca',
    inverted: false,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-64.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
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

const MOCK_FEATURE_SECTION_BLOCK_54_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-54',
    title: 'Connected Digital Ecosystem',
    description: 'Link your business account with essential apps and services',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-62.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
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

const MOCK_FEATURE_SECTION_BLOCK_54_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-54',
    title: 'Vernetztes digitales Ökosystem',
    description: 'Verbinden Sie Ihr Geschäftskonto mit wichtigen Apps und Diensten',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-62.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
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

const MOCK_FEATURE_SECTION_BLOCK_54_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-54',
    title: 'Połączony ekosystem cyfrowy',
    description: 'Połącz swoje konto firmowe z niezbędnymi aplikacjami i usługami',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-62.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
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

const MOCK_FEATURE_SECTION_BLOCK_55_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-55',
    inverted: false,
    iconBorder: true,
    featureList: [
        {
            title: 'Global acceptance and fee-free transactions abroad.',
            icon: 'Wifi',
        },
        {
            title: 'Instant card management directly from your business dashboard',
            icon: 'LockKeyhole',
        },
        {
            title: 'Advanced security features, including fraud alerts',
            icon: 'BarChart',
        },
        {
            title: 'Real-time spending insights for smarter business decisions',
            icon: 'HandHelping',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_55_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-55',
    inverted: false,
    iconBorder: true,
    featureList: [
        {
            title: 'Globale Akzeptanz und gebührenfreie Transaktionen im Ausland.',
            icon: 'Wifi',
        },
        {
            title: 'Sofortige Kartenverwaltung direkt von Ihrem Geschäftsdashboard',
            icon: 'LockKeyhole',
        },
        {
            title: 'Erweiterte Sicherheitsfunktionen, einschließlich Betrugswarnungen',
            icon: 'BarChart',
        },
        {
            title: 'Echtzeit-Ausgabeneinblicke für klügere Geschäftsentscheidungen',
            icon: 'HandHelping',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_55_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-55',
    inverted: false,
    iconBorder: true,
    featureList: [
        {
            title: 'Globalna akceptacja i transakcje bez opłat za granicą.',
            icon: 'Wifi',
        },
        {
            title: 'Natychmiastowe zarządzanie kartami bezpośrednio z pulpitu nawigacyjnego firmy',
            icon: 'LockKeyhole',
        },
        {
            title: 'Zaawansowane funkcje bezpieczeństwa, w tym alerty o oszustwach',
            icon: 'BarChart',
        },
        {
            title: 'Wgląd w wydatki w czasie rzeczywistym dla mądrzejszych decyzji biznesowych',
            icon: 'HandHelping',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_56_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-56',
    title: 'Instant Control',
    description: 'Manage your business cards, set limits, and freeze or unfreeze instantly—right from your app.',
    inverted: false,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-67.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Sign up',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_56_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-56',
    title: 'Sofortige Kontrolle',
    description:
        'Verwalten Sie Ihre Geschäftskarten, setzen Sie Limits und frieren Sie sie sofort ein oder auf—direkt von Ihrer App aus.',
    inverted: false,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-67.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Anmelden',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_56_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-56',
    title: 'Natychmiastowa kontrola',
    description:
        'Zarządzaj swoimi kartami firmowymi, ustawiaj limity i zamrażaj lub odmrażaj natychmiast—bezpośrednio z aplikacji.',
    inverted: false,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-67.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Zarejestruj się',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_57_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-57',
    title: 'Smarter Expense Tracking',
    description: 'Get real-time notifications and detailed analytics to keep your business spending on track..',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-68.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
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

const MOCK_FEATURE_SECTION_BLOCK_57_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-57',
    title: 'Intelligente Ausgabenverfolgung',
    description:
        'Erhalten Sie Echtzeit-Benachrichtigungen und detaillierte Analysen, um Ihre Geschäftsausgaben im Griff zu behalten.',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-68.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
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

const MOCK_FEATURE_SECTION_BLOCK_57_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-57',
    title: 'Inteligentne śledzenie wydatków',
    description:
        'Otrzymuj powiadomienia w czasie rzeczywistym i szczegółowe analizy, aby utrzymać wydatki firmowe pod kontrolą.',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-68.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
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

const MOCK_FEATURE_SECTION_BLOCK_58_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-58',
    title: 'Global payments made easy',
    description: 'Pay for goods and services worldwide with no hidden fees and total convenience',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-70.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
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

const MOCK_FEATURE_SECTION_BLOCK_58_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-58',
    title: 'Globale Zahlungen leicht gemacht',
    description:
        'Bezahlen Sie weltweit für Waren und Dienstleistungen ohne versteckte Gebühren und mit totaler Bequemlichkeit',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-70.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
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

const MOCK_FEATURE_SECTION_BLOCK_58_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-58',
    title: 'Globalne płatności ułatwione',
    description: 'Płać za towary i usługi na całym świecie bez ukrytych opłat i z pełną wygodą',
    inverted: true,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-70.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
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

const MOCK_FEATURE_SECTION_BLOCK_59_EN: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-59',
    title: 'Instant card controls',
    description:
        'Lock, unlock, or set spending limits for your business debit card in seconds, directly from your dashboard.',
    inverted: false,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-67.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Sign up',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_59_DE: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-59',
    title: 'Sofortige Kartenkontrollen',
    description:
        'Sperren, entsperren oder setzen Sie Ausgabelimits für Ihre Geschäftskarte in Sekunden, direkt von Ihrem Dashboard aus.',
    inverted: false,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-67.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Anmelden',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_FEATURE_SECTION_BLOCK_59_PL: CMS.Model.FeatureSectionBlock.FeatureSectionBlock = {
    id: 'feature-section-59',
    title: 'Natychmiastowe kontrola kart',
    description:
        'Zablokuj, odblokuj lub ustaw limity wydatków dla swojej karty debetowej w kilka sekund, bezpośrednio z pulpitu nawigacyjnego.',
    inverted: false,
    iconBorder: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-67.png',
        width: 584,
        height: 584,
        alt: 'Feature Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Zarejestruj się',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const FEATURE_SECTION_BLOCKS_EN = [
    MOCK_FEATURE_SECTION_BLOCK_1_EN,
    MOCK_FEATURE_SECTION_BLOCK_2_EN,
    MOCK_FEATURE_SECTION_BLOCK_3_EN,
    MOCK_FEATURE_SECTION_BLOCK_4_EN,
    MOCK_FEATURE_SECTION_BLOCK_5_EN,
    MOCK_FEATURE_SECTION_BLOCK_6_EN,
    MOCK_FEATURE_SECTION_BLOCK_7_EN,
    MOCK_FEATURE_SECTION_BLOCK_8_EN,
    MOCK_FEATURE_SECTION_BLOCK_9_EN,
    MOCK_FEATURE_SECTION_BLOCK_10_EN,
    MOCK_FEATURE_SECTION_BLOCK_11_EN,
    MOCK_FEATURE_SECTION_BLOCK_12_EN,
    MOCK_FEATURE_SECTION_BLOCK_13_EN,
    MOCK_FEATURE_SECTION_BLOCK_14_EN,
    MOCK_FEATURE_SECTION_BLOCK_50_EN,
    MOCK_FEATURE_SECTION_BLOCK_51_EN,
    MOCK_FEATURE_SECTION_BLOCK_52_EN,
    MOCK_FEATURE_SECTION_BLOCK_53_EN,
    MOCK_FEATURE_SECTION_BLOCK_54_EN,
    MOCK_FEATURE_SECTION_BLOCK_55_EN,
    MOCK_FEATURE_SECTION_BLOCK_56_EN,
    MOCK_FEATURE_SECTION_BLOCK_57_EN,
    MOCK_FEATURE_SECTION_BLOCK_58_EN,
    MOCK_FEATURE_SECTION_BLOCK_59_EN,
];
const FEATURE_SECTION_BLOCKS_DE = [
    MOCK_FEATURE_SECTION_BLOCK_1_DE,
    MOCK_FEATURE_SECTION_BLOCK_2_DE,
    MOCK_FEATURE_SECTION_BLOCK_3_DE,
    MOCK_FEATURE_SECTION_BLOCK_4_DE,
    MOCK_FEATURE_SECTION_BLOCK_5_DE,
    MOCK_FEATURE_SECTION_BLOCK_6_DE,
    MOCK_FEATURE_SECTION_BLOCK_7_DE,
    MOCK_FEATURE_SECTION_BLOCK_8_DE,
    MOCK_FEATURE_SECTION_BLOCK_9_DE,
    MOCK_FEATURE_SECTION_BLOCK_10_DE,
    MOCK_FEATURE_SECTION_BLOCK_11_DE,
    MOCK_FEATURE_SECTION_BLOCK_12_DE,
    MOCK_FEATURE_SECTION_BLOCK_13_DE,
    MOCK_FEATURE_SECTION_BLOCK_14_DE,
    MOCK_FEATURE_SECTION_BLOCK_50_DE,
    MOCK_FEATURE_SECTION_BLOCK_51_DE,
    MOCK_FEATURE_SECTION_BLOCK_52_DE,
    MOCK_FEATURE_SECTION_BLOCK_53_DE,
    MOCK_FEATURE_SECTION_BLOCK_54_DE,
    MOCK_FEATURE_SECTION_BLOCK_55_DE,
    MOCK_FEATURE_SECTION_BLOCK_56_DE,
    MOCK_FEATURE_SECTION_BLOCK_57_DE,
    MOCK_FEATURE_SECTION_BLOCK_58_DE,
    MOCK_FEATURE_SECTION_BLOCK_59_DE,
];
const FEATURE_SECTION_BLOCKS_PL = [
    MOCK_FEATURE_SECTION_BLOCK_1_PL,
    MOCK_FEATURE_SECTION_BLOCK_2_PL,
    MOCK_FEATURE_SECTION_BLOCK_3_PL,
    MOCK_FEATURE_SECTION_BLOCK_4_PL,
    MOCK_FEATURE_SECTION_BLOCK_5_PL,
    MOCK_FEATURE_SECTION_BLOCK_6_PL,
    MOCK_FEATURE_SECTION_BLOCK_7_PL,
    MOCK_FEATURE_SECTION_BLOCK_8_PL,
    MOCK_FEATURE_SECTION_BLOCK_9_PL,
    MOCK_FEATURE_SECTION_BLOCK_10_PL,
    MOCK_FEATURE_SECTION_BLOCK_11_PL,
    MOCK_FEATURE_SECTION_BLOCK_12_PL,
    MOCK_FEATURE_SECTION_BLOCK_13_PL,
    MOCK_FEATURE_SECTION_BLOCK_14_PL,
    MOCK_FEATURE_SECTION_BLOCK_50_PL,
    MOCK_FEATURE_SECTION_BLOCK_51_PL,
    MOCK_FEATURE_SECTION_BLOCK_52_PL,
    MOCK_FEATURE_SECTION_BLOCK_53_PL,
    MOCK_FEATURE_SECTION_BLOCK_54_PL,
    MOCK_FEATURE_SECTION_BLOCK_55_PL,
    MOCK_FEATURE_SECTION_BLOCK_56_PL,
    MOCK_FEATURE_SECTION_BLOCK_57_PL,
    MOCK_FEATURE_SECTION_BLOCK_58_PL,
    MOCK_FEATURE_SECTION_BLOCK_59_PL,
];

export const mapFeatureSectionBlock = ({
    locale,
    id,
}: CMS.Request.GetCmsEntryParams): CMS.Model.FeatureSectionBlock.FeatureSectionBlock => {
    switch (locale) {
        case 'de':
            return FEATURE_SECTION_BLOCKS_DE.find((block) => block.id === id)!;
        case 'pl':
            return FEATURE_SECTION_BLOCKS_PL.find((block) => block.id === id)!;
        case 'en':
            return FEATURE_SECTION_BLOCKS_EN.find((block) => block.id === id)!;
        default:
            throw new NotFoundException();
    }
};

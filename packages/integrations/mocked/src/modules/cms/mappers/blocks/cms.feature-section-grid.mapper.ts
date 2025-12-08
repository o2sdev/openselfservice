import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

const MOCK_FEATURE_SECTION_GRID_BLOCK_1_EN: CMS.Model.FeatureSectionGridBlock.FeatureSectionGridBlock = {
    id: 'feature-section-grid-1',
    title: 'Why Choose Our Accounts?',
    description:
        'Experience banking designed for your lifestyle—secure, convenient, and packed with features that help you manage and grow your money.',
    featureList: [
        {
            title: 'Instant Access',
            description: 'Open and manage your account from anywhere, at any time, with our intuitive mobile app.',
            icon: 'Check',
        },
        {
            title: 'Advanced Security',
            description: 'Benefit from biometric login, instant card freeze, and top-tier fraud protection.',
            icon: 'Check',
        },
        {
            title: 'Real-Time Updates',
            description: 'Receive instant notifications for every transaction, keeping you informed and in control.',
            icon: 'Check',
        },
        {
            title: 'Personalized Insights',
            description: 'Track your spending and savings with clear, actionable analytics tailored to your habits.',
            icon: 'Check',
        },
        {
            title: 'Automated Savings',
            description:
                'Effortlessly set aside money with tools that round up purchases and help you reach your goals.',
            icon: 'Check',
        },
        {
            title: '24/7 Expert Support',
            description: 'Get help from real people whenever you need it, right in the app or online.',
            icon: 'Check',
        },
    ],
    inverted: false,
};

const MOCK_FEATURE_SECTION_GRID_BLOCK_1_DE: CMS.Model.FeatureSectionGridBlock.FeatureSectionGridBlock = {
    id: 'feature-section-grid-1',
    title: 'Warum unsere Konten wählen?',
    description:
        'Erleben Sie Banking, das für Ihren Lebensstil entwickelt wurde – sicher, bequem und vollgepackt mit Funktionen, die Ihnen helfen, Ihr Geld zu verwalten und zu vermehren.',
    featureList: [
        {
            title: 'Sofortiger Zugriff',
            description:
                'Öffnen und verwalten Sie Ihr Konto von überall und jederzeit mit unserer intuitiven mobilen App.',
            icon: 'Check',
        },
        {
            title: 'Erweiterte Sicherheit',
            description:
                'Profitieren Sie von biometrischem Login, sofortigem Kartenstopp und erstklassigem Betrugsschutz.',
            icon: 'Check',
        },
        {
            title: 'Echtzeit-Updates',
            description:
                'Erhalten Sie sofortige Benachrichtigungen für jede Transaktion, damit Sie informiert und in Kontrolle bleiben.',
            icon: 'Check',
        },
        {
            title: 'Personalisierte Einblicke',
            description:
                'Verfolgen Sie Ihre Ausgaben und Ersparnisse mit klaren, umsetzbaren Analysen, die auf Ihre Gewohnheiten zugeschnitten sind.',
            icon: 'Check',
        },
        {
            title: 'Automatisiertes Sparen',
            description:
                'Legen Sie mühelos Geld beiseite mit Tools, die Einkäufe aufrunden und Ihnen helfen, Ihre Ziele zu erreichen.',
            icon: 'Check',
        },
        {
            title: '24/7 Expertenunterstützung',
            description:
                'Erhalten Sie Hilfe von echten Menschen, wann immer Sie sie brauchen, direkt in der App oder online.',
            icon: 'Check',
        },
    ],
    inverted: false,
};

const MOCK_FEATURE_SECTION_GRID_BLOCK_1_PL: CMS.Model.FeatureSectionGridBlock.FeatureSectionGridBlock = {
    id: 'feature-section-grid-1',
    title: 'Dlaczego wybrać nasze konta?',
    description:
        'Doświadcz bankowości zaprojektowanej dla Twojego stylu życia – bezpiecznej, wygodnej i pełnej funkcji, które pomogą Ci zarządzać i pomnażać swoje pieniądze.',
    featureList: [
        {
            title: 'Natychmiastowy dostęp',
            description:
                'Otwieraj i zarządzaj swoim kontem z dowolnego miejsca i o każdej porze dzięki naszej intuicyjnej aplikacji mobilnej.',
            icon: 'Check',
        },
        {
            title: 'Zaawansowane bezpieczeństwo',
            description:
                'Skorzystaj z logowania biometrycznego, natychmiastowego zamrażania karty i najwyższej klasy ochrony przed oszustwami.',
            icon: 'Check',
        },
        {
            title: 'Aktualizacje w czasie rzeczywistym',
            description:
                'Otrzymuj natychmiastowe powiadomienia o każdej transakcji, aby być na bieżąco i mieć kontrolę.',
            icon: 'Check',
        },
        {
            title: 'Spersonalizowane wglądy',
            description:
                'Śledź swoje wydatki i oszczędności dzięki przejrzystym, praktycznym analizom dostosowanym do Twoich nawyków.',
            icon: 'Check',
        },
        {
            title: 'Automatyczne oszczędzanie',
            description:
                'Odkładaj pieniądze bez wysiłku dzięki narzędziom, które zaokrąglają zakupy i pomagają osiągać cele.',
            icon: 'Check',
        },
        {
            title: 'Całodobowe wsparcie ekspertów',
            description:
                'Uzyskaj pomoc od prawdziwych ludzi, kiedy tylko jej potrzebujesz, bezpośrednio w aplikacji lub online.',
            icon: 'Check',
        },
    ],
    inverted: false,
};

const MOCK_FEATURE_SECTION_GRID_BLOCKS_EN = [MOCK_FEATURE_SECTION_GRID_BLOCK_1_EN];
const MOCK_FEATURE_SECTION_GRID_BLOCKS_DE = [MOCK_FEATURE_SECTION_GRID_BLOCK_1_DE];
const MOCK_FEATURE_SECTION_GRID_BLOCKS_PL = [MOCK_FEATURE_SECTION_GRID_BLOCK_1_PL];

export const mapFeatureSectionGridBlock = ({
    locale,
    id,
}: CMS.Request.GetCmsEntryParams): CMS.Model.FeatureSectionGridBlock.FeatureSectionGridBlock => {
    switch (locale) {
        case 'de':
            return MOCK_FEATURE_SECTION_GRID_BLOCKS_DE.find((block) => block.id === id)!;
        case 'pl':
            return MOCK_FEATURE_SECTION_GRID_BLOCKS_PL.find((block) => block.id === id)!;
        case 'en':
            return MOCK_FEATURE_SECTION_GRID_BLOCKS_EN.find((block) => block.id === id)!;
        default:
            throw new NotFoundException();
    }
};

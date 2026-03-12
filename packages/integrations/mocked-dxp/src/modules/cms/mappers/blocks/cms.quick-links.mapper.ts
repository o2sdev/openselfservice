import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

const MOCK_QUICK_LINKS_BLOCK_1_EN: CMS.Model.QuickLinksBlock.QuickLinksBlock = {
    id: 'quick-links-1',
    items: [
        {
            label: 'Open account',
            icon: 'CircleUser',
            url: '/personal/accounts',
            variant: 'link',
        },
        {
            label: 'Cards',
            icon: 'CreditCard',
            url: '/personal/cards',
            variant: 'link',
        },
        {
            label: 'Download app',
            icon: 'ArrowDownToLine',
            url: '/personal',
            variant: 'link',
        },
        {
            label: 'Support',
            icon: 'HandHelping',
            url: '/',
            variant: 'link',
        },
    ],
};

const MOCK_QUICK_LINKS_BLOCK_1_DE: CMS.Model.QuickLinksBlock.QuickLinksBlock = {
    id: 'quick-links-1',
    items: [
        {
            label: 'Konto öffnen',
            icon: 'CircleUser',
            url: '/personlich/konten',
            variant: 'link',
        },
        {
            label: 'Karten',
            icon: 'CreditCard',
            url: '/personlich/karten',
            variant: 'link',
        },
        {
            label: 'App herunterladen',
            icon: 'ArrowDownToLine',
            url: '/personlich',
            variant: 'link',
        },
        {
            label: 'Hilfe',
            icon: 'HandHelping',
            url: '/',
            variant: 'link',
        },
    ],
};

const MOCK_QUICK_LINKS_BLOCK_1_PL: CMS.Model.QuickLinksBlock.QuickLinksBlock = {
    id: 'quick-links-1',
    items: [
        {
            label: 'Otwórz konto',
            icon: 'CircleUser',
            url: '/indywidualny/konta',
            variant: 'link',
        },
        {
            label: 'Karty',
            icon: 'CreditCard',
            url: '/indywidualny/karty',
            variant: 'link',
        },
        {
            label: 'Pobierz aplikację',
            icon: 'ArrowDownToLine',
            url: '/indywidualny',
            variant: 'link',
        },
        {
            label: 'Wsparcie',
            icon: 'HandHelping',
            url: '/',
            variant: 'link',
        },
    ],
};

const MOCK_QUICK_LINKS_BLOCK_50_EN: CMS.Model.QuickLinksBlock.QuickLinksBlock = {
    id: 'quick-links-50',
    items: [
        {
            label: 'Open account',
            icon: 'CircleUser',
            url: '/business/accounts',
            variant: 'link',
        },
        {
            label: 'Cards',
            icon: 'CreditCard',
            url: '/business/cards',
            variant: 'link',
        },
        {
            label: 'Download app',
            icon: 'ArrowDownToLine',
            url: '/business',
            variant: 'link',
        },
        {
            label: 'Support',
            icon: 'HandHelping',
            url: '/',
            variant: 'link',
        },
    ],
};

const MOCK_QUICK_LINKS_BLOCK_50_DE: CMS.Model.QuickLinksBlock.QuickLinksBlock = {
    id: 'quick-links-50',
    items: [
        {
            label: 'Konto öffnen',
            icon: 'CircleUser',
            url: '/geschaftlich/konten',
            variant: 'link',
        },
        {
            label: 'Karten',
            icon: 'CreditCard',
            url: '/geschaftlich/karten',
            variant: 'link',
        },
        {
            label: 'App herunterladen',
            icon: 'ArrowDownToLine',
            url: '/geschaftlich',
            variant: 'link',
        },
        {
            label: 'Hilfe',
            icon: 'HandHelping',
            url: '/',
            variant: 'link',
        },
    ],
};

const MOCK_QUICK_LINKS_BLOCK_50_PL: CMS.Model.QuickLinksBlock.QuickLinksBlock = {
    id: 'quick-links-50',
    items: [
        {
            label: 'Otwórz konto',
            icon: 'CircleUser',
            url: '/firma/konta',
            variant: 'link',
        },
        {
            label: 'Karty',
            icon: 'CreditCard',
            url: '/firma/karty',
            variant: 'link',
        },
        {
            label: 'Pobierz aplikację',
            icon: 'ArrowDownToLine',
            url: '/firma',
            variant: 'link',
        },
        {
            label: 'Wsparcie',
            icon: 'HandHelping',
            url: '/',
            variant: 'link',
        },
    ],
};
const MOCK_QUICK_LINKS_BLOCK_2_EN: CMS.Model.QuickLinksBlock.QuickLinksBlock = {
    id: 'quick-links-2',
    items: [
        {
            label: 'Account',
            description: 'Get step-by-step guidance on managing your accounts.',
            icon: 'CircleUser',
            url: '/personal/help-and-support/finance-and-savings/smart-budgeting-strategies-for-financial-success',
            variant: 'link',
        },
        {
            label: 'Cards',
            description: 'Activate cards, set limits, freeze or unfreeze.',
            icon: 'CreditCard',
            url: '/personal/help-and-support/finance-and-savings/understanding-insurance-types-for-complete-protection',
            variant: 'link',
        },
        {
            label: 'Transfers',
            description: 'Learn how to send, receive, and track money.',
            icon: 'ArrowRightLeft',
            url: '/personal/help-and-support/finance-and-savings/investment-strategies-for-long-term-wealth-building',
            variant: 'link',
        },
        {
            label: 'Security',
            description: 'Keep your accounts safe and respond to suspicious activity.',
            icon: 'Shield',
            url: '/personal/help-and-support/finance-and-savings/how-to-optimize-your-cnc-machine-for-maximum-efficiency',
            variant: 'link',
        },
    ],
};

const MOCK_QUICK_LINKS_BLOCK_2_DE: CMS.Model.QuickLinksBlock.QuickLinksBlock = {
    id: 'quick-links-2',
    items: [
        {
            label: 'Konto',
            description: 'Erhalten Sie Schritt-für-Schritt-Anleitung zur Verwaltung Ihrer Konten.',
            icon: 'CircleUser',
            url: '/personlich/hilfe-und-support/finanzen-und-sparen/intelligente-budgetierungsstrategien-fuer-finanziellen-erfolg',
            variant: 'link',
        },
        {
            label: 'Karten',
            description: 'Aktivieren Sie Karten, legen Sie Limits fest, sperren oder entsperren Sie.',
            icon: 'CreditCard',
            url: '/personlich/hilfe-und-support/finanzen-und-sparen/versicherungsarten-verstehen-fuer-vollstaendigen-schutz',
            variant: 'link',
        },
        {
            label: 'Überweisungen',
            description: 'Erfahren Sie, wie Sie Geld senden, empfangen und verfolgen können.',
            icon: 'ArrowRightLeft',
            url: '/personlich/hilfe-und-support/finanzen-und-sparen/anlagestrategien-fuer-langfristigen-vermoegensaufbau',
            variant: 'link',
        },
        {
            label: 'Sicherheit',
            description: 'Schützen Sie Ihre Konten und reagieren Sie auf verdächtige Aktivitäten.',
            icon: 'Shield',
            url: '/personlich/hilfe-und-support/finanzen-und-sparen/wie-sie-ihre-cnc-maschine-fuer-maximale-effizienz-optimieren',
            variant: 'link',
        },
    ],
};

const MOCK_QUICK_LINKS_BLOCK_2_PL: CMS.Model.QuickLinksBlock.QuickLinksBlock = {
    id: 'quick-links-2',
    items: [
        {
            label: 'Konto',
            description: 'Uzyskaj szczegółowe wskazówki dotyczące zarządzania swoimi kontami.',
            icon: 'CircleUser',
            url: '/indywidualny/pomoc-i-wsparcie/finanse-i-oszczednosci/inteligentne-strategie-budzetowania-dla-sukcesu-finansowego',
            variant: 'link',
        },
        {
            label: 'Karty',
            description: 'Aktywuj karty, ustaw limity, zablokuj lub odblokuj.',
            icon: 'CreditCard',
            url: '/indywidualny/pomoc-i-wsparcie/finanse-i-oszczednosci/zrozumienie-rodzajow-ubezpieczen-dla-pelnej-ochrony',
            variant: 'link',
        },
        {
            label: 'Przelewy',
            description: 'Dowiedz się, jak wysyłać, otrzymywać i śledzić pieniądze.',
            icon: 'ArrowRightLeft',
            url: '/indywidualny/pomoc-i-wsparcie/finanse-i-oszczednosci/strategie-inwestycyjne-dla-dlugoterminowego-budowania-majatku',
            variant: 'link',
        },
        {
            label: 'Bezpieczeństwo',
            description: 'Chroń swoje konta i reaguj na podejrzane działania.',
            icon: 'Shield',
            url: '/indywidualny/pomoc-i-wsparcie/finanse-i-oszczednosci/jak-zoptymalizowac-maszyne-cnc-dla-maksymalnej-wydajnosci',
            variant: 'link',
        },
    ],
};
const MOCK_QUICK_LINKS_BLOCK_3_EN: CMS.Model.QuickLinksBlock.QuickLinksBlock = {
    id: 'quick-links-3',
    items: [
        {
            label: 'Account',
            description: 'Get step-by-step guidance on managing your accounts.',
            icon: 'CircleUser',
            url: '/business/help-and-support/finance-and-savings/smart-budgeting-strategies-for-financial-success',
            variant: 'link',
        },
        {
            label: 'Cards',
            description: 'Activate cards, set limits, freeze or unfreeze.',
            icon: 'CreditCard',
            url: '/business/help-and-support/finance-and-savings/understanding-insurance-types-for-complete-protection',
            variant: 'link',
        },
        {
            label: 'Transfers',
            description: 'Learn how to send, receive, and track money.',
            icon: 'ArrowRightLeft',
            url: '/business/help-and-support/finance-and-savings/investment-strategies-for-long-term-wealth-building',
            variant: 'link',
        },
        {
            label: 'Security',
            description: 'Keep your accounts safe and respond to suspicious activity.',
            icon: 'Shield',
            url: '/business/help-and-support/finance-and-savings/how-to-optimize-your-cnc-machine-for-maximum-efficiency',
            variant: 'link',
        },
    ],
};

const MOCK_QUICK_LINKS_BLOCK_3_DE: CMS.Model.QuickLinksBlock.QuickLinksBlock = {
    id: 'quick-links-3',
    items: [
        {
            label: 'Konto',
            description: 'Erhalten Sie Schritt-für-Schritt-Anleitung zur Verwaltung Ihrer Konten.',
            icon: 'CircleUser',
            url: '/geschaftlich/hilfe-und-support/finanzen-und-sparen/intelligente-budgetierungsstrategien-fuer-finanziellen-erfolg',
            variant: 'link',
        },
        {
            label: 'Karten',
            description: 'Aktivieren Sie Karten, legen Sie Limits fest, sperren oder entsperren Sie.',
            icon: 'CreditCard',
            url: '/geschaftlich/hilfe-und-support/finanzen-und-sparen/versicherungsarten-verstehen-fuer-vollstaendigen-schutz',
            variant: 'link',
        },
        {
            label: 'Überweisungen',
            description: 'Erfahren Sie, wie Sie Geld senden, empfangen und verfolgen können.',
            icon: 'ArrowRightLeft',
            url: '/geschaftlich/hilfe-und-support/finanzen-und-sparen/anlagestrategien-fuer-langfristigen-vermoegensaufbau',
            variant: 'link',
        },
        {
            label: 'Sicherheit',
            description: 'Schützen Sie Ihre Konten und reagieren Sie auf verdächtige Aktivitäten.',
            icon: 'Shield',
            url: '/geschaftlich/hilfe-und-support/finanzen-und-sparen/wie-sie-ihre-cnc-maschine-fuer-maximale-effizienz-optimieren',
            variant: 'link',
        },
    ],
};

const MOCK_QUICK_LINKS_BLOCK_3_PL: CMS.Model.QuickLinksBlock.QuickLinksBlock = {
    id: 'quick-links-3',
    items: [
        {
            label: 'Konto',
            description: 'Uzyskaj szczegółowe wskazówki dotyczące zarządzania swoimi kontami.',
            icon: 'CircleUser',
            url: '/firma/pomoc-i-wsparcie/finanse-i-oszczednosci/inteligentne-strategie-budzetowania-dla-sukcesu-finansowego',
            variant: 'link',
        },
        {
            label: 'Karty',
            description: 'Aktywuj karty, ustaw limity, zablokuj lub odblokuj.',
            icon: 'CreditCard',
            url: '/firma/pomoc-i-wsparcie/finanse-i-oszczednosci/zrozumienie-rodzajow-ubezpieczen-dla-pelnej-ochrony',
            variant: 'link',
        },
        {
            label: 'Przelewy',
            description: 'Dowiedz się, jak wysyłać, otrzymywać i śledzić pieniądze.',
            icon: 'ArrowRightLeft',
            url: '/firma/pomoc-i-wsparcie/finanse-i-oszczednosci/strategie-inwestycyjne-dla-dlugoterminowego-budowania-majatku',
            variant: 'link',
        },
        {
            label: 'Bezpieczeństwo',
            description: 'Chroń swoje konta i reaguj na podejrzane działania.',
            icon: 'Shield',
            url: '/firma/pomoc-i-wsparcie/finanse-i-oszczednosci/jak-zoptymalizowac-maszyne-cnc-dla-maksymalnej-wydajnosci',
            variant: 'link',
        },
    ],
};

const QUICK_LINKS_BLOCKS_EN = [
    MOCK_QUICK_LINKS_BLOCK_1_EN,
    MOCK_QUICK_LINKS_BLOCK_2_EN,
    MOCK_QUICK_LINKS_BLOCK_3_EN,
    MOCK_QUICK_LINKS_BLOCK_50_EN,
];
const QUICK_LINKS_BLOCKS_DE = [
    MOCK_QUICK_LINKS_BLOCK_1_DE,
    MOCK_QUICK_LINKS_BLOCK_2_DE,
    MOCK_QUICK_LINKS_BLOCK_3_DE,
    MOCK_QUICK_LINKS_BLOCK_50_DE,
];
const QUICK_LINKS_BLOCKS_PL = [
    MOCK_QUICK_LINKS_BLOCK_1_PL,
    MOCK_QUICK_LINKS_BLOCK_2_PL,
    MOCK_QUICK_LINKS_BLOCK_3_PL,
    MOCK_QUICK_LINKS_BLOCK_50_PL,
];

export const mapQuickLinksBlock = ({
    locale,
    id,
}: CMS.Request.GetCmsEntryParams): CMS.Model.QuickLinksBlock.QuickLinksBlock => {
    switch (locale) {
        case 'de':
            return QUICK_LINKS_BLOCKS_DE.find((block) => block.id === id)!;
        case 'pl':
            return QUICK_LINKS_BLOCKS_PL.find((block) => block.id === id)!;
        case 'en':
            return QUICK_LINKS_BLOCKS_EN.find((block) => block.id === id)!;
        default:
            throw new NotFoundException();
    }
};

import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

const MOCK_CTA_SECTION_BLOCK_1_EN: CMS.Model.CtaSectionBlock.CtaSectionBlock = {
    id: 'cta-section-1',
    preTitle: 'PREMIUM MEMBERS',
    title: 'Future-Ready Investments',
    description: 'A personal advisor who will help you buy stocks, funds, or crypto directly from your app.',
    inverted: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-5.png',
        width: 612,
        height: 436,
        alt: 'CTA Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Get premium',
            icon: 'ArrowRight',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_CTA_SECTION_BLOCK_1_DE: CMS.Model.CtaSectionBlock.CtaSectionBlock = {
    id: 'cta-section-1',
    preTitle: 'PREMIUMMITGLIEDER',
    title: 'Zukunftssichere Investitionen',
    description:
        'Ein persönlicher Berater, der Ihnen hilft, Aktien, Fonds oder Kryptowährungen direkt über Ihre App zu kaufen.',
    inverted: false,
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-5.png',
        width: 612,
        height: 436,
        alt: 'CTA Section Image',
        priority: true,
    },
    links: [
        {
            label: 'Premium erhalten',
            icon: 'ArrowRight',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_CTA_SECTION_BLOCK_1_PL: CMS.Model.CtaSectionBlock.CtaSectionBlock = {
    id: 'cta-section-1',
    preTitle: 'CZŁONKOWIE PREMIUM',
    title: 'Inwestycje gotowe na przyszłość',
    description:
        'Osobisty doradca, który pomoże Ci kupować akcje, fundusze lub kryptowaluty bezpośrednio z Twojej aplikacji.',
    image: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-5.png',
        width: 612,
        height: 436,
        alt: 'CTA Section Image',
        priority: true,
    },
    inverted: false,
    links: [
        {
            label: 'Uzyskaj premium',
            icon: 'ArrowRight',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const MOCK_CTA_SECTION_BLOCK_2_EN: CMS.Model.CtaSectionBlock.CtaSectionBlock = {
    id: 'cta-section-2',
    title: 'Ready to simplify your banking?',
    description:
        'Open your Everyday Account today and experience effortless money management, instant access, and security you can trust.',
    inverted: false,
    links: [
        {
            label: 'Get started',
            icon: 'ArrowRight',
            url: '/personal/accounts/everyday-account',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Show more',
    },
};

const MOCK_CTA_SECTION_BLOCK_2_DE: CMS.Model.CtaSectionBlock.CtaSectionBlock = {
    id: 'cta-section-2',
    title: 'Bereit, Ihr Banking zu vereinfachen?',
    description:
        'Eröffnen Sie noch heute Ihr Alltagskonto und erleben Sie mühelose Geldverwaltung, sofortigen Zugriff und Sicherheit, der Sie vertrauen können.',
    inverted: false,
    links: [
        {
            label: 'Loslegen',
            icon: 'ArrowRight',
            url: '/personal/accounts/everyday-account',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_CTA_SECTION_BLOCK_2_PL: CMS.Model.CtaSectionBlock.CtaSectionBlock = {
    id: 'cta-section-2',
    title: 'Gotowy, aby uprościć swoje bankowanie?',
    description:
        'Otwórz swoje Konto Codzienne już dziś i doświadcz bezproblemowego zarządzania pieniędzmi, natychmiastowego dostępu i bezpieczeństwa, któremu możesz zaufać.',
    inverted: false,
    links: [
        {
            label: 'Rozpocznij',
            icon: 'ArrowRight',
            url: '/personal/accounts/everyday-account',
            variant: 'primary',
        },
    ],
    labels: {
        showMore: 'Pokaż więcej',
    },
};

const FEATURE_SECTION_BLOCKS_EN = [MOCK_CTA_SECTION_BLOCK_1_EN, MOCK_CTA_SECTION_BLOCK_2_EN];
const FEATURE_SECTION_BLOCKS_DE = [MOCK_CTA_SECTION_BLOCK_1_DE, MOCK_CTA_SECTION_BLOCK_2_DE];
const FEATURE_SECTION_BLOCKS_PL = [MOCK_CTA_SECTION_BLOCK_1_PL, MOCK_CTA_SECTION_BLOCK_2_PL];

export const mapCtaSectionBlock = ({
    locale,
    id,
}: CMS.Request.GetCmsEntryParams): CMS.Model.CtaSectionBlock.CtaSectionBlock => {
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

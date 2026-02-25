import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

const MOCK_MEDIA_SECTION_BLOCK_1_EN: CMS.Model.MediaSectionBlock.MediaSectionBlock = {
    id: 'media-section-1',
    title: 'All-in-One Banking',
    description: 'See how every feature works together to give you a seamless, secure, and modern banking experience.',
    media: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/video-placeholder.png',
        width: 1024,
        height: 640,
        alt: 'Video placeholder',
        priority: true,
    },
    labels: {
        play: 'Play',
        pause: 'Pause',
        mute: 'Mute',
        unmute: 'Unmute',
        showMore: 'Show more',
    },
};

const MOCK_MEDIA_SECTION_BLOCK_1_DE: CMS.Model.MediaSectionBlock.MediaSectionBlock = {
    id: 'media-section-1',
    title: 'Banking All-in-One',
    description:
        'Sehen Sie sich an, wie jede Funktion zusammenarbeitet, um Ihnen eine reibungslose, sichere und moderne Bankerfahrung zu bieten.',
    media: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/video-placeholder.png',
        width: 1024,
        height: 640,
        alt: 'Video placeholder',
        priority: true,
    },
    labels: {
        play: 'Wiedergabe',
        pause: 'Pause',
        mute: 'Stummschalten',
        unmute: 'Stummschaltung aufheben',
        showMore: 'Mehr erfahren',
    },
};

const MOCK_MEDIA_SECTION_BLOCK_1_PL: CMS.Model.MediaSectionBlock.MediaSectionBlock = {
    id: 'media-section-1',
    title: 'Bankowość wszystko w jednym',
    description:
        'Zobacz, jak każda funkcja współpracuje, aby dać Ci płynny, bezpieczny i nowoczesny doświadczenie bankowości.',
    media: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/video-placeholder.png',
        width: 1024,
        height: 640,
        alt: 'Video placeholder',
        priority: true,
    },
    labels: {
        play: 'Odtwórz',
        pause: 'Pause',
        mute: 'Mute',
        unmute: 'Wycisz',
        showMore: 'Więcej',
    },
};

const MOCK_MEDIA_SECTION_BLOCK_2_EN: CMS.Model.MediaSectionBlock.MediaSectionBlock = {
    id: 'media-section-2',
    title: 'Ready to simplify your banking?',
    description:
        'Open your Everyday Account today and experience effortless money management, instant access, and security you can trust.',
    links: [
        {
            label: 'Get started',
            icon: 'ArrowRight',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        play: 'Play',
        pause: 'Pause',
        mute: 'Mute',
        unmute: 'Unmute',
        showMore: 'Show more',
    },
};

const MOCK_MEDIA_SECTION_BLOCK_2_DE: CMS.Model.MediaSectionBlock.MediaSectionBlock = {
    id: 'media-section-2',
    title: 'Bereit, Ihr Banking zu vereinfachen?',
    description:
        'Eröffnen Sie noch heute Ihr Alltagskonto und erleben Sie mühelose Geldverwaltung, sofortigen Zugriff und Sicherheit, der Sie vertrauen können.',
    links: [
        {
            label: 'Loslegen',
            icon: 'ArrowRight',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        play: 'Abspielen',
        pause: 'Pause',
        mute: 'Stummschalten',
        unmute: 'Stummschaltung aufheben',
        showMore: 'Mehr anzeigen',
    },
};

const MOCK_MEDIA_SECTION_BLOCK_2_PL: CMS.Model.MediaSectionBlock.MediaSectionBlock = {
    id: 'media-section-2',
    title: 'Gotowy, aby uprościć swoje bankowanie?',
    description:
        'Otwórz swoje Konto Codzienne już dziś i doświadcz bezproblemowego zarządzania pieniędzmi, natychmiastowego dostępu i bezpieczeństwa, któremu możesz zaufać.',
    links: [
        {
            label: 'Rozpocznij',
            icon: 'ArrowRight',
            url: '/',
            variant: 'primary',
        },
    ],
    labels: {
        play: 'Odtwórz',
        pause: 'Pauza',
        mute: 'Wycisz',
        unmute: 'Wyłącz wyciszenie',
        showMore: 'Pokaż więcej',
    },
};

const MOCK_MEDIA_SECTION_BLOCK_50_EN: CMS.Model.MediaSectionBlock.MediaSectionBlock = {
    id: 'media-section-50',
    title: 'Business growth tools',
    description:
        'Integrate with leading accounting tools, access personalized financial analytics, and get expert business support whenever you need it.',
    media: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-51.png',
        width: 1024,
        height: 683,
        alt: 'Media Section Image',
        priority: true,
    },
    labels: {
        play: 'Play',
        pause: 'Pause',
        mute: 'Mute',
        unmute: 'Unmute',
        showMore: 'Show more',
    },
};

const MOCK_MEDIA_SECTION_BLOCK_50_DE: CMS.Model.MediaSectionBlock.MediaSectionBlock = {
    id: 'media-section-50',
    title: 'Werkzeuge für das Unternehmenswachstum',
    description:
        'Integrieren Sie führende Buchhaltungstools, greifen Sie auf personalisierte Finanzanalysen zu und erhalten Sie jederzeit fachkundige Unterstützung für Ihr Unternehmen.',
    media: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-51.png',
        width: 1024,
        height: 683,
        alt: 'Media Section Image',
        priority: true,
    },
    labels: {
        play: 'Wiedergabe',
        pause: 'Pause',
        mute: 'Stummschalten',
        unmute: 'Stummschaltung aufheben',
        showMore: 'Mehr erfahren',
    },
};

const MOCK_MEDIA_SECTION_BLOCK_50_PL: CMS.Model.MediaSectionBlock.MediaSectionBlock = {
    id: 'media-section-50',
    title: 'Narzędzia do rozwoju biznesu',
    description:
        'Integruj się z wiodącymi narzędziami księgowymi, uzyskuj dostęp do spersonalizowanych analiz finansowych i otrzymuj fachowe wsparcie biznesowe, kiedy tylko tego potrzebujesz.',
    media: {
        url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-51.png',
        width: 1024,
        height: 683,
        alt: 'Media Section Image',
        priority: true,
    },
    labels: {
        play: 'Odtwórz',
        pause: 'Pauza',
        mute: 'Wycisz',
        unmute: 'Wyłącz wyciszenie',
        showMore: 'Więcej',
    },
};

const MEDIA_SECTION_BLOCKS_EN = [
    MOCK_MEDIA_SECTION_BLOCK_1_EN,
    MOCK_MEDIA_SECTION_BLOCK_2_EN,
    MOCK_MEDIA_SECTION_BLOCK_50_EN,
];
const MEDIA_SECTION_BLOCKS_DE = [
    MOCK_MEDIA_SECTION_BLOCK_1_DE,
    MOCK_MEDIA_SECTION_BLOCK_2_DE,
    MOCK_MEDIA_SECTION_BLOCK_50_DE,
];
const MEDIA_SECTION_BLOCKS_PL = [
    MOCK_MEDIA_SECTION_BLOCK_1_PL,
    MOCK_MEDIA_SECTION_BLOCK_2_PL,
    MOCK_MEDIA_SECTION_BLOCK_50_PL,
];

export const mapMediaSectionBlock = ({
    locale,
    id,
}: CMS.Request.GetCmsEntryParams): CMS.Model.MediaSectionBlock.MediaSectionBlock => {
    switch (locale) {
        case 'de':
            return MEDIA_SECTION_BLOCKS_DE.find((block) => block.id === id)!;
        case 'pl':
            return MEDIA_SECTION_BLOCKS_PL.find((block) => block.id === id)!;
        case 'en':
            return MEDIA_SECTION_BLOCKS_EN.find((block) => block.id === id)!;
        default:
            throw new NotFoundException();
    }
};

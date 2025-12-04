import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

const MOCK_BENTO_GRID_BLOCK_1_EN: CMS.Model.BentoGridBlock.BentoGridBlock = {
    id: 'bento-grid-1',
    title: 'Empower Your Financial Knowledge',
    items: [
        {
            title: 'Everyday Banking Essentials',
            description:
                'Master the basics of managing accounts, payments, and digital tools for confident day-to-day banking.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-6.png',
                width: 402,
                height: 216,
                alt: 'Bento Grid Image',
                priority: true,
            },
            link: {
                label: 'Learn more',
                url: '/',
                icon: 'ArrowRight',
                variant: 'link',
            },
        },
        {
            title: 'Smarter Saving & Investing',
            description:
                'Learn how to grow your money with automated savings, budgeting, and accessible investment strategies.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-7.png',
                width: 402,
                height: 216,
                alt: 'Bento Grid Image',
                priority: true,
            },
            link: {
                label: 'Learn more',
                url: '/',
                icon: 'ArrowRight',
                variant: 'link',
            },
        },
        {
            title: 'Security & Digital Wellbeing',
            description:
                'Stay safe online with practical tips on protecting your finances and making the most of secure banking features.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-8.png',
                width: 402,
                height: 216,
                alt: 'Bento Grid Image',
                priority: true,
            },
            link: {
                label: 'Learn more',
                url: '/',
                icon: 'ArrowRight',
                variant: 'link',
            },
        },
    ],
};

const MOCK_BENTO_GRID_BLOCK_1_DE: CMS.Model.BentoGridBlock.BentoGridBlock = {
    id: 'bento-grid-1',
    title: 'Funktionsreiche Gestaltung, die Aufmerksamkeit erregt',
    items: [
        {
            title: 'Alltägliche Bankgeschäfte',
            description:
                'Beherrschen Sie die Grundlagen der Kontoführung, Zahlungen und digitalen Werkzeuge für ein sicheres tägliches Banking.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-6.png',
                width: 402,
                height: 216,
                alt: 'Bento Grid Image',
                priority: true,
            },
            link: {
                label: 'Mehr erfahren',
                url: '/',
                icon: 'ArrowRight',
                variant: 'link',
            },
        },
        {
            title: 'Intelligentes Sparen & Investieren',
            description:
                'Erfahren Sie, wie Sie Ihr Geld mit automatisierten Sparplänen, Budgetierung und zugänglichen Anlagestrategien vermehren können.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-7.png',
                width: 402,
                height: 216,
                alt: 'Bento Grid Image',
                priority: true,
            },
            link: {
                label: 'Mehr erfahren',
                url: '/',
                icon: 'ArrowRight',
                variant: 'link',
            },
        },
        {
            title: 'Sicherheit & Digitales Wohlbefinden',
            description:
                'Bleiben Sie online sicher mit praktischen Tipps zum Schutz Ihrer Finanzen und zur optimalen Nutzung sicherer Bankfunktionen.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-8.png',
                width: 402,
                height: 216,
                alt: 'Bento Grid Image',
                priority: true,
            },
            link: {
                label: 'Mehr erfahren',
                url: '/',
                icon: 'ArrowRight',
                variant: 'link',
            },
        },
    ],
};

const MOCK_BENTO_GRID_BLOCK_1_PL: CMS.Model.BentoGridBlock.BentoGridBlock = {
    id: 'bento-grid-1',
    title: 'Wzbogacaj swoją wiedzę finansową',
    items: [
        {
            title: 'Podstawy codziennego bankowania',
            description:
                'Opanuj podstawy zarządzania kontami, płatnościami i narzędziami cyfrowymi dla pewnego codziennego bankowania.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-6.png',
                width: 402,
                height: 216,
                alt: 'Bento Grid Image',
                priority: true,
            },
            link: {
                label: 'Dowiedz się więcej',
                url: '/',
                icon: 'ArrowRight',
                variant: 'link',
            },
        },
        {
            title: 'Inteligentniejsze oszczędzanie i inwestowanie',
            description:
                'Dowiedz się, jak pomnażać swoje pieniądze dzięki automatycznym oszczędnościom, budżetowaniu i dostępnym strategiom inwestycyjnym.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-7.png',
                width: 402,
                height: 216,
                alt: 'Bento Grid Image',
                priority: true,
            },
            link: {
                label: 'Dowiedz się więcej',
                url: '/',
                icon: 'ArrowRight',
                variant: 'link',
            },
        },
        {
            title: 'Bezpieczeństwo i cyfrowe dobrostan',
            description:
                'Pozostań bezpieczny online dzięki praktycznym wskazówkom dotyczącym ochrony finansów i maksymalnego wykorzystania bezpiecznych funkcji bankowych.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-8.png',
                width: 402,
                height: 216,
                alt: 'Bento Grid Image',
                priority: true,
            },
            link: {
                label: 'Dowiedz się więcej',
                url: '/',
                icon: 'ArrowRight',
                variant: 'link',
            },
        },
    ],
};

const MOCK_BENTO_GRID_BLOCK_50_EN: CMS.Model.BentoGridBlock.BentoGridBlock = {
    id: 'bento-grid-50',
    title: 'Business banking academy',
    items: [
        {
            title: 'Financial Management',
            description:
                'Master the fundamentals of business accounts, payments, and cash flow for confident day-to-day operations.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-54.png',
                width: 402,
                height: 216,
                alt: 'Bento Grid Image',
                priority: true,
            },
            link: {
                label: 'Learn more',
                url: '/',
                icon: 'ArrowRight',
                variant: 'link',
            },
        },
        {
            title: 'Security & Compliance',
            description:
                'Stay ahead of threats and regulations with practical advice on protecting your business and meeting compliance standards.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-55.png',
                width: 402,
                height: 216,
                alt: 'Bento Grid Image',
                priority: true,
            },
            link: {
                label: 'Learn more',
                url: '/',
                icon: 'ArrowRight',
                variant: 'link',
            },
        },
        {
            title: 'Growth & Investment Strategies',
            description:
                'Master the fundamentals of business accounts, payments, and cash flow for confident day-to-day operations.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-56.png',
                width: 402,
                height: 216,
                alt: 'Bento Grid Image',
                priority: true,
            },
            link: {
                label: 'Learn more',
                url: '/',
                icon: 'ArrowRight',
                variant: 'link',
            },
        },
    ],
};

const MOCK_BENTO_GRID_BLOCK_50_DE: CMS.Model.BentoGridBlock.BentoGridBlock = {
    id: 'bento-grid-50',
    title: 'Akademie für Geschäftsbanking',
    items: [
        {
            title: 'Finanzmanagement',
            description:
                'Beherrschen Sie die Grundlagen von Geschäftskonten, Zahlungen und Cashflow für sichere tägliche Abläufe.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-54.png',
                width: 402,
                height: 216,
                alt: 'Bento Grid Image',
                priority: true,
            },
            link: {
                label: 'Erfahren Sie mehr',
                url: '/',
                icon: 'ArrowRight',
                variant: 'link',
            },
        },
        {
            title: 'Sicherheit & Compliance',
            description:
                'Bleiben Sie Bedrohungen und Vorschriften voraus mit praktischen Ratschlägen zum Schutz Ihres Unternehmens und zur Einhaltung von Standards.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-55.png',
                width: 402,
                height: 216,
                alt: 'Bento Grid Image',
                priority: true,
            },
            link: {
                label: 'Erfahren Sie mehr',
                url: '/',
                icon: 'ArrowRight',
                variant: 'link',
            },
        },
        {
            title: 'Wachstums- & Investitionsstrategien',
            description:
                'Beherrschen Sie die Grundlagen von Geschäftskonten, Zahlungen und Cashflow für sichere tägliche Abläufe.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-56.png',
                width: 402,
                height: 216,
                alt: 'Bento Grid Image',
                priority: true,
            },
            link: {
                label: 'Erfahren Sie mehr',
                url: '/',
                icon: 'ArrowRight',
                variant: 'link',
            },
        },
    ],
};

const MOCK_BENTO_GRID_BLOCK_50_PL: CMS.Model.BentoGridBlock.BentoGridBlock = {
    id: 'bento-grid-50',
    title: 'Akademia bankowości biznesowej',
    items: [
        {
            title: 'Zarządzanie finansami',
            description:
                'Opanuj podstawy kont biznesowych, płatności i przepływów pieniężnych, aby pewnie prowadzić codzienne operacje.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-54.png',
                width: 402,
                height: 216,
                alt: 'Bento Grid Image',
                priority: true,
            },
            link: {
                label: 'Dowiedz się więcej',
                url: '/',
                icon: 'ArrowRight',
                variant: 'link',
            },
        },
        {
            title: 'Bezpieczeństwo i zgodność',
            description:
                'Bądź na bieżąco z zagrożeniami i przepisami dzięki praktycznym poradom dotyczącym ochrony Twojej firmy i spełniania standardów zgodności.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-55.png',
                width: 402,
                height: 216,
                alt: 'Bento Grid Image',
                priority: true,
            },
            link: {
                label: 'Dowiedz się więcej',
                url: '/',
                icon: 'ArrowRight',
                variant: 'link',
            },
        },
        {
            title: 'Strategie wzrostu i inwestycji',
            description:
                'Opanuj podstawy kont biznesowych, płatności i przepływów pieniężnych, aby pewnie prowadzić codzienne operacje.',
            image: {
                url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/demo/Frame-56.png',
                width: 402,
                height: 216,
                alt: 'Bento Grid Image',
                priority: true,
            },
            link: {
                label: 'Dowiedz się więcej',
                url: '/',
                icon: 'ArrowRight',
                variant: 'link',
            },
        },
    ],
};

const MOCK_BENTO_GRID_BLOCKS_EN = [MOCK_BENTO_GRID_BLOCK_1_EN, MOCK_BENTO_GRID_BLOCK_50_EN];
const MOCK_BENTO_GRID_BLOCKS_DE = [MOCK_BENTO_GRID_BLOCK_1_DE, MOCK_BENTO_GRID_BLOCK_50_DE];
const MOCK_BENTO_GRID_BLOCKS_PL = [MOCK_BENTO_GRID_BLOCK_1_PL, MOCK_BENTO_GRID_BLOCK_50_PL];

export const mapBentoGridBlock = ({
    locale,
    id,
}: CMS.Request.GetCmsEntryParams): CMS.Model.BentoGridBlock.BentoGridBlock => {
    switch (locale) {
        case 'de':
            return MOCK_BENTO_GRID_BLOCKS_DE.find((block) => block.id === id)!;
        case 'pl':
            return MOCK_BENTO_GRID_BLOCKS_PL.find((block) => block.id === id)!;
        case 'en':
            return MOCK_BENTO_GRID_BLOCKS_EN.find((block) => block.id === id)!;
        default:
            throw new NotFoundException();
    }
};

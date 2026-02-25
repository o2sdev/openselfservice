import { CMS } from '@o2s/framework/modules';

export const PAGE_PERSONAL_INSURANCE_TRAVEL_INSURANCE_EN: CMS.Model.Page.Page = {
    id: 'personal-insurance-travel-insurance-1',
    slug: '/personal/insurance/travel-insurance',
    locale: 'en',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Travel Insurance',
        description:
            "Demo app of Digital Experience Platform Kit. Build future-proof portals with composable architecture and a modern frontend tech stack. DXP offers a Next.js boilerplate, an API integration & data normalization server, and capabilities to integrate headless APIs like CMS, CRM, Search or headless e-commerce. It's powered by Next.js, React.js, TypeScript, and NestJS.",
        keywords: [
            'open source portal',
            'headless portal',
            'composable frontend',
            'fullstack framework',
            'composable architecture',
            'MACH',
            'Next.js',
            'TypeScript',
            'NestJS',
            'headless integration',
            'portal framework',
            'headless CMS',
            'headless self service',
            'CRM headless frontend',
            'e-commerce API',
            'open-source frontend',
            'composable CX',
            'digital experience',
            'digital experience platform',
            'frontend starter',
        ],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/dxp-social-card-1.png',
            width: 150,
            height: 150,
            alt: 'Digital Experience Platform Kit - The Open Source Composable Frontend for Portals',
        },
    },
    parent: {
        slug: '/personal/insurance',
        seo: {
            title: 'Insurance',
        },
        parent: {
            slug: '/personal',
            seo: {
                title: 'Personal',
            },
        },
    },
    theme: 'personal',
    hasOwnTitle: true,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'HeroSectionBlock',
                    id: 'hero-section-6',
                    layout: {
                        variant: 'wide',
                        spacing: 'small',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-11',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-12',
                    layout: {
                        variant: 'wide',
                        spacing: 'large',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-3',
                    layout: {
                        variant: 'narrow',
                        spacing: 'large',
                        background: 'none',
                    },
                },
                {
                    __typename: 'DocumentListBlock',
                    id: 'document-list-1',
                    layout: {
                        variant: 'narrow',
                        spacing: 'large',
                        background: 'none',
                    },
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_PERSONAL_INSURANCE_TRAVEL_INSURANCE_DE: CMS.Model.Page.Page = {
    id: 'personal-insurance-travel-insurance-1',
    slug: '/personlich/versicherungen/reiseversicherung',
    locale: 'de',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Reiseversicherung',
        description:
            "Demo app of Digital Experience Platform Kit. Build future-proof portals with composable architecture and a modern frontend tech stack. DXP offers a Next.js boilerplate, an API integration & data normalization server, and capabilities to integrate headless APIs like CMS, CRM, Search or headless e-commerce. It's powered by Next.js, React.js, TypeScript, and NestJS.",
        keywords: [
            'open source portal',
            'headless portal',
            'composable frontend',
            'fullstack framework',
            'composable architecture',
            'MACH',
            'Next.js',
            'TypeScript',
            'NestJS',
            'headless integration',
            'portal framework',
            'headless CMS',
            'headless self service',
            'CRM headless frontend',
            'e-commerce API',
            'open-source frontend',
            'composable CX',
            'digital experience',
            'digital experience platform',
            'frontend starter',
        ],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/dxp-social-card-1.png',
            width: 150,
            height: 150,
            alt: 'Digital Experience Platform Kit - The Open Source Composable Frontend for Portals',
        },
    },
    parent: {
        slug: '/personlich/versicherungen',
        seo: {
            title: 'Versicherungen',
        },
        parent: {
            slug: '/personlich',
            seo: {
                title: 'Persönlich',
            },
        },
    },
    theme: 'personal',
    hasOwnTitle: true,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'HeroSectionBlock',
                    id: 'hero-section-6',
                    layout: {
                        variant: 'wide',
                        spacing: 'small',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-11',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-12',
                    layout: {
                        variant: 'wide',
                        spacing: 'large',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-3',
                    layout: {
                        variant: 'narrow',
                        spacing: 'large',
                        background: 'none',
                    },
                },
                {
                    __typename: 'DocumentListBlock',
                    id: 'document-list-1',
                    layout: {
                        variant: 'narrow',
                        spacing: 'large',
                        background: 'none',
                    },
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

export const PAGE_PERSONAL_INSURANCE_TRAVEL_INSURANCE_PL: CMS.Model.Page.Page = {
    id: 'personal-insurance-travel-insurance-1',
    slug: '/indywidualny/ubezpieczenia/ubezpieczenie-podrozy',
    locale: 'pl',
    seo: {
        noIndex: false,
        noFollow: false,
        title: 'Ubezpieczenie podróży',
        description:
            "Demo app of Digital Experience Platform Kit. Build future-proof portals with composable architecture and a modern frontend tech stack. DXP offers a Next.js boilerplate, an API integration & data normalization server, and capabilities to integrate headless APIs like CMS, CRM, Search or headless e-commerce. It's powered by Next.js, React.js, TypeScript, and NestJS.",
        keywords: [
            'open source portal',
            'headless portal',
            'composable frontend',
            'fullstack framework',
            'composable architecture',
            'MACH',
            'Next.js',
            'TypeScript',
            'NestJS',
            'headless integration',
            'portal framework',
            'headless CMS',
            'headless self service',
            'CRM headless frontend',
            'e-commerce API',
            'open-source frontend',
            'composable CX',
            'digital experience',
            'digital experience platform',
            'frontend starter',
        ],
        image: {
            url: 'https://raw.githubusercontent.com/o2sdev/dxp-starter-kit/main/packages/integrations/mocked/public/images/dxp-social-card-1.png',
            width: 150,
            height: 150,
            alt: 'Digital Experience Platform Kit - The Open Source Composable Frontend for Portals',
        },
    },
    parent: {
        slug: '/indywidualny/ubezpieczenia',
        seo: {
            title: 'Ubezpieczenia',
        },
        parent: {
            slug: '/indywidualny',
            seo: {
                title: 'Indywidualny',
            },
        },
    },
    theme: 'personal',
    hasOwnTitle: true,
    template: {
        __typename: 'OneColumnTemplate',
        slots: {
            main: [
                {
                    __typename: 'HeroSectionBlock',
                    id: 'hero-section-6',
                    layout: {
                        variant: 'wide',
                        spacing: 'small',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-11',
                    layout: {
                        variant: 'wide',
                        spacing: 'medium',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FeatureSectionBlock',
                    id: 'feature-section-12',
                    layout: {
                        variant: 'wide',
                        spacing: 'large',
                        background: 'none',
                    },
                },
                {
                    __typename: 'FaqBlock',
                    id: 'faq-3',
                    layout: {
                        variant: 'narrow',
                        spacing: 'large',
                        background: 'none',
                    },
                },
                {
                    __typename: 'DocumentListBlock',
                    id: 'document-list-1',
                    layout: {
                        variant: 'narrow',
                        spacing: 'large',
                        background: 'none',
                    },
                },
            ],
        },
    },
    updatedAt: '2025-01-01',
    createdAt: '2025-01-01',
};

import { themes as prismThemes } from 'prism-react-renderer';

import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';

import tailwindPlugin from './plugins/tailwind-config';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

let hideDocs = false;

const config: Config = {
    title: 'Open Self Service',
    tagline:
        ' is an open-source framework that lets you easily integrate APIs, unify data, and build scalable, high-performance customer support portals with Next.js, TypeScript, and NestJS.',
    favicon: '/img/favicons/favicon.ico',
    customFields: {
        brandName: 'Open Self Service',
        heading: 'Open Self Service',
        heading2: 'The Open-Source Composable Frontend for Customer Support',
        fullPageTitle: 'Build Composable Customer Portals with Ease',
        description: 'An open source development kit for building composable Customer Portals.',
    },
    headTags: [
        // SEO
        {
            tagName: 'meta',
            attributes: {
                name: 'robots',
                content: 'index, follow',
            },
        },

        // Google Tag Manager
        {
            tagName: 'script',

            attributes: {
                async: 'true', // async should be a string
                src: 'https://www.googletagmanager.com/gtag/js?id=G-RMFECPB5NW',
                type: 'text/plain',
                'data-category': 'analytics',
            },
        },
        {
            tagName: 'script',
            attributes: {
                type: 'text/plain',
                'data-category': 'analytics',
            }, // attributes property is required
            innerHTML: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-RMFECPB5NW');
            `,
        },
        // Apple touch icons (precomposed)
        {
            tagName: 'link',
            attributes: {
                rel: 'apple-touch-icon-precomposed',
                sizes: '57x57',
                href: '/img/favicons/apple-touch-icon-57x57.png',
            },
        },
        {
            tagName: 'link',
            attributes: {
                rel: 'apple-touch-icon-precomposed',
                sizes: '114x114',
                href: '/img/favicons/apple-touch-icon-114x114.png',
            },
        },
        {
            tagName: 'link',
            attributes: {
                rel: 'apple-touch-icon-precomposed',
                sizes: '72x72',
                href: '/img/favicons/apple-touch-icon-72x72.png',
            },
        },
        {
            tagName: 'link',
            attributes: {
                rel: 'apple-touch-icon-precomposed',
                sizes: '144x144',
                href: '/img/favicons/apple-touch-icon-144x144.png',
            },
        },
        {
            tagName: 'link',
            attributes: {
                rel: 'apple-touch-icon-precomposed',
                sizes: '60x60',
                href: '/img/favicons/apple-touch-icon-60x60.png',
            },
        },
        {
            tagName: 'link',
            attributes: {
                rel: 'apple-touch-icon-precomposed',
                sizes: '120x120',
                href: '/img/favicons/apple-touch-icon-120x120.png',
            },
        },
        {
            tagName: 'link',
            attributes: {
                rel: 'apple-touch-icon-precomposed',
                sizes: '76x76',
                href: '/img/favicons/apple-touch-icon-76x76.png',
            },
        },
        {
            tagName: 'link',
            attributes: {
                rel: 'apple-touch-icon-precomposed',
                sizes: '152x152',
                href: '/img/favicons/apple-touch-icon-152x152.png',
            },
        },

        // svg favicon
        {
            tagName: 'link',
            attributes: {
                rel: 'icon',
                type: 'image/svg+xml',
                href: '/img/favicons/favicon.svg',
            },
        },

        // Ikony favicon w formacie PNG
        {
            tagName: 'link',
            attributes: {
                rel: 'icon',
                type: 'image/png',
                sizes: '196x196',
                href: '/img/favicons/favicon-196x196.png',
            },
        },
        {
            tagName: 'link',
            attributes: {
                rel: 'icon',
                type: 'image/png',
                sizes: '96x96',
                href: '/img/favicons/favicon-96x96.png',
            },
        },
        {
            tagName: 'link',
            attributes: {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href: '/img/favicons/favicon-32x32.png',
            },
        },
        {
            tagName: 'link',
            attributes: {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href: '/img/favicons/favicon-16x16.png',
            },
        },
        {
            tagName: 'link',
            attributes: {
                rel: 'icon',
                type: 'image/png',
                sizes: '128x128',
                href: '/img/favicons/favicon-128.png',
            },
        },

        // Meta tagi dla Windows / IE / Edge
        {
            tagName: 'meta',
            attributes: {
                name: 'application-name',
                content: '\u00A0', // &nbsp;
            },
        },
        {
            tagName: 'meta',
            attributes: {
                name: 'msapplication-TileColor',
                content: '#FFFFFF',
            },
        },
        {
            tagName: 'meta',
            attributes: {
                name: 'msapplication-TileImage',
                content: '/img/favicons/mstile-144x144.png',
            },
        },
        {
            tagName: 'meta',
            attributes: {
                name: 'msapplication-square70x70logo',
                content: '/img/favicons/mstile-70x70.png',
            },
        },
        {
            tagName: 'meta',
            attributes: {
                name: 'msapplication-square150x150logo',
                content: '/img/favicons/mstile-150x150.png',
            },
        },
        {
            tagName: 'meta',
            attributes: {
                name: 'msapplication-wide310x150logo',
                content: '/img/favicons/mstile-310x150.png',
            },
        },
        {
            tagName: 'meta',
            attributes: {
                name: 'msapplication-square310x310logo',
                content: '/img/favicons/mstile-310x310.png',
            },
        },
    ],
    // Set the production url of your site here
    url: 'https://www.openselfservice.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    // organizationName: 'hycom', // Usually your GitHub org/user name.
    // projectName: 'Open Self Service', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    markdown: {
        mermaid: true,
    },
    plugins: [tailwindPlugin, '@docusaurus/theme-mermaid', 'docusaurus-plugin-image-zoom'],
    presets: [
        [
            'classic',
            {
                docs: hideDocs
                    ? false
                    : {
                          sidebarPath: './sidebars.ts',
                          routeBasePath: '/docs',
                          // Please change this to your repo.
                          // Remove this to remove the "edit this page" links.
                          // editUrl: 'https://github.com/o2sdev/openselfservice/tree/main/apps/docs/',
                      },
                // blog: false,
                blog: hideDocs
                    ? false
                    : {
                          showReadingTime: false,
                          feedOptions: {
                              type: ['rss', 'atom'],
                              xslt: true,
                          },
                          // Please change this to your repo.
                          // Remove this to remove the "edit this page" links.
                          // editUrl: 'https://github.com/o2sdev/openselfservice/tree/main/apps/docs/',
                          // Useful options to enforce blogging best practices
                          onInlineTags: 'warn',
                          onInlineAuthors: 'warn',
                          onUntruncatedBlogPosts: 'ignore',
                          blogSidebarCount: 0,
                      },
                theme: {
                    customCss: ['./src/css/custom.css', './src/css/cookie-consent.css'],
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // SEO
        metadata: [
            {
                name: 'description',
                content:
                    "Build future-proof Customer Portals with composable architecture and a modern frontend tech stack. Open Self Service offers a Next.js boilerplate, an API integration & data normalization server, and capabilities to integrate headless APIs like CMS, CRM, Search or headless e-commerce. It's powered by Next.js, React.js, TypeScript, and NestJS.",
            },
            {
                name: 'keywords',
                content:
                    'Open Self Service, open source customer portal, headless customer portal, composable frontend, fullstack framework, composable architecture, MACH, Next.js, TypeScript, NestJS, headless integration, customer portal framework, headless CMS, headless self service, CRM headless frontend, e-commerce API, self-service platform, open-source frontend, composable CX',
            },
            { name: 'robots', content: 'index, follow' },
        ],

        colorMode: {
            disableSwitch: true,
        },
        // Replace with your project's social card
        image: '/img/o2s-social-card-1.jpg',
        navbar: {
            // hideOnScroll: true,
            title: 'Open Self Service',
            logo: {
                alt: 'Open Self Service Logo',
                src: '/img/logo.svg',
            },
            items: hideDocs
                ? undefined
                : [
                      {
                          type: 'search',
                          position: 'right',
                      },
                      {
                          type: 'docSidebar',
                          sidebarId: 'tutorialSidebar',
                          position: 'right',
                          label: 'Docs',
                          className: 'navbar__item--docs',
                      },
                      { to: '/blog', label: 'Blog', position: 'right', className: 'navbar__item--guides' },
                      {
                          to: 'https://discord.gg/4R568nZgsT',
                          label: 'Discord',
                          position: 'right',
                          className: 'navbar__item--discord',
                      },
                      {
                          to: 'https://github.com/o2sdev/openselfservice',
                          label: 'GitHub',
                          position: 'right',
                          className: 'navbar__item--github',
                      },
                      {
                          to: '/dxp',
                          //   label: 'DXP Starter',
                          position: 'right',
                          className: 'button button-tertiary',
                          html: '<span class="label">DXP Starter</span>',
                      },

                      {
                          to: '/contact',
                          label: 'Contact us',
                          position: 'right',
                          className: 'navbar__item--contact button',
                      },
                  ],
        },
        footer: {
            // style: 'dark',
            links: hideDocs
                ? []
                : [
                      {
                          title: 'Docs',
                          items: [
                              {
                                  label: 'Overview',
                                  to: '/docs',
                              },
                              {
                                  label: 'Getting started',
                                  to: '/docs/getting-started',
                              },
                              {
                                  label: 'Main components',
                                  to: '/docs/main-components',
                              },
                              {
                                  label: 'Integrations',
                                  to: '/docs/integrations',
                              },
                          ],
                      },
                      {
                          title: 'Community',
                          items: [
                              {
                                  label: 'LinkedIn',
                                  href: 'https://www.linkedin.com/company/open-self-service/',
                              },
                              //   {
                              //       label: 'Twitter / X',
                              //       href: 'https://x.com/openselfservice',
                              //   },
                              {
                                  label: 'Discord',
                                  href: 'https://discord.gg/4R568nZgsT',
                              },
                          ],
                      },
                      {
                          title: 'More',
                          items: [
                              {
                                  label: 'GitHub',
                                  href: 'https://github.com/o2sdev/openselfservice',
                              },
                          ],
                      },
                  ],
            copyright: `
                <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <div class="text-left flex items-center gap-2">
                        Made by <a href="https://hycom.digital" target="_blank" aria-label="Hycom"><img src="/img/logos/hycom.svg" alt="hycom logo"/></a>
                    </div>

                    <div class="text-right flex flex-col md:flex-row justify-between items-center gap-4">
                        <a class="text-white!" href="https://hycom.digital/privacy-policy" target="_blank">Privacy Policy</a> Open Self Service © ${new Date().getFullYear()} Hycom S.A.
                    </div>
                </div>
            `,
        },
        mermaid: {
            theme: { light: 'neutral', dark: 'neutral' },
            options: {
                // variables mostly work for the `base` theme
                themeVariables: {
                    darkMode: false,
                    background: '#f4f4f4',
                    fontSize: '16px',

                    primaryColor: '#4c5ce5',
                    primaryTextColor: '#000000',
                    primaryBorderColor: '#4c5ce5',

                    secondaryColor: '#21d99a',
                    secondaryTextColor: '#000000',
                    secondaryBorderColor: '#21d99a',

                    tertiaryColor: '#21d99a',
                    tertiaryTextColor: '#000000',
                    tertiaryBorderColor: '#21d99a',

                    noteBkgColor: '#fefefe',
                    noteTextColor: '#001a85',
                    noteBorderColor: '#aaaaaa',
                },
                class: {
                    hideEmptyMembersBox: true,
                },
            },
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },

        zoom: {
            selector: '.markdown img',
            background: {
                light: 'rgba(10, 10, 10, 0.9)',
                dark: 'rgb(0, 0, 0, 0.9)',
            },
            config: {
                margin: 36,
                background: '#BADA55',
                scrollOffset: 0,
            },
        },
    } satisfies Preset.ThemeConfig,

    themes: [
        ...(hideDocs
            ? []
            : [
                  [
                      require.resolve('@easyops-cn/docusaurus-search-local'),
                      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
                      {
                          // ... Your options.
                          // `hashed` is recommended as long-term-cache of index file is possible.
                          hashed: true,

                          // For Docs using Chinese, it is recomended to set:
                          // language: ["en", "zh"],

                          // If you're using `noIndex: true`, set `forceIgnoreNoIndex` to enable local index:
                          // forceIgnoreNoIndex: true,

                          indexBlog: false,
                      },
                  ],
              ]),
    ],
};

export default config;

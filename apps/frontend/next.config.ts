import createBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';
// @ts-expect-error missing types for this library
import withPlugins from 'next-compose-plugins';
import createNextIntlPlugin from 'next-intl/plugin';

const withBundleAnalyzer = createBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

const withNextIntl = createNextIntlPlugin();

const blocksToTranspile = [
    '@o2s/blocks.article',
    '@o2s/blocks.article-list',
    '@o2s/blocks.article-search',
    '@o2s/blocks.category',
    '@o2s/blocks.category-list',
    '@o2s/blocks.faq',
    '@o2s/blocks.featured-service-list',
    '@o2s/blocks.invoice-list',
    '@o2s/blocks.notification-details',
    '@o2s/blocks.notification-list',
    '@o2s/blocks.order-details',
    '@o2s/blocks.order-list',
    '@o2s/blocks.orders-summary',
    '@o2s/blocks.payments-history',
    '@o2s/blocks.payments-summary',
    '@o2s/blocks.quick-links',
    '@o2s/blocks.service-details',
    '@o2s/blocks.service-list',
    '@o2s/blocks.surveyjs-form',
    '@o2s/blocks.ticket-details',
    '@o2s/blocks.ticket-list',
    '@o2s/blocks.ticket-recent',
    '@o2s/blocks.user-account',
];

const nextConfig: NextConfig = {
    output: 'standalone',
    transpilePackages: blocksToTranspile,
    images: {
        // deviceSizes: [430, 828, 1200, 2048, 3840],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos',
            },
            {
                protocol: 'https',
                hostname: 'medusa-public-images.s3.eu-west-1.amazonaws.com',
            },
        ],
    },
    sassOptions: {
        silenceDeprecations: ['legacy-js-api'],
    },
    experimental: {
        // dynamicIO: true,
        // cacheLife: {
        //     render: {
        //         stale: 1,
        //         revalidate: 5,
        //         expire: 5,
        //     },
        // },
    },
    turbopack: {
        rules: {
            '*.svg': {
                loaders: ['@svgr/webpack'],
                as: '*.js',
            },
        },
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};

export default withPlugins([withBundleAnalyzer, withNextIntl], nextConfig);

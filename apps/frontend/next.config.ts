import createBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';
// @ts-expect-error missing types for this library
import withPlugins from 'next-compose-plugins';
import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';

const withBundleAnalyzer = createBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    output: 'standalone',
    outputFileTracingRoot: path.join(__dirname, '../../'),
    images: {
        // deviceSizes: [430, 828, 1200, 2048, 3840],
        qualities: [75, 90],
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
        turbopackFileSystemCacheForDev: true,
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
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                    {
                        key: 'Content-Security-Policy',
                        value: `frame-ancestors 'self' https://app.contentful.com`,
                    },
                ],
            },
        ];
    },
};

export default withPlugins([withBundleAnalyzer, withNextIntl], nextConfig);

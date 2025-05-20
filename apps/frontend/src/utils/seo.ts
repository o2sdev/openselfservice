import { Metadata } from 'next';
import { Languages } from 'next/dist/lib/metadata/types/alternative-urls-types';

import { Models } from '@o2s/framework/modules';

import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@/i18n/routing';

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL;
type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

interface SEOProps {
    locale: SupportedLocale;
    title?: string;
    description?: string;
    keywords?: string[];
    noIndex?: boolean;
    noFollow?: boolean;
    image?: Models.Media.Media;
    slug: string;
    translations?: string[];
    alternates?: {
        [key: string]: string;
    };
}

export const generateSeo = ({
    locale,
    title,
    description,
    keywords,
    image,
    noIndex,
    noFollow,
    slug,
    translations,
    alternates,
}: SEOProps): Metadata => {
    const pageSlug = slug;
    const url = `${SITE_URL}/${locale}${slug}`;
    const id = pageSlug.split('/')[2] || '';

    return {
        title,
        description,
        keywords,
        robots: {
            index: !noIndex,
            follow: !noFollow,
        },
        alternates: {
            canonical: url,
            languages: translations?.reduce((prev, current) => {
                if (current === locale) {
                    return prev;
                }

                const alternateUrl = `${SITE_URL}${current === DEFAULT_LOCALE ? '' : `/${current}`}${alternates?.[current]?.replace('(.+)', id) || slug}`;

                return {
                    ...prev,
                    [current]: alternateUrl,
                };
            }, {} as Languages<string>),
        },
        openGraph: {
            title,
            siteName: title,
            description,
            images: image
                ? [
                      {
                          url: image.url as string,
                          width: image.width as number,
                          height: image.height as number,
                          alt: image.alt as string,
                      },
                  ]
                : undefined,
            locale,
            url,
            type: 'website',
        },
    };
};

import { Metadata } from 'next';
import { Languages } from 'next/dist/lib/metadata/types/alternative-urls-types';

import { Utils } from '@o2s/utils.frontend';

import { Models } from '@o2s/framework/modules';

import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@/i18n/locales';

const SITE_URL = process.env.BASE_URL;
type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

type SearchParams = Record<string, string | string[] | undefined>;

interface FilterSeo {
    /** Query string to append to the canonical URL, empty when the canonical is the bare page. */
    canonicalQuery: string;
    /** True when this particular query string should not be indexed. */
    noIndex: boolean;
}

const hasValue = (value: string | string[] | undefined): boolean =>
    Array.isArray(value) ? value.length > 0 : value !== undefined && value !== '';

/**
 * Decides what a filtered variant of a page is worth to a crawler.
 *
 * Only the params SEO has an opinion about are looked at: one value of one indexable facet still
 * describes a page (a category listing), while a deep page, a different order or several facets at
 * once are variants of it. Everything else a link may carry — `utm_*`, `gclid`, a tab — is ignored, so
 * a campaign link neither drops the canonical facet nor knocks the page out of the index.
 */
const getFilterSeo = (searchParams: SearchParams = {}): FilterSeo => {
    const active = Object.entries(searchParams).filter(([, value]) => hasValue(value));

    const facets = active.filter(([key]) => Utils.Seo.isIndexableFilter(key));
    const hasListingParam = active.some(([key]) => Utils.Seo.isListingParam(key));

    const [facet] = facets;
    const [key, value] = facet ?? [];
    const single = facets.length === 1 && typeof value === 'string';

    return {
        // A facet keeps its canonical even next to params that are not indexable: the preferred version
        // of a deep page or a campaign link is the facet listing itself.
        canonicalQuery: single ? `?${key}=${encodeURIComponent(value)}` : '',
        noIndex: hasListingParam || facets.length > 1 || (facets.length === 1 && !single),
    };
};

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
    /** Query params of the request, so a filtered variant of the page canonicalises correctly. */
    searchParams?: SearchParams;
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
    searchParams,
}: SEOProps): Metadata => {
    const pageSlug = slug;
    const url = `${SITE_URL}/${locale}${slug}`;
    const id = pageSlug.split('/')[2] || '';
    const filters = getFilterSeo(searchParams);
    const canonical = `${url}${filters.canonicalQuery}`;

    return {
        title,
        description,
        keywords,
        robots: {
            index: !noIndex && !filters.noIndex,
            follow: !noFollow,
        },
        alternates: {
            canonical,
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
            url: canonical,
            type: 'website',
        },
    };
};

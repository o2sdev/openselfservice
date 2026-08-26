import { Metadata } from 'next';
import { Languages } from 'next/dist/lib/metadata/types/alternative-urls-types';

import { Models } from '@o2s/framework/modules';

import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '@/i18n/routing';

const SITE_URL = process.env.BASE_URL;
type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

type SearchParams = Record<string, string | string[] | undefined>;

/**
 * Filter params whose single-value form still describes a page worth indexing on its own — a category
 * listing is a page, a sort order or a deep page of one is a variant of it. Everything else (`page`,
 * `sort`, `view`, several values of one facet, several facets at once) canonicalises back and is kept
 * out of the index, so filtering cannot spray near-duplicates across the crawl budget.
 */
const INDEXABLE_FILTERS = ['category'];

interface FilterSeo {
    /** Query string to append to the canonical URL, empty when the canonical is the bare page. */
    canonicalQuery: string;
    /** True when this particular query string should not be indexed. */
    noIndex: boolean;
}

const getFilterSeo = (searchParams: SearchParams = {}): FilterSeo => {
    const active = Object.entries(searchParams).filter(([, value]) => value !== undefined && value !== '');

    if (!active.length) {
        return { canonicalQuery: '', noIndex: false };
    }

    const [key, value] = active[0]!;
    const isSingleFacet = active.length === 1 && INDEXABLE_FILTERS.includes(key) && typeof value === 'string';

    return {
        canonicalQuery: isSingleFacet ? `?${key}=${encodeURIComponent(value as string)}` : '',
        noIndex: !isSingleFacet,
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

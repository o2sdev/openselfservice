/**
 * Which list filter params may show up in an indexed URL.
 *
 * Shared so the two ends of the decision cannot drift: the page metadata canonicalises to these
 * params, and a list block renders links for exactly the same ones.
 */
export const INDEXABLE_FILTERS: readonly string[] = ['category'];

/**
 * Params that change what a list shows without deserving an index entry of their own — a deep page or
 * a different order is a variant of the page, not a page. Anything not named here or in
 * `INDEXABLE_FILTERS` (a tracking param, a tab, whatever else a link carries) is none of SEO's
 * business and is ignored.
 */
export const LISTING_PARAMS: readonly string[] = ['page', 'sort', 'view'];

/** True when the param is a list filter worth indexing on its own. */
export const isIndexableFilter = (key: string): boolean => INDEXABLE_FILTERS.includes(key);

/** True when the param changes the listing but must not be indexed. */
export const isListingParam = (key: string): boolean => LISTING_PARAMS.includes(key);

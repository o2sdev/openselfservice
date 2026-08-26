/** Query params of the page a block is rendered on, in the shape Next.js hands them to a page. */
export type BlockSearchParams = Record<string, string | string[] | undefined>;

export interface BaseBlockProps<TRouting = unknown> {
    id: string;
    locale: string;
    accessToken?: string;
    routing?: TRouting;
    hasPriority?: boolean;
    /**
     * Set for blocks that render URL-driven state (list filters) on the server, so a filtered link
     * returns the filtered page instead of the default one. Blocks that ignore it are unaffected.
     */
    searchParams?: BlockSearchParams;
}

export interface BlockWithSlugProps<TRouting = unknown> extends BaseBlockProps<TRouting> {
    slug: string[];
}

export interface BlockWithUserIdProps<TRouting = unknown> extends BaseBlockProps<TRouting> {
    userId?: string;
}

export interface BlockWithDraftModeProps<TRouting = unknown> extends BaseBlockProps<TRouting> {
    isDraftModeEnabled?: boolean;
}

export interface FullBlockProps<TRouting = unknown> extends BlockWithSlugProps<TRouting> {
    userId?: string;
    isDraftModeEnabled?: boolean;
}

export interface BaseBlockProps<TRouting = unknown> {
    id: string;
    locale: string;
    accessToken?: string;
    routing?: TRouting;
    hasPriority?: boolean;
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

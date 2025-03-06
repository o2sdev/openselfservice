export interface AlternateUrl {
    href: string;
    hreflang: string;
}

export interface SitemapEntry {
    loc: string;
    lastMod?: string;
    changefreq?: string;
    priority?: number;
    alternates?: AlternateUrl[];
}

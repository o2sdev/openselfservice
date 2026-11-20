import { vercelStegaCombine } from '@vercel/stega';

/**
 * Content Source Maps — self-encoding on the API Harmonization server.
 *
 * Strapi's Live Preview does not encode source maps over GraphQL (only the REST Content API
 * does). Since this integration fetches over GraphQL, we produce the exact same markers
 * ourselves, after normalization, so they survive our mappers untouched.
 *
 * The format mirrors `@strapi/core` `content-source-maps.encodeField` byte-for-byte, so the
 * decoder that Strapi's admin injects into the preview iframe (`vercelStegaDecode` →
 * `data-strapi-source`) wires up click-to-edit exactly as for native content:
 *
 *   vercelStegaCombine(text, { strapiSource: '<URLSearchParams>' }, false)
 *
 * where strapiSource carries documentId / type / path / model / kind / locale. `path` must use
 * the Strapi field path WITH array indices (e.g. `content.0.items.2.title`) because the side
 * editor focuses fields by that path.
 */

/** Strapi attribute type of the encoded field (drives how the side editor treats it). */
export type StrapiFieldType = 'string' | 'text' | 'richtext' | 'email' | 'enumeration';

export interface SourceMapContext {
    /** documentId of the entry that OWNS the field (for O2S blocks: the `component` entry). */
    documentId: string;
    /** Owning collection uid, e.g. `api::component.component`. */
    model: string;
    /** Schema kind, e.g. `collectionType`. */
    kind: string;
    /** Locale of the previewed document. */
    locale?: string;
    /**
     * Path prefix for the block within its owning entry. For O2S blocks this is the
     * dynamiczone slot, e.g. `content.0` — field paths are built as `${basePath}.${path}`.
     */
    basePath: string;
}

/** Encode a single string field. Matches Strapi core's `encodeField` exactly. */
export const encodeField = (
    text: string,
    ctx: SourceMapContext,
    path: string,
    type: StrapiFieldType = 'string',
): string => {
    const strapiSource = new URLSearchParams();
    strapiSource.set('documentId', ctx.documentId);
    strapiSource.set('type', type);
    strapiSource.set('path', ctx.basePath ? `${ctx.basePath}.${path}` : path);
    strapiSource.set('model', ctx.model);
    strapiSource.set('kind', ctx.kind);
    if (ctx.locale) {
        strapiSource.set('locale', ctx.locale);
    }
    return vercelStegaCombine(text, { strapiSource: strapiSource.toString() }, false);
};

/**
 * Returns a field encoder bound to a context. The encoder is null-safe: non-string or
 * empty values pass through unchanged, so it can be spread across optional model fields.
 */
export const createFieldEncoder =
    (ctx: SourceMapContext) =>
    <T>(value: T, path: string, type: StrapiFieldType = 'string'): T =>
        typeof value === 'string' && value.length > 0 ? (encodeField(value, ctx, path, type) as unknown as T) : value;

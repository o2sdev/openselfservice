import { Models } from '@o2s/framework/modules';

import { Page, PageTemplate } from '../models/page.model';

/**
 * Declarative page definitions for integrations that serve pages without a CMS (the mocked ones, or
 * the mock part of a real integration). A page is declared once, with one entry per locale, and the
 * registry derives everything the {@link CmsService} needs from it: `getPage`, `getPages` and
 * `getAlternativePages`. Because all three read the same declarations, they cannot drift apart.
 *
 * ```ts
 * const ticketList = definePage({
 *     id: '2',
 *     template: { __typename: 'OneColumnTemplate', slots: { main: [] } },
 *     locales: {
 *         en: { slug: '/cases', seo: { title: 'Cases' } },
 *         pl: { slug: '/zgloszenia', seo: { title: 'Zgłoszenia' } },
 *     },
 * });
 *
 * const ticketDetails = definePage({
 *     id: '3',
 *     parent: ticketList,
 *     template: { __typename: 'OneColumnTemplate', slots: { main: [] } },
 *     locales: {
 *         en: { slug: '/cases/:id', seo: { title: 'Ticket details' } },
 *         pl: { slug: '/zgloszenia/:id', seo: { title: 'Szczegóły zgłoszenia' } },
 *     },
 * });
 *
 * export const pages = createPageRegistry([ticketList, ticketDetails]);
 * pages.mapPage('/cases/T-1', 'en'); // -> the English page, slug `/cases/T-1`
 * ```
 */

/** The model caps the breadcrumb chain at three ancestors. */
const MAX_PARENT_DEPTH = 3;

const PARAM_PATTERN = /^[A-Za-z0-9_]+$/;

/** SEO of one locale: only the title is required, the rest falls back to the registry defaults. */
export type PageSeoDefinition = Pick<Models.SEO.Page, 'title'> & Partial<Omit<Models.SEO.Page, 'title'>>;

/** One locale of a page: its localized slug and the copy that goes with it. */
export interface PageLocaleDefinition {
    /** Localized slug, with a `:param` placeholder per dynamic segment, e.g. `/cases/:id`. */
    slug: string;
    seo: PageSeoDefinition;
    /** Overrides the theme of the definition for this locale only. */
    theme?: string;
    /** Where this locale of the page redirects to, as a localized slug. */
    redirect?: string;
}

/** A page declared once, for every locale it exists in. */
export interface PageDefinitionInput {
    id: string;
    template: PageTemplate;
    /** Locale code -> the slug and SEO of that locale. Every locale must repeat the same params. */
    locales: Record<string, PageLocaleDefinition>;
    /** Roles allowed to open the page; leave out for a public one. */
    roles?: string[];
    /** Whether the page renders its own title instead of the one coming from SEO. */
    hasOwnTitle?: boolean;
    /** Breadcrumb parent, by reference: its localized slug and title come from its own definition. */
    parent?: PageDefinition;
    /** Theme of the page, when every locale shares it; a locale entry may still override it. */
    theme?: string;
    createdAt?: string;
    updatedAt?: string;
}

/** A validated definition with one compiled route per locale. */
export interface PageDefinition extends PageDefinitionInput {
    readonly routes: readonly PageRoute[];
}

/** The compiled slug of one locale of a page. */
export interface PageRoute {
    readonly locale: string;
    /** The slug as declared, placeholders included. */
    readonly pattern: string;
    /** Names of the placeholders, in the order they appear in the slug. */
    readonly params: readonly string[];
    readonly segments: readonly RouteSegment[];
}

type RouteSegment = { readonly literal: string } | { readonly param: string };

/** One step of the breadcrumb chain; the page model caps the chain at three of them. */
interface Breadcrumb {
    slug: string;
    seo: { title: string };
    parent?: Breadcrumb;
}

/** A slug resolved against the registry. */
export interface PageMatch {
    definition: PageDefinition;
    /** Locale that owns the matched slug, which is not always the requested one. */
    locale: string;
    /** Values of the dynamic segments, e.g. `{ id: 'T-1' }`. */
    params: Record<string, string>;
    page: Page;
}

export interface PageRegistryDefaults {
    /** Filled into every locale that leaves a field out; the title always comes from the locale. */
    seo?: Partial<Omit<Models.SEO.Page, 'title'>>;
    createdAt?: string;
    updatedAt?: string;
}

export interface PageRegistryOptions {
    defaults?: PageRegistryDefaults;
    /**
     * When a slug matches no route of the requested locale, look it up in the other locales and
     * answer with the page of the locale that owns it. On by default, because localized slugs are
     * unique across locales and a mismatched pair should still resolve to a page.
     */
    matchOtherLocales?: boolean;
}

export interface GetAllPagesOptions {
    /**
     * Whether pages with dynamic slugs are listed with their pattern (`/cases/:id`) as the slug.
     * On by default; turn it off for a consumer that needs real URLs only, such as a sitemap.
     */
    includeDynamic?: boolean;
}

export interface PageRegistry {
    readonly definitions: readonly PageDefinition[];
    getPageDefinition(id: string): PageDefinition | undefined;
    /** Resolves a slug to its definition, its locale and its params. */
    matchPage(slug: string, locale: string): PageMatch | undefined;
    /** `CmsService.getPage`: the page behind a slug, with the params filled back into the slug. */
    mapPage(slug: string, locale: string): Page | undefined;
    /** `CmsService.getPages`: every page of a locale. */
    getAllPages(locale: string, options?: GetAllPagesOptions): Page[];
    /** `CmsService.getAlternativePages`: the same page in each of its locales. */
    getAlternativePages(id: string, slug: string, locale: string): Page[];
}

const definitionError = (id: string, message: string) => new Error(`definePage("${id}"): ${message}`);

const compileRoute = (id: string, locale: string, slug: string): PageRoute => {
    if (!slug.startsWith('/')) {
        throw definitionError(id, `the ${locale} slug "${slug}" has to start with "/"`);
    }

    const segments: RouteSegment[] = (slug === '/' ? [] : slug.slice(1).split('/')).map((segment) => {
        if (!segment) {
            throw definitionError(id, `the ${locale} slug "${slug}" has an empty segment`);
        }

        if (!segment.startsWith(':')) {
            return { literal: segment };
        }

        const param = segment.slice(1);

        if (!PARAM_PATTERN.test(param)) {
            throw definitionError(id, `the ${locale} slug "${slug}" has an invalid param ":${param}"`);
        }

        return { param };
    });

    const params = segments.flatMap((segment) => ('param' in segment ? [segment.param] : []));
    const duplicate = params.find((param, index) => params.indexOf(param) !== index);

    if (duplicate) {
        throw definitionError(id, `the ${locale} slug "${slug}" repeats the param ":${duplicate}"`);
    }

    return { locale, pattern: slug, params, segments };
};

const validateParents = (definition: PageDefinitionInput, routes: readonly PageRoute[]) => {
    const locales = routes.map((route) => route.locale);
    // every locale declares the same params, which is checked before the parents are
    const params = routes[0]?.params ?? [];
    const seen = new Set<PageDefinitionInput>([definition]);

    let ancestor = definition.parent;

    for (let depth = 0; ancestor; depth++) {
        if (seen.has(ancestor)) {
            throw definitionError(definition.id, `the parent chain loops back to "${ancestor.id}"`);
        }

        if (depth >= MAX_PARENT_DEPTH) {
            throw definitionError(definition.id, `the parent chain is deeper than ${MAX_PARENT_DEPTH} pages`);
        }

        const missing = locales.filter((locale) => !ancestor!.locales[locale]);

        if (missing.length) {
            throw definitionError(
                definition.id,
                `its parent "${ancestor.id}" is missing the locale(s) ${missing.join(', ')}`,
            );
        }

        // the breadcrumb renders the slug of the ancestor out of the params of this page, so an
        // ancestor param this page does not declare would end up in the breadcrumb as `:param`
        const unresolved = [...new Set(ancestor.routes.flatMap((route) => route.params))].filter(
            (param) => !params.includes(param),
        );

        if (unresolved.length) {
            throw definitionError(
                definition.id,
                `its parent "${ancestor.id}" needs the param(s) ${unresolved.join(', ')}, ` +
                    `which this page does not declare`,
            );
        }

        seen.add(ancestor);
        ancestor = ancestor.parent;
    }
};

/**
 * Validates a page definition and compiles one route per locale. Throws on a definition the
 * registry could not serve consistently: a slug without a leading slash, a locale that drops a
 * param the other locales declare, a parent that does not cover every locale of its child.
 */
export const definePage = (definition: PageDefinitionInput): PageDefinition => {
    if (!definition.id) {
        throw new Error('definePage: the definition needs an id');
    }

    const locales = Object.keys(definition.locales);

    if (!locales.length) {
        throw definitionError(definition.id, 'the definition needs at least one locale');
    }

    const routes = locales.map((locale) => compileRoute(definition.id, locale, definition.locales[locale]!.slug));

    // a translated slug that loses a param would answer with a slug the frontend cannot route
    const [reference, ...rest] = routes as [PageRoute, ...PageRoute[]];
    const expected = [...reference.params].sort().join(',');

    rest.forEach((route) => {
        const params = [...route.params].sort().join(',');

        if (params !== expected) {
            throw definitionError(
                definition.id,
                `the ${route.locale} slug "${route.pattern}" declares the params [${params}] ` +
                    `while the ${reference.locale} one declares [${expected}]`,
            );
        }
    });

    validateParents(definition, routes);

    return { ...definition, routes };
};

const isDynamic = (route: PageRoute) => route.params.length > 0;

const renderSlug = (route: PageRoute, params: Record<string, string>) => {
    if (!route.segments.length) {
        return '/';
    }

    const segments = route.segments.map((segment) =>
        'literal' in segment ? segment.literal : (params[segment.param] ?? `:${segment.param}`),
    );

    return `/${segments.join('/')}`;
};

const matchRoute = (route: PageRoute, slug: string): Record<string, string> | undefined => {
    if (!slug.startsWith('/')) {
        return undefined;
    }

    const parts = slug === '/' ? [] : slug.slice(1).split('/');

    if (parts.length !== route.segments.length) {
        return undefined;
    }

    const params: Record<string, string> = {};

    for (let index = 0; index < route.segments.length; index++) {
        const segment = route.segments[index]!;
        const part = parts[index]!;

        if ('literal' in segment) {
            if (segment.literal !== part) {
                return undefined;
            }

            continue;
        }

        if (!part) {
            return undefined;
        }

        params[segment.param] = part;
    }

    return params;
};

interface Candidate {
    definition: PageDefinition;
    route: PageRoute;
}

/** A route with more literal segments is more specific, so it is tried first. */
const bySpecificity = (left: Candidate, right: Candidate) => {
    const literals = (candidate: Candidate) =>
        candidate.route.segments.filter((segment) => 'literal' in segment).length;

    return literals(right) - literals(left) || left.route.params.length - right.route.params.length;
};

/**
 * What a route actually matches, param names left out: `/cases/:id` and `/cases/:number` are one
 * and the same route, and two pages claiming it would make the answer depend on declaration order.
 */
const shapeOf = (route: PageRoute) =>
    route.segments.map((segment) => ('literal' in segment ? segment.literal : '*')).join('/');

/**
 * Builds the `getPage` / `getPages` / `getAlternativePages` trio out of page definitions, so that
 * the three answers come from one declaration instead of three hand-kept lists.
 */
export const createPageRegistry = (
    definitions: readonly PageDefinition[],
    options: PageRegistryOptions = {},
): PageRegistry => {
    const { defaults = {}, matchOtherLocales = true } = options;

    const byId = new Map<string, PageDefinition>();
    const staticByLocale = new Map<string, Map<string, Candidate>>();
    const dynamicByLocale = new Map<string, Candidate[]>();
    const shapesByLocale = new Map<string, Map<string, Candidate>>();
    const locales: string[] = [];

    definitions.forEach((definition) => {
        if (byId.has(definition.id)) {
            throw new Error(`createPageRegistry: the id "${definition.id}" is declared twice`);
        }

        byId.set(definition.id, definition);

        definition.routes.forEach((route) => {
            if (!locales.includes(route.locale)) {
                locales.push(route.locale);
            }

            const candidate = { definition, route };
            const shapes = shapesByLocale.get(route.locale) ?? new Map<string, Candidate>();
            const conflict = shapes.get(shapeOf(route));

            if (conflict) {
                throw new Error(
                    `createPageRegistry: "${route.pattern}" (${route.locale}) of "${definition.id}" collides ` +
                        `with "${conflict.route.pattern}" of "${conflict.definition.id}"`,
                );
            }

            shapes.set(shapeOf(route), candidate);
            shapesByLocale.set(route.locale, shapes);

            if (isDynamic(route)) {
                dynamicByLocale.set(route.locale, [...(dynamicByLocale.get(route.locale) ?? []), candidate]);

                return;
            }

            const routes = staticByLocale.get(route.locale) ?? new Map<string, Candidate>();

            routes.set(route.pattern, candidate);
            staticByLocale.set(route.locale, routes);
        });
    });

    dynamicByLocale.forEach((routes) => routes.sort(bySpecificity));

    const buildBreadcrumb = (
        definition: PageDefinition,
        locale: string,
        params: Record<string, string>,
    ): Breadcrumb | undefined => {
        const parent = definition.parent;

        if (!parent) {
            return undefined;
        }

        const route = parent.routes.find((candidate) => candidate.locale === locale);

        // `definePage` rejects a parent that misses a locale of its child, so the route is there
        if (!route) {
            return undefined;
        }

        return {
            slug: renderSlug(route, params),
            seo: { title: parent.locales[locale]!.seo.title },
            parent: buildBreadcrumb(parent, locale, params),
        };
    };

    const buildPage = (definition: PageDefinition, route: PageRoute, params: Record<string, string>): Page => {
        const locale = definition.locales[route.locale]!;
        const seo = { ...defaults.seo, ...locale.seo };

        return {
            id: definition.id,
            slug: renderSlug(route, params),
            locale: route.locale,
            template: definition.template,
            createdAt: definition.createdAt ?? defaults.createdAt ?? '',
            updatedAt: definition.updatedAt ?? defaults.updatedAt ?? '',
            seo: {
                title: seo.title,
                description: seo.description ?? '',
                keywords: seo.keywords ?? [],
                noIndex: seo.noIndex ?? false,
                noFollow: seo.noFollow ?? false,
                image: seo.image,
            },
            hasOwnTitle: definition.hasOwnTitle ?? false,
            roles: definition.roles,
            theme: locale.theme ?? definition.theme,
            redirect: locale.redirect,
            // the model caps the chain at three ancestors and `definePage` rejects deeper ones
            parent: buildBreadcrumb(definition, route.locale, params) as Page['parent'],
        };
    };

    const matchIn = (locale: string, slug: string): PageMatch | undefined => {
        const exact = staticByLocale.get(locale)?.get(slug);

        if (exact) {
            return {
                definition: exact.definition,
                locale,
                params: {},
                page: buildPage(exact.definition, exact.route, {}),
            };
        }

        for (const candidate of dynamicByLocale.get(locale) ?? []) {
            const params = matchRoute(candidate.route, slug);

            if (params) {
                return {
                    definition: candidate.definition,
                    locale,
                    params,
                    page: buildPage(candidate.definition, candidate.route, params),
                };
            }
        }

        return undefined;
    };

    const matchPage: PageRegistry['matchPage'] = (slug, locale) => {
        const match = matchIn(locale, slug);

        if (match || !matchOtherLocales) {
            return match;
        }

        for (const other of locales) {
            if (other === locale) {
                continue;
            }

            const fallback = matchIn(other, slug);

            if (fallback) {
                return fallback;
            }
        }

        return undefined;
    };

    /** Reads the params out of a slug of the given page, whichever locale that slug belongs to. */
    const paramsOf = (definition: PageDefinition, slug: string, locale: string) => {
        const ordered = [
            ...definition.routes.filter((route) => route.locale === locale),
            ...definition.routes.filter((route) => route.locale !== locale),
        ];

        for (const route of ordered) {
            const params = matchRoute(route, slug);

            if (params) {
                return params;
            }
        }

        return {};
    };

    return {
        definitions,

        getPageDefinition: (id) => byId.get(id),

        matchPage,

        mapPage: (slug, locale) => matchPage(slug, locale)?.page,

        getAllPages: (locale, { includeDynamic = true } = {}) =>
            definitions.flatMap((definition) => {
                const route = definition.routes.find((candidate) => candidate.locale === locale);

                if (!route || (!includeDynamic && isDynamic(route))) {
                    return [];
                }

                return [buildPage(definition, route, {})];
            }),

        getAlternativePages: (id, slug, locale) => {
            const definition = byId.get(id);

            if (!definition) {
                return [];
            }

            const params = paramsOf(definition, slug, locale);

            return definition.routes.map((route) => buildPage(definition, route, params));
        },
    };
};

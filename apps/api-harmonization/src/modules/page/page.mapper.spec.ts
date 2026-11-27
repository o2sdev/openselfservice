import { CMS } from '@o2s/configs.integrations';
import { describe, expect, it } from 'vitest';

import { mapPage } from './page.mapper';

const page = (overrides: Partial<CMS.Model.Page.Page> = {}) =>
    ({
        slug: '/products',
        locale: 'en',
        seo: {
            title: 'Products',
            description: 'Everything we sell',
            keywords: [],
            noIndex: false,
            noFollow: false,
        },
        template: { __typename: 'OneColumnTemplate', slots: { main: [] } },
        hasOwnTitle: false,
        ...overrides,
    }) as unknown as CMS.Model.Page.Page;

describe('mapPage', () => {
    it('takes the indexing flags from the CMS entry for a public page', () => {
        const result = mapPage(page({ roles: [] }), 'en');

        expect(result.meta.seo).toMatchObject({ noIndex: false, noFollow: false });
    });

    it('keeps a page out of the index when it is gated by roles', () => {
        const result = mapPage(page({ roles: ['selfservice_org_user'] }), 'en');

        expect(result.meta.seo.noIndex).toBe(true);
    });

    it('leaves following alone for a gated page, so links in it are still discovered', () => {
        const result = mapPage(page({ roles: ['selfservice_org_user'] }), 'en');

        expect(result.meta.seo.noFollow).toBe(false);
    });

    it('honours a CMS entry that asks not to be indexed', () => {
        const result = mapPage(
            page({
                roles: [],
                seo: { ...page().seo, noIndex: true },
            }),
            'en',
        );

        expect(result.meta.seo.noIndex).toBe(true);
    });
});

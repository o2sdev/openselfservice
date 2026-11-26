import { getAliasesToRemove } from './get-aliases-to-remove';
import { describe, expect, it } from 'vitest';

const IMPORT_REGEX = /^import \* as (\w+) from '@o2s\/blocks\.([^/]+)\/api-harmonization';$/;

const LINES = [
    "import * as ArticleList from '@o2s/blocks.article-list/api-harmonization';",
    "import * as Article from '@o2s/blocks.article/api-harmonization';",
    "import * as CustomFaq from '@o2s/blocks.faq/api-harmonization';",
    "import { Something } from '@o2s/framework/modules';",
    '    Article,',
];

describe('getAliasesToRemove', () => {
    it('returns the aliases of unselected blocks', () => {
        expect(getAliasesToRemove(LINES, IMPORT_REGEX, ['article'])).toEqual(new Set(['ArticleList', 'CustomFaq']));
    });

    it('uses the alias from the file, not one derived from the block name', () => {
        expect(getAliasesToRemove(LINES, IMPORT_REGEX, ['article', 'article-list'])).toEqual(new Set(['CustomFaq']));
    });

    it('returns an empty set when every block is selected', () => {
        expect(getAliasesToRemove(LINES, IMPORT_REGEX, ['article', 'article-list', 'faq']).size).toBe(0);
    });

    it('ignores lines that do not match the import regex', () => {
        expect(getAliasesToRemove(LINES, IMPORT_REGEX, [])).toEqual(new Set(['ArticleList', 'Article', 'CustomFaq']));
    });
});

import { transformBlocksConfig } from './transform-blocks-config';
import * as fs from 'fs-extra';
import * as os from 'os';
import * as path from 'path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

const FILE_PATH = 'apps/api-harmonization/src/blocks.config.ts';

const BLOCKS_CONFIG = `import * as ArticleList from '@o2s/blocks.article-list/api-harmonization';
import * as Article from '@o2s/blocks.article/api-harmonization';
import * as Faq from '@o2s/blocks.faq/api-harmonization';
import * as HeroSection from '@o2s/blocks.hero-section/api-harmonization';

// BLOCK IMPORT

/**
 * Central registry of the blocks used by this app.
 */
export const blocks = [
    Article,
    ArticleList,
    Faq,
    HeroSection,
    // BLOCK REGISTER
];

export type Blocks =
    // BLOCK TYPE
    | Article.Model.ArticleBlock['__typename']
    | ArticleList.Model.ArticleListBlock['__typename']
    | Faq.Model.FaqBlock['__typename']
    | HeroSection.Model.HeroSectionBlock['__typename'];
`;

describe('transformBlocksConfig', () => {
    let projectDir: string;

    const writeConfig = async (content: string) => {
        await fs.outputFile(path.join(projectDir, FILE_PATH), content, 'utf-8');
    };

    const readConfig = () => fs.readFile(path.join(projectDir, FILE_PATH), 'utf-8');

    beforeEach(async () => {
        projectDir = await fs.mkdtemp(path.join(os.tmpdir(), 'create-o2s-app-blocks-config-'));
    });

    afterEach(async () => {
        await fs.remove(projectDir);
    });

    it('removes the import, registry entry and union member of unselected blocks', async () => {
        await writeConfig(BLOCKS_CONFIG);

        await transformBlocksConfig(projectDir, ['article', 'faq']);

        expect(await readConfig()).toBe(`import * as Article from '@o2s/blocks.article/api-harmonization';
import * as Faq from '@o2s/blocks.faq/api-harmonization';

// BLOCK IMPORT

/**
 * Central registry of the blocks used by this app.
 */
export const blocks = [
    Article,
    Faq,
    // BLOCK REGISTER
];

export type Blocks =
    // BLOCK TYPE
    | Article.Model.ArticleBlock['__typename']
    | Faq.Model.FaqBlock['__typename'];
`);
    });

    it('does not treat a block name as a prefix of another block name', async () => {
        await writeConfig(BLOCKS_CONFIG);

        await transformBlocksConfig(projectDir, ['article-list']);

        const result = await readConfig();
        expect(result).toContain("import * as ArticleList from '@o2s/blocks.article-list/api-harmonization';");
        expect(result).not.toContain("from '@o2s/blocks.article/api-harmonization'");
        expect(result).not.toMatch(/^\s+Article,$/m);
        expect(result).toMatch(/^\s+ArticleList,$/m);
        expect(result).not.toContain('Article.Model.ArticleBlock');
    });

    it('keeps the union terminated when its last member is removed', async () => {
        await writeConfig(BLOCKS_CONFIG);

        await transformBlocksConfig(projectDir, ['article', 'faq']);

        expect(await readConfig()).toContain("    | Faq.Model.FaqBlock['__typename'];\n");
    });

    it('keeps the generator markers and a valid union when all blocks are removed', async () => {
        await writeConfig(BLOCKS_CONFIG);

        await transformBlocksConfig(projectDir, []);

        const result = await readConfig();
        expect(result).not.toContain('@o2s/blocks.');
        expect(result).toContain('// BLOCK IMPORT');
        expect(result).toContain('export const blocks = [\n    // BLOCK REGISTER\n];');
        expect(result).toContain('export type Blocks =\n    // BLOCK TYPE\n    | never;\n');
    });

    it('keeps the union terminated when it is defined in a different order than the imports', async () => {
        await writeConfig(
            BLOCKS_CONFIG.replace(
                "    | Faq.Model.FaqBlock['__typename']\n    | HeroSection.Model.HeroSectionBlock['__typename'];",
                "    | HeroSection.Model.HeroSectionBlock['__typename']\n    | Faq.Model.FaqBlock['__typename'];",
            ),
        );

        await transformBlocksConfig(projectDir, ['faq', 'hero-section']);

        const result = await readConfig();
        expect(result).toContain(
            "    | HeroSection.Model.HeroSectionBlock['__typename']\n    | Faq.Model.FaqBlock['__typename'];\n",
        );
    });

    it('leaves the file untouched when every block is selected', async () => {
        await writeConfig(BLOCKS_CONFIG);

        await transformBlocksConfig(projectDir, ['article', 'article-list', 'faq', 'hero-section']);

        expect(await readConfig()).toBe(BLOCKS_CONFIG);
    });

    it('does not remove non-block identifiers outside the blocks array', async () => {
        const content = `import * as Faq from '@o2s/blocks.faq/api-harmonization';
import * as HeroSection from '@o2s/blocks.hero-section/api-harmonization';

const unrelated = {
    HeroSection,
};

export const blocks = [
    Faq,
    HeroSection,
];
`;
        await writeConfig(content);

        await transformBlocksConfig(projectDir, ['faq']);

        const result = await readConfig();
        expect(result).toContain('const unrelated = {\n    HeroSection,\n};');
        expect(result).toContain('export const blocks = [\n    Faq,\n];');
    });

    it('handles a type-annotated blocks array', async () => {
        await writeConfig(BLOCKS_CONFIG.replace('export const blocks = [', 'export const blocks: BlockModule[] = ['));

        await transformBlocksConfig(projectDir, ['faq']);

        expect(await readConfig()).toContain(
            'export const blocks: BlockModule[] = [\n    Faq,\n    // BLOCK REGISTER\n];',
        );
    });

    it('handles a blocks array declared `as const`', async () => {
        await writeConfig(BLOCKS_CONFIG.replace('    // BLOCK REGISTER\n];', '    // BLOCK REGISTER\n] as const;'));

        await transformBlocksConfig(projectDir, ['faq']);

        const result = await readConfig();
        expect(result).toContain('export const blocks = [\n    Faq,\n    // BLOCK REGISTER\n] as const;');
        // the union after the array is still processed
        expect(result).toContain("    | Faq.Model.FaqBlock['__typename'];\n");
    });

    it('does nothing when blocks.config.ts does not exist', async () => {
        await expect(transformBlocksConfig(projectDir, ['faq'])).resolves.toBeUndefined();
        expect(await fs.pathExists(path.join(projectDir, FILE_PATH))).toBe(false);
    });
});

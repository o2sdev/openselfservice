import { transformBlocksConfig } from './transform-blocks-config';
import { transformRenderBlocks } from './transform-render-blocks';
import * as fs from 'fs-extra';
import * as os from 'os';
import * as path from 'path';
import * as ts from 'typescript';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

/**
 * Runs the transforms on the real files from this repository, so a change in their format
 * (e.g. a new type annotation) fails here instead of breaking scaffolded projects.
 */

const REPO_ROOT = path.resolve(__dirname, '../../../../..');

const BLOCKS_CONFIG_PATH = 'apps/api-harmonization/src/blocks.config.ts';
const RENDER_BLOCKS_PATH = 'apps/frontend/src/blocks/renderBlocks.tsx';

const API_IMPORT_REGEX = /^import \* as (\w+) from '@o2s\/blocks\.([^/]+)\/api-harmonization';$/;
const FRONTEND_IMPORT_REGEX = /^import \* as (\w+) from '@o2s\/blocks\.([^/]+)\/frontend';$/;
const NAMED_IMPORT_REGEX = /^import \{([^}]+)\} from '[^']+';$/;
const IDENTIFIER_REGEX = /\b[A-Za-z_$][\w$]*\b/g;

const discoverBlocks = (content: string, importRegex: RegExp): Map<string, string> => {
    const blocks = new Map<string, string>(); // blockName → alias
    for (const line of content.split('\n')) {
        const match = line.match(importRegex);
        if (match && match[1] && match[2]) blocks.set(match[2], match[1]);
    }
    return blocks;
};

const identifiers = (lines: string[]) => new Set(lines.flatMap((line) => line.match(IDENTIFIER_REGEX) ?? []));

const namedImports = (lines: string[]) =>
    lines.flatMap((line) => {
        const match = line.match(NAMED_IMPORT_REGEX);
        return match && match[1]
            ? match[1].split(',').map(
                  (specifier) =>
                      specifier
                          .split(/\s+as\s+/)
                          .pop()
                          ?.trim() ?? '',
              )
            : [];
    });

const syntaxErrors = (content: string, fileName: string) =>
    (
        ts.transpileModule(content, {
            fileName,
            reportDiagnostics: true,
            compilerOptions: { jsx: ts.JsxEmit.Preserve, target: ts.ScriptTarget.ESNext },
        }).diagnostics ?? []
    ).map((diagnostic) => ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'));

/** Block selections to check: none, all, each block alone, all but each block, and alternating halves. */
const selectionsFor = (blockNames: string[]): [string, string[]][] => [
    ['no blocks', []],
    ['all blocks', blockNames],
    ...blockNames.map((name): [string, string[]] => [`only ${name}`, [name]]),
    ...blockNames.map((name): [string, string[]] => [`all but ${name}`, blockNames.filter((other) => other !== name)]),
    ['even blocks', blockNames.filter((_, index) => index % 2 === 0)],
    ['odd blocks', blockNames.filter((_, index) => index % 2 === 1)],
];

describe('transforms on the real repository files', () => {
    let projectDir: string;

    beforeEach(async () => {
        projectDir = await fs.mkdtemp(path.join(os.tmpdir(), 'create-o2s-app-real-files-'));
    });

    afterEach(async () => {
        await fs.remove(projectDir);
    });

    describe(BLOCKS_CONFIG_PATH, async () => {
        const original = await fs.readFile(path.join(REPO_ROOT, BLOCKS_CONFIG_PATH), 'utf-8');
        const blocks = discoverBlocks(original, API_IMPORT_REGEX);

        it('discovers the blocks registered in the file', () => {
            expect(blocks.size).toBeGreaterThan(0);
        });

        it.each(selectionsFor([...blocks.keys()]))('%s', async (_, selected) => {
            await fs.outputFile(path.join(projectDir, BLOCKS_CONFIG_PATH), original, 'utf-8');

            await transformBlocksConfig(projectDir, selected);

            const result = await fs.readFile(path.join(projectDir, BLOCKS_CONFIG_PATH), 'utf-8');
            const lines = result.split('\n');
            const used = identifiers(lines);

            for (const [blockName, alias] of blocks) {
                if (selected.includes(blockName)) {
                    expect(result).toContain(`import * as ${alias} from '@o2s/blocks.${blockName}/api-harmonization';`);
                    expect(lines).toContain(`    ${alias},`);
                    expect(result).toMatch(new RegExp(`^\\s+\\| ${alias}\\.Model\\.`, 'm'));
                } else {
                    expect(result).not.toContain(`'@o2s/blocks.${blockName}/`);
                    expect(used.has(alias)).toBe(false);
                }
            }

            expect(syntaxErrors(result, 'blocks.config.ts')).toEqual([]);
        });
    });

    describe(RENDER_BLOCKS_PATH, async () => {
        const original = await fs.readFile(path.join(REPO_ROOT, RENDER_BLOCKS_PATH), 'utf-8');
        const blocks = discoverBlocks(original, FRONTEND_IMPORT_REGEX);
        const originalLines = original.split('\n');
        const originallyUnused = new Set(
            namedImports(originalLines).filter(
                (name) => !identifiers(originalLines.filter((line) => !NAMED_IMPORT_REGEX.test(line))).has(name),
            ),
        );

        it('discovers the blocks registered in the file', () => {
            expect(blocks.size).toBeGreaterThan(0);
        });

        it.each(selectionsFor([...blocks.keys()]))('%s', async (_, selected) => {
            await fs.outputFile(path.join(projectDir, RENDER_BLOCKS_PATH), original, 'utf-8');

            await transformRenderBlocks(projectDir, selected);

            const result = await fs.readFile(path.join(projectDir, RENDER_BLOCKS_PATH), 'utf-8');
            const lines = result.split('\n');
            const usedOutsideImports = identifiers(lines.filter((line) => !NAMED_IMPORT_REGEX.test(line)));

            for (const [blockName, alias] of blocks) {
                if (selected.includes(blockName)) {
                    expect(result).toContain(`import * as ${alias} from '@o2s/blocks.${blockName}/frontend';`);
                    expect(result).toContain(`<${alias}.Renderer`);
                } else {
                    expect(result).not.toContain(`'@o2s/blocks.${blockName}/`);
                    expect(usedOutsideImports.has(alias)).toBe(false);
                }
            }

            // No named import is left unused by the transform (e.g. onSignOut without user-account).
            for (const name of namedImports(lines)) {
                if (!originallyUnused.has(name)) expect(usedOutsideImports.has(name)).toBe(true);
            }

            expect(result).not.toMatch(/\n\n\n/);
            expect(syntaxErrors(result, 'renderBlocks.tsx')).toEqual([]);
        });
    });
});

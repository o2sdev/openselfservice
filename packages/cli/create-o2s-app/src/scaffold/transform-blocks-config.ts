import { getAliasesToRemove } from './get-aliases-to-remove';
import * as fs from 'fs-extra';
import * as path from 'path';

const FILE_PATH = 'apps/api-harmonization/src/blocks.config.ts';

// Regex matches: import * as Alias from '@o2s/blocks.<name>/api-harmonization';
const BLOCK_IMPORT_REGEX = /^import \* as (\w+) from '@o2s\/blocks\.([^/]+)\/api-harmonization';$/;

// Regex matches the start of the block registry: export const blocks = [
const BLOCKS_ARRAY_START_REGEX = /^export const blocks = \[\s*$/;

// Regex matches the end of the block registry: ];
const BLOCKS_ARRAY_END_REGEX = /^\];?\s*$/;

// Regex matches an entry of the block registry:     Alias,
const BLOCK_ENTRY_REGEX = /^\s+(\w+),\s*$/;

// Regex matches:     | Alias.Model.SomeTypenameBlock['__typename']
const UNION_TYPE_REGEX = /^\s+\| (\w+)\.Model\.\w+\['__typename'\]/;

/**
 * Removes unselected blocks from `blocks.config.ts`, the single place where the API harmonization
 * app registers its blocks: the `import`, the entry in the `blocks` array and the member of the
 * `Blocks` union.
 */
export const transformBlocksConfig = async (projectDir: string, selectedBlockNames: string[]): Promise<void> => {
    const filePath = path.join(projectDir, FILE_PATH);

    if (!(await fs.pathExists(filePath))) return;

    const content = await fs.readFile(filePath, 'utf-8');
    const lines = content.split('\n');

    const aliasesToRemove = getAliasesToRemove(lines, BLOCK_IMPORT_REGEX, selectedBlockNames);

    if (aliasesToRemove.size === 0) return;

    const result: string[] = [];
    let insideBlocksArray = false;
    let lastKeptUnionIndex = -1;
    let removedUnionTerminator = false;
    let unionMemberCount = 0;
    let typeMarkerIndex = -1;

    for (const line of lines) {
        if (BLOCKS_ARRAY_START_REGEX.test(line)) {
            insideBlocksArray = true;
            result.push(line);
            continue;
        }

        if (insideBlocksArray) {
            if (BLOCKS_ARRAY_END_REGEX.test(line)) {
                insideBlocksArray = false;
            } else {
                const entryMatch = line.match(BLOCK_ENTRY_REGEX);
                if (entryMatch && entryMatch[1] && aliasesToRemove.has(entryMatch[1])) continue;
            }

            result.push(line);
            continue;
        }

        const importMatch = line.match(BLOCK_IMPORT_REGEX);
        if (importMatch && importMatch[1] && aliasesToRemove.has(importMatch[1])) continue;

        const unionMatch = line.match(UNION_TYPE_REGEX);
        if (unionMatch && unionMatch[1]) {
            unionMemberCount++;

            if (aliasesToRemove.has(unionMatch[1])) {
                // The removed member may carry the `;` that terminates the `Blocks` union.
                if (line.trimEnd().endsWith(';')) removedUnionTerminator = true;
                continue;
            }

            lastKeptUnionIndex = result.length;
        }

        if (line.includes('// BLOCK TYPE')) typeMarkerIndex = result.length;

        result.push(line);
    }

    if (removedUnionTerminator) {
        if (lastKeptUnionIndex >= 0) {
            // Move the terminating `;` to the last remaining member of the union.
            result[lastKeptUnionIndex] = `${result[lastKeptUnionIndex]?.trimEnd()};`;
        } else if (unionMemberCount > 0 && typeMarkerIndex >= 0) {
            // Every block was removed: keep the union valid so the generator can still add blocks.
            result.splice(typeMarkerIndex + 1, 0, '    | never;');
        }
    }

    await fs.writeFile(filePath, result.join('\n'), 'utf-8');
};

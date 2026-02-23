import * as fs from 'fs-extra';
import * as path from 'path';

const FILE_PATH = 'apps/api-harmonization/src/modules/page/page.model.ts';

// Regex matches: import * as Alias from '@o2s/blocks.<name>/api-harmonization';
const BLOCK_IMPORT_REGEX = /^import \* as (\w+) from '@o2s\/blocks\.([^/]+)\/api-harmonization';$/;

// Regex matches:     | Alias.Model.SomeTypenameBlock['__typename']
const UNION_TYPE_REGEX = /^\s+\| (\w+)\.Model\.\w+\['__typename'\]/;

export const transformPageModel = async (projectDir: string, selectedBlockNames: string[]): Promise<void> => {
    const filePath = path.join(projectDir, FILE_PATH);

    if (!(await fs.pathExists(filePath))) return;

    const content = await fs.readFile(filePath, 'utf-8');
    const lines = content.split('\n');

    // Discover alias → blockName map from the actual file
    const aliasToBlock = new Map<string, string>();
    for (const line of lines) {
        const match = line.match(BLOCK_IMPORT_REGEX);
        if (match && match[1] && match[2]) {
            aliasToBlock.set(match[1], match[2]); // alias → blockName
        }
    }

    // Build set of aliases for blocks the user did NOT select
    const aliasesToRemove = new Set<string>();
    for (const [alias, blockName] of aliasToBlock.entries()) {
        if (!selectedBlockNames.includes(blockName)) {
            aliasesToRemove.add(alias);
        }
    }

    if (aliasesToRemove.size === 0) return;

    const filteredLines = lines.filter((line) => {
        const importMatch = line.match(BLOCK_IMPORT_REGEX);
        if (importMatch && importMatch[1] && aliasesToRemove.has(importMatch[1])) return false;

        const unionMatch = line.match(UNION_TYPE_REGEX);
        if (unionMatch && unionMatch[1] && aliasesToRemove.has(unionMatch[1])) return false;

        return true;
    });

    await fs.writeFile(filePath, filteredLines.join('\n'), 'utf-8');
};

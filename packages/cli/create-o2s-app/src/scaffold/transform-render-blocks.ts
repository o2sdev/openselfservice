import * as fs from 'fs-extra';
import * as path from 'path';

const FILE_PATH = 'apps/frontend/src/blocks/renderBlocks.tsx';

// Regex matches: import * as Alias from '@o2s/blocks.<name>/frontend';
const BLOCK_IMPORT_REGEX = /^import \* as (\w+) from '@o2s\/blocks\.([^/]+)\/frontend';$/;

// Regex matches:     SomeBlock: (blockProps) => <Alias.Renderer ...
const REGISTRY_ENTRY_REGEX = /^\s+\w+:\s*\(blockProps\)\s*=>\s*<(\w+)\.Renderer/;

export const transformRenderBlocks = async (projectDir: string, selectedBlockNames: string[]): Promise<void> => {
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

    // Process line by line
    const result: string[] = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line === undefined) continue;

        // Remove block import lines
        const importMatch = line.match(BLOCK_IMPORT_REGEX);
        if (importMatch && importMatch[1] && aliasesToRemove.has(importMatch[1])) {
            continue;
        }

        // Remove BLOCK_REGISTRY entries for unselected blocks
        const registryMatch = line.match(REGISTRY_ENTRY_REGEX);
        if (registryMatch && registryMatch[1] && aliasesToRemove.has(registryMatch[1])) {
            continue;
        }

        result.push(line);
    }

    await fs.writeFile(filePath, result.join('\n'), 'utf-8');
};

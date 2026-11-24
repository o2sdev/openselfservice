import * as fs from 'fs-extra';
import * as path from 'path';

const FILE_PATH = 'apps/frontend/src/blocks/renderBlocks.tsx';

// Regex matches: import * as Alias from '@o2s/blocks.<name>/frontend';
const BLOCK_IMPORT_REGEX = /^import \* as (\w+) from '@o2s\/blocks\.([^/]+)\/frontend';$/;

// Regex matches:     SomeBlock: (blockProps) => <Alias.Renderer ...
const REGISTRY_ENTRY_REGEX = /^\s+\w+:\s*\(blockProps\)\s*=>\s*<(\w+)\.Renderer/;

// Regex matches a single-line named import: import { a, b as c } from '...';
const NAMED_IMPORT_REGEX = /^import \{([^}]+)\} from '([^']+)';$/;

const IDENTIFIER_REGEX = /\b[A-Za-z_$][\w$]*\b/g;

/**
 * Removes named imports that were only used by the removed registry entries
 * (e.g. `onSignOut`, passed only to the user-account block), so the generated
 * file passes `no-unused-vars`. Imports unrelated to removed entries are left untouched.
 */
const removeImportsOrphanedByRemovedEntries = (lines: string[], removedEntries: string[]): string[] => {
    const candidates = new Set(removedEntries.flatMap((entry) => entry.match(IDENTIFIER_REGEX) ?? []));
    if (candidates.size === 0) return lines;

    // Identifiers still referenced outside the named imports (no dynamic RegExp needed)
    const usedIdentifiers = new Set(
        lines.filter((line) => !NAMED_IMPORT_REGEX.test(line)).flatMap((line) => line.match(IDENTIFIER_REGEX) ?? []),
    );
    const isUsed = (identifier: string) => usedIdentifiers.has(identifier);

    const result: string[] = [];
    // Set when an import line is dropped right after a blank line, so the blank line that
    // separated it from the next import group is dropped too (no double blank lines).
    let skipNextBlankLine = false;

    for (const line of lines) {
        const match = line.match(NAMED_IMPORT_REGEX);
        if (!match || !match[1]) {
            if (skipNextBlankLine && line.trim() === '') {
                skipNextBlankLine = false;
                continue;
            }
            skipNextBlankLine = false;
            result.push(line);
            continue;
        }

        skipNextBlankLine = false;

        const specifiers = match[1]
            .split(',')
            .map((specifier) => specifier.trim())
            .filter(Boolean);
        const kept = specifiers.filter((specifier) => {
            const local =
                specifier
                    .split(/\s+as\s+/)
                    .pop()
                    ?.trim() ?? specifier;
            return !candidates.has(local) || isUsed(local);
        });

        if (kept.length === specifiers.length) {
            result.push(line);
        } else if (kept.length > 0) {
            result.push(`import { ${kept.join(', ')} } from '${match[2]}';`);
        } else {
            skipNextBlankLine = result.length === 0 || result[result.length - 1]?.trim() === '';
        }
    }

    return result;
};

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
    const removedEntries: string[] = [];

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
            removedEntries.push(line);
            continue;
        }

        result.push(line);
    }

    await fs.writeFile(filePath, removeImportsOrphanedByRemovedEntries(result, removedEntries).join('\n'), 'utf-8');
};

/**
 * Finds the import aliases of the blocks the user did NOT select.
 *
 * Aliases are discovered from the file itself (handles special aliases), using `importRegex`,
 * which must capture the alias in group 1 and the block name in group 2, e.g.
 * `import * as Alias from '@o2s/blocks.<name>/api-harmonization';`.
 */
export const getAliasesToRemove = (lines: string[], importRegex: RegExp, selectedBlockNames: string[]): Set<string> => {
    const aliasesToRemove = new Set<string>();

    for (const line of lines) {
        const match = line.match(importRegex);
        if (match && match[1] && match[2] && !selectedBlockNames.includes(match[2])) {
            aliasesToRemove.add(match[1]);
        }
    }

    return aliasesToRemove;
};

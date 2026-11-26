import { getAliasesToRemove } from './get-aliases-to-remove';
import * as fs from 'fs-extra';
import * as path from 'path';

const FILE_PATH = 'apps/api-harmonization/src/app.module.ts';

// Regex matches: import * as Alias from '@o2s/blocks.<name>/api-harmonization';
const BLOCK_IMPORT_REGEX = /^import \* as (\w+) from '@o2s\/blocks\.([^/]+)\/api-harmonization';$/;

// Regex matches:     Alias.Module.register(AppConfig),
const BLOCK_REGISTRATION_REGEX = /^\s+(\w+)\.Module\.register\(AppConfig\),\s*$/;

// TODO: remove this transform once `create-o2s-app/base` registers blocks in
// `apps/api-harmonization/src/blocks.config.ts` (handled by `transform-blocks-config.ts`).
export const transformAppModule = async (projectDir: string, selectedBlockNames: string[]): Promise<void> => {
    const filePath = path.join(projectDir, FILE_PATH);

    if (!(await fs.pathExists(filePath))) return;

    const content = await fs.readFile(filePath, 'utf-8');
    const lines = content.split('\n');

    const aliasesToRemove = getAliasesToRemove(lines, BLOCK_IMPORT_REGEX, selectedBlockNames);

    if (aliasesToRemove.size === 0) return;

    const filteredLines = lines.filter((line) => {
        const importMatch = line.match(BLOCK_IMPORT_REGEX);
        if (importMatch && importMatch[1] && aliasesToRemove.has(importMatch[1])) return false;

        const regMatch = line.match(BLOCK_REGISTRATION_REGEX);
        if (regMatch && regMatch[1] && aliasesToRemove.has(regMatch[1])) return false;

        return true;
    });

    await fs.writeFile(filePath, filteredLines.join('\n'), 'utf-8');
};

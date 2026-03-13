import { BLOCKS_PATH } from '../constants';
import { BlockInfo } from '../types';
import { getAllTemplateCategories } from '../wizard/templates';
import * as fs from 'fs-extra';
import * as path from 'node:path';

interface BlockPackageJson {
    description?: string;
    o2sTemplate?: string[];
}

export const discoverBlocks = async (repoDir: string): Promise<BlockInfo[]> => {
    try {
        const blocksDir = path.join(repoDir, BLOCKS_PATH);
        const domainEntries = await fs.readdir(blocksDir, { withFileTypes: true });

        const blocks: BlockInfo[] = [];

        for (const domainEntry of domainEntries) {
            if (!domainEntry.isDirectory()) continue;

            const domainDirPath = path.join(blocksDir, domainEntry.name);
            const blockEntries = await fs.readdir(domainDirPath, { withFileTypes: true });

            for (const blockEntry of blockEntries) {
                if (!blockEntry.isDirectory()) continue;

                const blockName = blockEntry.name;
                const blockPath = path.join(domainEntry.name, blockName);
                const packageJson = await readBlockPackageJson(repoDir, blockPath);

                blocks.push({
                    name: blockName,
                    packageName: `@o2s/blocks.${blockName}`,
                    description: packageJson.description || `Block: ${blockName}`,
                    // Fallback to all templates when o2sTemplate is not declared
                    category: packageJson.o2sTemplate ?? getAllTemplateCategories(),
                });
            }
        }

        return blocks.sort((a, b) => a.name.localeCompare(b.name));
    } catch (error) {
        console.error('Error fetching the block list:', error);
        throw new Error('Failed to fetch the block list.');
    }
};

const readBlockPackageJson = async (repoDir: string, blockPath: string): Promise<BlockPackageJson> => {
    try {
        const packageJsonPath = path.join(repoDir, BLOCKS_PATH, blockPath, 'package.json');

        if (await fs.pathExists(packageJsonPath)) {
            return await fs.readJson(packageJsonPath);
        }

        return {};
    } catch (error) {
        console.warn(`Warning: Could not read package.json for block "${blockPath}":`, error);
        return {};
    }
};

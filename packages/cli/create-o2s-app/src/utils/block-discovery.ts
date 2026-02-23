import { BLOCKS_PATH } from '../constants';
import { BlockInfo } from '../types';
import { getAllTemplateCategories } from '../wizard/templates';
import * as fs from 'fs-extra';
import * as path from 'path';

interface BlockPackageJson {
    description?: string;
    o2sTemplate?: string[];
}

export const discoverBlocks = async (repoDir: string): Promise<BlockInfo[]> => {
    try {
        const blocksDir = path.join(repoDir, BLOCKS_PATH);
        const entries = await fs.readdir(blocksDir, { withFileTypes: true });

        const blocks: BlockInfo[] = [];

        for (const entry of entries) {
            if (!entry.isDirectory()) continue;

            const blockName = entry.name;
            const packageJson = await readBlockPackageJson(repoDir, blockName);

            blocks.push({
                name: blockName,
                packageName: `@o2s/blocks.${blockName}`,
                description: packageJson.description || `Block: ${blockName}`,
                // Fallback to all templates when o2sTemplate is not declared
                category: packageJson.o2sTemplate ?? getAllTemplateCategories(),
            });
        }

        return blocks.sort((a, b) => a.name.localeCompare(b.name));
    } catch (error) {
        console.error('Error fetching the block list:', error);
        throw new Error('Failed to fetch the block list.');
    }
};

const readBlockPackageJson = async (repoDir: string, blockName: string): Promise<BlockPackageJson> => {
    try {
        const packageJsonPath = path.join(repoDir, BLOCKS_PATH, blockName, 'package.json');

        if (await fs.pathExists(packageJsonPath)) {
            return await fs.readJson(packageJsonPath);
        }

        return {};
    } catch {
        return {};
    }
};

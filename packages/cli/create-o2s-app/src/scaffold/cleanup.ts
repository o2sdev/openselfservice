import { ALWAYS_REMOVE_DIRS, ALWAYS_REMOVE_FILES, BLOCKS_PATH, INTEGRATIONS_PATH } from '../constants';
import * as fs from 'fs-extra';
import * as path from 'path';

export const cleanupProject = async (
    projectDir: string,
    selectedBlockNames: string[],
    selectedIntegrationNames: string[],
): Promise<void> => {
    console.log('Organizing project structure...');

    await removeAlwaysRemovedPaths(projectDir);
    await removeUnselectedBlocks(projectDir, selectedBlockNames);
    await removeUnselectedIntegrations(projectDir, selectedIntegrationNames);
};

const removeAlwaysRemovedPaths = async (projectDir: string): Promise<void> => {
    for (const dir of ALWAYS_REMOVE_DIRS) {
        const fullPath = path.join(projectDir, dir);
        if (await fs.pathExists(fullPath)) {
            await fs.remove(fullPath);
        }
    }

    for (const file of ALWAYS_REMOVE_FILES) {
        const fullPath = path.join(projectDir, file);
        if (await fs.pathExists(fullPath)) {
            await fs.remove(fullPath);
        }
    }
};

const removeUnselectedBlocks = async (projectDir: string, selectedBlockNames: string[]): Promise<void> => {
    const blocksDir = path.join(projectDir, BLOCKS_PATH);

    if (!(await fs.pathExists(blocksDir))) return;

    const entries = await fs.readdir(blocksDir, { withFileTypes: true });

    for (const entry of entries) {
        if (!entry.isDirectory()) continue;

        if (!selectedBlockNames.includes(entry.name)) {
            await fs.remove(path.join(blocksDir, entry.name));
        }
    }
};

const removeUnselectedIntegrations = async (projectDir: string, selectedIntegrationNames: string[]): Promise<void> => {
    const integrationsDir = path.join(projectDir, INTEGRATIONS_PATH);

    if (!(await fs.pathExists(integrationsDir))) return;

    const entries = await fs.readdir(integrationsDir, { withFileTypes: true });

    for (const entry of entries) {
        if (!entry.isDirectory()) continue;

        if (!selectedIntegrationNames.includes(entry.name)) {
            await fs.remove(path.join(integrationsDir, entry.name));
        }
    }
};

import { ALWAYS_REMOVE_DIRS, ALWAYS_REMOVE_FILES } from '../constants';
import * as fs from 'fs-extra';
import * as path from 'path';

/**
 * Removes @o2s/framework references from .storybook/main.ts after scaffolding.
 * The packages/framework directory is always removed, so these aliases and
 * optimizeDeps entries would cause Storybook to fail.
 */
const cleanStorybookConfig = async (projectDir: string): Promise<void> => {
    const configPath = path.join(projectDir, '.storybook', 'main.ts');
    if (!(await fs.pathExists(configPath))) return;

    let content = await fs.readFile(configPath, 'utf-8');

    // Remove @o2s/framework lines from optimizeDeps.include
    content = content.replace(/\s*'@o2s\/framework\/modules',?\n?/g, '');
    content = content.replace(/\s*'@o2s\/framework\/sdk',?\n?/g, '');

    // Remove @o2s/framework alias lines from resolve.alias
    content = content.replace(/\s*'@o2s\/framework\/sdk':.*\n/g, '');
    content = content.replace(/\s*'@o2s\/framework\/modules':.*\n/g, '');

    await fs.writeFile(configPath, content, 'utf-8');
};

export const cleanupProject = async (projectDir: string): Promise<void> => {
    console.log('Organizing project structure...');

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

    // Clean storybook config after removing framework directory
    await cleanStorybookConfig(projectDir);
};

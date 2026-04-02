import { ALWAYS_REMOVE_DIRS, ALWAYS_REMOVE_FILES } from '../constants';
import * as fs from 'fs-extra';
import * as path from 'path';

/**
 * Remove only public (non-private) packages from packages/modules/.
 * Private modules are kept as local workspace packages in scaffolded projects.
 */
const cleanupModules = async (projectDir: string): Promise<void> => {
    const modulesDir = path.join(projectDir, 'packages', 'modules');

    if (!(await fs.pathExists(modulesDir))) return;

    const entries = await fs.readdir(modulesDir, { withFileTypes: true });

    for (const entry of entries) {
        if (!entry.isDirectory()) continue;

        const pkgJsonPath = path.join(modulesDir, entry.name, 'package.json');

        if (!(await fs.pathExists(pkgJsonPath))) {
            await fs.remove(path.join(modulesDir, entry.name));
            continue;
        }

        const pkgJson = await fs.readJson(pkgJsonPath);

        if (pkgJson.private !== true) {
            await fs.remove(path.join(modulesDir, entry.name));
        }
    }

    // Remove the modules directory itself if empty
    const remaining = await fs.readdir(modulesDir);
    if (remaining.length === 0) {
        await fs.remove(modulesDir);
    }
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

    await cleanupModules(projectDir);
};

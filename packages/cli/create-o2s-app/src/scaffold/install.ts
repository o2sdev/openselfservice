import { ALWAYS_REMOVE_DIRS } from '../constants';
import { execSync } from 'child_process';
import * as fs from 'fs-extra';
import * as path from 'path';

/**
 * Clean package-lock.json by removing:
 * - Local workspace symlink entries ("link": true)
 * - Entries for directories removed during cleanup (packages/blocks/*, packages/integrations/*, etc.)
 * - References to unselected integrations in nested dependency lists
 *
 * Without this, npm install would either recreate empty folders for removed
 * workspace packages or install unselected integrations from the registry.
 */
export const cleanPackageLock = async (projectDir: string, selectedIntegrations: string[]): Promise<void> => {
    const lockFilePath = path.join(projectDir, 'package-lock.json');

    if (!(await fs.pathExists(lockFilePath))) return;

    const file = await fs.readFile(lockFilePath, 'utf8');
    const json = JSON.parse(file);

    const isUnselectedIntegration = (name: string): boolean => {
        const match = name.match(/^@o2s\/integrations\.(.+)$/);
        return !!match && !!match[1] && !selectedIntegrations.includes(match[1]);
    };

    const isRemovedDir = (key: string): boolean => {
        return ALWAYS_REMOVE_DIRS.some((dir) => key === dir || key.startsWith(`${dir}/`));
    };

    if (json?.packages) {
        for (const [key, value] of Object.entries(json.packages)) {
            if (!value || typeof value !== 'object') continue;
            const entry = value as Record<string, unknown>;

            // Remove local workspace symlinks
            if (entry.link) {
                delete json.packages[key];
                continue;
            }

            // Remove stale entries: deleted directories and workspace packages
            // whose package.json was modified during scaffolding.
            // npm install will regenerate correct entries from the actual files on disk.
            if (isRemovedDir(key) || key.startsWith('packages/')) {
                delete json.packages[key];
                continue;
            }

            // Remove unselected integrations from nested dependencies
            for (const section of ['dependencies', 'devDependencies'] as const) {
                const deps = entry[section] as Record<string, string> | undefined;
                if (!deps) continue;
                for (const depName of Object.keys(deps)) {
                    if (isUnselectedIntegration(depName)) {
                        delete deps[depName];
                    }
                }
            }
        }
    }

    await fs.writeFile(lockFilePath, JSON.stringify(json, null, 4));
};

export const installDependencies = async (projectDir: string, selectedIntegrations: string[]): Promise<void> => {
    await cleanPackageLock(projectDir, selectedIntegrations);

    console.log();
    console.log('Installing dependencies...');
    console.log();

    try {
        execSync('npm install', {
            cwd: projectDir,
            stdio: 'inherit',
        });
        execSync('npm dedupe', {
            cwd: projectDir,
            stdio: 'inherit',
        });
        console.log('Dependencies installed successfully.');
    } catch (error) {
        console.error('Error while installing dependencies.');
        console.error('You can try running "npm install" manually in the project directory.');
        throw error;
    }
};

import { execSync } from 'child_process';
import * as fs from 'fs-extra';
import * as path from 'path';

/**
 * Remove symlink entries ("link": true) from package-lock.json.
 * Without this, npm install would recreate empty folders for removed packages
 * (framework, integrations, blocks etc.) because the lock file still references them.
 */
export const cleanPackageLock = async (projectDir: string): Promise<void> => {
    const lockFilePath = path.join(projectDir, 'package-lock.json');

    if (!(await fs.pathExists(lockFilePath))) return;

    const file = await fs.readFile(lockFilePath, 'utf8');
    const json = JSON.parse(file);

    if (json?.packages) {
        for (const [key, value] of Object.entries(json.packages)) {
            if (value && typeof value === 'object' && (value as { link?: boolean }).link) {
                delete json.packages[key];
            }
        }
    }

    await fs.writeFile(lockFilePath, JSON.stringify(json, null, 4));
};

export const installDependencies = async (projectDir: string): Promise<void> => {
    await cleanPackageLock(projectDir);

    console.log();
    console.log('Installing dependencies...');
    console.log();

    try {
        execSync('npm install', {
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

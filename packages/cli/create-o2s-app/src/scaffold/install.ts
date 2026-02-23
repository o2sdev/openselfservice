import { execSync } from 'child_process';
import * as fs from 'fs-extra';
import * as path from 'path';

export const installDependencies = async (projectDir: string): Promise<void> => {
    await fixPackageLock(projectDir);

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

const fixPackageLock = async (projectDir: string): Promise<void> => {
    const lockFilePath = path.join(projectDir, 'package-lock.json');

    if (!(await fs.pathExists(lockFilePath))) return;

    const content = await fs.readFile(lockFilePath, 'utf-8');
    const json = JSON.parse(content);

    if (json && json.packages) {
        for (const [key, value] of Object.entries(json.packages)) {
            if (value && typeof value === 'object' && (value as { link: boolean }).link) {
                delete json.packages[key];
            }
        }
    }

    await fs.writeFile(lockFilePath, JSON.stringify(json, null, 4), 'utf-8');
};

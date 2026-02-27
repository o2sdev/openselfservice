import { execSync } from 'child_process';
import * as fs from 'fs-extra';
import * as path from 'path';

export const removePackageLock = async (projectDir: string): Promise<void> => {
    const lockFilePath = path.join(projectDir, 'package-lock.json');

    if (await fs.pathExists(lockFilePath)) {
        await fs.remove(lockFilePath);
    }
};

export const installDependencies = async (projectDir: string): Promise<void> => {
    await removePackageLock(projectDir);

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

import { ALWAYS_REMOVE_DIRS, ALWAYS_REMOVE_FILES } from '../constants';
import * as fs from 'fs-extra';
import * as path from 'path';

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
};

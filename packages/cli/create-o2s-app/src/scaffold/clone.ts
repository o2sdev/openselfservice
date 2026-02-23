import { GITHUB_BRANCH, GITHUB_REPO_URL } from '../constants';
import cliProgress from 'cli-progress';
import * as fs from 'fs-extra';
import * as os from 'os';
import * as path from 'path';
import simpleGit from 'simple-git';

export const cloneRepository = async (): Promise<string> => {
    const tempDir = path.join(os.tmpdir(), `openselfservice-${Date.now()}`);
    await fs.ensureDir(tempDir);

    console.log(`Cloning template from "${GITHUB_REPO_URL}" (branch: "${GITHUB_BRANCH}")...`);
    console.log();

    const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    bar.start(100, 0);

    try {
        const git = simpleGit({
            progress({ progress }) {
                bar.update(Math.round(progress));
            },
        });

        await git.clone(GITHUB_REPO_URL, tempDir, ['--branch', GITHUB_BRANCH, '--single-branch', '--depth', '1']);

        bar.update(100);
        bar.stop();
        console.log();

        return tempDir;
    } catch (error) {
        bar.stop();
        throw error;
    }
};

export const cleanupTempDir = async (tempDir: string): Promise<void> => {
    try {
        if (await fs.pathExists(tempDir)) {
            await fs.remove(tempDir);
        }
    } catch (_error) {
        console.error(`Warning: Could not clean up temporary directory: ${tempDir}`);
    }
};

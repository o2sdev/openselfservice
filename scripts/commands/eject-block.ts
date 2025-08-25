import { execSync } from 'child_process';
import cliProgress from 'cli-progress';
import * as fs from 'fs-extra';
import * as os from 'os';
import * as path from 'path';
import prompts, { PromptObject } from 'prompts';
import simpleGit from 'simple-git';

// Constants
const PROJECT_PREFIX = 'o2s';
const PROJECT_NAME = `openselfservice`;
const GITHUB_REPO_URL = `https://github.com/o2sdev/${PROJECT_NAME}.git`;
const BRANCH = 'main';
const BLOCKS_PATH = 'packages/blocks'; // Path to blocks directory in the repo relative to the branch
const PROJECT_ROOT = path.resolve(__dirname, '../..'); // Adjust to project root
const OUTPUT_DIR = path.join(PROJECT_ROOT, 'packages/blocks'); // Local target folder
const FRONTEND_DIR = path.join(PROJECT_ROOT, 'apps/frontend'); // Frontend app directory
const TEMP_DIR = path.join(os.tmpdir(), `${PROJECT_NAME}-${Date.now()}`); // Temporary directory for cloning

// Types
interface FileEntry {
    name: string;
    type: 'file' | 'dir';
    path: string;
}

// Clone the repository to a temporary directory
const cloneRepository = async (): Promise<string> => {
    try {
        console.log(`Cloning repository to temporary directory: ${TEMP_DIR}`);
        await fs.ensureDir(TEMP_DIR);
        const git = simpleGit();
        await git.clone(GITHUB_REPO_URL, TEMP_DIR, ['--branch', BRANCH, '--single-branch', '--depth', '1']);
        console.log('Repository cloned successfully');
        console.log();

        return TEMP_DIR;
    } catch (error) {
        console.error('Error cloning repository:', error);
        throw new Error('Failed to clone repository.');
    }
};

// Get the list of blocks (top-level folders) from the local clone
const fetchBlocksList = async (): Promise<FileEntry[]> => {
    try {
        const blocksDir = path.join(TEMP_DIR, BLOCKS_PATH);
        const entries = await fs.readdir(blocksDir, { withFileTypes: true });

        return entries
            .filter((entry) => entry.isDirectory())
            .map((entry) => ({
                name: entry.name,
                type: 'dir',
                path: path.join(BLOCKS_PATH, entry.name),
            }));
    } catch (error) {
        console.error('Error fetching the block list:', error);
        throw new Error('Failed to fetch the block list.');
    }
};

// Read the package.json for a block and extract its description
const fetchBlockDescription = async (blockPath: string): Promise<string | undefined> => {
    try {
        const packageJsonPath = path.join(TEMP_DIR, blockPath, 'package.json');
        if (await fs.pathExists(packageJsonPath)) {
            const packageJson = await fs.readJson(packageJsonPath);
            return packageJson.description;
        }
        return undefined;
    } catch {
        // Return a default value if the package.json does not exist or fails to read
        return undefined;
    }
};

// Recursively get all files in a given directory
const fetchAllFiles = async (directoryPath: string): Promise<FileEntry[]> => {
    try {
        const fullPath = path.join(TEMP_DIR, directoryPath);
        const entries = await fs.readdir(fullPath, { withFileTypes: true });

        const files: FileEntry[] = [];

        for (const entry of entries) {
            const entryPath = path.join(directoryPath, entry.name);

            if (entry.isFile()) {
                files.push({
                    name: entry.name,
                    type: 'file',
                    path: entryPath,
                });
            } else if (entry.isDirectory()) {
                files.push(...(await fetchAllFiles(entryPath)));
            }
        }

        return files;
    } catch (error) {
        console.error('Error fetching files from directory:', directoryPath, error);
        return [];
    }
};

// Copy a single file from the local clone to the target path
const copyFile = async (filePath: string, targetPath: string): Promise<void> => {
    try {
        const sourcePath = path.join(TEMP_DIR, filePath);
        await fs.copy(sourcePath, targetPath);
    } catch (error) {
        console.error(`Failed to copy file: ${filePath}`, error);
    }
};

// Copy block files from the local clone to the target directory
const copyBlock = async (blockPath: string, localPath: string): Promise<void> => {
    const entries = await fetchAllFiles(blockPath); // Fetch all files in the block
    const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

    progressBar.start(entries.length, 0);

    for (const entry of entries) {
        const filePath = entry.path; // Full path of the file in the clone
        const relativePath = path.relative(blockPath, filePath); // Path relative to the block root
        const localFilePath = path.join(localPath, relativePath); // Reconstruct full local path

        // Ensure the directory exists
        const localDir = path.dirname(localFilePath);
        await fs.ensureDir(localDir);

        // Copy the file
        await copyFile(filePath, localFilePath);
        progressBar.increment(); // Update the progress bar
    }

    progressBar.stop();
};

// Main Action for the eject-block Command
export const ejectBlockCommand = async () => {
    try {
        // Clone the repository
        await cloneRepository();

        // Fetch available blocks
        const blocks = await fetchBlocksList();

        // Fetch descriptions for all blocks
        const blockChoices = await Promise.all(
            blocks.map(async (block) => {
                const description = await fetchBlockDescription(block.path);
                return { title: block.name, value: block.path, description };
            }),
        );

        // Prompt the user to select blocks
        const prompt: PromptObject<'selectedBlocks'> = {
            type: 'multiselect',
            name: 'selectedBlocks',
            message: 'Select the blocks you want to eject:',
            choices: blockChoices,
            min: 1,
            instructions: false,
            hint: '- Space to select. Return to submit',
        };

        const { selectedBlocks } = await prompts(prompt);

        if (!selectedBlocks || selectedBlocks.length === 0) {
            console.log('No blocks selected. Exiting...');
            // Clean up temporary directory
            await cleanupTempDir();
            return;
        }

        // Copy each selected block
        for (const block of selectedBlocks) {
            const blockName = path.basename(block);

            console.log();
            console.log(`Copying block: ${blockName}`);

            await copyBlock(block, path.join(OUTPUT_DIR, blockName));

            console.log(`Block "${blockName}" ejected successfully.`);

            // Install the ejected block in the frontend app
            await installBlockInFrontend(blockName);
        }

        console.log();
        console.log('All selected blocks have been ejected!');
    } catch (error) {
        console.error('Error ejecting blocks:', error);
    } finally {
        // Clean up temporary directory
        await cleanupTempDir();
    }
};

// Run npm install for an ejected block in the frontend directory
const installBlockInFrontend = async (blockName: string): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
        console.log(`Installing block "${blockName}"...`);

        // Construct the package name (assuming it follows the @dxp/blocks.{blockName} pattern)
        const packageName = `@${PROJECT_PREFIX}/blocks.${blockName}`;

        try {
            execSync(
                `npm install ${packageName}@* --workspace=@${PROJECT_PREFIX}/frontend  --workspace=@${PROJECT_PREFIX}/api-harmonization`,
                {
                    cwd: PROJECT_ROOT,
                },
            );
        } catch (error) {
            console.error(`Error installing block "${blockName}":`, error);
            reject(error);
            return;
        }

        console.log(`Block "${blockName}" installed successfully.`);
        resolve();
    });
};

// Clean up the temporary directory
const cleanupTempDir = async (): Promise<void> => {
    try {
        if (await fs.pathExists(TEMP_DIR)) {
            console.log(`Cleaning up temporary directory: ${TEMP_DIR}`);
            await fs.remove(TEMP_DIR);
        }
    } catch (error) {
        console.error('Error cleaning up temporary directory:', error);
    }
};

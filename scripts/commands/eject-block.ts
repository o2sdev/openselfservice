import axios from 'axios';
import cliProgress from 'cli-progress';
import * as fs from 'fs';
import * as path from 'path';
import prompts, { PromptObject } from 'prompts';

// Constants
const GITHUB_API_REPO = 'https://api.github.com/repos/o2sdev/openselfservice';
const BRANCH = 'feature/blocks-refactoring';
const BLOCKS_PATH = 'packages/blocks'; // Path to blocks directory in the repo relative to the branch
const PROJECT_ROOT = path.resolve(__dirname, '../..'); // Adjust to project root
const OUTPUT_DIR = path.join(PROJECT_ROOT, 'packages/blocks'); // Local target folder

// Types
interface GitHubEntry {
    name: string;
    type: 'file' | 'dir';
    path: string;
    download_url: string | null;
}

// Fetch the list of blocks (top-level folders) from GitHub
const fetchBlocksList = async (): Promise<GitHubEntry[]> => {
    try {
        const response = await axios.get<GitHubEntry[]>(`${GITHUB_API_REPO}/contents/${BLOCKS_PATH}?ref=${BRANCH}`);
        return response.data.filter((item) => item.type === 'dir'); // Only directories
    } catch (error) {
        console.error('Error fetching the block list:', error);
        throw new Error('Failed to fetch the block list.');
    }
};

// Fetch the package.json for a block and extract its description
const fetchBlockDescription = async (blockPath: string): Promise<string | undefined> => {
    try {
        const packageJsonPath = `${blockPath}/package.json`;
        const response = await axios.get<{ description?: string }>(
            `${GITHUB_API_REPO}/contents/${packageJsonPath}?ref=${BRANCH}`,
            { headers: { Accept: 'application/vnd.github.v3.raw' } }, // Fetch raw content
        );

        return response.data.description;
    } catch {
        // Return a default value if the package.json does not exist or fails to fetch
        return undefined;
    }
};

// Recursively fetch all files in a given directory
const fetchAllFiles = async (directoryPath: string): Promise<GitHubEntry[]> => {
    try {
        const response = await axios.get<GitHubEntry[]>(`${GITHUB_API_REPO}/contents/${directoryPath}?ref=${BRANCH}`);

        const files = response.data.filter((entry) => entry.type === 'file');
        const subDirectories = response.data.filter((entry) => entry.type === 'dir');

        for (const dir of subDirectories) {
            files.push(...(await fetchAllFiles(dir.path)));
        }

        return files;
    } catch (error) {
        console.error('Error fetching files from directory:', directoryPath, error);
        return [];
    }
};

// Function to construct the Raw GitHub URL for a file
const getRawFileUrl = (filePath: string): string => {
    const baseUrl = 'https://github.com/o2sdev/openselfservice/raw';
    return `${baseUrl}/refs/heads/${BRANCH}/${filePath}`;
};

// Download a single file using the Raw URL
const downloadFile = async (filePath: string, targetPath: string): Promise<void> => {
    try {
        const rawUrl = getRawFileUrl(filePath); // Use the raw GitHub URL for the file
        const response = await axios.get(rawUrl, { responseType: 'stream' });

        await new Promise<void>((resolve, reject) => {
            const writer = fs.createWriteStream(targetPath);
            response.data.pipe(writer);
            writer.on('finish', resolve);
            writer.on('error', reject);
        });
    } catch (error) {
        console.error(`Failed to download file: ${filePath}`, error);
    }
};

// Updated downloadBlock using the new downloadFile implementation
const downloadBlock = async (blockPath: string, localPath: string): Promise<void> => {
    const entries = await fetchAllFiles(blockPath); // Fetch all files in the block
    const progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

    progressBar.start(entries.length, 0);

    for (const entry of entries) {
        const filePath = entry.path; // Full GitHub path of the file
        const relativePath = path.relative(blockPath, filePath); // Path relative to the block root
        const localFilePath = path.join(localPath, relativePath); // Reconstruct full local path

        // Ensure the directory exists
        const localDir = path.dirname(localFilePath);
        if (!fs.existsSync(localDir)) {
            fs.mkdirSync(localDir, { recursive: true });
        }

        // Download the file
        await downloadFile(filePath, localFilePath);
        progressBar.increment(); // Update the progress bar
    }

    progressBar.stop();
};

// Main Action for the eject-block Command
export const ejectBlockCommand = async () => {
    try {
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
            return;
        }

        // Download each selected block
        for (const block of selectedBlocks) {
            const blockName = path.basename(block);

            console.log();
            console.log(`Downloading block: ${blockName}`);

            await downloadBlock(block, path.join(OUTPUT_DIR, blockName));

            console.log(`Block "${blockName}" ejected successfully.`);
        }

        console.log();
        console.log('All selected blocks have been ejected!');
    } catch (error) {
        console.error('Error ejecting blocks:', error);
    }
};

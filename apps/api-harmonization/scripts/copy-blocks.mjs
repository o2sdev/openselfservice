#!/usr/bin/env node
/* eslint-env node */
/* eslint-disable no-undef */
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOCKS_DIR = path.join(__dirname, '../../../packages/blocks');
const API_HARMONIZATION_DIST = path.join(__dirname, '../dist/packages/blocks');
const BLOCK_DIST_PATTERN = 'dist/api-harmonization/api-harmonization';

/**
 * Copies files from block dist to api-harmonization dist.
 * Only copies files that are newer than existing targets or don't exist.
 *
 * @param {string} blockName - Name of the block to copy
 * @returns {boolean} true if files were copied, false otherwise
 */
function copyBlockFiles(blockName) {
    const blockDir = path.join(BLOCKS_DIR, blockName);
    const blockDistDir = path.join(blockDir, BLOCK_DIST_PATTERN);
    const targetDir = path.join(API_HARMONIZATION_DIST, blockName, 'src/api-harmonization');

    if (!fs.existsSync(blockDistDir)) {
        return false;
    }

    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    const distFiles = fs.readdirSync(blockDistDir);
    let copiedCount = 0;
    let hasChanges = false;

    distFiles.forEach((fileName) => {
        const sourceFilePath = path.join(blockDistDir, fileName);
        const targetFilePath = path.join(targetDir, fileName);

        if (!fs.statSync(sourceFilePath).isFile()) {
            return;
        }

        const shouldCopy =
            !fs.existsSync(targetFilePath) || fs.statSync(sourceFilePath).mtimeMs > fs.statSync(targetFilePath).mtimeMs;

        if (shouldCopy) {
            fs.copyFileSync(sourceFilePath, targetFilePath);
            copiedCount++;
            hasChanges = true;
        }
    });

    if (hasChanges) {
        console.log(`✅ Copied ${copiedCount} files from block ${blockName}`);
    }

    return hasChanges;
}

/**
 * Builds a specific block by running npm build command.
 *
 * @param {string} blockName - Name of the block to build
 * @throws {Error} If build fails
 */
function buildBlock(blockName) {
    const blockDir = path.join(BLOCKS_DIR, blockName);
    const packageJsonPath = path.join(blockDir, 'package.json');

    if (!fs.existsSync(packageJsonPath)) {
        console.log(`⚠️  package.json not found for block ${blockName}`);
        return;
    }

    try {
        console.log(`🔨 Building block ${blockName}...`);
        execSync('npm run build', {
            cwd: blockDir,
            stdio: 'inherit',
        });
        console.log(`✅ Block ${blockName} built`);
    } catch (error) {
        console.error(`❌ Error building block ${blockName}:`, error.message);
        throw error;
    }
}

/**
 * Finds the latest modification time of TypeScript files in a directory recursively.
 *
 * @param {string} directoryPath - Directory to scan
 * @returns {number} Latest modification time in milliseconds, or 0 if no files found
 */
function findLatestSourceFileTime(directoryPath) {
    let latestTime = 0;

    function scanDirectory(currentDir) {
        const directoryItems = fs.readdirSync(currentDir);

        directoryItems.forEach((itemName) => {
            const itemPath = path.join(currentDir, itemName);
            const itemStats = fs.statSync(itemPath);

            if (itemStats.isDirectory()) {
                scanDirectory(itemPath);
            } else if (itemName.endsWith('.ts')) {
                latestTime = Math.max(latestTime, itemStats.mtimeMs);
            }
        });
    }

    scanDirectory(directoryPath);
    return latestTime;
}

/**
 * Finds the latest modification time of files in dist directory.
 *
 * @param {string} distDirectoryPath - Dist directory to scan
 * @returns {number} Latest modification time in milliseconds, or 0 if no files found
 */
function findLatestDistFileTime(distDirectoryPath) {
    if (!fs.existsSync(distDirectoryPath)) {
        return 0;
    }

    let latestTime = 0;
    const distFiles = fs.readdirSync(distDirectoryPath);

    distFiles.forEach((fileName) => {
        const filePath = path.join(distDirectoryPath, fileName);
        if (fs.statSync(filePath).isFile()) {
            latestTime = Math.max(latestTime, fs.statSync(filePath).mtimeMs);
        }
    });

    return latestTime;
}

/**
 * Determines if a block needs to be rebuilt by comparing source and dist timestamps.
 *
 * @param {string} blockName - Name of the block to check
 * @returns {boolean} true if rebuild is needed, false otherwise
 */
function needsRebuild(blockName) {
    const blockDir = path.join(BLOCKS_DIR, blockName);
    const blockDistDir = path.join(blockDir, BLOCK_DIST_PATTERN);
    const sourceDir = path.join(blockDir, 'src/api-harmonization');

    if (!fs.existsSync(blockDistDir)) {
        return true;
    }

    if (!fs.existsSync(sourceDir)) {
        return false;
    }

    const latestSourceTime = findLatestSourceFileTime(sourceDir);
    const latestDistTime = findLatestDistFileTime(blockDistDir);

    return latestSourceTime > latestDistTime;
}

/**
 * Processes all blocks: rebuilds if needed and copies files to api-harmonization dist.
 */
function copyAllBlocks() {
    if (!fs.existsSync(BLOCKS_DIR)) {
        console.log('⚠️  Blocks directory does not exist');
        return;
    }

    const blockDirectories = fs.readdirSync(BLOCKS_DIR).filter((itemName) => {
        const itemPath = path.join(BLOCKS_DIR, itemName);
        return fs.statSync(itemPath).isDirectory();
    });

    blockDirectories.forEach((blockName) => {
        try {
            if (needsRebuild(blockName)) {
                buildBlock(blockName);
            }

            copyBlockFiles(blockName);
        } catch (error) {
            console.error(`❌ Error processing block ${blockName}:`, error.message);
        }
    });
}

const blockNameArgument = process.argv[2];

if (blockNameArgument) {
    buildBlock(blockNameArgument);
    copyBlockFiles(blockNameArgument);
} else {
    copyAllBlocks();
}

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
 * Copies files from block dist to api-harmonization dist
 * @returns {boolean} true if files were copied, false otherwise
 */
function copyBlockFiles(blockName) {
    const blockDir = path.join(BLOCKS_DIR, blockName);
    const blockDistDir = path.join(blockDir, BLOCK_DIST_PATTERN);
    const targetDir = path.join(API_HARMONIZATION_DIST, blockName, 'src/api-harmonization');

    // Check if block has dist
    if (!fs.existsSync(blockDistDir)) {
        return false;
    }

    // Create target directory if it doesn't exist
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    // Check if files need to be copied (compare timestamps)
    let needsCopy = false;
    const files = fs.readdirSync(blockDistDir);
    let copiedCount = 0;

    files.forEach((file) => {
        const sourceFile = path.join(blockDistDir, file);
        const targetFile = path.join(targetDir, file);

        // Check if it's a file (not a directory)
        if (fs.statSync(sourceFile).isFile()) {
            // Copy if target doesn't exist or source is newer
            if (!fs.existsSync(targetFile) || fs.statSync(sourceFile).mtimeMs > fs.statSync(targetFile).mtimeMs) {
                fs.copyFileSync(sourceFile, targetFile);
                copiedCount++;
                needsCopy = true;
            }
        }
    });

    if (needsCopy) {
        console.log(`✅ Copied ${copiedCount} files from block ${blockName}`);
    }

    return needsCopy;
}

/**
 * Builds a specific block
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
 * Checks if block needs to be rebuilt (compares source file timestamps with dist)
 */
function needsRebuild(blockName) {
    const blockDir = path.join(BLOCKS_DIR, blockName);
    const blockDistDir = path.join(blockDir, BLOCK_DIST_PATTERN);
    const sourceDir = path.join(blockDir, 'src/api-harmonization');

    // If dist doesn't exist, need to build
    if (!fs.existsSync(blockDistDir)) {
        return true;
    }

    // If source doesn't exist, skip
    if (!fs.existsSync(sourceDir)) {
        return false;
    }

    // Check timestamp of latest source file
    let latestSourceTime = 0;
    function checkDir(dir) {
        const items = fs.readdirSync(dir);
        items.forEach((item) => {
            const itemPath = path.join(dir, item);
            const stat = fs.statSync(itemPath);
            if (stat.isDirectory()) {
                checkDir(itemPath);
            } else if (item.endsWith('.ts')) {
                latestSourceTime = Math.max(latestSourceTime, stat.mtimeMs);
            }
        });
    }
    checkDir(sourceDir);

    // Check timestamp of latest file in dist
    let latestDistTime = 0;
    if (fs.existsSync(blockDistDir)) {
        const distFiles = fs.readdirSync(blockDistDir);
        distFiles.forEach((file) => {
            const filePath = path.join(blockDistDir, file);
            if (fs.statSync(filePath).isFile()) {
                latestDistTime = Math.max(latestDistTime, fs.statSync(filePath).mtimeMs);
            }
        });
    }

    return latestSourceTime > latestDistTime;
}

/**
 * Copies all blocks
 */
function copyAllBlocks() {
    if (!fs.existsSync(BLOCKS_DIR)) {
        console.log('⚠️  Blocks directory does not exist');
        return;
    }

    const blocks = fs.readdirSync(BLOCKS_DIR).filter((item) => {
        const itemPath = path.join(BLOCKS_DIR, item);
        return fs.statSync(itemPath).isDirectory();
    });

    let processedCount = 0;

    blocks.forEach((blockName) => {
        try {
            let wasProcessed = false;

            // Check if block needs to be rebuilt
            if (needsRebuild(blockName)) {
                buildBlock(blockName);
                wasProcessed = true;
            }

            // Copy files (even if no rebuild, dist might be newer)
            const filesCopied = copyBlockFiles(blockName);
            if (filesCopied) {
                wasProcessed = true;
            }

            // Only log if something was actually processed
            if (wasProcessed) {
                processedCount++;
            }
        } catch (error) {
            console.error(`❌ Error processing block ${blockName}:`, error.message);
        }
    });

    if (processedCount === 0) {
        // Silent - no changes detected
    }
}

// If run with argument (block name), copy only that block
const blockName = process.argv[2];

if (blockName) {
    // Build and copy only specific block
    buildBlock(blockName);
    copyBlockFiles(blockName);
} else {
    // Copy all blocks
    copyAllBlocks();
}

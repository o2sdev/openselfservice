#!/usr/bin/env node
/* eslint-env node */
/* eslint-disable no-undef */
import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const apiHarmonizationRoot = path.join(__dirname, '..');

try {
    execSync('node scripts/copy-blocks.mjs', {
        cwd: apiHarmonizationRoot,
        stdio: 'inherit',
    });
} catch (error) {
    console.error('⚠️  Error copying blocks, continuing...');
}

execSync('node -r tsconfig-paths/register -r ts-node/register src/main.ts', {
    cwd: apiHarmonizationRoot,
    stdio: 'inherit',
});

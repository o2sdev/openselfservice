#!/usr/bin/env node
/* eslint-env node */
/* eslint-disable no-undef */
import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// First copy blocks
try {
    execSync('node scripts/copy-blocks.mjs', {
        cwd: path.join(__dirname, '..'),
        stdio: 'inherit',
    });
} catch (_error) {
    console.error('⚠️  Error copying blocks, continuing...');
}

// Then run the application
execSync('node -r tsconfig-paths/register -r ts-node/register src/main.ts', {
    cwd: path.join(__dirname, '..'),
    stdio: 'inherit',
});

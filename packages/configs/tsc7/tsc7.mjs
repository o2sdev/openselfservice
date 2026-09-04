#!/usr/bin/env node
// Runs the native TypeScript 7 compiler (installed as the `typescript-7` npm alias) so package
// builds emit through the fast native compiler. Lint and type-checking stay on TypeScript 6
// (the `typescript` package) because typescript-eslint only supports TS < 6.1. All CLI args are
// forwarded verbatim, e.g. `tsc7 --build tsconfig.json`.
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';

const require = createRequire(import.meta.url);
const tscBin = join(dirname(require.resolve('typescript-7/package.json')), 'bin', 'tsc');

spawn(process.execPath, [tscBin, ...process.argv.slice(2)], { stdio: 'inherit' }).on('exit', (code) =>
    process.exit(code ?? 1),
);

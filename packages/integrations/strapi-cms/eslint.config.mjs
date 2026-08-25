import { config } from '@o2s/eslint-config/api';

/** @type {import("eslint").Linter.Config[]} */
export default [
    ...config,
    // Build-time codegen helper; not part of the shipped source, so it is not linted.
    { ignores: ['codegen-loader.cjs'] },
];

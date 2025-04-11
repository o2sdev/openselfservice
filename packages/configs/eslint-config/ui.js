const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 */

/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: ['plugin:@typescript-eslint/recommended', 'eslint:recommended', 'prettier'],
    plugins: ['only-warn'],
    globals: {
        // React: true,
    },
    env: {
        browser: true,
    },
    settings: {
        'import/resolver': {
            typescript: {
                project,
            },
        },
    },
    ignorePatterns: ['dist/', '.eslintrc.js', 'lint-staged.config.js'],
    overrides: [
        // Force ESLint to detect .tsx files
        { files: ['*.js?(x)', '*.ts?(x)'] },
    ],
    rules: {
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                args: 'all',
                argsIgnorePattern: '^_',
                caughtErrors: 'all',
                caughtErrorsIgnorePattern: '^_',
                destructuredArrayIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                ignoreRestSiblings: true,
            },
        ],
    },
};

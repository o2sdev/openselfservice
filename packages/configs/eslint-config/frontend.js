/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: ['plugin:@typescript-eslint/recommended', 'next/core-web-vitals', 'next/typescript'],
    ignorePatterns: ['dist/', '.next/', '.eslintrc.js', 'lint-staged.config.js'],
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

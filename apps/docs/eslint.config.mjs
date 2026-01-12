import { config } from '@o2s/eslint-config/frontend';

/** @type {import("eslint").Linter.Config} */
export default [
    ...config,
    {
        rules: {
            // Disable Next.js image rule since Docusaurus doesn't use next/image
            '@next/next/no-img-element': 'off',
            // Allow unescaped entities (apostrophes) in documentation text
            'react/no-unescaped-entities': 'off',
            // Allow require() imports (Docusaurus may need them)
            '@typescript-eslint/no-require-imports': 'off',
            // Allow unused vars if they start with underscore
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrorsIgnorePattern: '^_',
                },
            ],
        },
    },
];

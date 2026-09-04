import js from '@eslint/js';
import pluginNext from '@next/eslint-plugin-next';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import { config as baseConfig } from './base.js';

/**
 * @type {import("eslint").Linter.Config[]}
 * */
export const config = [
    ...baseConfig,
    js.configs.recommended,
    eslintConfigPrettier,
    ...tseslint.configs.recommended,
    {
        ...pluginReact.configs.flat.recommended,
        languageOptions: {
            ...pluginReact.configs.flat.recommended.languageOptions,
            globals: {
                ...globals.serviceworker,
            },
        },
    },
    {
        plugins: {
            '@next/next': pluginNext,
        },
        rules: {
            ...pluginNext.configs.recommended.rules,
            ...pluginNext.configs['core-web-vitals'].rules,
        },
    },
    {
        plugins: {
            'react-hooks': pluginReactHooks,
        },
        settings: { react: { version: 'detect' } },
        rules: {
            ...pluginReactHooks.configs.recommended.rules,
            // New in eslint-plugin-react-hooks 7.1; deferred (flags existing patterns, not addressed in this dep bump).
            'react-hooks/set-state-in-effect': 'off',
            'react-hooks/error-boundaries': 'off',
            // React scope no longer necessary with new JSX transform.
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': [
                'warn',
                {
                    skipUndeclared: true,
                },
            ],
        },
    },
    eslintPluginPrettierRecommended,
];

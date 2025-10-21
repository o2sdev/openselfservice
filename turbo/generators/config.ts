import type { PlopTypes } from '@turbo/gen';

export default function generator(plop: PlopTypes.NodePlopAPI): void {
    plop.setGenerator('integration', {
        description: 'Adds a new API integration',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the integration?',
                validate: (input: string) => !!input,
            },
            {
                type: 'checkbox',
                name: 'modules',
                choices: [
                    'articles',
                    'cms',
                    'notifications',
                    'organizations',
                    'resources',
                    'tickets',
                    'users',
                    'cache',
                    'auth',
                ],
                message: 'Choose which modules you want to be included in the integration.',
                validate: (input: string[]) => !!input.length,
            },
        ],
        actions: (data) => {
            const actions: PlopTypes.ActionType[] = [
                {
                    type: 'add',
                    path: 'packages/integrations/{{kebabCase name}}/package.json',
                    templateFile: 'templates/integration/package.hbs',
                },
                {
                    type: 'add',
                    path: 'packages/integrations/{{kebabCase name}}/lint-staged.config.mjs',
                    templateFile: 'templates/integration/lint-staged.config.hbs',
                },
                {
                    type: 'add',
                    path: 'packages/integrations/{{kebabCase name}}/tsconfig.json',
                    templateFile: 'templates/integration/tsconfig.hbs',
                },
                {
                    type: 'add',
                    path: 'packages/integrations/{{kebabCase name}}/tsconfig.lint.json',
                    templateFile: 'templates/integration/tsconfig.lint.hbs',
                },
                {
                    type: 'add',
                    path: 'packages/integrations/{{kebabCase name}}/turbo.json',
                    templateFile: 'templates/integration/turbo.hbs',
                },
                {
                    type: 'add',
                    path: 'packages/integrations/{{kebabCase name}}/eslint.config.mjs',
                    templateFile: 'templates/integration/eslint.config.hbs',
                },
                {
                    type: 'add',
                    path: 'packages/integrations/{{kebabCase name}}/.gitignore',
                    templateFile: 'templates/integration/gitignore.hbs',
                },
                {
                    type: 'add',
                    path: 'packages/integrations/{{kebabCase name}}/.prettierrc.mjs',
                    templateFile: 'templates/integration/prettierrc.hbs',
                },
                {
                    type: 'add',
                    path: 'packages/integrations/{{kebabCase name}}/src/integration.ts',
                    templateFile: 'templates/integration/integration.hbs',
                },
                {
                    type: 'add',
                    path: 'packages/integrations/{{kebabCase name}}/src/modules/index.ts',
                    template: '// MODULE_EXPORTS',
                },
            ];

            const modules = data?.modules as string[];

            if (!modules.length) {
                throw new Error('No modules selected.');
            }

            modules.forEach((module) => {
                actions.push(
                    {
                        type: 'add',
                        path: `packages/integrations/{{kebabCase name}}/src/modules/{{kebabCase module}}/index.ts`,
                        templateFile: 'templates/integration/module-index.hbs',
                        data: { module },
                    },
                    {
                        type: 'add',
                        path: `packages/integrations/{{kebabCase name}}/src/modules/{{kebabCase module}}/{{kebabCase module}}.service.ts`,
                        templateFile: 'templates/integration/service.hbs',
                        data: { module },
                    },
                    {
                        type: 'add',
                        path: `packages/integrations/{{kebabCase name}}/src/modules/{{kebabCase module}}/{{kebabCase module}}.controller.ts`,
                        templateFile: 'templates/integration/controller.hbs',
                        data: { module },
                    },
                    {
                        type: 'add',
                        path: `packages/integrations/{{kebabCase name}}/src/modules/{{kebabCase module}}/mappers/index.ts`,
                        templateFile: 'templates/integration/mappers-index.hbs',
                        data: { module },
                    },
                    {
                        type: 'modify',
                        path: 'packages/integrations/{{kebabCase name}}/src/modules/index.ts',
                        pattern: /(\/\/ MODULE_EXPORTS)/g,
                        templateFile: 'templates/integration/modules-index.hbs',
                        data: { module },
                    },
                    {
                        type: 'modify',
                        path: 'packages/integrations/{{kebabCase name}}/src/integration.ts',
                        pattern: /(\/\/ MODULE_IMPORTS)/g,
                        template:
                            "import { Service as {{ pascalCase module }}Service } from './modules/{{kebabCase module}}';\n// MODULE_IMPORTS",
                        data: { module },
                    },
                    {
                        type: 'modify',
                        path: 'packages/integrations/{{kebabCase name}}/src/integration.ts',
                        pattern: /(\/\/ MODULE_EXPORTS)/g,
                        template:
                            '    {{ camelCase module }}: {\n' +
                            '        service: {{ pascalCase module }}Service,\n' +
                            '    },\n// MODULE_EXPORTS',
                        data: { module },
                    },
                );
            });

            return actions;
        },
    });

    plop.setGenerator('block', {
        description: 'Adds a new block',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the block?',
            },
        ],
        actions: [
            // API-HARMONIZATION
            {
                type: 'add',
                path: 'packages/blocks/{{kebabCase name}}/src/api-harmonization/index.ts',
                templateFile: 'templates/block/api-harmonization/index.hbs',
            },
            {
                type: 'add',
                path: 'packages/blocks/{{kebabCase name}}/src/api-harmonization/{{kebabCase name}}.client.ts',
                templateFile: 'templates/block/api-harmonization/client.hbs',
            },
            {
                type: 'add',
                path: 'packages/blocks/{{kebabCase name}}/src/api-harmonization/{{kebabCase name}}.controller.ts',
                templateFile: 'templates/block/api-harmonization/controller.hbs',
            },
            {
                type: 'add',
                path: 'packages/blocks/{{kebabCase name}}/src/api-harmonization/{{kebabCase name}}.service.ts',
                templateFile: 'templates/block/api-harmonization/service.hbs',
            },
            {
                type: 'add',
                path: 'packages/blocks/{{kebabCase name}}/src/api-harmonization/{{kebabCase name}}.module.ts',
                templateFile: 'templates/block/api-harmonization/module.hbs',
            },
            {
                type: 'add',
                path: 'packages/blocks/{{kebabCase name}}/src/api-harmonization/{{kebabCase name}}.mapper.ts',
                templateFile: 'templates/block/api-harmonization/mapper.hbs',
            },
            {
                type: 'add',
                path: 'packages/blocks/{{kebabCase name}}/src/api-harmonization/{{kebabCase name}}.model.ts',
                templateFile: 'templates/block/api-harmonization/model.hbs',
            },
            {
                type: 'add',
                path: 'packages/blocks/{{kebabCase name}}/src/api-harmonization/{{kebabCase name}}.request.ts',
                templateFile: 'templates/block/api-harmonization/request.hbs',
            },
            {
                type: 'modify',
                path: 'apps/api-harmonization/src/app.module.ts',
                pattern: /(\/\/ BLOCK IMPORT)/g,
                template: `import * as {{pascalCase name}} from '@dxp/blocks.{{kebabCase name}}/api-harmonization';\n// BLOCK IMPORT`,
            },
            {
                type: 'modify',
                path: 'apps/api-harmonization/src/app.module.ts',
                pattern: /(\/\/ BLOCK REGISTER)/g,
                template: `{{pascalCase name}}.Module.register(AppConfig),\n        // BLOCK REGISTER`,
            },
            {
                type: 'modify',
                path: 'apps/api-harmonization/src/modules/page/page.model.ts',
                pattern: /(\/\/ BLOCK IMPORT)/g,
                template: `import * as {{pascalCase name}} from '@dxp/blocks.{{kebabCase name}}/api-harmonization';\n// BLOCK IMPORT`,
            },
            {
                type: 'modify',
                path: 'apps/api-harmonization/src/modules/page/page.model.ts',
                pattern: /(\/\/ BLOCK REGISTER)/g,
                template: `// BLOCK REGISTER\n    | {{pascalCase name}}.Model.{{pascalCase name}}Block['__typename']`,
            },

            // FRONTEND
            {
                type: 'add',
                path: 'packages/blocks/{{kebabCase name}}/src/frontend/index.ts',
                templateFile: 'templates/block/frontend/index.hbs',
            },
            {
                type: 'add',
                path: 'packages/blocks/{{kebabCase name}}/src/frontend/{{pascalCase name}}.renderer.tsx',
                templateFile: 'templates/block/frontend/renderer.hbs',
            },
            {
                type: 'add',
                path: 'packages/blocks/{{kebabCase name}}/src/frontend/{{pascalCase name}}.server.tsx',
                templateFile: 'templates/block/frontend/server.hbs',
            },
            {
                type: 'add',
                path: 'packages/blocks/{{kebabCase name}}/src/frontend/{{pascalCase name}}.client.tsx',
                templateFile: 'templates/block/frontend/client.hbs',
            },
            {
                type: 'add',
                path: 'packages/blocks/{{kebabCase name}}/src/frontend/{{pascalCase name}}.types.ts',
                templateFile: 'templates/block/frontend/types.hbs',
            },
            {
                type: 'modify',
                path: 'apps/frontend/src/blocks/renderBlocks.tsx',
                pattern: /(\/\/ BLOCK IMPORT)/g,
                template: `import * as {{pascalCase name}} from '@dxp/blocks.{{kebabCase name}}/frontend';\n// BLOCK IMPORT`,
            },
            {
                type: 'modify',
                path: 'apps/frontend/src/blocks/renderBlocks.tsx',
                pattern: /(\/\/ BLOCK REGISTER)/g,
                template: `case '{{pascalCase name}}Block':\n            return <{{pascalCase name}}.Renderer {...blockProps} />;\n        // BLOCK REGISTER`,
            },

            // SDK
            {
                type: 'add',
                path: 'packages/blocks/{{kebabCase name}}/src/sdk/index.ts',
                templateFile: 'templates/block/sdk/index.hbs',
            },
            {
                type: 'add',
                path: 'packages/blocks/{{kebabCase name}}/src/sdk/{{kebabCase name}}.ts',
                templateFile: 'templates/block/sdk/block.hbs',
            },

            // CONFIG
            {
                type: 'add',
                path: 'packages/blocks/{{kebabCase name}}/.gitignore',
                templateFile: 'templates/block/gitIgnore.hbs',
            },
            {
                type: 'add',
                path: 'packages/blocks/{{kebabCase name}}/.prettierrc.mjs',
                templateFile: 'templates/block/prettierRc.hbs',
            },
            {
                type: 'add',
                path: 'packages/blocks/{{kebabCase name}}/eslint.config.mjs',
                templateFile: 'templates/block/eslintConfig.hbs',
            },
            {
                type: 'add',
                path: 'packages/blocks/{{kebabCase name}}/lint-staged.config.mjs',
                templateFile: 'templates/block/lintStagedConfig.hbs',
            },
            {
                type: 'add',
                path: 'packages/blocks/{{kebabCase name}}/package.json',
                templateFile: 'templates/block/package.hbs',
            },
            {
                type: 'add',
                path: 'packages/blocks/{{kebabCase name}}/tsconfig.api.json',
                templateFile: 'templates/block/tsconfigApi.hbs',
            },
            {
                type: 'add',
                path: 'packages/blocks/{{kebabCase name}}/tsconfig.frontend.json',
                templateFile: 'templates/block/tsconfigFrontend.hbs',
            },
            {
                type: 'add',
                path: 'packages/blocks/{{kebabCase name}}/tsconfig.json',
                templateFile: 'templates/block/tsconfig.hbs',
            },
            {
                type: 'add',
                path: 'packages/blocks/{{kebabCase name}}/tsconfig.sdk.json',
                templateFile: 'templates/block/tsconfigSdk.hbs',
            },

            // FRAMEWORK
            {
                type: 'add',
                path: 'packages/framework/src/modules/cms/models/blocks/{{kebabCase name}}.model.ts',
                templateFile: 'templates/block/framework/model.hbs',
            },
            {
                type: 'modify',
                path: 'packages/framework/src/modules/cms/cms.model.ts',
                pattern: /(\/\/ BLOCK IMPORT)/g,
                template: `export * as {{pascalCase name}}Block from './models/blocks/{{kebabCase name}}.model';\n// BLOCK IMPORT`,
            },
        ],
    });
}

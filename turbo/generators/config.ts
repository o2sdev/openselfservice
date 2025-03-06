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
                choices: ['articles', 'cms', 'notifications', 'organizations', 'resources', 'tickets', 'users', 'cache'],
                message: 'Choose which modules you want to be included in the integration.',
                validate: (input: string[]) => !!input.length,
            },
        ],
        actions: (data) => {
            const actions: PlopTypes.ActionType[] = [
                {
                    type: 'add',
                    path: 'packages/api/integrations/{{kebabCase name}}/package.json',
                    templateFile: 'templates/integration/package.hbs',
                },
                {
                    type: 'add',
                    path: 'packages/api/integrations/{{kebabCase name}}/tsconfig.json',
                    templateFile: 'templates/integration/tsconfig.hbs',
                },
                {
                    type: 'add',
                    path: 'packages/api/integrations/{{kebabCase name}}/tsconfig.lint.json',
                    templateFile: 'templates/integration/tsconfig.lint.hbs',
                },
                {
                    type: 'add',
                    path: 'packages/api/integrations/{{kebabCase name}}/turbo.json',
                    templateFile: 'templates/integration/turbo.hbs',
                },
                {
                    type: 'add',
                    path: 'packages/api/integrations/{{kebabCase name}}/.eslintrc.js',
                    templateFile: 'templates/integration/eslintrc.hbs',
                },
                {
                    type: 'add',
                    path: 'packages/api/integrations/{{kebabCase name}}/.gitignore',
                    templateFile: 'templates/integration/gitignore.hbs',
                },
                {
                    type: 'add',
                    path: 'packages/api/integrations/{{kebabCase name}}/.prettierrc.mjs',
                    templateFile: 'templates/integration/prettierrc.hbs',
                },
                {
                    type: 'add',
                    path: 'packages/api/integrations/{{kebabCase name}}/src/integration.ts',
                    templateFile: 'templates/integration/integration.hbs',
                },
                {
                    type: 'add',
                    path: 'packages/api/integrations/{{kebabCase name}}/src/modules/index.ts',
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
                        path: `packages/api/integrations/{{kebabCase name}}/src/modules/{{kebabCase module}}/index.ts`,
                        templateFile: 'templates/integration/module-index.hbs',
                        data: { module },
                    },
                    {
                        type: 'add',
                        path: `packages/api/integrations/{{kebabCase name}}/src/modules/{{kebabCase module}}/{{kebabCase module}}.service.ts`,
                        templateFile: 'templates/integration/service.hbs',
                        data: { module },
                    },
                    {
                        type: 'add',
                        path: `packages/api/integrations/{{kebabCase name}}/src/modules/{{kebabCase module}}/{{kebabCase module}}.controller.ts`,
                        templateFile: 'templates/integration/controller.hbs',
                        data: { module },
                    },
                    {
                        type: 'add',
                        path: `packages/api/integrations/{{kebabCase name}}/src/modules/{{kebabCase module}}/mappers/index.ts`,
                        templateFile: 'templates/integration/mappers-index.hbs',
                        data: { module },
                    },
                    {
                        type: 'modify',
                        path: 'packages/api/integrations/{{kebabCase name}}/src/modules/index.ts',
                        pattern: /(\/\/ MODULE_EXPORTS)/g,
                        templateFile: 'templates/integration/modules-index.hbs',
                        data: { module },
                    },
                    {
                        type: 'modify',
                        path: 'packages/api/integrations/{{kebabCase name}}/src/integration.ts',
                        pattern: /(\/\/ MODULE_IMPORTS)/g,
                        template:
                            "import { Service as {{ pascalCase module }}Service } from './modules/{{kebabCase module}}';\n// MODULE_IMPORTS",
                        data: { module },
                    },
                    {
                        type: 'modify',
                        path: 'packages/api/integrations/{{kebabCase name}}/src/integration.ts',
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
}

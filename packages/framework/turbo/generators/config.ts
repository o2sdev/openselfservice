import type { PlopTypes } from '@turbo/gen';

export default function generator(plop: PlopTypes.NodePlopAPI): void {
    plop.setGenerator('core-component', {
        description: 'Adds a new core module',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the module?',
            },
        ],
        actions: () => [
            {
                type: 'add',
                path: 'src/modules/{{kebabCase name}}/index.ts',
                templateFile: 'templates/module/index.hbs',
            },
            {
                type: 'add',
                path: 'src/modules/{{kebabCase name}}/{{kebabCase name}}.controller.ts',
                templateFile: 'templates/module/controller.hbs',
            },
            {
                type: 'add',
                path: 'src/modules/{{kebabCase name}}/{{kebabCase name}}.service.ts',
                templateFile: 'templates/module/service.hbs',
            },
            {
                type: 'add',
                path: 'src/modules/{{kebabCase name}}/{{kebabCase name}}.module.ts',
                templateFile: 'templates/module/module.hbs',
            },
            {
                type: 'add',
                path: 'src/modules/{{kebabCase name}}/{{kebabCase name}}.model.ts',
                templateFile: 'templates/module/model.hbs',
            },
            {
                type: 'add',
                path: 'src/modules/{{kebabCase name}}/{{kebabCase name}}.request.ts',
                templateFile: 'templates/module/request.hbs',
            },
            {
                type: 'modify',
                path: 'src/index.ts',
                pattern: /(export \* as [A-Za-z]+ from '\.\/modules\/[a-z-]+';\n*$)/g,
                template: `$1/** {{ pascalCase name }} module exports. */\nexport * as {{ pascalCase name }} from './modules/{{kebabCase name}}';\n`,
            },
            (answers) => {
                const moduleName = String((answers as { name?: string } | undefined)?.name ?? 'new-module');

                return (
                    'NEXT STEPS:\n' +
                    `1. Fill endpoints and ApiConfig details in src/modules/${moduleName}/index.ts\n` +
                    `2. Implement DTOs in src/modules/${moduleName}/${moduleName}.request.ts and .model.ts\n` +
                    `3. Implement service/controller logic in src/modules/${moduleName}\n` +
                    '4. Run: npm run lint --workspace @o2s/framework'
                );
            },
        ],
    });
}

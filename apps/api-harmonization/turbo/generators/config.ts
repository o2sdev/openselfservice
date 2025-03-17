import type { PlopTypes } from '@turbo/gen';

export default function generator(plop: PlopTypes.NodePlopAPI): void {
    plop.setGenerator('api-harmonization-block', {
        description: 'Adds a new API-HARMONIZATION block',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the block?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/blocks/{{kebabCase name}}/index.ts',
                templateFile: 'templates/block/index.hbs',
            },
            {
                type: 'add',
                path: 'src/blocks/{{kebabCase name}}/{{kebabCase name}}.controller.ts',
                templateFile: 'templates/block/controller.hbs',
            },
            {
                type: 'add',
                path: 'src/blocks/{{kebabCase name}}/{{kebabCase name}}.service.ts',
                templateFile: 'templates/block/service.hbs',
            },
            {
                type: 'add',
                path: 'src/blocks/{{kebabCase name}}/{{kebabCase name}}.module.ts',
                templateFile: 'templates/block/module.hbs',
            },
            {
                type: 'add',
                path: 'src/blocks/{{kebabCase name}}/{{kebabCase name}}.mapper.ts',
                templateFile: 'templates/block/mapper.hbs',
            },
            {
                type: 'add',
                path: 'src/blocks/{{kebabCase name}}/{{kebabCase name}}.model.ts',
                templateFile: 'templates/block/model.hbs',
            },
            {
                type: 'add',
                path: 'src/blocks/{{kebabCase name}}/{{kebabCase name}}.request.ts',
                templateFile: 'templates/block/request.hbs',
            },
            {
                type: 'modify',
                path: 'src/app.module.ts',
                pattern: /(\/\/ BLOCK IMPORT)/g,
                template: `import { {{ pascalCase name }}BlockModule } from '@o2s/api/blocks/{{kebabCase name}}/{{kebabCase name}}.module';\n// BLOCK IMPORT`,
            },
            {
                type: 'modify',
                path: 'src/app.module.ts',
                pattern: /(\/\/ BLOCK REGISTER)/g,
                template: `{{ pascalCase name }}BlockModule.register(AppConfig),\n        // BLOCK REGISTER`,
            },
            {
                type: 'modify',
                path: 'src/blocks/index.ts',
                pattern: /(\/\/ BLOCK EXPORT)/g,
                template: `export * as {{ pascalCase name }} from './{{kebabCase name}}';\n// BLOCK EXPORT`,
            },
        ],
    });
}

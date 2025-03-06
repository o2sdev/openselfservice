import type { PlopTypes } from '@turbo/gen';

export default function generator(plop: PlopTypes.NodePlopAPI): void {
    plop.setGenerator('api-harmonization-component', {
        description: 'Adds a new API-HARMONIZATION component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the component?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{kebabCase name}}/index.ts',
                templateFile: 'templates/component/index.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{kebabCase name}}/{{kebabCase name}}.controller.ts',
                templateFile: 'templates/component/controller.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{kebabCase name}}/{{kebabCase name}}.service.ts',
                templateFile: 'templates/component/service.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{kebabCase name}}/{{kebabCase name}}.module.ts',
                templateFile: 'templates/component/module.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{kebabCase name}}/{{kebabCase name}}.mapper.ts',
                templateFile: 'templates/component/mapper.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{kebabCase name}}/{{kebabCase name}}.model.ts',
                templateFile: 'templates/component/model.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{kebabCase name}}/{{kebabCase name}}.request.ts',
                templateFile: 'templates/component/request.hbs',
            },
            {
                type: 'modify',
                path: 'src/app.module.ts',
                pattern: /(\/\/ COMPONENT IMPORT)/g,
                template: `import { {{ pascalCase name }}ComponentModule } from '@o2s/api/components/{{kebabCase name}}/{{kebabCase name}}.module';\n// COMPONENT IMPORT`,
            },
            {
                type: 'modify',
                path: 'src/app.module.ts',
                pattern: /(\/\/ COMPONENT REGISTER)/g,
                template: `{{ pascalCase name }}ComponentModule.register(AppConfig),\n        // COMPONENT REGISTER`,
            },
            {
                type: 'modify',
                path: 'src/components/index.ts',
                pattern: /(\/\/ COMPONENT EXPORT)/g,
                template: `export * as {{ pascalCase name }} from './{{kebabCase name}}';\n// COMPONENT EXPORT`,
            },
        ],
    });
}

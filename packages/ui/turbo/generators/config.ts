import type { PlopTypes } from '@turbo/gen';

export default function generator(plop: PlopTypes.NodePlopAPI): void {
    plop.setGenerator('ui-component', {
        description: 'Adds a new UI component',
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
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
                templateFile: 'templates/component.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.types.ts',
                templateFile: 'templates/types.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
                templateFile: 'templates/stories.hbs',
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/index.ts',
                templateFile: 'templates/index.hbs',
            },
        ],
    });
}

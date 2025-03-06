import type { PlopTypes } from '@turbo/gen';

export default function generator(plop: PlopTypes.NodePlopAPI): void {
    plop.setGenerator('frontend-component', {
        description: 'Adds a new FRONTEND component',
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
                path: 'src/containers/{{pascalCase name}}/{{pascalCase name}}.renderer.tsx',
                templateFile: 'templates/component/renderer.hbs',
            },
            {
                type: 'add',
                path: 'src/containers/{{pascalCase name}}/{{pascalCase name}}.server.tsx',
                templateFile: 'templates/component/server.hbs',
            },
            {
                type: 'add',
                path: 'src/containers/{{pascalCase name}}/{{pascalCase name}}.client.tsx',
                templateFile: 'templates/component/client.hbs',
            },
            {
                type: 'add',
                path: 'src/containers/{{pascalCase name}}/{{pascalCase name}}.types.ts',
                templateFile: 'templates/component/types.hbs',
            },
        ],
    });
}

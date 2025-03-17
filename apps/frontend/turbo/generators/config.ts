import type { PlopTypes } from '@turbo/gen';

export default function generator(plop: PlopTypes.NodePlopAPI): void {
    plop.setGenerator('frontend-block', {
        description: 'Adds a new FRONTEND block',
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
                path: 'src/blocks/{{pascalCase name}}/{{pascalCase name}}.renderer.tsx',
                templateFile: 'templates/block/renderer.hbs',
            },
            {
                type: 'add',
                path: 'src/blocks/{{pascalCase name}}/{{pascalCase name}}.server.tsx',
                templateFile: 'templates/block/server.hbs',
            },
            {
                type: 'add',
                path: 'src/blocks/{{pascalCase name}}/{{pascalCase name}}.client.tsx',
                templateFile: 'templates/block/client.hbs',
            },
            {
                type: 'add',
                path: 'src/blocks/{{pascalCase name}}/{{pascalCase name}}.types.ts',
                templateFile: 'templates/block/types.hbs',
            },
        ],
    });
}

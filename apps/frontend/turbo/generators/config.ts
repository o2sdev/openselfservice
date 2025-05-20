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
            {
                type: 'add',
                path: 'src/api/blocks/{{kebabCase name}}.ts',
                templateFile: 'templates/block/api.hbs',
            },
            {
                type: 'modify',
                path: 'src/api/sdk.ts',
                pattern: /(\/\/ BLOCK IMPORT)/g,
                template: `import { {{camelCase name}} } from '@/api/blocks/{{kebabCase name}}';\n// BLOCK IMPORT`,
            },
            {
                type: 'modify',
                path: 'src/api/sdk.ts',
                pattern: /(\/\/ BLOCK REGISTER)/g,
                template: `get{{pascalCase name}}: {{camelCase name}}(internalSdk).blocks.get{{pascalCase name}},\n// BLOCK REGISTER`,
            },
            {
                type: 'modify',
                path: 'src/blocks/renderBlocks.tsx',
                pattern: /(\/\/ BLOCK IMPORT)/g,
                template: `import { {{pascalCase name}}Renderer } from '@/blocks/{{pascalCase name}}/{{pascalCase name}}.renderer';\n// BLOCK IMPORT`,
            },
            {
                type: 'modify',
                path: 'src/blocks/renderBlocks.tsx',
                pattern: /(\/\/ BLOCK REGISTER)/g,
                template: `case '{{pascalCase name}}Block':\nreturn <{{pascalCase name}}Renderer slug={slug} key={block.id} id={block.id} accessToken={accessToken} />;\n// BLOCK REGISTER`,
            },
        ],
    });
}

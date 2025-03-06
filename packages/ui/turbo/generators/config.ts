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
                path: 'src/components/{{kebabCase name}}.tsx',
                templateFile: 'templates/component.hbs',
            },
        ],
    });
}

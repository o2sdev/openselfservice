import { TemplateType } from '../types';
import { TEMPLATES } from '../wizard/templates';

export const printSummary = (
    targetDir: string,
    template: TemplateType,
    blockCount: number,
    integrationCount: number,
): void => {
    const templateName = TEMPLATES[template].name;

    console.log();
    console.log('Project created successfully!');
    console.log();
    console.log(`  Location:      ${targetDir}`);
    console.log(`  Template:      ${templateName}`);
    console.log(`  Blocks:        ${blockCount} blocks`);
    console.log(`  Integrations:  ${integrationCount} integrations`);
    console.log();
    console.log('Next steps:');
    console.log();
    console.log(`  cd ${targetDir}`);
    console.log('  npm run dev');
    console.log();
    console.log('Documentation:');
    console.log('  https://docs.openselfservice.com/getting-started');
    console.log();
};

export const printError = (message: string, error?: unknown): void => {
    console.error();
    console.error(`Error: ${message}`);

    if (error instanceof Error) {
        console.error(`Details: ${error.message}`);
    }

    console.error();
};

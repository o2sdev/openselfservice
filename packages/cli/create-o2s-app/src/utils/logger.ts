import { TemplateType } from '../types';
import { TEMPLATES } from '../wizard/templates';
import kleur from 'kleur';

export const printSummary = (
    targetDir: string,
    template: TemplateType,
    blockCount: number,
    integrationCount: number,
    uncoveredModules: string[] = [],
): void => {
    const templateName = TEMPLATES[template].name;

    console.log();
    console.log(kleur.green().bold('Project created successfully!'));
    console.log();
    console.log(`  Location:      ${kleur.cyan(targetDir)}`);
    console.log(`  Template:      ${templateName}`);
    console.log(`  Blocks:        ${blockCount} blocks`);
    console.log(`  Integrations:  ${integrationCount} integrations`);
    console.log();

    if (uncoveredModules.length > 0) {
        console.log(kleur.yellow().bold('⚠  Warning: the following modules have no integration assigned:'));
        console.log();
        for (const mod of uncoveredModules) {
            console.log(kleur.yellow(`     - ${mod}`));
        }
        console.log();
        console.log(kleur.red('  The project will NOT start until these modules are configured.'));
        console.log('  To fix this, edit packages/configs/integrations/src/models/<module>.ts');
        console.log('  and replace the @o2s/integrations.mocked import with a real integration.');
        console.log();
        console.log(kleur.bold('Next steps:'));
        console.log();
        console.log(`  cd ${targetDir}`);
        console.log(kleur.dim('  # 1. Configure the modules listed above'));
        console.log(kleur.dim('  # 2. Add the required env vars to apps/api-harmonization/.env.local'));
        console.log(kleur.dim('  # 3. npm run dev'));
    } else {
        console.log(kleur.bold('Next steps:'));
        console.log();
        console.log(`  cd ${targetDir}`);
        console.log('  npm run dev');
    }

    console.log();
    console.log(kleur.bold('Documentation:'));
    console.log(kleur.cyan('  https://docs.openselfservice.com/getting-started'));
    console.log();
};

export const printError = (message: string, error?: unknown): void => {
    console.error();
    console.error(kleur.red().bold(`Error: ${message}`));

    if (error instanceof Error) {
        console.error(kleur.red(`Details: ${error.message}`));
    }

    console.error();
};

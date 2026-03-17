import { STORYBOOK_URL } from '../constants';
import { BlockInfo, IntegrationInfo, TemplateType, WizardAnswers } from '../types';
import { TEMPLATES, filterBlocksByTemplate, filterIntegrationsByTemplate } from './templates';
import kleur from 'kleur';
import prompts from 'prompts';

export const promptProjectName = async (defaultName: string): Promise<string> => {
    const { name } = await prompts({
        type: 'text',
        name: 'name',
        message: 'What is your project named?',
        initial: defaultName,
    });

    if (!name) {
        throw new Error('Project name is required');
    }

    return name;
};

export const promptTemplate = async (): Promise<TemplateType> => {
    const { template } = await prompts({
        type: 'select',
        name: 'template',
        message: 'What template do you want to start with?',
        choices: Object.entries(TEMPLATES).map(([key, template]) => ({
            title: template.name,
            description: template.description,
            value: key as TemplateType,
        })),
    });

    if (!template) {
        throw new Error('Template selection is required');
    }

    return template;
};

export const promptBlockSelection = async (availableBlocks: BlockInfo[], preselected: string[]): Promise<string[]> => {
    const { selectedBlocks } = await prompts({
        type: 'multiselect',
        name: 'selectedBlocks',
        message: 'Select blocks to include:',
        choices: availableBlocks.map((block) => ({
            title: block.name,
            description: block.description,
            value: block.name,
            selected: preselected.includes(block.name),
        })),
        min: 1,
        instructions: false,
        hint: '- Space to select. Return to submit',
    });

    if (!selectedBlocks || selectedBlocks.length === 0) {
        throw new Error('At least one block must be selected');
    }

    return selectedBlocks;
};

export const promptIntegrationSelection = async (
    availableIntegrations: IntegrationInfo[],
    preselected: string[],
): Promise<string[]> => {
    const { selectedIntegrations } = await prompts({
        type: 'multiselect',
        name: 'selectedIntegrations',
        message: 'Select integrations to include:',
        choices: availableIntegrations.map((integration) => ({
            title: integration.name,
            description: integration.description,
            value: integration.name,
            selected: preselected.includes(integration.name),
        })),
        instructions: false,
        hint: '- Space to select. Return to submit',
    });

    return selectedIntegrations ?? [];
};

export const runWizardPrompts = async (
    availableBlocks: BlockInfo[],
    availableIntegrations: IntegrationInfo[],
    cliName?: string,
    cliTemplate?: TemplateType,
): Promise<Omit<WizardAnswers, 'integrationModules'>> => {
    const projectName = cliName || (await promptProjectName('my-o2s-project'));
    const template = cliTemplate || (await promptTemplate());

    let selectedBlocks: string[];
    let selectedIntegrations: string[];

    if (template === 'custom') {
        const tipLines = [
            `${kleur.blue().bold('Tip:')} Not sure which blocks to pick?`,
            `Browse our Storybook to preview all available components:`,
            kleur.cyan(STORYBOOK_URL),
        ];
        const tipWidth = Math.max(
            'Tip: Not sure which blocks to pick?'.length,
            'Browse our Storybook to preview all available components:'.length,
            STORYBOOK_URL.length,
        );
        const boxWidth = tipWidth + 4;

        console.log();
        console.log(`  ${kleur.blue('╭' + '─'.repeat(boxWidth) + '╮')}`);
        console.log(
            `  ${kleur.blue('│')}  ${tipLines[0]}${' '.repeat(boxWidth - 2 - 'Tip: Not sure which blocks to pick?'.length)}${kleur.blue('│')}`,
        );
        console.log(
            `  ${kleur.blue('│')}  ${tipLines[1]}${' '.repeat(boxWidth - 2 - 'Browse our Storybook to preview all available components:'.length)}${kleur.blue('│')}`,
        );
        console.log(
            `  ${kleur.blue('│')}  ${tipLines[2]}${' '.repeat(boxWidth - 2 - STORYBOOK_URL.length)}${kleur.blue('│')}`,
        );
        console.log(`  ${kleur.blue('╰' + '─'.repeat(boxWidth) + '╯')}`);
        console.log();

        selectedBlocks = await promptBlockSelection(availableBlocks, []);
        selectedIntegrations = await promptIntegrationSelection(availableIntegrations, []);
    } else {
        selectedBlocks = filterBlocksByTemplate(template, availableBlocks);
        selectedIntegrations = filterIntegrationsByTemplate(template, availableIntegrations);
    }

    return {
        projectName,
        template,
        selectedBlocks,
        selectedIntegrations,
        conflictResolutions: [],
        envVars: {},
    };
};

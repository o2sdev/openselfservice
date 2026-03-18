import { STORYBOOK_URL } from '../constants';
import { BlockInfo, IntegrationInfo, TemplateType, WizardAnswers } from '../types';
import { TEMPLATES, filterBlocksByTemplate, filterIntegrationsByTemplate } from './templates';
import kleur from 'kleur';
import prompts from 'prompts';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const LibMultiselectPrompt = require('prompts/lib/elements/multiselect');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const DistMultiselectPrompt = require('prompts/dist/elements/multiselect');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const LibFigures = require('prompts/lib/util/figures');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const DistFigures = require('prompts/dist/util/figures');

const DOMAIN_CHOICE_PREFIX = '__domain__:';
const BLOCK_CHOICE_PREFIX = '__block__:';
let isDomainTogglePatchApplied = false;
let isMultiselectVisualPatchApplied = false;

interface BlockChoice {
    title: string;
    value: string;
    description?: string;
    selected?: boolean;
}

interface MultiselectContext {
    value: Array<{
        value: string;
        selected: boolean;
        disabled?: boolean;
    }>;
    cursor: number;
    maxChoices: number;
    bell: () => void;
    render: () => void;
}

const parseDomainFromBlockValue = (value: string): string | undefined => {
    if (!value.startsWith(BLOCK_CHOICE_PREFIX)) return undefined;
    const encoded = value.slice(BLOCK_CHOICE_PREFIX.length);
    const separatorIndex = encoded.indexOf(':');
    if (separatorIndex < 0) return undefined;
    return encoded.slice(0, separatorIndex);
};

const buildBlockValue = (domain: string, blockName: string): string => `${BLOCK_CHOICE_PREFIX}${domain}:${blockName}`;

const parseBlockNameFromValue = (value: string): string => {
    const encoded = value.slice(BLOCK_CHOICE_PREFIX.length);
    const separatorIndex = encoded.indexOf(':');
    return separatorIndex < 0 ? encoded : encoded.slice(separatorIndex + 1);
};

const syncDomainSelectionState = (ctx: MultiselectContext, domainName: string): void => {
    const domainChoice = ctx.value.find((choice) => choice.value === `${DOMAIN_CHOICE_PREFIX}${domainName}`);
    if (!domainChoice) return;

    const blocksInDomain = ctx.value.filter(
        (choice) => choice.value.startsWith(`${BLOCK_CHOICE_PREFIX}${domainName}:`) && !choice.disabled,
    );
    domainChoice.selected = blocksInDomain.length > 0 && blocksInDomain.every((choice) => choice.selected);
};

const patchMultiselectDomainToggle = (): void => {
    if (isDomainTogglePatchApplied) return;

    const patchOne = (PromptClass: { prototype: { handleSpaceToggle: () => void } }) => {
        const originalHandleSpaceToggle = PromptClass.prototype.handleSpaceToggle;
        PromptClass.prototype.handleSpaceToggle = function patchedHandleSpaceToggle(this: MultiselectContext) {
            const currentChoice = this.value[this.cursor];
            if (!currentChoice) return;

            if (currentChoice.value.startsWith(DOMAIN_CHOICE_PREFIX)) {
                const domainName = currentChoice.value.slice(DOMAIN_CHOICE_PREFIX.length);
                const blockChoices = this.value.filter(
                    (choice) => choice.value.startsWith(`${BLOCK_CHOICE_PREFIX}${domainName}:`) && !choice.disabled,
                );
                const shouldSelectAll = !currentChoice.selected;

                if (shouldSelectAll && Number.isFinite(this.maxChoices)) {
                    const currentSelectedCount = this.value.filter((choice) => choice.selected).length;
                    const selectedInDomainCount = blockChoices.filter((choice) => choice.selected).length;
                    const additionalSelectionsNeeded = blockChoices.length - selectedInDomainCount;
                    if (currentSelectedCount + additionalSelectionsNeeded > this.maxChoices) {
                        this.bell();
                        return;
                    }
                }

                for (const blockChoice of blockChoices) {
                    blockChoice.selected = shouldSelectAll;
                }
                currentChoice.selected = shouldSelectAll;
                this.render();
                return;
            }

            originalHandleSpaceToggle.call(this);

            const currentDomain = parseDomainFromBlockValue(currentChoice.value);
            if (currentDomain) {
                syncDomainSelectionState(this, currentDomain);
                this.render();
            }
        };
    };

    patchOne(LibMultiselectPrompt);
    patchOne(DistMultiselectPrompt);

    isDomainTogglePatchApplied = true;
};

const patchMultiselectVisuals = (): void => {
    if (isMultiselectVisualPatchApplied) return;

    // Force circle-like selectors for better visual grouping across Windows terminals.
    LibFigures.radioOn = '●';
    LibFigures.radioOff = '○';
    DistFigures.radioOn = '●';
    DistFigures.radioOff = '○';

    isMultiselectVisualPatchApplied = true;
};

const buildGroupedBlockChoices = (availableBlocks: BlockInfo[], preselected: string[]) => {
    const choices: BlockChoice[] = [];
    const domainToBlocks = new Map<string, string[]>();

    for (const block of availableBlocks) {
        const domain = block.domain ?? 'other';
        const blocks = domainToBlocks.get(domain) ?? [];
        blocks.push(block.name);
        domainToBlocks.set(domain, blocks);
    }

    for (const [domain, domainBlockNames] of domainToBlocks.entries()) {
        choices.push({
            title: kleur.cyan().bold(`${domain} (${domainBlockNames.length})`),
            value: `${DOMAIN_CHOICE_PREFIX}${domain}`,
            selected: domainBlockNames.every((blockName) => preselected.includes(blockName)),
            description: 'Space: select/deselect all blocks in this domain',
        });

        for (const block of availableBlocks) {
            if ((block.domain ?? 'other') !== domain) continue;
            choices.push({
                title: `    ${block.name}`,
                description: block.description,
                value: buildBlockValue(domain, block.name),
                selected: preselected.includes(block.name),
            });
        }
    }

    return { choices, domainToBlocks };
};

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
    patchMultiselectDomainToggle();
    patchMultiselectVisuals();
    const { choices, domainToBlocks } = buildGroupedBlockChoices(availableBlocks, preselected);
    const { selectedBlocks } = await prompts({
        type: 'multiselect',
        name: 'selectedBlocks',
        message: 'Select blocks to include:',
        choices,
        min: 1,
        instructions: false,
        hint: '- Space to select. Selecting domain includes all blocks',
    });

    if (!selectedBlocks || selectedBlocks.length === 0) {
        throw new Error('At least one block must be selected');
    }

    const availableBlockNames = new Set(availableBlocks.map((block) => block.name));
    const normalizedSelection = new Set<string>();
    for (const selectedValue of selectedBlocks as string[]) {
        if (selectedValue.startsWith(DOMAIN_CHOICE_PREFIX)) {
            const domain = selectedValue.slice(DOMAIN_CHOICE_PREFIX.length);
            const domainBlocks = domainToBlocks.get(domain) ?? [];
            for (const blockName of domainBlocks) {
                normalizedSelection.add(blockName);
            }
            continue;
        }
        if (selectedValue.startsWith(BLOCK_CHOICE_PREFIX)) {
            const blockName = parseBlockNameFromValue(selectedValue);
            if (availableBlockNames.has(blockName)) {
                normalizedSelection.add(blockName);
            }
            continue;
        }
        if (availableBlockNames.has(selectedValue)) {
            normalizedSelection.add(selectedValue);
        }
    }

    if (normalizedSelection.size === 0) {
        throw new Error('At least one block must be selected');
    }

    return [...normalizedSelection];
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

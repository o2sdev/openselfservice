import { TemplateType, WizardAnswers } from '../types';
import { discoverBlocks } from '../utils/block-discovery';
import { discoverIntegrations } from '../utils/integration-discovery';
import { runWizardPrompts } from './prompts';

export const runWizard = async (
    repoDir: string,
    cliName?: string,
    cliTemplate?: TemplateType,
    cliBlocks?: string[],
    cliIntegrations?: string[],
): Promise<WizardAnswers> => {
    const [allBlocks, allIntegrations] = await Promise.all([discoverBlocks(repoDir), discoverIntegrations(repoDir)]);

    console.log(`Found ${allBlocks.length} blocks and ${allIntegrations.length} integrations.`);
    console.log();

    if (cliName && cliTemplate && cliBlocks && cliIntegrations) {
        return {
            projectName: cliName,
            template: cliTemplate,
            selectedBlocks: cliBlocks,
            selectedIntegrations: cliIntegrations,
        };
    }

    return runWizardPrompts(allBlocks, allIntegrations, cliName, cliTemplate);
};

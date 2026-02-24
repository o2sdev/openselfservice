import { TemplateType, WizardAnswers } from '../types';
import { discoverBlocks } from '../utils/block-discovery';
import { discoverIntegrations } from '../utils/integration-discovery';
import { detectConflicts, promptConflictResolutions, promptEnvVars } from './env-prompts';
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
            conflictResolutions: [],
            envVars: {},
        };
    }

    const partialAnswers = await runWizardPrompts(allBlocks, allIntegrations, cliName, cliTemplate);

    if (partialAnswers.template !== 'custom') {
        return partialAnswers;
    }

    const conflicts = detectConflicts(partialAnswers.selectedIntegrations);
    const conflictResolutions = await promptConflictResolutions(conflicts);
    const envVars = await promptEnvVars(partialAnswers.selectedIntegrations);

    return {
        ...partialAnswers,
        conflictResolutions,
        envVars,
    };
};

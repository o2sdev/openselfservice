import { INTEGRATION_ENV_VARS, INTEGRATION_MODULES, MOCKED_INTEGRATIONS } from '../constants';
import { ConflictResolution } from '../types';
import kleur from 'kleur';
import prompts from 'prompts';

interface ModuleConflict {
    module: string;
    integrations: string[];
}

export const detectConflicts = (selectedIntegrations: string[]): ModuleConflict[] => {
    const moduleToIntegrations: Record<string, string[]> = {};

    for (const integration of selectedIntegrations) {
        const modules = INTEGRATION_MODULES[integration] ?? [];
        for (const module of modules) {
            moduleToIntegrations[module] = [...(moduleToIntegrations[module] ?? []), integration];
        }
    }

    return Object.entries(moduleToIntegrations)
        .filter(([, integrations]) => integrations.length > 1)
        .map(([module, integrations]) => ({ module, integrations }));
};

export const promptConflictResolutions = async (conflicts: ModuleConflict[]): Promise<ConflictResolution[]> => {
    const resolutions: ConflictResolution[] = [];

    for (const conflict of conflicts) {
        const { winner } = await prompts({
            type: 'select',
            name: 'winner',
            message: `Which integration should handle the "${conflict.module}" module?`,
            choices: conflict.integrations.map((integration) => ({
                title: integration,
                value: integration,
            })),
        });

        if (!winner) {
            throw new Error(`Conflict resolution for module "${conflict.module}" is required`);
        }

        resolutions.push({ module: conflict.module, winner });
    }

    return resolutions;
};

export const promptEnvVars = async (selectedIntegrations: string[]): Promise<Record<string, string>> => {
    const envVars: Record<string, string> = {};
    const realIntegrations = selectedIntegrations.filter(
        (integration) => !MOCKED_INTEGRATIONS.includes(integration) && INTEGRATION_ENV_VARS[integration],
    );

    if (realIntegrations.length === 0) {
        return envVars;
    }

    for (const integration of realIntegrations) {
        const vars = INTEGRATION_ENV_VARS[integration] ?? [];

        console.log(
            `\n${kleur.cyan().bold(`Configuring ${integration}`)} environment variables ${kleur.dim('(press Enter to skip)')}:`,
        );

        for (const envVar of vars) {
            const requiredLabel = envVar.required ? ' [required]' : ' [optional]';
            const { value } = await prompts({
                type: 'text',
                name: 'value',
                message: `${envVar.key}${requiredLabel}`,
                hint: envVar.description,
            });

            envVars[envVar.key] = value ?? '';
        }
    }

    return envVars;
};

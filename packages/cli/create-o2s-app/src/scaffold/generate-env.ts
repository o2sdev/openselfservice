import { INTEGRATION_ENV_VARS } from '../constants';
import fs from 'fs-extra';
import path from 'path';

// Updates existing .env.local by replacing KEY= placeholders with user-provided values.
// The base branch already contains .env.local with all required variables and defaults.
const updateEnvFile = async (filePath: string, envVars: Record<string, string>): Promise<void> => {
    const content = await fs.readFile(filePath, 'utf-8');
    const lines = content.split('\n');

    const updated = lines.map((line) => {
        const match = line.match(/^([A-Z0-9_]+)=(.*)$/);
        if (!match || !match[1]) return line;

        const key = match[1];
        const value = envVars[key];

        if (value !== undefined && value !== '') {
            return `${key}=${value}`;
        }

        return line;
    });

    await fs.writeFile(filePath, updated.join('\n'), 'utf-8');
};

export const generateEnvFiles = async (
    projectDir: string,
    envVars: Record<string, string>,
    selectedIntegrations: string[],
): Promise<void> => {
    const realIntegrations = selectedIntegrations.filter((integration) => !!INTEGRATION_ENV_VARS[integration]);

    if (realIntegrations.length === 0) {
        return;
    }

    const apiEnvPath = path.join(projectDir, 'apps', 'api-harmonization', '.env.local');

    if (await fs.pathExists(apiEnvPath)) {
        await updateEnvFile(apiEnvPath, envVars);
    }
};

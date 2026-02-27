import { INTEGRATIONS_PATH } from '../constants';
import { IntegrationInfo } from '../types';
import * as fs from 'fs-extra';
import * as path from 'path';

interface IntegrationPackageJson {
    description?: string;
    o2sTemplate?: string[];
    o2sModules?: string[];
}

export const discoverIntegrations = async (repoDir: string): Promise<IntegrationInfo[]> => {
    try {
        const integrationsDir = path.join(repoDir, INTEGRATIONS_PATH);
        const entries = await fs.readdir(integrationsDir, { withFileTypes: true });

        const integrations: IntegrationInfo[] = [];

        for (const entry of entries) {
            if (!entry.isDirectory()) continue;

            const integrationName = entry.name;
            const packageJson = await readIntegrationPackageJson(repoDir, integrationName);

            integrations.push({
                name: integrationName,
                packageName: `@o2s/integrations.${integrationName}`,
                description: packageJson.description || `Integration: ${integrationName}`,
                // No o2sTemplate = integration only available in Custom template
                category: packageJson.o2sTemplate ?? [],
                modules: packageJson.o2sModules ?? [],
            });
        }

        return integrations.sort((a, b) => a.name.localeCompare(b.name));
    } catch (error) {
        console.error('Error fetching the integration list:', error);
        throw new Error('Failed to fetch the integration list.');
    }
};

const readIntegrationPackageJson = async (
    repoDir: string,
    integrationName: string,
): Promise<IntegrationPackageJson> => {
    try {
        const packageJsonPath = path.join(repoDir, INTEGRATIONS_PATH, integrationName, 'package.json');

        if (await fs.pathExists(packageJsonPath)) {
            return await fs.readJson(packageJsonPath);
        }

        return {};
    } catch {
        return {};
    }
};

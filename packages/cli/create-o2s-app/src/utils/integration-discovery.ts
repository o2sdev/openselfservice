import { INTEGRATIONS_PATH } from '../constants';
import { IntegrationInfo } from '../types';
import * as fs from 'fs-extra';
import * as path from 'path';

interface IntegrationPackageJson {
    description?: string;
    o2sTemplate?: string[];
}

export const discoverIntegrations = async (repoDir: string): Promise<IntegrationInfo[]> => {
    const integrationsDir = path.join(repoDir, INTEGRATIONS_PATH);
    const entries = await fs.readdir(integrationsDir, { withFileTypes: true });

    const integrations: IntegrationInfo[] = [];

    for (const entry of entries) {
        if (!entry.isDirectory()) continue;

        const integrationName = entry.name;
        const packageJson = await readIntegrationPackageJson(repoDir, integrationName);

        // Skip directories without o2sTemplate (not an O2S integration)
        if (!packageJson.o2sTemplate || packageJson.o2sTemplate.length === 0) continue;

        integrations.push({
            name: integrationName,
            packageName: `@o2s/integrations.${integrationName}`,
            description: packageJson.description || `Integration: ${integrationName}`,
            category: packageJson.o2sTemplate,
        });
    }

    return integrations.sort((a, b) => a.name.localeCompare(b.name));
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

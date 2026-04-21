import { ConflictResolution } from '../types';
import * as fs from 'fs-extra';
import * as path from 'path';

const CONFIG_FILE_PATH = 'packages/configs/integrations/src/config.ts';
const CONFIGS_PACKAGE_JSON_PATH = 'packages/configs/integrations/package.json';
const MOCKED_IMPORT = `@o2s/integrations.mocked/integration`;

// Build a map from framework module name → winning integration.
// Integrations without o2sModules entries (e.g. mocked) contribute no modules.
const buildModuleIntegrationMap = (
    selectedIntegrations: string[],
    conflictResolutions: ConflictResolution[],
    integrationModules: Record<string, string[]>,
): Map<string, string> => {
    const moduleMap = new Map<string, string>();

    for (const integration of selectedIntegrations) {
        const modules = integrationModules[integration] ?? [];
        for (const module of modules) {
            if (!moduleMap.has(module)) {
                moduleMap.set(module, integration);
            }
        }
    }

    for (const resolution of conflictResolutions) {
        moduleMap.set(resolution.module, resolution.winner);
    }

    return moduleMap;
};

const updateConfigsPackageJson = async (
    projectDir: string,
    selectedIntegrations: string[],
    integrationVersions: Record<string, string>,
): Promise<void> => {
    const pkgPath = path.join(projectDir, CONFIGS_PACKAGE_JSON_PATH);

    if (!(await fs.pathExists(pkgPath))) return;

    const pkg = await fs.readJson(pkgPath);

    if (!pkg.dependencies) {
        pkg.dependencies = {};
    }

    // Remove integration deps that were not selected
    for (const key of Object.keys(pkg.dependencies as Record<string, string>)) {
        if (key.startsWith('@o2s/integrations.')) {
            const name = key.replace('@o2s/integrations.', '');
            if (!selectedIntegrations.includes(name)) {
                delete pkg.dependencies[key];
            }
        }
    }

    // Add selected integrations that are not yet in dependencies
    for (const name of selectedIntegrations) {
        const packageName = `@o2s/integrations.${name}`;
        if (!pkg.dependencies[packageName]) {
            const version = integrationVersions[name];
            if (version) {
                pkg.dependencies[packageName] = `^${version}`;
            }
        }
    }

    await fs.writeJson(pkgPath, pkg, { spaces: 4 });
};

// Convert integration name to a PascalCase alias for imports (e.g. "strapi-cms" → "StrapiCms")
const toImportAlias = (name: string): string => {
    return name
        .split(/[-_]/)
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
        .join('');
};

export const transformIntegrationConfigs = async (
    projectDir: string,
    selectedIntegrations: string[],
    conflictResolutions: ConflictResolution[],
    integrationModules: Record<string, string[]>,
    integrationVersions: Record<string, string>,
): Promise<string[]> => {
    // Always update configs package.json to add/remove integration dependencies
    await updateConfigsPackageJson(projectDir, selectedIntegrations, integrationVersions);

    const configFilePath = path.join(projectDir, CONFIG_FILE_PATH);

    if (!(await fs.pathExists(configFilePath))) {
        return [];
    }

    const content = await fs.readFile(configFilePath, 'utf-8');

    // Build module → integration map
    const moduleMap = buildModuleIntegrationMap(selectedIntegrations, conflictResolutions, integrationModules);

    // Collect unique non-mocked integrations that need import statements
    const nonMockedIntegrations = new Set<string>();
    for (const integration of moduleMap.values()) {
        if (integration !== 'mocked') {
            nonMockedIntegrations.add(integration);
        }
    }

    let updatedContent = content;

    // Add new integration imports after the Mocked import line
    if (nonMockedIntegrations.size > 0) {
        const newImports = Array.from(nonMockedIntegrations)
            .sort()
            .map((name) => `import * as ${toImportAlias(name)} from '@o2s/integrations.${name}/integration';`)
            .join('\n');

        updatedContent = updatedContent.replace(
            `import * as Mocked from '${MOCKED_IMPORT}';`,
            `import * as Mocked from '${MOCKED_IMPORT}';\n${newImports}`,
        );
    }

    // Update domain assignments and export import aliases line by line
    const lines = updatedContent.split('\n');
    for (const [module, integration] of moduleMap.entries()) {
        if (integration === 'mocked') continue;
        const alias = toImportAlias(integration);

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i] ?? '';

            // Match domain assignment like "    tickets: Mocked,"
            const domainMatch = line.match(new RegExp(`^(\\s+${module}:\\s*)Mocked(,)$`));
            if (domainMatch) {
                lines[i] = `${domainMatch[1]}${alias}${domainMatch[2]}`;
                continue;
            }

            // Match export import like "export import Tickets = Mocked.Integration.Tickets;"
            const exportMatch = line.match(/^export import (\w+) = Mocked\.Integration\.(\w+);$/);
            if (exportMatch) {
                const namespaceName = exportMatch[2];
                if (namespaceName?.toLowerCase() === module.toLowerCase()) {
                    lines[i] = `export import ${exportMatch[1]} = ${alias}.Integration.${namespaceName};`;
                }
            }
        }
    }
    updatedContent = lines.join('\n');

    await fs.writeFile(configFilePath, updatedContent, 'utf-8');

    // Detect domains that still reference Mocked but mocked is not selected.
    // Skip only when 'mocked' (full) is selected — it covers all modules.
    const uncoveredModules: string[] = [];
    if (!selectedIntegrations.includes('mocked')) {
        const domainAssignmentRegex = /^\s+(\w+):\s*Mocked,$/gm;
        let match;
        while ((match = domainAssignmentRegex.exec(updatedContent)) !== null) {
            if (match[1]) {
                uncoveredModules.push(match[1]);
            }
        }
    }

    return uncoveredModules;
};

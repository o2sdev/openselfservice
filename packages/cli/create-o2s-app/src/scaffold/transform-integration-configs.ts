import { INTEGRATION_MODULES, MOCKED_INTEGRATIONS } from '../constants';
import { ConflictResolution } from '../types';
import * as fs from 'fs-extra';
import * as path from 'path';

const CONFIGS_MODELS_PATH = 'packages/configs/integrations/src/models';
const CONFIGS_PACKAGE_JSON_PATH = 'packages/configs/integrations/package.json';
const MOCKED_IMPORT = `@o2s/integrations.mocked/integration`;

// Build a map from framework module name → winning integration.
// Integrations without entries in INTEGRATION_MODULES (e.g. mocked) contribute no modules.
const buildModuleIntegrationMap = (
    selectedIntegrations: string[],
    conflictResolutions: ConflictResolution[],
): Map<string, string> => {
    const moduleMap = new Map<string, string>();

    for (const integration of selectedIntegrations) {
        const modules = INTEGRATION_MODULES[integration] ?? [];
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

const updateConfigsPackageJson = async (projectDir: string, selectedIntegrations: string[]): Promise<void> => {
    const pkgPath = path.join(projectDir, CONFIGS_PACKAGE_JSON_PATH);

    if (!(await fs.pathExists(pkgPath))) return;

    const pkg = await fs.readJson(pkgPath);

    // Remove integration deps that were not selected
    // Exception: keep mocked when mocked-dxp is selected — SSP model files still reference it
    const keepMocked = selectedIntegrations.includes('mocked-dxp') && !selectedIntegrations.includes('mocked');
    for (const key of Object.keys(pkg.dependencies as Record<string, string>)) {
        if (key.startsWith('@o2s/integrations.')) {
            const name = key.replace('@o2s/integrations.', '');
            if (!selectedIntegrations.includes(name)) {
                if (name === 'mocked' && keepMocked) continue;
                delete pkg.dependencies[key];
            }
        }
    }

    // Add deps for selected integrations that have module mappings
    for (const integration of selectedIntegrations) {
        if (INTEGRATION_MODULES[integration]) {
            pkg.dependencies[`@o2s/integrations.${integration}`] = '*';
        }
    }

    await fs.writeJson(pkgPath, pkg, { spaces: 4 });
};

export const transformIntegrationConfigs = async (
    projectDir: string,
    selectedIntegrations: string[],
    conflictResolutions: ConflictResolution[],
): Promise<string[]> => {
    const moduleMap = buildModuleIntegrationMap(selectedIntegrations, conflictResolutions);

    if (moduleMap.size === 0) {
        return [];
    }

    const modelsDir = path.join(projectDir, CONFIGS_MODELS_PATH);

    if (!(await fs.pathExists(modelsDir))) {
        return [];
    }

    for (const [module, integration] of moduleMap.entries()) {
        const filePath = path.join(modelsDir, `${module}.ts`);

        if (!(await fs.pathExists(filePath))) continue;

        const content = await fs.readFile(filePath, 'utf-8');
        const updatedContent = content.replace(MOCKED_IMPORT, `@o2s/integrations.${integration}/integration`);

        await fs.writeFile(filePath, updatedContent, 'utf-8');
    }

    await updateConfigsPackageJson(projectDir, selectedIntegrations);

    // Detect model files that still import mocked but mocked is not in the workspace.
    // Skip when any mocked variant is selected (mocked covers all, mocked-dxp keeps mocked as dep).
    const uncoveredModules: string[] = [];
    if (!selectedIntegrations.some((i) => MOCKED_INTEGRATIONS.includes(i))) {
        const files = await fs.readdir(modelsDir);
        for (const file of files) {
            if (file === 'index.ts' || !file.endsWith('.ts')) continue;
            const content = await fs.readFile(path.join(modelsDir, file), 'utf-8');
            if (content.includes(MOCKED_IMPORT)) {
                uncoveredModules.push(file.replace('.ts', ''));
            }
        }
    }

    return uncoveredModules;
};

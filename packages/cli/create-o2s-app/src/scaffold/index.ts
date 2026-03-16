import { INTEGRATIONS_PATH } from '../constants';
import { WizardAnswers } from '../types';
import { cleanupProject } from './cleanup';
import { generateEnvFiles } from './generate-env';
import { cleanPackageLock, installDependencies } from './install';
import { warnUnconfiguredModules } from './transform-app-config';
import { transformAppModule } from './transform-app-module';
import { transformAppsPackageJson } from './transform-apps-package-json';
import { transformIntegrationConfigs } from './transform-integration-configs';
import { transformRootPackageJson } from './transform-package-json';
import { transformPageModel } from './transform-page-model';
import { transformRenderBlocks } from './transform-render-blocks';
import * as fs from 'fs-extra';
import * as path from 'path';

const readIntegrationVersions = async (
    projectDir: string,
    selectedIntegrations: string[],
): Promise<Record<string, string>> => {
    const versions: Record<string, string> = {};

    for (const name of selectedIntegrations) {
        const pkgPath = path.join(projectDir, INTEGRATIONS_PATH, name, 'package.json');

        if (!(await fs.pathExists(pkgPath))) {
            throw new Error(
                `Integration "${name}" not found at expected path: ${pkgPath}. Ensure the integration exists in the template.`,
            );
        }

        const pkg = await fs.readJson(pkgPath);

        if (!pkg.version) {
            throw new Error(`Integration "${name}" has no version field in ${pkgPath}.`);
        }

        versions[name] = pkg.version;
    }

    return versions;
};

export const scaffold = async (
    tempDir: string,
    answers: WizardAnswers,
    skipInstall = false,
    directory?: string,
): Promise<{ targetDir: string; uncoveredModules: string[] }> => {
    const targetDir = path.resolve(directory || '.', answers.projectName);

    if (await fs.pathExists(targetDir)) {
        throw new Error(
            `Directory "${answers.projectName}" already exists. Please choose a different name or remove the existing directory.`,
        );
    }

    const { selectedBlocks, selectedIntegrations, integrationModules, conflictResolutions, envVars } = answers;

    // Step 1: Move cloned repo to target directory
    console.log();
    console.log(`Creating project in "${targetDir}"...`);
    await fs.move(tempDir, targetDir);

    // Step 2: Read integration versions before cleanup removes the source directories
    const integrationVersions = await readIntegrationVersions(targetDir, selectedIntegrations);

    // Step 3: Remove unneeded directories (all packages/* are removed; deps come from npm registry)
    await cleanupProject(targetDir);

    // Step 4: Remove unselected block/integration references from app source files
    console.log('Configuring project for selected blocks...');
    await Promise.all([
        transformAppModule(targetDir, selectedBlocks),
        transformRenderBlocks(targetDir, selectedBlocks),
        transformPageModel(targetDir, selectedBlocks),
        transformAppsPackageJson(targetDir, selectedBlocks, selectedIntegrations),
    ]);

    // Step 5: Clean up root package.json (remove workspace entries for deleted dirs)
    await transformRootPackageJson(targetDir);

    // Step 6: Configure integration source files and generate environment
    console.log('Configuring integrations...');
    const uncoveredModules = await transformIntegrationConfigs(
        targetDir,
        selectedIntegrations,
        conflictResolutions,
        integrationModules,
        integrationVersions,
    );
    await generateEnvFiles(targetDir, envVars, selectedIntegrations);
    warnUnconfiguredModules(uncoveredModules);

    // Step 7: Clean symlinks from package-lock.json and install dependencies
    await cleanPackageLock(targetDir, selectedIntegrations);
    if (!skipInstall) {
        await installDependencies(targetDir, selectedIntegrations);
    }

    return { targetDir, uncoveredModules };
};

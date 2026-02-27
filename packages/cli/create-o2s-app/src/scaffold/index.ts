import { WizardAnswers } from '../types';
import { cleanupProject } from './cleanup';
import { generateEnvFiles } from './generate-env';
import { installDependencies, removePackageLock } from './install';
import { warnUnconfiguredModules } from './transform-app-config';
import { transformAppModule } from './transform-app-module';
import { transformAppsPackageJson } from './transform-apps-package-json';
import { transformIntegrationConfigs } from './transform-integration-configs';
import { transformRootPackageJson } from './transform-package-json';
import { transformPageModel } from './transform-page-model';
import { transformRenderBlocks } from './transform-render-blocks';
import * as fs from 'fs-extra';
import * as path from 'path';

export const scaffold = async (
    tempDir: string,
    answers: WizardAnswers,
    skipInstall = false,
): Promise<{ targetDir: string; uncoveredModules: string[] }> => {
    const targetDir = path.resolve(answers.projectName);

    if (await fs.pathExists(targetDir)) {
        throw new Error(
            `Directory "${answers.projectName}" already exists. Please choose a different name or remove the existing directory.`,
        );
    }

    const { selectedBlocks, selectedIntegrations, conflictResolutions, envVars } = answers;

    // Step 1: Move cloned repo to target directory
    console.log();
    console.log(`Creating project in "${targetDir}"...`);
    await fs.move(tempDir, targetDir);

    // Step 2: Remove unneeded directories
    await cleanupProject(targetDir, selectedBlocks, selectedIntegrations);

    // Step 3: Remove unselected block/integration references from app source files
    console.log('Configuring project for selected blocks...');
    await Promise.all([
        transformAppModule(targetDir, selectedBlocks),
        transformRenderBlocks(targetDir, selectedBlocks),
        transformPageModel(targetDir, selectedBlocks),
        transformAppsPackageJson(targetDir, selectedBlocks, selectedIntegrations),
    ]);

    // Step 4: Clean up root package.json (remove workspace entries for deleted dirs)
    await transformRootPackageJson(targetDir);

    // Step 5: Configure integration source files and generate environment
    console.log('Configuring integrations...');
    const uncoveredModules = await transformIntegrationConfigs(targetDir, selectedIntegrations, conflictResolutions);
    await generateEnvFiles(targetDir, envVars, selectedIntegrations);
    warnUnconfiguredModules(uncoveredModules);

    // Step 6: Remove stale package-lock.json (always) and install dependencies
    await removePackageLock(targetDir);
    if (!skipInstall) {
        await installDependencies(targetDir);
    }

    return { targetDir, uncoveredModules };
};

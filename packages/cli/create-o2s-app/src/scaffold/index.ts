import { WizardAnswers } from '../types';
import { cleanupProject } from './cleanup';
import { installDependencies } from './install';
import { transformRootPackageJson } from './transform-package-json';
import * as fs from 'fs-extra';
import * as path from 'path';

export const scaffold = async (tempDir: string, answers: WizardAnswers): Promise<string> => {
    const targetDir = path.resolve(answers.projectName);

    if (await fs.pathExists(targetDir)) {
        throw new Error(
            `Directory "${answers.projectName}" already exists. Please choose a different name or remove the existing directory.`,
        );
    }

    const selectedBlockNames = answers.selectedBlocks;

    // Step 1: Move cloned repo to target directory
    console.log();
    console.log(`Creating project in "${targetDir}"...`);
    await fs.move(tempDir, targetDir);

    // Step 2: Remove unneeded directories (matches original create-o2s-app behavior)
    await cleanupProject(targetDir, selectedBlockNames, answers.selectedIntegrations);

    // Step 3: Clean up root package.json (remove workspace entries for deleted dirs)
    await transformRootPackageJson(targetDir);

    // Step 4: Fix package-lock.json and install dependencies
    await installDependencies(targetDir);

    return targetDir;
};

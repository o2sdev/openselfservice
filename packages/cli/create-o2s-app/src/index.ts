#!/usr/bin/env node
import { cleanupTempDir, cloneRepository } from './scaffold/clone';
import { scaffold } from './scaffold/index';
import { TemplateType } from './types';
import { printError, printSummary } from './utils/logger';
import { runWizard } from './wizard/index';
import * as telemetry from '@o2s/telemetry';
import { Command } from 'commander';

const program = new Command();

program
    .name('create-o2s-app')
    .description('Create a new O2S project with interactive setup wizard')
    .argument('[name]', 'Name of the new project')
    .option('--directory [directory]', 'Specify the destination directory')
    .option('--template [template]', 'Template: o2s | dxp | custom')
    .option('--blocks [blocks]', 'Comma-separated list of block names (for non-interactive mode)')
    .option('--integrations [integrations]', 'Comma-separated list of integration names (for non-interactive mode)')
    .option('--skip-install', 'Skip npm install step')
    .action(async (name, options) => {
        telemetry.sendEvent('o2s', 'create-o2s-app', 'create-project');
        await telemetry.flushEvents();

        let tempDir: string | undefined;

        try {
            const cliTemplate = parseTemplate(options.template);
            const cliBlocks = parseCommaSeparated(options.blocks);
            const cliIntegrations = parseCommaSeparated(options.integrations);

            // Step 1: Clone repository to temp directory
            tempDir = await cloneRepository();

            // Step 2: Run wizard (interactive or non-interactive)
            const answers = await runWizard(tempDir, name, cliTemplate, cliBlocks, cliIntegrations);

            // Step 3: Scaffold project
            const { targetDir, uncoveredModules } = await scaffold(tempDir, answers, options.skipInstall);

            // Step 4: Print summary
            printSummary(
                targetDir,
                answers.template,
                answers.selectedBlocks.length,
                answers.selectedIntegrations.length,
                uncoveredModules,
                options.skipInstall,
            );
        } catch (error) {
            if (tempDir) {
                await cleanupTempDir(tempDir);
            }

            if (error instanceof Error && error.message.includes('is required')) {
                // User cancelled a prompt
                console.log();
                console.log('Setup cancelled.');
            } else {
                printError('Failed to create project', error);
            }

            process.exit(1);
        }
    });

program.parse(process.argv);

const parseTemplate = (value: unknown): TemplateType | undefined => {
    if (!value || typeof value !== 'string') return undefined;
    const valid: TemplateType[] = ['o2s', 'dxp', 'custom'];
    if (valid.includes(value as TemplateType)) {
        return value as TemplateType;
    }
    console.warn(`Warning: Unknown template "${value}". Valid options: o2s, dxp, custom`);
    return undefined;
};

const parseCommaSeparated = (value: unknown): string[] | undefined => {
    if (!value || typeof value !== 'string') return undefined;
    return value
        .split(',')
        .map((s) => s.trim())
        .filter((s) => s.length > 0);
};

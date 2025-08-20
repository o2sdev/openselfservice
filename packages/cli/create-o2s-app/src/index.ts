#!/usr/bin/env node
import * as telemetry from '@o2s/telemetry';
import { execSync } from 'child_process';
import cliProgress from 'cli-progress';
import { Command } from 'commander';
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'fs';
import prompts from 'prompts';
import simpleGit from 'simple-git';

const program = new Command();

program
    .name('create-project')
    .description('Create a new O2S project')
    .argument('[name]', 'Name of the new project')
    .option('--directory [directory]', 'Specify the destination directory', 'my-o2s-project')
    .action(async (name, options) => {
        telemetry.sendEvent('create-o2s-app', 'create-project');
        await telemetry.flushEvents();

        const projectName = name
            ? name
            : (
                  await prompts({
                      type: 'text',
                      name: 'name',
                      message: 'Enter the name of your project',
                      initial: 'my-o2s-project',
                  })
              ).name;

        const targetDirectory = projectName || options.directory;

        const githubRepo = 'https://github.com/o2sdev/openselfservice';
        const githubBranch = 'create-o2s-app/base';

        if (existsSync(targetDirectory)) {
            console.error(
                `Directory ${targetDirectory} already exists. Please choose a different name or remove the existing directory.`,
            );
            return;
        }

        const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

        try {
            mkdirSync(targetDirectory, { recursive: true });

            console.log();
            console.log(`Cloning repository "${githubRepo}" (branch: "${githubBranch}") into "${targetDirectory}"...`);
            console.log();

            bar.start(100, 0);

            const git = simpleGit({
                progress({ progress }) {
                    bar.update(Math.round(progress));
                },
            });
            await git.clone(githubRepo, targetDirectory, ['--branch', githubBranch]);

            bar.stop();

            console.log();
            console.log();
            console.log('Organizing the project structure...');

            rmSync(`${targetDirectory}/.git`, { recursive: true });
            rmSync(`${targetDirectory}/.github`, { recursive: true });
            rmSync(`${targetDirectory}/.changeset`, { recursive: true });

            rmSync(`${targetDirectory}/vercel.json`, { recursive: true });

            rmSync(`${targetDirectory}/apps/docs`, { recursive: true });
            rmSync(`${targetDirectory}/packages/framework`, { recursive: true });
            rmSync(`${targetDirectory}/packages/integrations`, { recursive: true });
            rmSync(`${targetDirectory}/packages/utils`, { recursive: true });
            rmSync(`${targetDirectory}/packages/cli`, { recursive: true });
            rmSync(`${targetDirectory}/packages/telemetry`, { recursive: true });

            let file = readFileSync(targetDirectory + '/package-lock.json', 'utf8');
            file = removeSymLinks(file);
            writeFileSync(targetDirectory + '/package-lock.json', file);

            console.log();
            console.log(`Installing dependencies in "${targetDirectory}"...`);

            try {
                execSync('npm install', {
                    cwd: targetDirectory,
                    stdio: 'inherit',
                });
                console.log(`Dependencies installed successfully.`);
            } catch (error) {
                console.error('Error while installing dependencies:', error);
                return;
            }

            console.log();
            console.log('Project successfully created! 🎉');
            console.log(`Location: ${targetDirectory}`);
        } catch (error) {
            bar.stop();

            console.log();

            if (error instanceof Error) {
                console.error('Error while creating the project', error.message);
            } else {
                console.error('Error while creating the project');
            }
        }
    });

program.parse(process.argv);

const removeSymLinks = (file: string) => {
    // TODO: figure out how to remove symlinks in a smarter way without specifying every block here
    const names = [
        ['docs', 'apps/docs'],
        ['create-o2s-app', 'packages/cli/create-o2s-app'],
        ['framework', 'packages/framework'],
        ['telemetry', 'packages/telemetry'],

        ['utils.api-harmonization', 'packages/utils/api-harmonization'],
        ['utils.logger', 'packages/utils/logger'],
        ['utils.frontend', 'packages/utils/frontend'],

        ['integrations.mocked', 'packages/integrations/mocked'],
        ['integrations.strapi-cms', 'packages/integrations/strapi-cms'],
        ['integrations.redis', 'packages/integrations/redis'],
        ['integrations.medusajs', 'packages/integrations/medusajs'],
        ['integrations.algolia', 'packages/integrations/algolia'],

        ['blocks.article', 'packages/blocks/article'],
        ['blocks.article-list', 'packages/blocks/article-list'],
        ['blocks.article-search', 'packages/blocks/article-search'],
        ['blocks.category', 'packages/blocks/category'],
        ['blocks.category-list', 'packages/blocks/category-list'],
        ['blocks.faq', 'packages/blocks/faq'],
        ['blocks.featured-service-list', 'packages/blocks/featured-service-list'],
        ['blocks.invoice-list', 'packages/blocks/invoice-list'],
        ['blocks.notification-details', 'packages/blocks/notification-details'],
        ['blocks.notification-list', 'packages/blocks/notification-list'],
        ['blocks.order-details', 'packages/blocks/order-details'],
        ['blocks.order-list', 'packages/blocks/order-list'],
        ['blocks.orders-summary', 'packages/blocks/orders-summary'],
        ['blocks.payments-history', 'packages/blocks/payments-history'],
        ['blocks.payments-summary', 'packages/blocks/payments-summary'],
        ['blocks.quick-links', 'packages/blocks/quick-links'],
        ['blocks.service-details', 'packages/blocks/service-details'],
        ['blocks.service-list', 'packages/blocks/service-list'],
        ['blocks.surveyjs-form', 'packages/blocks/surveyjs-form'],
        ['blocks.ticket-details', 'packages/blocks/ticket-details'],
        ['blocks.ticket-list', 'packages/blocks/ticket-list'],
        ['blocks.ticket-recent', 'packages/blocks/ticket-recent'],
        ['blocks.user-account', 'packages/blocks/user-account'],
    ];

    let newFile = file;

    names.forEach(([name, path]) => {
        newFile = newFile.replaceAll(
            `
        "node_modules/@o2s/${name}": {
            "resolved": "${path}",
            "link": true
        },`,
            '',
        );
    });

    return newFile;
};

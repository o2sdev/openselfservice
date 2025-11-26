#!/usr/bin/env node

/**
 * Builds Turbo filter for dev packages with interactive integration selection.
 * Dynamically discovers integrations from packages/integrations directory.
 *
 * Usage:
 *   npm run dev                    - runs with mocked integration (default)
 *   npm run dev:select             - shows interactive wizard for integration selection
 *   INTEGRATIONS=mocked,algolia npm run dev - directly specify integrations via env var
 */

import { spawn } from 'child_process';
import prompts from 'prompts';
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');
const integrationsDir = join(rootDir, 'packages/integrations');

const DEFAULT_INTEGRATIONS = ['mocked'];

/**
 * Converts package name or directory name to display title.
 * Examples: '@o2s/integrations.contentful-cms' -> 'Contentful CMS', 'strapi-cms' -> 'Strapi CMS'
 */
function formatTitle(packageName, directoryName) {
    const packageNameMatch = packageName.match(/@o2s\/integrations\.(.+)/);
    const nameToFormat = packageNameMatch ? packageNameMatch[1] : directoryName;
    
    return nameToFormat
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

/**
 * Discovers all integrations from packages/integrations directory.
 * Reads package.json for each integration to extract metadata.
 *
 * @returns {Object} Object containing integrations metadata and name mapping
 */
function discoverIntegrations() {
    const integrations = {};
    const integrationMap = {};
    
    try {
        const directoryEntries = readdirSync(integrationsDir);
        
        for (const entry of directoryEntries) {
            const integrationPath = join(integrationsDir, entry);
            
            if (!statSync(integrationPath).isDirectory()) {
                continue;
            }
            
            const packageJsonPath = join(integrationPath, 'package.json');
            try {
                const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
                const packageName = packageJson.name;
                
                if (!packageName || !packageName.startsWith('@o2s/integrations.')) {
                    continue;
                }
                
                const integrationKey = entry;
                const description = packageJson.description || 
                    `Integration with ${formatTitle(packageName, entry)}`;
                
                integrations[integrationKey] = {
                    key: integrationKey,
                    packageName: packageName,
                    title: formatTitle(packageName, entry),
                    description: description,
                    path: `packages/integrations/${entry}`
                };
                
                integrationMap[integrationKey] = packageName;
                
                if (integrationKey.includes('-cms')) {
                    const alias = integrationKey.replace('-cms', '');
                    integrationMap[alias] = packageName;
                }
                
            } catch (error) {
                console.warn(`⚠️  Skipping ${entry}: ${error.message}`);
                continue;
            }
        }
    } catch (error) {
        console.error(`❌ Error scanning integrations directory: ${error.message}`);
        process.exit(1);
    }
    
    return { integrations, integrationMap };
}

/**
 * Builds available integrations list for interactive wizard.
 * Excludes mocked from the list as it's always included automatically.
 * Sorts remaining integrations alphabetically.
 */
function getAvailableIntegrations(integrationsData) {
    const { integrations } = integrationsData;
    
    const integrationKeys = Object.keys(integrations)
        .filter(integrationKey => integrationKey !== 'mocked')
        .sort((firstKey, secondKey) => firstKey.localeCompare(secondKey));
    
    return integrationKeys.map(integrationKey => {
        const integration = integrations[integrationKey];
        
        return {
            title: integration.title,
            value: integrationKey,
            description: integration.description,
            selected: false,
            disabled: false
        };
    });
}

function ensureMockedIncluded(selectedIntegrations) {
    if (!selectedIntegrations.includes('mocked')) {
        return ['mocked', ...selectedIntegrations];
    }
    
    const mockedIndex = selectedIntegrations.indexOf('mocked');
    if (mockedIndex > 0) {
        const reordered = [...selectedIntegrations];
        reordered.splice(mockedIndex, 1);
        reordered.unshift('mocked');
        return reordered;
    }
    
    return selectedIntegrations;
}

async function promptForIntegrations(integrationsData) {
    const availableIntegrations = getAvailableIntegrations(integrationsData);

    const response = await prompts({
        type: 'multiselect',
        name: 'integrations',
        message: 'Select additional integrations to run (mocked is always included):',
        choices: availableIntegrations,
        initial: 0,
        hint: '- Space: select/deselect, Enter: confirm',
        instructions: false
    });

    if (!response.integrations || response.integrations.length === 0) {
        console.log('\n❌ Cancelled. Running with default integration (mocked)...');
        return DEFAULT_INTEGRATIONS;
    }

    return ensureMockedIncluded(response.integrations);
}

async function main() {
    const integrationsData = discoverIntegrations();
    const { integrations, integrationMap } = integrationsData;
    
    const integrationsFromEnv = process.env.INTEGRATIONS;
    const integrationsFromArg = process.argv[2]?.replace(/^--integrations=/, '');
    const shouldSkipWizard = integrationsFromEnv || integrationsFromArg || process.env.SKIP_WIZARD === 'true';

    let selectedIntegrations = DEFAULT_INTEGRATIONS;

    if (integrationsFromArg) {
        const parsedIntegrations = integrationsFromArg.split(/[+,]/).map(integration => integration.trim()).filter(Boolean);
        selectedIntegrations = ensureMockedIncluded(parsedIntegrations);
    } else if (integrationsFromEnv) {
        const parsedIntegrations = integrationsFromEnv.split(/[+,]/).map(integration => integration.trim()).filter(Boolean);
        selectedIntegrations = ensureMockedIncluded(parsedIntegrations);
    } else if (!shouldSkipWizard) {
        const isInteractiveTerminal = process.stdout.isTTY && process.stdin.isTTY;
        
        if (isInteractiveTerminal) {
            selectedIntegrations = await promptForIntegrations(integrationsData);
        }
    }

    const basePackages = [
        '@o2s/api-harmonization',
        '@o2s/frontend',
        '@o2s/utils.logger',
        '@o2s/utils.frontend',
        '@o2s/utils.api-harmonization',
        '@o2s/framework',
        '@o2s/configs.integrations',
        '@o2s/telemetry',
        '@o2s/modules.surveyjs'
    ];

    const integrationPackages = selectedIntegrations
        .map(integrationKey => {
            const packageName = integrationMap[integrationKey.toLowerCase()];
            if (!packageName) {
                const availableKeys = Object.keys(integrationMap).join(', ');
                console.warn(`⚠️  Unknown integration: ${integrationKey}. Available: ${availableKeys}`);
                return null;
            }
            return packageName;
        })
        .filter(Boolean);

    const allPackages = [...basePackages, ...integrationPackages];

    const selectedIntegrationTitles = selectedIntegrations.map(integrationKey => {
        const integration = integrations[integrationKey];
        return integration ? integration.title : integrationKey.charAt(0).toUpperCase() + integrationKey.slice(1);
    });

    console.log('\n' + '='.repeat(60));
    console.log('🚀 Starting dev environment');
    console.log('='.repeat(60));
    console.log(`📦 Selected integrations: ${selectedIntegrationTitles.join(', ')}`);
    console.log(`🔧 Total packages: ${allPackages.length}`);
    console.log('='.repeat(60) + '\n');

    const turboArgs = ['dev', '--no-cache'];
    allPackages.forEach(packageName => {
        turboArgs.push('--filter', packageName);
    });
    const turboProcess = spawn('turbo', turboArgs, {
        stdio: 'inherit',
        shell: true
    });

    turboProcess.on('error', (error) => {
        console.error(`❌ Error starting turbo: ${error.message}`);
        process.exit(1);
    });

    turboProcess.on('exit', (code) => {
        process.exit(code || 0);
    });
}

// Run main function
main().catch((error) => {
    console.error('❌ Error:', error);
    process.exit(1);
});


#!/usr/bin/env node

/**
 * Helper script for building Turbo filter for dev packages
 * Usage:
 *   npm run dev                    - interactive wizard
 *   INTEGRATIONS=mocked npm run dev - directly with environment variable
 */

import { spawn } from 'child_process';
import prompts from 'prompts';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Default to mocked only
const defaultIntegrations = ['mocked'];

// Map integration names to their package paths and display names
const integrationConfig = {
    mocked: {
        path: 'packages/integrations/mocked',
        title: 'Mocked',
        fallbackDescription: 'Local integration with mocked data (always selected)'
    },
    algolia: {
        path: 'packages/integrations/algolia',
        title: 'Algolia',
        fallbackDescription: 'Integration with Algolia Search'
    },
    medusajs: {
        path: 'packages/integrations/medusajs',
        title: 'MedusaJS',
        fallbackDescription: 'Integration with MedusaJS e-commerce'
    },
    redis: {
        path: 'packages/integrations/redis',
        title: 'Redis',
        fallbackDescription: 'Integration with Redis cache'
    },
    'strapi-cms': {
        path: 'packages/integrations/strapi-cms',
        title: 'Strapi CMS',
        fallbackDescription: 'Integration with Strapi CMS'
    },
    zendesk: {
        path: 'packages/integrations/zendesk',
        title: 'Zendesk',
        fallbackDescription: 'Integration with Zendesk support'
    }
};

/**
 * Load description from package.json for an integration
 */
function getIntegrationDescription(integrationKey) {
    const config = integrationConfig[integrationKey];
    if (!config) {
        return 'Integration description not available';
    }

    try {
        const packageJsonPath = join(rootDir, config.path, 'package.json');
        const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
        
        // Try to get description from package.json
        if (packageJson.description) {
            return packageJson.description;
        }
        
        // Fallback to default description
        return config.fallbackDescription;
    } catch (error) {
        // If file doesn't exist or can't be read, use fallback
        return config.fallbackDescription;
    }
}

/**
 * Build available integrations list with descriptions from package.json
 */
function getAvailableIntegrations() {
    return Object.entries(integrationConfig).map(([value, config]) => {
        const description = getIntegrationDescription(value);
        const isMocked = value === 'mocked';
        
        return {
            title: config.title,
            value: value,
            description: description,
            selected: isMocked,
            disabled: false
        };
    });
}

async function main() {
    // Get integrations from environment variable or arguments
    const integrationsEnv = process.env.INTEGRATIONS;
    const integrationsArg = process.argv[2]?.replace(/^--integrations=/, '');
    const skipWizard = integrationsEnv || integrationsArg || process.env.SKIP_WIZARD === 'true';

    let integrations = defaultIntegrations;

    // If environment variable or argument exists, use them (skip wizard)
    if (integrationsArg) {
        const selected = integrationsArg.split(/[+,]/).map(i => i.trim()).filter(Boolean);
        // Always ensure mocked is included
        integrations = selected.includes('mocked') ? selected : ['mocked', ...selected];
    } else if (integrationsEnv) {
        const selected = integrationsEnv.split(/[+,]/).map(i => i.trim()).filter(Boolean);
        // Always ensure mocked is included
        integrations = selected.includes('mocked') ? selected : ['mocked', ...selected];
    } else if (!skipWizard) {
        // Show interactive wizard only if no environment variable and TTY is available
        const showWizard = process.stdout.isTTY && process.stdin.isTTY;
        
        if (showWizard) {
            // Load integrations with descriptions from package.json
            const availableIntegrations = getAvailableIntegrations();
            
            // Create custom choices with mocked always selected and marked as always selected
            const customChoices = availableIntegrations.map((choice) => {
                if (choice.value === 'mocked') {
                    return {
                        ...choice,
                        title: 'Mocked (always selected)',
                        selected: true,
                        disabled: false
                    };
                }
                return choice;
            });

            // Show wizard with checkboxes
            const response = await prompts({
                type: 'multiselect',
                name: 'integrations',
                message: 'Select integrations to run:',
                choices: customChoices,
                initial: 0, // Default to first selection (mocked)
                hint: '- Space: select/deselect, Enter: confirm',
                instructions: false
            });

            // If user cancelled (Ctrl+C), exit
            if (!response.integrations || response.integrations.length === 0) {
                console.log('\n❌ Cancelled. Running with default integration (mocked)...');
                integrations = defaultIntegrations;
            } else {
                // Always ensure mocked is included (even if user tried to deselect it)
                // This ensures mocked is always selected regardless of user interaction
                if (!response.integrations.includes('mocked')) {
                    response.integrations.unshift('mocked');
                }
                // Ensure mocked is always first in the list
                const mockedIndex = response.integrations.indexOf('mocked');
                if (mockedIndex > 0) {
                    response.integrations.splice(mockedIndex, 1);
                    response.integrations.unshift('mocked');
                }
                integrations = response.integrations;
            }
        }
    }

    // Always include base packages (apps, utils, framework, configs, modules)
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

    // Map integration names to full package names
    const integrationMap = {
        mocked: '@o2s/integrations.mocked',
        algolia: '@o2s/integrations.algolia',
        medusajs: '@o2s/integrations.medusajs',
        redis: '@o2s/integrations.redis',
        'strapi-cms': '@o2s/integrations.strapi-cms',
        strapi: '@o2s/integrations.strapi-cms', // alias for strapi-cms
        zendesk: '@o2s/integrations.zendesk'
    };

    // Convert integration names to full package names
    const integrationPackages = integrations.map(int => {
        const packageName = integrationMap[int.toLowerCase()];
        if (!packageName) {
            console.warn(`⚠️  Unknown integration: ${int}. Available: ${Object.keys(integrationMap).join(', ')}`);
            return null;
        }
        return packageName;
    }).filter(Boolean);

    // Combine all packages
    const allPackages = [...basePackages, ...integrationPackages];

    // Display information about selected integrations
    console.log('\n' + '='.repeat(60));
    console.log('🚀 Starting dev environment');
    console.log('='.repeat(60));
    console.log(`📦 Selected integrations: ${integrations.map(i => i.charAt(0).toUpperCase() + i.slice(1)).join(', ')}`);
    console.log(`🔧 Total packages: ${allPackages.length}`);
    console.log('='.repeat(60) + '\n');

    // Build Turbo filter arguments
    // Turbo requires multiple --filter flags for multiple packages
    const turboArgs = ['dev', '--no-cache'];
    allPackages.forEach(pkg => {
        turboArgs.push('--filter', pkg);
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


import { createClient } from '@hey-api/openapi-ts';
import { existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const currentDir = dirname(fileURLToPath(import.meta.url));

interface TypeGenConfig {
    oasPath: string;
    outputDirPath: string;
    name: string;
}

const typeGenConfigs: TypeGenConfig[] = [
    {
        oasPath: resolve(currentDir, '../oas/oas.yaml'),
        outputDirPath: resolve(currentDir, '../../generated/zendesk'),
        name: 'Zendesk Ticketing API',
    },
    {
        oasPath: resolve(currentDir, '../oas/help-center-oas.yaml'),
        outputDirPath: resolve(currentDir, '../../generated/help-center'),
        name: 'Zendesk Help Center API',
    },
];

async function generateTypes(config: TypeGenConfig): Promise<void> {
    if (!existsSync(config.oasPath)) {
        throw new Error(
            `OAS file not found at ${config.oasPath}. Run 'npm run fetch-oas' first.`,
        );
    }

    try {
        mkdirSync(config.outputDirPath, { recursive: true });
        await createClient({
            input: config.oasPath,
            output: config.outputDirPath,
        });
        console.log(`${config.name} types generated successfully to`, config.outputDirPath);
    } catch (error) {
        console.error(`Error generating ${config.name} types:`, error);
        throw error;
    }
}

async function generateAllTypes(): Promise<void> {
    try {
        await Promise.all(typeGenConfigs.map((config) => generateTypes(config)));
        console.log('All Zendesk types generated successfully');
    } catch (error) {
        console.error('Error generating Zendesk types:', error);
        process.exit(1);
    }
}

generateAllTypes();

import { createClient } from '@hey-api/openapi-ts';
import { existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

interface TypeGenConfig {
    oasPath: string;
    outputDirPath: string;
    name: string;
}

const typeGenConfigs: TypeGenConfig[] = [
    {
        oasPath: resolve(__dirname, '../oas/oas.yaml'),
        outputDirPath: resolve(__dirname, '../../generated/zendesk'),
        name: 'Zendesk Ticketing API',
    },
    {
        oasPath: resolve(__dirname, '../oas/help-center-oas.yaml'),
        outputDirPath: resolve(__dirname, '../../generated/help-center'),
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

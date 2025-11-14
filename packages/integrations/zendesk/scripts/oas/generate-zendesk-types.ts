import { createClient } from '@hey-api/openapi-ts';
import { existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

async function generateZendeskTypes(): Promise<void> {
    const oasPath = resolve(__dirname, '../oas/oas.yaml');
    if (!existsSync(oasPath)) {
        throw new Error(`OAS file not found at ${oasPath}. Run 'npm run fetch-oas' first.`);
    }
    const outputDirPath = resolve(__dirname, '../../src/types');

    try {
        mkdirSync(outputDirPath, { recursive: true });
        await createClient({
            input: oasPath,
            output: outputDirPath,
        });
        console.log('Zendesk types generated successfully to', outputDirPath);
    } catch (error) {
        console.error('Error generating Zendesk types:', error);
        process.exit(1);
    }
}

generateZendeskTypes();

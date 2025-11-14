import { createClient } from '@hey-api/openapi-ts';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

async function generateZendeskTypes() {
    const oasPath = resolve(__dirname, '../oas/oas.yaml');
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

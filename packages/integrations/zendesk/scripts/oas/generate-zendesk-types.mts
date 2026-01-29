import { createClient } from '@hey-api/openapi-ts';
import { existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const currentDir = dirname(fileURLToPath(import.meta.url));

async function generateZendeskTypes(): Promise<void> {
    const oasPath = resolve(currentDir, '../oas/oas.yaml');
    if (!existsSync(oasPath)) {
        throw new Error(`OAS file not found at ${oasPath}. Run 'npm run fetch-oas' first.`);
    }
    const outputDirPath = resolve(currentDir, '../../generated/zendesk');

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

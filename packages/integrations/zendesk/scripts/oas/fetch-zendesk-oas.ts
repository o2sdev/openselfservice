import fs from 'node:fs';
import path from 'node:path';

interface OASConfig {
    url: string;
    outputPath: string;
    name: string;
}

const oasConfigs: OASConfig[] = [
    {
        url: 'https://developer.zendesk.com/zendesk/oas.yaml',
        outputPath: path.resolve(__dirname, '../oas/oas.yaml'),
        name: 'Zendesk Ticketing API',
    },
    {
        url: 'https://developer.zendesk.com/help_center/oas.yaml',
        outputPath: path.resolve(__dirname, '../oas/help-center-oas.yaml'),
        name: 'Zendesk Help Center API',
    },
];

async function fetchOAS(config: OASConfig): Promise<void> {
    try {
        const response = await fetch(config.url);
        if (!response.ok) {
            throw new Error(`Failed to fetch OAS: ${response.statusText}`);
        }
        const oasContent = await response.text();
        fs.mkdirSync(path.dirname(config.outputPath), { recursive: true });
        fs.writeFileSync(config.outputPath, oasContent);
        console.log(`${config.name} OAS downloaded successfully to`, config.outputPath);
    } catch (error) {
        console.error(`Error fetching ${config.name} OAS:`, error);
        throw error;
    }
}

async function fetchAllOAS(): Promise<void> {
    try {
        await Promise.all(oasConfigs.map((config) => fetchOAS(config)));
        console.log('All Zendesk OAS files downloaded successfully');
    } catch (error) {
        console.error('Error fetching Zendesk OAS files:', error);
        process.exit(1);
    }
}

fetchAllOAS();

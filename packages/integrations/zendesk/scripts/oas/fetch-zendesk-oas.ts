import fs from 'node:fs';
import path from 'node:path';

async function fetchZendeskOAS() {
    const oasUrl = 'https://developer.zendesk.com/zendesk/oas.yaml';
    const oasPath = path.resolve(__dirname, '../oas/oas.yaml');

    try {
        const response = await fetch(oasUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch OAS: ${response.statusText}`);
        }
        const oasContent = await response.text();
        fs.mkdirSync(path.dirname(oasPath), { recursive: true });
        fs.writeFileSync(oasPath, oasContent);
        console.log('Zendesk OAS downloaded successfully to', oasPath);
    } catch (error) {
        console.error('Error fetching Zendesk OAS:', error);
        process.exit(1);
    }
}

fetchZendeskOAS();

import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const outputDir = resolve(process.cwd(), 'docs/rest-api');

const categoryConfig = {
    label: 'REST API Reference',
    position: 700,
    link: {
        type: 'doc',
        id: 'open-self-service-rest-api',
    },
};

async function main() {
    const categoryPath = resolve(outputDir, '_category_.json');
    await writeFile(categoryPath, `${JSON.stringify(categoryConfig, null, 4)}\n`, 'utf8');
    console.log(`Created ${categoryPath}`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});

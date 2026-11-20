import { access, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import process from 'node:process';

const openApiUrlFromEnv = process.env.O2S_OPENAPI_URL?.trim();
const openApiUrl = openApiUrlFromEnv || 'http://localhost:3001/api/docs-api-json';
const outputPath = resolve(process.cwd(), 'static/openapi/framework-live.json');
const strictMode = process.argv.includes('--strict') || process.env.O2S_OPENAPI_STRICT === '1';
const frameworkTags = new Set([
    'cms',
    'tickets',
    'notifications',
    'users',
    'organizations',
    'billing-accounts',
    'resources',
    'invoices',
    'articles',
    'search',
    'products',
    'orders',
    'carts',
    'customers',
    'payments',
    'checkout',
]);

async function hasExistingSnapshot() {
    try {
        await access(outputPath);
        return true;
    } catch {
        return false;
    }
}

function resolveApiServerUrl() {
    const explicitServerUrl = process.env.API_URL_INTERNAL ?? process.env.O2S_OPENAPI_SERVER_URL;
    if (explicitServerUrl) {
        return explicitServerUrl.replace(/\/+$/, '').replace(/\/api$/, '');
    }

    const docsUrl = new URL(openApiUrl);
    return docsUrl.origin;
}

function filterFrameworkOnly(document) {
    const filteredPaths = {};
    const usedTags = new Set();

    for (const [path, pathItem] of Object.entries(document.paths ?? {})) {
        const filteredPathItem = {};

        for (const [method, operation] of Object.entries(pathItem ?? {})) {
            if (!operation || typeof operation !== 'object') continue;
            const operationTags = (operation.tags ?? []).map((tag) => String(tag).toLowerCase());
            const isFrameworkOperation = operationTags.some((tag) => frameworkTags.has(tag));
            if (!isFrameworkOperation) continue;

            filteredPathItem[method] = operation;
            operationTags.forEach((tag) => {
                if (frameworkTags.has(tag)) {
                    usedTags.add(tag);
                }
            });
        }

        if (Object.keys(filteredPathItem).length > 0) {
            filteredPaths[path] = filteredPathItem;
        }
    }

    const tags = (document.tags ?? []).filter((tag) => usedTags.has(String(tag.name).toLowerCase()));
    const serverUrl = resolveApiServerUrl();

    // A single `{baseUrl}` variable → in Try it out the UI shows a text field (not only a select).
    // The default is taken from O2S_OPENAPI_SERVER_URL / API_URL_INTERNAL, or from the origin of O2S_OPENAPI_URL.
    return {
        ...document,
        info: {
            ...(document.info ?? {}),
            title: 'Open Self Service REST API',
            description:
                'Complete REST API reference for the Open Self Service harmonization layer. This API provides a unified interface to interact with various backend systems including CMS, ticketing, notifications, billing, e-commerce, and more. All endpoints return normalized data models regardless of the underlying integration.',
        },
        paths: filteredPaths,
        tags,
        servers: [
            {
                url: '{baseUrl}',
                description: 'Base URL for requests (you can change it to your API, e.g. staging or localhost).',
                variables: {
                    baseUrl: {
                        default: serverUrl,
                    },
                },
            },
        ],
    };
}

async function main() {
    try {
        const response = await fetch(openApiUrl, {
            headers: {
                Accept: 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch OpenAPI from ${openApiUrl}: ${response.status} ${response.statusText}`);
        }

        const json = await response.json();
        const filtered = filterFrameworkOnly(json);

        await mkdir(dirname(outputPath), { recursive: true });
        await writeFile(outputPath, `${JSON.stringify(filtered, null, 2)}\n`, 'utf8');

        console.log(`Saved framework-only OpenAPI snapshot to ${outputPath}`);
    } catch (error) {
        const fallbackExists = await hasExistingSnapshot();
        if (fallbackExists && !strictMode) {
            const existing = JSON.parse(await readFile(outputPath, 'utf8'));
            const filtered = filterFrameworkOnly(existing);
            await writeFile(outputPath, `${JSON.stringify(filtered, null, 2)}\n`, 'utf8');
            console.warn(`OpenAPI fetch failed, using existing snapshot at ${outputPath}.`);
            console.warn(error);
            return;
        }

        throw error;
    }
}

try {
    await main();
} catch (error) {
    console.error(error);
    process.exit(1);
}

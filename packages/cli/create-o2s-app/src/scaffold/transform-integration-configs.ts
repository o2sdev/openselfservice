import { ConflictResolution } from '../types';
import * as fs from 'fs-extra';
import * as path from 'path';

const CONFIG_FILE_PATH = 'packages/configs/integrations/src/config.ts';
const CONFIGS_PACKAGE_JSON_PATH = 'packages/configs/integrations/package.json';

// Domains configured in packages/configs/integrations/src/config.ts, mirroring the framework's
// DOMAIN_KEYS. Each has its own `import * as <Domain>Source ...` line that we retarget on swap.
// (Documents is intentionally excluded — it is a namespace re-export, not a swappable domain.)
const CONFIG_DOMAINS = [
    'articles',
    'auth',
    'billingAccounts',
    'cache',
    'carts',
    'checkout',
    'cms',
    'customers',
    'invoices',
    'notifications',
    'orders',
    'organizations',
    'payments',
    'products',
    'resources',
    'search',
    'tickets',
    'users',
] as const;

// Per-domain import alias used in config.ts, e.g. "tickets" → "TicketsSource", "cms" → "CmsSource".
const domainToAlias = (domain: string): string => `${domain.charAt(0).toUpperCase()}${domain.slice(1)}Source`;

const mockedPath = (): string => `@o2s/integrations.mocked/integration`;
const integrationPath = (name: string): string => `@o2s/integrations.${name}/integration`;

// Build a map from framework module name → winning integration.
// Integrations without o2sModules entries (e.g. mocked) contribute no modules.
const buildModuleIntegrationMap = (
    selectedIntegrations: string[],
    conflictResolutions: ConflictResolution[],
    integrationModules: Record<string, string[]>,
): Map<string, string> => {
    const moduleMap = new Map<string, string>();

    for (const integration of selectedIntegrations) {
        const modules = integrationModules[integration] ?? [];
        for (const module of modules) {
            if (!moduleMap.has(module)) {
                moduleMap.set(module, integration);
            }
        }
    }

    for (const resolution of conflictResolutions) {
        // Defense-in-depth: only honor a resolution whose winner actually declares the module.
        // The wizard already guarantees this, but a programmatic caller might not.
        const winnerModules = integrationModules[resolution.winner] ?? [];
        if (winnerModules.includes(resolution.module)) {
            moduleMap.set(resolution.module, resolution.winner);
        }
    }

    return moduleMap;
};

const updateConfigsPackageJson = async (
    projectDir: string,
    selectedIntegrations: string[],
    integrationVersions: Record<string, string>,
): Promise<void> => {
    const pkgPath = path.join(projectDir, CONFIGS_PACKAGE_JSON_PATH);

    if (!(await fs.pathExists(pkgPath))) return;

    const pkg = await fs.readJson(pkgPath);

    if (!pkg.dependencies) {
        pkg.dependencies = {};
    }

    // Remove integration deps that were not selected
    for (const key of Object.keys(pkg.dependencies as Record<string, string>)) {
        if (key.startsWith('@o2s/integrations.')) {
            const name = key.replace('@o2s/integrations.', '');
            if (!selectedIntegrations.includes(name)) {
                delete pkg.dependencies[key];
            }
        }
    }

    // Add selected integrations that are not yet in dependencies
    for (const name of selectedIntegrations) {
        const packageName = `@o2s/integrations.${name}`;
        if (!pkg.dependencies[packageName]) {
            const version = integrationVersions[name];
            if (version) {
                pkg.dependencies[packageName] = `^${version}`;
            }
        }
    }

    await fs.writeJson(pkgPath, pkg, { spaces: 4 });
};

export const transformIntegrationConfigs = async (
    projectDir: string,
    selectedIntegrations: string[],
    conflictResolutions: ConflictResolution[],
    integrationModules: Record<string, string[]>,
    integrationVersions: Record<string, string>,
): Promise<string[]> => {
    // Always update configs package.json to add/remove integration dependencies
    await updateConfigsPackageJson(projectDir, selectedIntegrations, integrationVersions);

    const configFilePath = path.join(projectDir, CONFIG_FILE_PATH);

    if (!(await fs.pathExists(configFilePath))) {
        return [];
    }

    const content = await fs.readFile(configFilePath, 'utf-8');

    // Build module → integration map
    const moduleMap = buildModuleIntegrationMap(selectedIntegrations, conflictResolutions, integrationModules);

    // Swap a domain by retargeting the module path on its single `import * as <Domain>Source ...`
    // line. Both the runtime map and the type re-export reference that alias, so they stay in sync.
    const lines = content.split('\n');
    for (const [module, integration] of moduleMap.entries()) {
        if (integration === 'mocked') continue;
        if (!(CONFIG_DOMAINS as readonly string[]).includes(module)) continue;

        const alias = domainToAlias(module);
        const importRegex = new RegExp(`^(import \\* as ${alias} from ')[^']+(';)$`);

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i] ?? '';
            if (importRegex.test(line)) {
                lines[i] = line.replace(importRegex, `$1${integrationPath(integration)}$2`);
                break;
            }
        }
    }
    const updatedContent = lines.join('\n');

    await fs.writeFile(configFilePath, updatedContent, 'utf-8');

    // Detect domains that still resolve to Mocked while 'mocked' is not selected — those will
    // fail to build until configured. Skip when 'mocked' (full) is selected; it covers everything.
    const uncoveredModules: string[] = [];
    if (!selectedIntegrations.includes('mocked')) {
        for (const domain of CONFIG_DOMAINS) {
            const alias = domainToAlias(domain);
            const stillMockedRegex = new RegExp(
                `^import \\* as ${alias} from '${mockedPath().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}';$`,
                'm',
            );
            if (stillMockedRegex.test(updatedContent)) {
                uncoveredModules.push(domain);
            }
        }
    }

    return uncoveredModules;
};

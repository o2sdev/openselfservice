import * as fs from 'fs-extra';
import * as path from 'path';

const APP_PACKAGE_JSON_PATHS = ['apps/api-harmonization/package.json', 'apps/frontend/package.json'];

// Private workspace-only packages that are not published to npm and should be
// removed from scaffolded projects (they are part of the monorepo dev setup).
const PRIVATE_PACKAGES = [
    '@o2s/eslint-config',
    '@o2s/lint-staged-config',
    '@o2s/prettier-config',
    '@o2s/typescript-config',
    '@o2s/vitest-config',
];

export const transformAppsPackageJson = async (
    projectDir: string,
    selectedBlockNames: string[],
    selectedIntegrationNames: string[],
): Promise<void> => {
    for (const relPath of APP_PACKAGE_JSON_PATHS) {
        const filePath = path.join(projectDir, relPath);

        if (!(await fs.pathExists(filePath))) continue;

        const packageJson = await fs.readJson(filePath);

        for (const section of ['dependencies', 'devDependencies'] as const) {
            if (!packageJson[section]) continue;

            for (const depName of Object.keys(packageJson[section])) {
                // Remove private workspace-only packages
                if (PRIVATE_PACKAGES.includes(depName)) {
                    delete packageJson[section][depName];
                    continue;
                }

                // Remove unselected blocks
                const blockMatch = depName.match(/^@o2s\/blocks\.(.+)$/);
                if (blockMatch && blockMatch[1] && !selectedBlockNames.includes(blockMatch[1])) {
                    delete packageJson[section][depName];
                    continue;
                }

                // Remove unselected integrations
                const integrationMatch = depName.match(/^@o2s\/integrations\.(.+)$/);
                if (
                    integrationMatch &&
                    integrationMatch[1] &&
                    !selectedIntegrationNames.includes(integrationMatch[1])
                ) {
                    delete packageJson[section][depName];
                }
            }
        }

        await fs.writeJson(filePath, packageJson, { spaces: 4 });
    }
};

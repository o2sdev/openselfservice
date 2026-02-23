import * as fs from 'fs-extra';
import * as path from 'path';

const APP_PACKAGE_JSON_PATHS = ['apps/api-harmonization/package.json', 'apps/frontend/package.json'];

export const transformAppsPackageJson = async (
    projectDir: string,
    selectedBlockNames: string[],
    selectedIntegrationNames: string[],
): Promise<void> => {
    for (const relPath of APP_PACKAGE_JSON_PATHS) {
        const filePath = path.join(projectDir, relPath);

        if (!(await fs.pathExists(filePath))) continue;

        const packageJson = await fs.readJson(filePath);

        if (packageJson.dependencies) {
            for (const depName of Object.keys(packageJson.dependencies)) {
                const blockMatch = depName.match(/^@o2s\/blocks\.(.+)$/);
                if (blockMatch && blockMatch[1] && !selectedBlockNames.includes(blockMatch[1])) {
                    delete packageJson.dependencies[depName];
                    continue;
                }

                const integrationMatch = depName.match(/^@o2s\/integrations\.(.+)$/);
                if (
                    integrationMatch &&
                    integrationMatch[1] &&
                    !selectedIntegrationNames.includes(integrationMatch[1])
                ) {
                    delete packageJson.dependencies[depName];
                }
            }
        }

        await fs.writeJson(filePath, packageJson, { spaces: 4 });
    }
};

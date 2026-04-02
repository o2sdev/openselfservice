import * as fs from 'fs-extra';
import * as path from 'path';

export const transformRootPackageJson = async (projectDir: string): Promise<void> => {
    const filePath = path.join(projectDir, 'package.json');
    const packageJson = await fs.readJson(filePath);

    // Clean up scripts that reference removed directories
    if (packageJson.scripts) {
        for (const [key, value] of Object.entries(packageJson.scripts)) {
            if (typeof value === 'string') {
                // Remove turbo filter flags referencing packages/cli
                packageJson.scripts[key] = value
                    .replace(/\s*-F=!\{\.\/packages\/cli\/\*\}/g, '')
                    .replace(/\s*-F=!\{\.\/packages\/telemetry\}/g, '');
            }
        }
    }

    await fs.writeJson(filePath, packageJson, { spaces: 4 });
};

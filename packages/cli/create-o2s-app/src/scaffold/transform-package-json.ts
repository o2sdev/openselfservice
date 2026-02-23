import * as fs from 'fs-extra';
import * as path from 'path';

// Workspace globs to remove (their parent directories are deleted during cleanup)
const REMOVED_WORKSPACE_GLOBS = [
    'packages/cli/*',
    'packages/integrations/*',
    'packages/blocks/*',
    'packages/modules/*',
    'packages/utils/*',
];

export const transformRootPackageJson = async (projectDir: string): Promise<void> => {
    const filePath = path.join(projectDir, 'package.json');
    const packageJson = await fs.readJson(filePath);

    // Remove workspace entries for deleted directories
    if (Array.isArray(packageJson.workspaces)) {
        packageJson.workspaces = packageJson.workspaces.filter((ws: string) => !REMOVED_WORKSPACE_GLOBS.includes(ws));
    }

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

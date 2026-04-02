import * as fs from 'fs-extra';
import * as path from 'path';

// Workspace globs to always remove (their parent directories are deleted during cleanup)
const REMOVED_WORKSPACE_GLOBS = ['packages/cli/*', 'packages/utils/*'];

// Workspace globs to remove only when the directory is empty after cleanup
const CONDITIONAL_WORKSPACE_GLOBS = ['packages/modules/*'];

export const transformRootPackageJson = async (projectDir: string): Promise<void> => {
    const filePath = path.join(projectDir, 'package.json');
    const packageJson = await fs.readJson(filePath);

    // Check which conditional globs still have content
    const emptyConditionalGlobs: string[] = [];
    for (const glob of CONDITIONAL_WORKSPACE_GLOBS) {
        const dir = path.join(projectDir, glob.replace('/*', ''));
        if (!(await fs.pathExists(dir))) {
            emptyConditionalGlobs.push(glob);
        }
    }

    const allRemovedGlobs = [...REMOVED_WORKSPACE_GLOBS, ...emptyConditionalGlobs];

    // Remove workspace entries for deleted directories
    if (Array.isArray(packageJson.workspaces)) {
        packageJson.workspaces = packageJson.workspaces.filter((ws: string) => !allRemovedGlobs.includes(ws));
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

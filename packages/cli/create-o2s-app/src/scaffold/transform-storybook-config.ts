import * as fs from 'fs-extra';
import * as path from 'path';

const FILE_PATH = '.storybook/main.ts';

// Regex matches lines containing '@o2s/framework' in optimizeDeps.include or resolve.alias
const FRAMEWORK_REFERENCE_REGEX = /['"]@o2s\/framework\//;

export const transformStorybookConfig = async (projectDir: string): Promise<void> => {
    const filePath = path.join(projectDir, FILE_PATH);

    if (!(await fs.pathExists(filePath))) return;

    const content = await fs.readFile(filePath, 'utf-8');
    const lines = content.split('\n');

    const filteredLines = lines.filter((line) => {
        return !FRAMEWORK_REFERENCE_REGEX.test(line);
    });

    await fs.writeFile(filePath, filteredLines.join('\n'), 'utf-8');
};

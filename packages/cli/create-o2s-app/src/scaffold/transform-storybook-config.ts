import * as fs from 'fs-extra';
import * as path from 'path';

const FILE_PATH = '.storybook/main.ts';

// Regex matches:     '@o2s/framework/modules', or '@o2s/framework/sdk',
const FRAMEWORK_OPTIMIZE_DEPS_REGEX = /^\s+'@o2s\/framework\/(modules|sdk)',?\s*$/;

// Regex matches:     '@o2s/framework/sdk': path.resolve(...), or '@o2s/framework/modules': path.resolve(...),
const FRAMEWORK_ALIAS_REGEX = /^\s+'@o2s\/framework\/(sdk|modules)':\s*path\.resolve\(/;

export const transformStorybookConfig = async (projectDir: string): Promise<void> => {
    const filePath = path.join(projectDir, FILE_PATH);

    if (!(await fs.pathExists(filePath))) return;

    const content = await fs.readFile(filePath, 'utf-8');
    const lines = content.split('\n');

    const filteredLines = lines.filter((line) => {
        if (FRAMEWORK_OPTIMIZE_DEPS_REGEX.test(line)) return false;
        if (FRAMEWORK_ALIAS_REGEX.test(line)) return false;
        return true;
    });

    if (filteredLines.length === lines.length) return;

    await fs.writeFile(filePath, filteredLines.join('\n'), 'utf-8');
};

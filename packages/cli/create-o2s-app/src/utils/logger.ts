import { DOCS_INTEGRATIONS_URL, DOCS_URL, STORYBOOK_URL } from '../constants';
import { TemplateType } from '../types';
import { TEMPLATES } from '../wizard/templates';
import kleur from 'kleur';
import path from 'path';

export const printBanner = (): void => {
    const title = 'Open Self Service CLI';
    const desc = 'Scaffold your custom composable frontend';
    const contentWidth = 46;

    const topLine = `  ${kleur.blue('╭' + '─'.repeat(contentWidth) + '╮')}`;
    const empty = `  ${kleur.blue('│')}${' '.repeat(contentWidth)}${kleur.blue('│')}`;
    const bottomLine = `  ${kleur.blue('╰' + '─'.repeat(contentWidth) + '╯')}`;

    const titlePad = Math.floor((contentWidth - title.length) / 2);
    const titleRightPad = contentWidth - title.length - titlePad;
    const titleLine = `  ${kleur.blue('│')}${' '.repeat(titlePad)}${kleur.bold().white(title)}${' '.repeat(titleRightPad)}${kleur.blue('│')}`;

    const descPad = Math.floor((contentWidth - desc.length) / 2);
    const descRightPad = contentWidth - desc.length - descPad;
    const descLine = `  ${kleur.blue('│')}${' '.repeat(descPad)}${kleur.dim().white(desc)}${' '.repeat(descRightPad)}${kleur.blue('│')}`;

    console.log();
    console.log(topLine);
    console.log(empty);
    console.log(titleLine);
    console.log(descLine);
    console.log(empty);
    console.log(bottomLine);
    console.log();
};

export const printSummary = (
    targetDir: string,
    template: TemplateType,
    selectedBlocks: string[],
    selectedIntegrations: string[],
    uncoveredModules: string[] = [],
    skipInstall = false,
): void => {
    const templateName = TEMPLATES[template].name;
    const relativeDir = path.relative(process.cwd(), targetDir) || '.';

    // Collect all content lines to measure max width
    const lines: Array<{ text: string; plain: string }> = [];

    const addLine = (text: string, plain: string): void => {
        lines.push({ text, plain });
    };
    const addEmpty = (): void => {
        lines.push({ text: '', plain: '' });
    };

    addLine(`  ${kleur.green().bold('Project created successfully!')}`, '  Project created successfully!');
    addEmpty();
    addLine(`  Location:      ${kleur.cyan(`./${relativeDir}`)}`, `  Location:      ./${relativeDir}`);
    addLine(`  Template:      ${templateName}`, `  Template:      ${templateName}`);
    addEmpty();

    addLine(
        `  ${kleur.bold('Blocks')} ${kleur.dim(`(${selectedBlocks.length})`)}`,
        `  Blocks (${selectedBlocks.length})`,
    );
    for (const block of selectedBlocks) {
        addLine(`    ${kleur.cyan('•')} ${block}`, `    • ${block}`);
    }
    addEmpty();

    addLine(
        `  ${kleur.bold('Integrations')} ${kleur.dim(`(${selectedIntegrations.length})`)}`,
        `  Integrations (${selectedIntegrations.length})`,
    );
    for (const integration of selectedIntegrations) {
        addLine(`    ${kleur.yellow('•')} ${integration}`, `    • ${integration}`);
    }

    if (uncoveredModules.length > 0) {
        addEmpty();
        addLine(`  ${kleur.yellow().bold('⚠ Uncovered modules')}`, '  ⚠ Uncovered modules');
        for (const mod of uncoveredModules) {
            addLine(`    ${kleur.red('•')} ${mod}`, `    • ${mod}`);
        }
        addEmpty();
        addLine(
            `  ${kleur.red('The project will NOT start until these are configured.')}`,
            '  The project will NOT start until these are configured.',
        );
        addLine(
            `  ${kleur.dim('Edit packages/configs/integrations/src/models/<module>.ts')}`,
            '  Edit packages/configs/integrations/src/models/<module>.ts',
        );
    }

    addEmpty();
    addLine(`  ${kleur.bold('Next steps:')}`, '  Next steps:');
    addEmpty();
    addLine(`  ${kleur.white(`cd ./${relativeDir}`)}`, `  cd ./${relativeDir}`);

    if (uncoveredModules.length > 0) {
        addLine(
            `  ${kleur.dim('# 1. Configure the uncovered modules above')}`,
            '  # 1. Configure the uncovered modules above',
        );
        addLine(
            `  ${kleur.dim('# 2. Add required env vars to apps/api-harmonization/.env.local')}`,
            '  # 2. Add required env vars to apps/api-harmonization/.env.local',
        );
        addLine(
            `  ${kleur.dim('# 3. Start development (two terminals):')}`,
            '  # 3. Start development (two terminals):',
        );
        addLine(`  ${kleur.dim('npm run watch:deps')}`, '  npm run watch:deps');
        addLine(`  ${kleur.dim('npm run watch:apps')}`, '  npm run watch:apps');
    } else {
        if (skipInstall) {
            addLine(
                `  ${kleur.dim('# Install dependencies (npm install was skipped)')}`,
                '  # Install dependencies (npm install was skipped)',
            );
            addLine('  npm install', '  npm install');
        }
        addLine(
            `  npm run watch:deps   ${kleur.dim('# Terminal 1: watch & build packages')}`,
            '  npm run watch:deps   # Terminal 1: watch & build packages',
        );
        addLine(
            `  npm run watch:apps   ${kleur.dim('# Terminal 2: run frontend + API')}`,
            '  npm run watch:apps   # Terminal 2: run frontend + API',
        );
    }

    addEmpty();
    addLine(`  ${kleur.bold('Useful links:')}`, '  Useful links:');
    addLine(
        `    ${kleur.dim('Docs & installation:')}  ${kleur.cyan(DOCS_URL)}`,
        `    Docs & installation:  ${DOCS_URL}`,
    );
    addLine(
        `    ${kleur.dim('Storybook (blocks):')}  ${kleur.cyan(STORYBOOK_URL)}`,
        `    Storybook (blocks):  ${STORYBOOK_URL}`,
    );
    addLine(
        `    ${kleur.dim('Integrations guide:')}  ${kleur.cyan(DOCS_INTEGRATIONS_URL)}`,
        `    Integrations guide:  ${DOCS_INTEGRATIONS_URL}`,
    );

    // Calculate box width
    const maxPlainWidth = Math.max(...lines.map((l) => l.plain.length));
    const boxWidth = maxPlainWidth + 4; // 2 padding each side

    // Print box
    console.log();
    console.log(`  ${kleur.blue('╭' + '─'.repeat(boxWidth) + '╮')}`);

    for (const line of lines) {
        const rightPad = boxWidth - line.plain.length;
        console.log(`  ${kleur.blue('│')}${line.text}${' '.repeat(rightPad)}${kleur.blue('│')}`);
    }

    console.log(`  ${kleur.blue('╰' + '─'.repeat(boxWidth) + '╯')}`);
    console.log();
};

export const printError = (message: string, error?: unknown): void => {
    console.error();
    console.error(kleur.red().bold(`Error: ${message}`));

    if (error instanceof Error) {
        console.error(kleur.red(`Details: ${error.message}`));
    }

    console.error();
};

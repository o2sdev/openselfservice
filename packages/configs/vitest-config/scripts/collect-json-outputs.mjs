import { glob } from 'glob';
import path from 'path';

import fs from 'fs/promises';

const CANDIDATE_COVERAGE_FINAL = [
    path.join('coverage', 'coverage-final.json'),
    'coverage.json',
];

const COVERAGE_SUMMARY_PATH = path.join('coverage', 'coverage-summary.json');

const METRIC_KEYS = ['lines', 'statements', 'functions', 'branches', 'branchesTrue'];

function aggregateTotals(summaries) {
    const total = {};
    for (const key of METRIC_KEYS) {
        total[key] = { total: 0, covered: 0, skipped: 0 };
    }
    for (const summary of summaries) {
        const t = summary.total;
        if (!t) continue;
        for (const key of METRIC_KEYS) {
            const m = t[key];
            if (m) {
                total[key].total += m.total ?? 0;
                total[key].covered += m.covered ?? 0;
                total[key].skipped += m.skipped ?? 0;
            }
        }
    }
    for (const key of METRIC_KEYS) {
        const m = total[key];
        m.pct = m.total > 0 ? Math.round((m.covered / m.total) * 100 * 100) / 100 : 100;
    }
    return total;
}

async function collectCoverageFiles() {
    try {
        const patterns = ['../../../apps/**', '../../../packages/**'];
        const destinationDir = path.join(process.cwd(), 'coverage/raw');
        const summaryOutPath = path.join(process.cwd(), 'coverage/coverage-summary.json');

        await fs.mkdir(destinationDir, { recursive: true });
        await fs.mkdir(path.dirname(summaryOutPath), { recursive: true });

        const directoriesWithCoverage = [];
        const summaryFiles = [];

        for (const pattern of patterns) {
            const matches = await glob(pattern);
            for (const match of matches) {
                const stats = await fs.stat(match);
                if (!stats.isDirectory()) continue;

                let coverageFilePath = null;
                for (const relPath of CANDIDATE_COVERAGE_FINAL) {
                    const fullPath = path.join(match, relPath);
                    try {
                        await fs.access(fullPath);
                        coverageFilePath = fullPath;
                        break;
                    } catch {
                        // try next candidate
                    }
                }

                if (!coverageFilePath) continue;

                directoriesWithCoverage.push(match);

                const directoryName = path.basename(match);
                const destinationFile = path.join(destinationDir, `${directoryName}.json`);
                await fs.copyFile(coverageFilePath, destinationFile);

                const summaryPath = path.join(match, COVERAGE_SUMMARY_PATH);
                try {
                    await fs.access(summaryPath);
                    summaryFiles.push(summaryPath);
                } catch {
                    // no summary in this package
                }
            }
        }

        const replaceDotPatterns = (str) => str.replace(/\.\.\//g, '');
        if (directoriesWithCoverage.length > 0) {
            console.log(`Found coverage in: ${directoriesWithCoverage.map(replaceDotPatterns).join(', ')}`);
        } else {
            console.log('No coverage files found (looked for coverage/coverage-final.json and coverage.json).');
        }
        console.log(`Coverage collected into: ${destinationDir}`);

        if (summaryFiles.length > 0) {
            const summaries = await Promise.all(
                summaryFiles.map((p) => fs.readFile(p, 'utf8').then(JSON.parse)),
            );
            const merged = { total: aggregateTotals(summaries) };
            for (const summary of summaries) {
                for (const [key, value] of Object.entries(summary)) {
                    if (key === 'total') continue;
                    if (typeof value === 'object' && value !== null && value.lines) {
                        merged[key] = value;
                    }
                }
            }
            await fs.writeFile(summaryOutPath, JSON.stringify(merged, null, 2), 'utf8');
            console.log(`Merged ${summaryFiles.length} coverage-summary file(s) into ${path.relative(process.cwd(), summaryOutPath)}`);
        }
    } catch (error) {
        console.error('Error collecting coverage files:', error);
        process.exitCode = 1;
    }
}

collectCoverageFiles();

import path from 'path';
import fs from 'fs/promises';

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

async function mergeSummaryFiles() {
    try {
        const rawSummaryDir = path.join(process.cwd(), 'coverage/raw-summary');
        const mergedSummaryPath = path.join(process.cwd(), 'coverage/coverage-summary.json');

        await fs.mkdir(path.dirname(mergedSummaryPath), { recursive: true });

        let summaryFiles;
        try {
            summaryFiles = await fs.readdir(rawSummaryDir);
        } catch {
            console.log('No coverage-summary files found to merge.');
            return;
        }

        if (summaryFiles.length === 0) {
            console.log('No coverage-summary files found to merge.');
            return;
        }

        const summaryPaths = summaryFiles
            .filter((f) => f.endsWith('.json'))
            .map((f) => path.join(rawSummaryDir, f));

        const summaries = await Promise.all(
            summaryPaths.map((p) => fs.readFile(p, 'utf8').then(JSON.parse)),
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

        await fs.writeFile(mergedSummaryPath, JSON.stringify(merged, null, 2), 'utf8');
        console.log(
            `Merged ${summaryFiles.length} coverage-summary file(s) into ${path.relative(process.cwd(), mergedSummaryPath)}`,
        );
    } catch (error) {
        console.error('Error merging coverage-summary files:', error);
        process.exitCode = 1;
    }
}

mergeSummaryFiles();

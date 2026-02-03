import { glob } from 'glob';
import path from 'path';

import fs from 'fs/promises';

const CANDIDATE_COVERAGE_FINAL = [path.join('coverage', 'coverage-final.json'), 'coverage.json'];
const COVERAGE_SUMMARY_PATH = path.join('coverage', 'coverage-summary.json');

async function collectCoverageFiles() {
    try {
        const patterns = ['../../../apps/**', '../../../packages/**'];
        const rawFinalDir = path.join(process.cwd(), 'coverage/raw');
        const rawSummaryDir = path.join(process.cwd(), 'coverage/raw-summary');

        await fs.mkdir(rawFinalDir, { recursive: true });
        await fs.mkdir(rawSummaryDir, { recursive: true });

        const directoriesWithCoverage = [];

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

                // Collect coverage-final.json
                const destinationFile = path.join(rawFinalDir, `${directoryName}.json`);
                await fs.copyFile(coverageFilePath, destinationFile);

                // Collect coverage-summary.json if it exists
                const summaryPath = path.join(match, COVERAGE_SUMMARY_PATH);
                try {
                    await fs.access(summaryPath);
                    const summaryDestinationFile = path.join(rawSummaryDir, `${directoryName}.json`);
                    await fs.copyFile(summaryPath, summaryDestinationFile);
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
        console.log(`Coverage-final collected into: ${rawFinalDir}`);

        const summaryFiles = await fs.readdir(rawSummaryDir).catch(() => []);
        if (summaryFiles.length > 0) {
            console.log(`Coverage-summary collected into: ${rawSummaryDir} (${summaryFiles.length} file(s))`);
        }
    } catch (error) {
        console.error('Error collecting coverage files:', error);
        process.exitCode = 1;
    }
}

collectCoverageFiles();

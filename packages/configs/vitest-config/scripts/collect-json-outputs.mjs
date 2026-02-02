import { glob } from 'glob';
import path from 'path';

import fs from 'fs/promises';

async function collectCoverageFiles() {
    try {
        // Define the patterns to search
        const patterns = ['../../../apps/**', '../../../packages/**'];

        // Define the destination directory (you can change this as needed)
        const destinationDir = path.join(process.cwd(), 'coverage/raw');

        // Create the destination directory if it doesn't exist
        await fs.mkdir(destinationDir, { recursive: true });

        // Arrays to collect all directories and directories with coverage
        const allDirectories = [];
        const directoriesWithCoverage = [];

        // Vitest coverage provider:
        // - istanbul provider often writes: <projectRoot>/coverage.json
        // - v8 provider typically writes: <projectRoot>/coverage/coverage-final.json
        const candidateCoverageFiles = [
            // v8 provider (preferred)
            path.join('coverage', 'coverage-final.json'),
            // fallback for older/other setups
            'coverage.json',
        ];

        // Process each pattern
        for (const pattern of patterns) {
            // Find all paths matching the pattern
            const matches = await glob(pattern);

            // Filter to only include directories
            for (const match of matches) {
                const stats = await fs.stat(match);

                if (stats.isDirectory()) {
                    allDirectories.push(match);

                    // Pick the first existing coverage file (v8 first, then fallback)
                    let coverageFilePath = null;
                    for (const relPath of candidateCoverageFiles) {
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

                    // File exists, add to list of directories with coverage
                    directoriesWithCoverage.push(match);

                    // Copy it to the destination with a unique name
                    const directoryName = path.basename(match);
                    const destinationFile = path.join(destinationDir, `${directoryName}.json`);

                    await fs.copyFile(coverageFilePath, destinationFile);
                }
            }
        }

        // Create clean patterns for display (without any "../" prefixes)
        const replaceDotPatterns = (str) => str.replace(/\.\.\//g, '');

        if (directoriesWithCoverage.length > 0) {
            console.log(`Found coverage in: ${directoriesWithCoverage.map(replaceDotPatterns).join(', ')}`);
        } else {
            console.log('No coverage files found (looked for coverage/coverage-final.json and coverage.json).');
        }

        console.log(`Coverage collected into: ${destinationDir}`);
    } catch (error) {
        console.error('Error collecting coverage files:', error);
        process.exitCode = 1;
    }
}

// Run the function
collectCoverageFiles();

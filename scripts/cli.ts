#!/usr/bin/env node
/**
 * O2S CLI
 *
 * Usage:
 *   npm run cli -- <command> [options]
 *
 * Available commands:
 *   eject-block - Eject specific blocks from the repository into your local project
 *
 * Examples:
 *   npm run cli -- eject-block
 *
 * To add new commands, create a new command file in the scripts/commands directory
 * and import it in this file. Then add it as a subcommand using program.command().
 */
import { Command } from 'commander';

import { ejectBlockCommand } from './commands/eject-block';

// Define the Command for `commander`
const program = new Command();

program.name('o2s').description('O2S CLI tools');

program
    .command('eject-block')
    .description('Eject specific blocks from the repository into your local project')
    .action(ejectBlockCommand);

program.parse(process.argv);

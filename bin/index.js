#!/usr/bin/env node

import chalk from 'chalk';
import { askQuestions } from '../prompts/questions.js';

async function runCLI() {
  console.log(chalk.blue.bold('\n──────────────────────────────'));
  console.log(chalk.cyan.bold('   Welcome to Backify CLI'));
  console.log(chalk.blue.bold('──────────────────────────────\n'));

  // Run the interactive prompts
  const userChoices = await askQuestions();

  // If the user presses Ctrl+C to cancel, exit gracefully
  if (!userChoices.projectName) {
    console.log(chalk.red('\nInstallation canceled.\n'));
    process.exit(0);
  }

  // Temporary: Log the choices so we can see it working!
  console.log('\n', chalk.green('✔ Configuration saved:'));
  console.log(userChoices);
}

runCLI();
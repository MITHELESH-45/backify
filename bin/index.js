#!/usr/bin/env node

import chalk from 'chalk';
import { askQuestions } from '../prompts/questions.js';
import { generateProject } from '../generators/generate.js';

async function runCLI() {
  console.log(chalk.blue.bold('\n──────────────────────────────'));
  console.log(chalk.cyan.bold('   Welcome to Backify CLI'));
  console.log(chalk.blue.bold('──────────────────────────────\n'));

  const userChoices = await askQuestions();

  if (!userChoices.projectName) {
    console.log(chalk.red('\nInstallation canceled.\n'));
    process.exit(0);
  }

  // Pass the answers to the generator engine
  await generateProject(userChoices);
}

runCLI();
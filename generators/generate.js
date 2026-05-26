import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import { execSync } from 'child_process';
import ora from 'ora';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function generateProject(answers) {
  const { projectName, framework } = answers;
  const targetPath = path.join(process.cwd(), projectName);
  const templatePath = path.join(__dirname, '../templates', framework);

  console.log(chalk.blue(`\nForging your backend in ${chalk.bold(targetPath)}...\n`));

  try {
    // 1. Check if folder exists
    if (fs.existsSync(targetPath)) {
      console.log(chalk.red.bold(`❌ Error: Directory "${projectName}" already exists!`));
      process.exit(1);
    }

    // 2. Copy files & Replace name
    const copySpinner = ora('Copying template files...').start();
    await fs.copy(templatePath, targetPath);
    
    const pkgPath = path.join(targetPath, 'package.json');
    if (fs.existsSync(pkgPath)) {
      let pkgContent = fs.readFileSync(pkgPath, 'utf8');
      pkgContent = pkgContent.replace(/{{PROJECT_NAME}}/g, projectName);
      fs.writeFileSync(pkgPath, pkgContent);
    }
    copySpinner.succeed('Files copied successfully!');

    // 3. Auto-Install Dependencies
    const installSpinner = ora('Installing dependencies (this might take a minute)...').start();
    try {
      // execSync runs standard terminal commands. 
      // cwd tells it to run INSIDE the newly created folder.
      execSync('npm install', { cwd: targetPath, stdio: 'ignore' });
      installSpinner.succeed('Dependencies installed!');
    } catch (installError) {
      installSpinner.fail('Failed to install dependencies automatically.');
      console.log(chalk.yellow(`Don't worry! You can install them manually by running: cd ${projectName} && npm install`));
    }

    // 4. Final Success Output
    console.log(chalk.green.bold('\n✔ Project generated successfully! 🎉\n'));
    console.log('Next steps:');
    console.log(chalk.cyan(`  cd ${projectName}`));
    console.log(chalk.cyan('  npm run dev\n'));

  } catch (error) {
    console.error(chalk.red('\n❌ Failed to generate project:'), error);
  }
}
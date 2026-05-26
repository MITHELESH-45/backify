import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import ora from 'ora';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function generateProject(answers) {
  const { projectName, framework, architecture, database, useAuth } = answers;
  const targetPath = path.join(process.cwd(), projectName);
  const templatePath = path.join(__dirname, '../templates', framework, architecture);
  const sharedPath = path.join(__dirname, '../templates/shared');

  console.log(chalk.blue(`\nForging your backend in ${chalk.bold(targetPath)}...\n`));

  try {
    if (fs.existsSync(targetPath)) {
      console.log(chalk.red.bold(`❌ Error: Directory "${projectName}" already exists!`));
      process.exit(1);
    }

    const baseCopySpinner = ora('Copying base architecture template...').start();
    await fs.copy(templatePath, targetPath);
    baseCopySpinner.succeed('Base architecture template copied.');

    const pkgPath = path.join(targetPath, 'package.json');
    let pkg = { name: projectName, version: '1.0.0', dependencies: {} };

    if (fs.existsSync(pkgPath)) {
      let pkgText = await fs.readFile(pkgPath, 'utf8');
      pkgText = pkgText.replace(/{{PROJECT_NAME}}/g, projectName);
      await fs.writeFile(pkgPath, pkgText, 'utf8');
      pkg = JSON.parse(pkgText);
    }

    const injectSpinner = ora('Injecting shared configuration and middleware...').start();
    const configDir = path.join(targetPath, 'src', 'config');
    const middlewareDir = path.join(targetPath, 'src', 'middleware');

    await fs.ensureDir(configDir);
    await fs.ensureDir(middlewareDir);

    if (database === 'mongodb') {
      await fs.copy(path.join(sharedPath, 'config', 'db.mongodb.js'), path.join(configDir, 'db.js'));
    } else if (database === 'postgresql') {
      await fs.copy(path.join(sharedPath, 'config', 'db.postgres.js'), path.join(configDir, 'db.js'));
    }

    await fs.copy(path.join(sharedPath, 'middleware', 'validate.js'), path.join(middlewareDir, 'validate.js'));

    if (useAuth) {
      await fs.copy(path.join(sharedPath, 'middleware', 'auth.js'), path.join(middlewareDir, 'auth.js'));
    }

    await fs.copy(path.join(sharedPath, '.env.example'), path.join(targetPath, '.env.example'));
    injectSpinner.succeed('Shared files injected successfully.');

    const dependencySpinner = ora('Updating package.json dependencies...').start();
    const dependencies = pkg.dependencies || {};

    dependencies.express = dependencies.express || '^4.18.2';
    dependencies.dotenv = dependencies.dotenv || '^16.3.1';
    dependencies.cors = dependencies.cors || '^2.8.5';
    dependencies.zod = dependencies.zod || '^3.22.2';

    if (database === 'mongodb') {
      dependencies.mongoose = dependencies.mongoose || '^7.5.1';
    }

    if (database === 'postgresql') {
      dependencies.prisma = dependencies.prisma || '^5.11.1';
      dependencies['@prisma/client'] = dependencies['@prisma/client'] || '^5.11.1';
    }

    if (useAuth) {
      dependencies.jsonwebtoken = dependencies.jsonwebtoken || '^9.0.2';
      dependencies.bcryptjs = dependencies.bcryptjs || '^2.4.3';
    }

    pkg.dependencies = dependencies;
    await fs.writeJson(pkgPath, pkg, { spaces: 2 });
    dependencySpinner.succeed('package.json dependencies updated.');

    const installSpinner = ora('Installing dependencies (this might take a minute)...').start();
    try {
      execSync('npm install', { cwd: targetPath, stdio: 'ignore' });
      installSpinner.succeed('Dependencies installed successfully.');
    } catch (installError) {
      installSpinner.fail('Automatic dependency installation failed.');
      console.log(chalk.yellow(`Don’t worry! You can install them manually by running: cd ${projectName} && npm install`));
    }

    console.log(chalk.green.bold('\n✔ Project generated successfully! 🎉\n'));
    console.log('Next steps:');
    console.log(chalk.cyan(`  cd ${projectName}`));
    console.log(chalk.cyan('  npm install'));
    console.log(chalk.cyan('  npm start\n'));
  } catch (error) {
    console.error(chalk.red('\n❌ Failed to generate project:'), error);
    process.exit(1);
  }
}

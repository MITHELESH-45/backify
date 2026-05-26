import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';

// ES Module fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function generateProject(answers) {
  const { projectName, framework } = answers;
  
  // Define where the files are going (Current Working Directory + Project Name)
  const targetPath = path.join(process.cwd(), projectName);
  
  // Define where the files are coming from
  const templatePath = path.join(__dirname, '../templates', framework);

  console.log(chalk.blue(`\nForging your backend in ${chalk.bold(targetPath)}...`));

  try {
    // 1. Check if the folder already exists to prevent overriding data
    if (fs.existsSync(targetPath)) {
      console.log(chalk.red.bold(`\n❌ Error: Directory "${projectName}" already exists!`));
      console.log(chalk.yellow('Please choose a different name or delete the existing folder.\n'));
      process.exit(1);
    }

    // 2. Copy the entire template folder
    await fs.copy(templatePath, targetPath);

    // 3. Replace the placeholder in package.json
    const pkgPath = path.join(targetPath, 'package.json');
    if (fs.existsSync(pkgPath)) {
      let pkgContent = fs.readFileSync(pkgPath, 'utf8');
      pkgContent = pkgContent.replace(/{{PROJECT_NAME}}/g, projectName);
      fs.writeFileSync(pkgPath, pkgContent);
    }

    // 4. Success Message!
    console.log(chalk.green.bold('\n✔ Project generated successfully! 🎉\n'));
    console.log('Next steps:');
    console.log(chalk.cyan(`  cd ${projectName}`));
    console.log(chalk.cyan('  npm install'));
    console.log(chalk.cyan('  npm run dev\n'));

  } catch (error) {
    console.error(chalk.red('\n❌ Failed to generate project:'), error);
  }
}
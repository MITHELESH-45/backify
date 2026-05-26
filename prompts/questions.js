import prompts from 'prompts';

export async function askQuestions() {
  const questions = [
    {
      type: 'text',
      name: 'projectName',
      message: 'What is your project named?',
      initial: 'my-backend-app'
    },
    {
      type: 'select',
      name: 'framework',
      message: 'Which framework do you want to use?',
      choices: [
        { title: 'Express.js', value: 'express' },
        { title: 'FastAPI (Coming Soon)', value: 'fastapi', disabled: true },
        { title: 'Spring Boot (Coming Soon)', value: 'springboot', disabled: true }
      ]
    },
    {
      type: 'select',
      name: 'architecture',
      message: 'Which architecture pattern?',
      choices: [
        { title: 'Service Repository (Recommended for scale)', value: 'service-repository' },
        { title: 'MVC (Good for beginners)', value: 'mvc' }
      ]
    },
    {
      type: 'select',
      name: 'database',
      message: 'Which database?',
      choices: [
        { title: 'PostgreSQL', value: 'postgresql' },
        { title: 'MongoDB', value: 'mongodb' }
      ]
    },
    {
      type: 'confirm',
      name: 'useAuth',
      message: 'Do you want to include JWT Authentication boilerplate?',
      initial: true
    }
  ];

  // This prompts the user and waits for their answers
  const answers = await prompts(questions);
  return answers;
}
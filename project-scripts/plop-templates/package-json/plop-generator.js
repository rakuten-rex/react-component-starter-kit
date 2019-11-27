const packageJson = require('../../../package.json');

const template = JSON.stringify(packageJson, null, 2).replace(
  new RegExp('react-component-starter-kit', 'g'),
  '{{dashCase name}}'
);

module.exports = plop => {
  plop.setGenerator('package-json', {
    description: 'Update package.json with custom repository settings',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your package name?',
      },
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: '../../../package.json',
        // Handlebars template used to generate content of new file
        template,
      },
    ],
  });
};

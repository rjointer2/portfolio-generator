const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt(
  [
    {
      type: "input",
      message: "What's the project title?",
      name: "title",
      validate: (value) => {
        if(value) {
          return true 
        } else {
          return 'You must insert a value to contiune!'
        }
      }
    },
    {
      type: "input",
      message: "How do you install your application/site",
      name: "instalization",
      validate: (value) => {
        if(value) {
          return true 
        } else {
          return 'You must insert a value to contiune!'
        }
      }
    },
    {
      type: "input",
      message: "Instructions to use application?",
      name: "Instructions",
      validate: (value) => {
        if(value) {
          return true 
        } else {
          return 'You must insert a value to contiune!'
        }
      }
    },
    {
      type: "list",
      message: "What license will you use?",
      name: "License",
      choices: [
        'The MIT License', 'The GPL License', 'Apache License', 'N/A'
      ],
      validate: (value) => {
        if(value) {
          return true 
        } else {
          return 'You must insert a value to contiune!'
        }
      }
    },
    {
      type: "input",
      message: "What is this contributing to?",
      name: "Contribute",
      validate: (value) => {
        if(value) {
          return true 
        } else {
          return 'You must insert a value to contiune!'
        }
      }
    },
    {
      type: "input",
      message: "What is your github username?",
      name: "Git",
      validate: (value) => {
        if(value) {
          return true 
        } else {
          return 'You must insert a value to contiune!'
        }
      }
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
      validate: (value) => {
        if(value) {
          return true 
        } else {
          return 'You must insert a value to contiune!'
        }
      }
    },
    {
      type: "input",
      message: "LinkedIn Username?",
      name: "LinkedIn",
      validate: (value) => {
        if(value) {
          return true 
        } else {
          return 'You must insert a value to contiune!'
        }
      }
    }
  ]
).then(
  ({
    title,
    instalization,
    Instructions,
    License,
    Contribute,
    Git,
    email,
    LinkedIn
  }) => {
    const template = `
# [Installation](#Installation)
# [Usage](#usage)
# [Contibution](#contribution)
# [License](#License)
# Installation
${instalization}
## Contribution
${Contribute}
### Instructions
${Instructions}
## License
${License}

# Contact
# Github : ${Git}
# LinkedIn : ${LinkedIn}
# Email : ${email}
`

    createFiles(title, template)
  }
)

const createFiles = (fileName, data) => {
  fs.writeFile(
    `./${fileName.split(' ').join('')}.md`, data, (err) => {
      if(err) {
        console.log(err)
      }
      console.log('Your README has been created')
    }
  )
}

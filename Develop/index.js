// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
        validate: nameInput => {
            if(nameInput){
                return true;
            } else {
                console.log('Please enter a title.');
                return false;
            }
        }
    },
    
    {
        type: 'input',
        name: 'description',
        message: "What's the description of this project?",
        validate: descriptionInput => {
            if(descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description.');
                return false;
            }
        }
    },
    
    {
        type: 'input',
        name: 'installation',
        message: "What are the installation instructions of this project?",
        validate: installInput => {
            if(installInput) {
                return true;
            } else {
                console.log('Please enter installation instructions.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'usage',
        message: "What's the usage information of this project?",
        validate: usageInput => {
            if(usageInput) {
                return true;
            } else {
                console.log('Please enter the usage information.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'guidelines',
        message: "What are the contribution guidelines of this project?",
        validate: guidelineInput => {
            if(guidelineInput) {
                return true;
            } else {
                console.log('Please enter contribution guidelines.');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'test',
        message: "What are the test instructions of this project?",
        validate: testInput => {
            if(testInput) {
                return true;
            } else {
                console.log('Please enter a description.');
                return false;
            }
        }
    },

    {
        type: 'confirm',
        name: 'license',
        message: 'Would you like to include a license for this project?',
        default: true
    },

    {
        type: 'list',
        name: 'licenseOptions',
        message: 'Choose one of the following license options.',
        choices: ['Apache 2.0','Boost','BSD', 'Eclipse', 'MIT', 'Mozilla Public License 2.0'],
        when: ({license}) => {
            if(license) {
                return true;
            } else {
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'username',
        message: 'Please enter your github username.',
        validate: usernameInput => {
            if(usernameInput){
                return true;
            } else {
                console.log('Please enter your github username!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'contact',
        message: 'Please enter how you want to be reached if users have any questions.',
        validate: contactInput => {
            if(contactInput) {
                return true;
            } else {
                console.log('Please enter your contact instructions!')
                return false;
            }
        }
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise(function(resolve,reject) {
        fs.writeFile(fileName,data, function(err){
            if(err) {
                reject(err);
                return;
            } 
            resolve({
                ok:true,
                message: 'README file created successfully.'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    //inquirer.prompt
    return inquirer
    .prompt(questions)
    .then(function(readMeData){
       writeToFile('./dist/README.md', generateMarkdown(readMeData));
       console.log(readMeData);
    })
}

// Function call to initialize app
init();

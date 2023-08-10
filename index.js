const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Where are you from?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'Tell me a little bit about yourself.',
            name: 'bio',
        },
    ])
    .then((response) =>
        fs.writeFile('index.html',
            `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                
            <div> Your name is: ${response.name}</div>
                <div> You live in: ${response.location}</div>
                <div> Your Bio: ${response.bio}</div>
                </body>
            </html>`, (err) =>

            err ? console.error(err) : console.log('Commit logged!')
        )
    );

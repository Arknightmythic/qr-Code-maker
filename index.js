
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
inquirer
  .prompt([
    {
        type: 'input',
        name: 'source',
        message: "input text here"
    }
  ])
  .then((answers) => {
    var text= answers.source;
    qr.image(text).pipe(
        fs.createWriteStream('qr1.png')
    );
    fs.writeFile("answer.txt",text, function (err, file) {
        if (err) throw err;
        console.log('Saved!');
      });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
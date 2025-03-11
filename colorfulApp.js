const readline = require('readline');
const chalk = require('chalk');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question(chalk.cyan('What is your name? '), (name) => {
    // Create a colorful greeting using different styles
    console.log(chalk.magenta.bold(`Hello, ${name}! Welcome to your colorful command-line app!`));
    rl.question(chalk.yellow('What is your favorite color? '), (color) => {
        // Dynamically use the user's favorite color if possible
        let styledMessage;
        switch (color.toLowerCase()) {
            case 'red':
                styledMessage = chalk.red(`Awesome choice, ${name}!`);
                break;
            case 'blue':
                styledMessage = chalk.blue(`Cool, ${name}! Blue is so calm and serene!`);
                break;
            case 'green':
                styledMessage = chalk.green(`Great pick, ${name}! Green is full of life!`);
                break;
            default:
                styledMessage = chalk.white(`Nice, ${name}! That’s a unique color choice!`);
        }
        console.log(styledMessage);
        rl.close();
    });
});

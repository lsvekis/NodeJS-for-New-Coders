const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Welcome, adventurer! What's your name? ", (name) => {
  console.log(`Hello, ${name}! Get ready for an epic journey!`);
  rl.close();
});

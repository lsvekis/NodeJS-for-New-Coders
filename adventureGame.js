const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function startGame() {
  console.log("Welcome to the Quest of Legends!");
  askName();
}
function askName() {
  rl.question("What is your name, brave hero? ", (name) => {
    console.log(`Greetings, ${name}! Your adventure begins now.`);
    firstChoice(name);
  });
}
function firstChoice(name) {
  console.log("You stand at a crossroads. Do you choose the dark forest or the sunny valley?");
  rl.question("Type 'forest' or 'valley': ", (choice) => {
    if (choice.toLowerCase() === 'forest') {
      forestPath(name);
    } else if (choice.toLowerCase() === 'valley') {
      valleyPath(name);
    } else {
      console.log("I didn't understand that. Let's try again.");
      firstChoice(name);
    }
  });
}
function forestPath(name) {
  console.log(`${name}, you venture into the dark forest. You hear strange noises.`);
  rl.question("Do you 'investigate' or 'run'? ", (decision) => {
    if (decision.toLowerCase() === 'investigate') {
      console.log("You discover a hidden treasure chest!");
      endGame();
    } else if (decision.toLowerCase() === 'run') {
      console.log("You run back to safety, but the adventure ends here.");
      endGame();
    } else {
      console.log("Hmm, that choice is unclear.");
      forestPath(name);
    }
  });
}
function valleyPath(name) {
  console.log(`${name}, you walk through the sunny valley and meet a friendly merchant.`);
  rl.question("Do you 'trade' or 'continue' on your journey? ", (decision) => {
    if (decision.toLowerCase() === 'trade') {
      console.log("You trade for a magical sword and feel empowered!");
      endGame();
    } else if (decision.toLowerCase() === 'continue') {
      console.log("You continue your journey but find nothing of interest.");
      endGame();
    } else {
      console.log("That decision is mysterious...");
      valleyPath(name);
    }
  });
}
function endGame() {
  console.log("The adventure concludes... for now. Thanks for playing!");
  rl.close();
}
startGame();

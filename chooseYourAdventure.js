const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function startAdventure() {
  console.log("Welcome to the 'Choose Your Own Adventure' game!");
  rl.question("What is your name, adventurer? ", (name) => {
    console.log(`Welcome, ${name}. Your destiny awaits!`);
    firstDecision(name);
  });
}
function firstDecision(name) {
  console.log("You wake up in a mysterious land. Do you go 'north' towards the mountains or 'south' to the enchanted forest?");
  rl.question("Type 'north' or 'south': ", (choice) => {
    if (choice.toLowerCase() === 'north') {
      northPath(name);
    } else if (choice.toLowerCase() === 'south') {
      southPath(name);
    } else {
      console.log("That is not a valid choice. Please try again.");
      firstDecision(name);
    }
  });
}
function northPath(name) {
  console.log(`${name}, you head north and encounter a wise old man.`);
  rl.question("He offers you a quest. Do you 'accept' or 'decline'? ", (decision) => {
    if (decision.toLowerCase() === 'accept') {
      console.log("The old man gives you a map and a key to a hidden cave.");
      // Continue branching story...
      endAdventure("heroic");
    } else if (decision.toLowerCase() === 'decline') {
      console.log("You politely decline, and the old man vanishes. The journey ends here.");
      endAdventure("peaceful");
    } else {
      console.log("Your decision is unclear.");
      northPath(name);
    }
  });
}
function southPath(name) {
  console.log(`${name}, the enchanted forest is full of magical creatures.`);
  rl.question("A fairy offers to grant you a wish. Do you wish for 'wisdom' or 'wealth'? ", (wish) => {
    if (wish.toLowerCase() === 'wisdom') {
      console.log("You gain incredible knowledge and insights into the mysteries of life.");
      endAdventure("wise");
    } else if (wish.toLowerCase() === 'wealth') {
      console.log("Gold and jewels rain down, but you soon learn that riches come with a price.");
      endAdventure("rich");
    } else {
      console.log("That isn't a valid wish.");
      southPath(name);
    }
  });
}
function endAdventure(endingType) {
  switch (endingType) {
    case "heroic":
      console.log("Your brave quest leads you to legendary status. The kingdom hails you as a hero!");
      break;
    case "peaceful":
      console.log("You live out your days in quiet solitude, content with your peaceful life.");
      break;
    case "wise":
      console.log("Your wisdom changes the world, and generations benefit from your insights.");
      break;
    case "rich":
      console.log("Your wealth brings both joy and sorrow, teaching you the true value of life.");
      break;
    default:
      console.log("Your adventure ends mysteriously...");
  }
  rl.close();
}
startAdventure();

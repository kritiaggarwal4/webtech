//taking input from terminal by making object make instance
const readline = require("readline"); //module import 

const rl = readline.createInterface({ //creating object (key-value pair)
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your name: ", function (name) {
  console.log(`Hello ${name}`);
  rl.close();
});
console.log("hello git");

 //rl.close();

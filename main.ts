#! usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log (chalk.bold.cyanBright("\n\t\t Welcom to Word Count"));
console.log ("=".repeat(50))
let userInput =await inquirer.prompt([{
name: "paragraph",
message: "type any sentence",
Type:"input",

}]);
let para = userInput.paragraph.trim().split(" ");
console.log ("=".repeat(50))
console.log ("- Sentence world:");
console.log (para);
console.log (chalk.bold(`\n - world Count:${para.length}`));
console.log ("=".repeat(50))
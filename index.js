#! /usr/bin/env node
import inquirer from "inquirer";
//1) computer will generateuserGuessedNumber",
//2) User input for guessing number
//3) compare user input with computer generated number and show result
const randomNumber = 13;
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6:",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congtratulation! you guess a right number");
}
else {
    console.log("you guessd wrong number");
}
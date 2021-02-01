#!/usr/bin/env node
import readlineSync from "readline-sync";
import { getUserName, sayHello } from "./src/cli.js";

const startEvenGame = () => {
  const evenGame = () => {
    const generateRandomNumber = Math.floor(Math.random() * Math.floor(1000));
    const userAnswer = readlineSync.question(
      `Question: ${generateRandomNumber}\nYour answer: `
    );
    const correctAnswer = generateRandomNumber % 2 === 0 ? "yes" : "no";

    if (correctAnswer !== userAnswer) {
      console.log(
        `\'${userAnswer}\' is wrong answer ;(. Correct answer was \'${correctAnswer}\'`
      );
      return false;
    }
    if (correctAnswer === userAnswer) {
      console.log("Correct!");
      return true;
    }
  };

  let counterOfWins = 0;
  const conditionsOfTheGame =
    'Answer "yes" if the number is even, otherwise answer "no".';
  //greeting
  const userName = getUserName();
  sayHello(userName);
  console.log(conditionsOfTheGame);
  //start the game until user win 3 times or lose
  do {
    let result = evenGame();
    if (result === false) {
      return console.log(`Let's try again, ${userName}!`);
    }
    counterOfWins += 1;
  } while (counterOfWins < 3);

  if (counterOfWins === 3) {
    return console.log(`Congratulations, ${userName}!`);
  }
};

startEvenGame();

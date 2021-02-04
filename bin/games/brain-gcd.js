#!/usr/bin/env node
import readlineSync from "readline-sync";
import startGame from "../src/index.js";

const conditionsOfTheEvenGame =
  "Find the greatest common divisor of given numbers.";

const gcdGame = () => {
  const randomNumberOne = Math.floor(Math.random() * Math.floor(100));
  const randomNumberTwo = Math.floor(Math.random() * Math.floor(100));
  const userAnswer = readlineSync.question(
    `Question: ${randomNumberOne} ${randomNumberTwo}\nYour answer: `
  );

  let correctAnswer = 1;
  const minNumber =
    randomNumberOne > randomNumberTwo ? randomNumberTwo : randomNumberOne;

  for (let i = 0; i <= minNumber; i++) {
    if (randomNumberOne % i === 0 && randomNumberTwo % i === 0) {
      correctAnswer = i;
    }
  }

  if (Number(correctAnswer) !== Number(userAnswer)) {
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

startGame(gcdGame, conditionsOfTheEvenGame);
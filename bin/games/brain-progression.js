#!/usr/bin/env node
import readlineSync from "readline-sync";
import startGame from "../src/index.js";

const conditionsOfTheEvenGame = "What number is missing in the progression?";

const progressionGame = () => {
  const firstNumber = Math.floor(Math.random() * Math.floor(1000));
  const stepOfProgression = Math.floor(Math.random() * Math.floor(100));
  const lengthOfProgression = Math.floor(
    Math.floor(10) - Math.random() * Math.floor(5)
  );
  const positionOfHideNumber = Math.floor(
    Math.random() * Math.floor(lengthOfProgression - 1)
  );

  let progression = [];
  for (let i = 0; i < lengthOfProgression; i++) {
    if (i === positionOfHideNumber) {
      progression.push("..");
      continue;
    }
    progression.push(firstNumber + i * stepOfProgression);
  }

  const userAnswer = readlineSync.question(
    `Question: ${progression.toString().split(",").join(" ")}\nYour answer: `
  );
  const correctAnswer = firstNumber + positionOfHideNumber * stepOfProgression;

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

startGame(progressionGame, conditionsOfTheEvenGame);

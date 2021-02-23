#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { startGame as startGame } from '../src/index.js';

const conditionsOfTheEvenGame = 'Find if the number is even.';

const evenGame = () => {
  const generateRandomNumber = Math.floor(Math.random() * Math.floor(1000));
  const userAnswer = readlineSync.question(
    `Question: ${generateRandomNumber}\nYour answer: `,
  );
  const correctAnswer = generateRandomNumber % 2 === 0 ? 'yes' : 'no';

  if (correctAnswer !== userAnswer) {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`,
    );
    return false;
  }

  console.log('Correct!');
  return true;
};

startGame(evenGame, conditionsOfTheEvenGame);

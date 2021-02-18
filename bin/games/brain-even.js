#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { startGame as game } from '../src/index.js';

const conditionsOfTheEvenGame =
  'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => {
  const generateRandomNumber = Math.floor(Math.random() * Math.floor(1000));
  const userAnswer = readlineSync.question(
    `Question: ${generateRandomNumber}\nYour answer: `
  );
  const correctAnswer = generateRandomNumber % 2 === 0 ? 'yes' : 'no';

  if (correctAnswer !== userAnswer) {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`
    );
    return false;
  }

  console.log('Correct!');
  return true;
};

game(evenGame, conditionsOfTheEvenGame);

#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { startGame as startGame } from '../src/index.js';

const conditionsOfTheEvenGame = 'Find if given number is prime.';

const primeGame = () => {
  const randomNumber = Math.floor(Math.random() * Math.floor(1000));

  const userAnswer = readlineSync.question(
    `Question: ${randomNumber}\nYour answer: `,
  );
  let correctAnswer = 'yes';
  let step = 1;
  do {
    if (randomNumber === 0 || randomNumber === 1) {
      correctAnswer = 'no';
      break;
    }
    if (randomNumber % step === 0 && step !== 1) {
      correctAnswer = 'no';
      break;
    }
    step += 1;
  } while (step < randomNumber);

  if (correctAnswer !== userAnswer) {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`,
    );
    return false;
  }

  console.log('Correct!');
  return true;
};

startGame(primeGame, conditionsOfTheEvenGame);

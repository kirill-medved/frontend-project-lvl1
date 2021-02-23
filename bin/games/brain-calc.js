#!/usr/bin/env node
import readlineSync from 'readline-sync';
import startGame from '../src/index';

const conditionsOfTheEvenGame = 'What is the result of the expression?';

const calcGame = () => {
  const randomNumberOne = Math.floor(Math.random() * Math.floor(1000));
  const randomNumberTwo = Math.floor(Math.random() * Math.floor(1000));

  const randomOperator = () => {
    const number = Math.floor(Math.random() * Math.floor(9));
    let value = null;
    if (number <= 3) {
      value = '+';
    }
    if (number > 3 && number <= 6) {
      value = '-';
    }
    if (number > 6) {
      value = '*';
    }
    return value;
  };
  const accidentalOperation = randomOperator();
  const userAnswer = readlineSync.question(
    `Question: ${randomNumberOne} ${accidentalOperation} ${randomNumberTwo}\nYour answer: `,
  );

  let correctAnswer = null;

  switch (accidentalOperation) {
    case '+':
      correctAnswer = randomNumberOne + randomNumberTwo;
      break;
    case '-':
      correctAnswer = randomNumberOne - randomNumberTwo;
      break;
    case '*':
      correctAnswer = randomNumberOne * randomNumberTwo;
      break;

    default:
      correctAnswer = null;
      break;
  }

  if (Number(correctAnswer) !== Number(userAnswer)) {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`,
    );
    return false;
  }
  console.log('Correct!');
  return true;
};

startGame(calcGame, conditionsOfTheEvenGame);

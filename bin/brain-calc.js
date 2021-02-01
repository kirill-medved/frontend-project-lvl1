import readlineSync from "readline-sync";
import startGame from "./src/index.js";

const conditionsOfTheEvenGame = "What is the result of the expression?";

const calcGame = () => {
  const randomNumberOne = Math.floor(Math.random() * Math.floor(1000));
  const randomNumberTwo = Math.floor(Math.random() * Math.floor(1000));

  const randomOperator = () => {
    const number = Math.floor(Math.random() * Math.floor(9));
    if (number <= 3) {
      return "+";
    }
    if (number > 3 && number <= 6) {
      return "-";
    }
    if (number > 6) {
      return "*";
    }
  };
  const accidentalOperation = randomOperator();
  const userAnswer = readlineSync.question(
    `Question: ${randomNumberOne} ${accidentalOperation} ${randomNumberTwo}\nYour answer: `
  );

  let correctAnswer = null;

  switch (accidentalOperation) {
    case "+":
      correctAnswer = randomNumberOne + randomNumberTwo;
      break;
    case "-":
      correctAnswer = randomNumberOne - randomNumberTwo;
      break;
    case "*":
      correctAnswer = randomNumberOne * randomNumberTwo;
      break;

    default:
      correctAnswer = null;
      break;
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

startGame(calcGame, conditionsOfTheEvenGame);

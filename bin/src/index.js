#!/usr/bin/env node

import { getUserName, sayHello } from "./cli.js";
const MAX_WINS = 3;

// wrapper over the game
const startGame = (gameFunc, conditions) => {
  //greeting User
  const userName = getUserName();
  sayHello(userName);
  console.log(conditions);

  let counterOfWins = 0;

  do {
    let result = gameFunc();
    if (result === false) {
      return console.log(`Let's try again, ${userName}!`);
    }
    counterOfWins += 1;
  } while (counterOfWins < MAX_WINS);

  return console.log(`Congratulations, ${userName}!`);
};

export default startGame;

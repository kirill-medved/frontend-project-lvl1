#!/usr/bin/env node

import { getUserName, sayHello } from "./cli.js";

// wrapper over the game
const startGame = (gameFunc, conditions) => {
  //greeting User
  const userName = getUserName();
  sayHello(userName);
  console.log(conditions);

  let counterOfWins = 0; // max wins = 3

  do {
    let result = gameFunc();
    if (result === false) {
      return console.log(`Let's try again, ${userName}!`);
    }
    counterOfWins += 1;
  } while (counterOfWins < 3);

  if (counterOfWins === 3) {
    return console.log(`Congratulations, ${userName}!`);
  }
};

export default startGame;

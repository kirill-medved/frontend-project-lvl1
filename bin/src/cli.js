import readlineSync from 'readline-sync';

export const getUserName = () => {
  const userName = readlineSync.question(
    'Welcome to the Brain Games!\nMay I have your name?',
  );
  return userName;
};

export const sayHello = (name) => console.log(`Hello, ${name}!`);

export const userGreeting = () => {
  const userName = getUserName();
  return sayHello(userName);
};

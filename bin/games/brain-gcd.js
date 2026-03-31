#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { randomNumbers } from '../../src/index.js';
import {getUserName} from '../../src/cli.js';


export const gcdGame = () => {
  const userName = getUserName();

  console.log('Find the greatest common divisor of given numbers.');

  for (let index = 0; index < 3; index += 1) {
    let number_1 = randomNumbers();
    let number_2 = randomNumbers();

    console.log(`Question: ${number_1} ${number_2}`);

    while (number_2 !== 0) {
      let temp = number_1;
      number_1 = number_2;
      number_2 = temp % number_2;
    }
    let result = number_1;

    const userAnswer = readlineSync.question('Your answer: ');

    if (result !== Number(userAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log('Let\'s try again, Sam!');
      return;
    }
    else if (result === userAnswer) {
      console.log('Correct!');
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};
gcdGame();
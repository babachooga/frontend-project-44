#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { randomNumbers } from '../../src/index.js';
import {getUserName} from '../../src/cli.js';

export const evenGame = () => {
  const userName = getUserName();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let index = 0; index < 3; index += 1) {

    let number = randomNumbers();
    const answer = (number % 2) === 0 ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const userAnswear = readlineSync.question('Your answer: ');

    if (userAnswear.toLocaleLowerCase() === answer) {
      console.log('Correct!');
    }
    else {
      console.log(`'${userAnswear}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log('Let\'s try again');
      return;
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
evenGame();

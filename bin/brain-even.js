#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { randomNumbers  } from './random-numbers.js';

export const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;
  for (let index = 0; index < 3; index += 1) {
    let number = randomNumbers();
    const answer = (number % 2) === 0 ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const userAnswear = readlineSync.question('Your answer: ');
    if (userAnswear.toLocaleLowerCase() === answer) {
      console.log('Correct!');
      count += 1;
    }
    else {
      console.log(`'${userAnswear}' is wrong answer ;(. Correct answer was '${answer}'`);
      break;
    }
  }
  return count === 3 ? console.log('Congratulations!') : console.log('Let\'s try again');
};
evenGame();

#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { randomNumbers } from '../../src/index.js';
import { getUserName } from '../../src/cli.js';

export const progreessGame = () => {
  const userName = getUserName();
  console.log('What number is missing in the progression?');

  for (let index = 0; index < 3; index += 1) {

    const array = [];

    let number = randomNumbers();
    const step = randomNumbers(10, 1);
    const maxLength = randomNumbers(5, 5);
    const hiddenIndex = randomNumbers(maxLength, 0);

    while (array.length < maxLength) {
      array.push(number);
      number += step;
    }

    let answear = array[hiddenIndex];
    array[hiddenIndex] = '..';

    console.log(`Question: ${array.join(', ')}`);
    const userAnswear = readlineSync.question('Your answer: ');

    if(Number(userAnswear) === answear){
      console.log('correct!');
    }
    else{
      console.log(`'${userAnswear}' is wrong answer ;(. Correct answer was '${answear}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
progreessGame();
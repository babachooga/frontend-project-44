#!/usr/bin/env node
import { randomNumbers } from './random-numbers.js';
import readlineSync from 'readline-sync';

export const calcGame = () => {
  let trueAnswers = 0;
  const symbols = ['*', '+', '-'];
  console.log('What is the result of the expression?');

  for (let index = 0; index < 3; index += 1) {
    let idForArray = Math.floor(Math.random() * symbols.length);
    const symbol = symbols[idForArray];
    const number1 = randomNumbers();
    const number2 = randomNumbers();

    let result = 0;
    console.log(`Question: ${number1} ${symbol} ${number2}`);
    switch (symbol) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
      default:
        break;
    }
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === result) {
      trueAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.`,
      );
      console.log('Let\'s try again!');
      return;
    }
  }
  console.log('Congratulations!');
};
calcGame();

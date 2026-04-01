import { randomNumbers } from '../index.js';
import startGame from '../index.js';

const description = 'What number is missing in the progression?';

const progression = () => {
  const array = [];
  let number = randomNumbers();

  const step = randomNumbers(10, 1);
  const maxLength = randomNumbers(5, 5);
  const hiddenIndex = randomNumbers(maxLength, 0);

  while (array.length < maxLength) {
    array.push(number);
    number += step;
  }

  const corrrectAnswer = array[hiddenIndex];
  array[hiddenIndex] = '..';
  const question = `Question: ${array.join(' ')}`;

  return [question, corrrectAnswer];
};

export default () => {
  return startGame(description, progression);
};

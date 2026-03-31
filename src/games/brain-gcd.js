import { randomNumbers } from '../../src/index.js';
import startGame from '../../src/index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = () => {
  let number_1 = randomNumbers();
  let number_2 = randomNumbers();

  const question = `Question: ${number_1} ${number_2}`;

  while (number_2 !== 0) {
    let temp = number_1;
    number_1 = number_2;
    number_2 = temp % number_2;
  }
  let result = number_1;

  return [question, result];
};

export default () => {
  return startGame(description,gcd);
};

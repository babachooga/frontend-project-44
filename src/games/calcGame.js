import { randomNumbers } from '../../src/index.js';
import startGame from '../../src/index.js';
const description = 'What is the result of the expression?';
const getCorrectFunc = (symbol, number1, number2) => {
  let result;
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
  return result;
};
const calcGame = () => {
  const symbols = ['*', '+', '-'];
  let idForArray = Math.floor(Math.random() * symbols.length);
  const symbol = symbols[idForArray];
  const number1 = randomNumbers();
  const number2 = randomNumbers();
  const question = `Question: ${number1} ${symbol} ${number2}`;
  const corrrectAnswer = getCorrectFunc(symbol, number1, number2);
  return [question, corrrectAnswer];
};
export default () => {
  return startGame(description, calcGame);
};
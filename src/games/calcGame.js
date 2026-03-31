import { randomNumbers } from '../../src/index.js';
import startGame from '../../src/index.js';

//Возращает правильный инстинный ответ
//Принимает на вход уже выбранный символ И два числа  
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

//Определяет какой символ будет выбран
//Определяет 2 числа 

// Сохраняет вопрос в константе
// Сохраняет правильный ответ в константе

//Возращает вопрос и правильный ответ
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
// Функция calcGame которая импортируется в /games/brain-calc.js

//Принимает на вход константу с вопросом 
// (const description = 'What is the result of the expression?')

// А так же результат функции calcGame([question, corrrectAnswer])

export default () => {
    return startGame(description, calcGame);
};

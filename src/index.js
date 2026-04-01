import readlineSync from 'readline-sync';
import { getUserName } from './cli.js';

export const randomNumbers = (range = 100, start = 1) => {
  return Math.floor(Math.random() * range + start);
};

export default (description, questionAndCorrectAnswer) => {
  const name = getUserName();
  console.log(description);
  for (let i = 0; i < 3; i++) {
    const [question, correctAnswer] = questionAndCorrectAnswer();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === Number(userAnswer) || correctAnswer === userAnswer.toLowerCase()) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${name}!`);
      return null;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

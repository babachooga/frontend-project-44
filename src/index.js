import readlineSync from 'readline-sync'
import { getUserName } from './cli.js'

export const randomNumbers = (range = 100, start = 1) => {
  return Math.floor(Math.random() * range + start)
}

export default (description, questionAndCorrectAnswer) => {
  const name = getUserName()
  console.log(description)

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = questionAndCorrectAnswer()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (String(userAnswer) === String(correctAnswer)) {
      console.log('Correct!')
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}

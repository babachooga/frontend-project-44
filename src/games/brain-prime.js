import { randomNumbers } from '../index.js'
import startGame from '../index.js'
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const prime = () => {
  const num = randomNumbers(30, 1)
  const question = `Question: ${num}`
  let trueAnswer = 'yes'
  if (num <= 1) {
    trueAnswer = 'no'
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      trueAnswer = 'no'
    }
  }
  return [question, trueAnswer]
}

export default () => {
  return startGame(description, prime)
}

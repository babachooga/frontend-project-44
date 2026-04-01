import { randomNumbers } from '../../src/index.js'
import startGame from '../index.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const even = () => {
  let number = randomNumbers()
  const question = `Question: ${number}`
  const answer = number % 2 === 0 ? 'yes' : 'no'
  return [question, answer]
}

export default () => {
  return startGame(description, even)
}

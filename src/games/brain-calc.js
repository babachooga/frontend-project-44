import { randomNumbers } from '../index.js'
import startGame from '../index.js'

const description = 'What is the result of the expression?'

const calc = () => {
  const symbols = ['*', '+', '-']
  let idForArray = Math.floor(Math.random() * symbols.length)
  const symbol = symbols[idForArray]

  const number1 = randomNumbers()
  const number2 = randomNumbers()

  let result
  switch (symbol) {
    case '+':
      result = number1 + number2
      break
    case '-':
      result = number1 - number2
      break
    case '*':
      result = number1 * number2
      break
    default:
      break
  }

  const question = `Question: ${number1} ${symbol} ${number2}`
  return [question, result]
}

export default () => {
  return startGame(description, calc)
}

import { getRandomNumber } from '../cli.js'
import startGame from '../index.js'
const description = 'Find the greatest common divisor of given numbers.'

const algoritmEvclida = (a, b) => {
  return b === 0 ? Math.abs(a) : algoritmEvclida(b, a % b)
}
const gcdGame = () => {
  const number1 = getRandomNumber(100)
  const number2 = getRandomNumber(100)
  const question = `Question: ${number1} ${number2}`
  const correctAnswer = algoritmEvclida(number1, number2)
  return [question, correctAnswer]
}
export default () => {
  return startGame(description, gcdGame)
}

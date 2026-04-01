import { getRandomNumber } from "../cli.js";

import startGame from "../index.js";

const description =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  if (num < 2) return false;

  if (num === 2 || num === 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

const primeGame = () => {
  const number = getRandomNumber(10);
  const question = `Question: ${number}`;
  const correctAnswer = isPrime(number) ? "yes" : "no";
  return [question, correctAnswer];
};
export default () => {
  return startGame(description, primeGame, false);
};

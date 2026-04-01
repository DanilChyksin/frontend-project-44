import { getRandomNumber } from "../cli.js";
import startGame from "../index.js";
const description
  = "Answer \"yes\" if the number is even, otherwise answer \"no\".";
const answerIsCorrect = (number) => {
  return number % 2 === 0 ? "yes" : "no";
};

console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".");

const brainEvenGame = () => {
  const randomNumber = getRandomNumber(100);
  const question = `Question: ${randomNumber}`;
  const correctAnswer = answerIsCorrect(randomNumber);
  return [question, correctAnswer];
};

export default () => {
  return startGame(description, brainEvenGame, false);
};

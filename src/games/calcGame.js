import { getRandomNumber } from "../cli.js";
import startGame from "../index.js";

const getFuncFromOperator = (operator) => {
  const functios = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
  };
  return functios[operator];
};
const calcGame = () => {
  const operators = ["+", "-", "*"];
  const randomOperator = operators[getRandomNumber(3)];
  const currentFunction = getFuncFromOperator(randomOperator);
  const randomNumberA = getRandomNumber(10);
  const randomNumberB = getRandomNumber(10);
  const question = `Question: ${randomNumberA} ${randomOperator} ${randomNumberB}`;
  const correctAnswer = currentFunction(randomNumberA, randomNumberB);
  
  return [question, correctAnswer];
};
export default () => {
  return startGame("What is the result of the expression?", calcGame);
};

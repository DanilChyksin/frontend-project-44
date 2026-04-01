#!/usr/bin/env node
import { getRandomNumber, startApp } from "../src/cli.js";
import readLineSync from "readline-sync";
let countWin = 0;

const name = startApp();

const answerIsCorrect = (answer, number) => {
  return (
    (answer.toLowerCase() === "yes" && number % 2 === 0) ||
    (answer.toLowerCase() === "no" && number % 2 !== 0)
  );
};
const getOppositeAnswer = (answer) =>
  answer.toLowerCase() === "yes" ? "no" : "yes";

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const brainEvenGame = () => {
  const randomNumber = getRandomNumber(100);
  console.log(`Question: ${randomNumber}`);

  const answer = readLineSync.question("Your answer: ");
  if (answerIsCorrect(answer, randomNumber)) {
    console.log("Is correct");

    countWin++;
  }
  else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getOppositeAnswer(
      answer,
    )}'.
      Let's try again, ${name}!`);
    countWin = 0;
  }
  if (countWin === 3) {
    console.log(`Congratulations, ${name}!`);

    const isTryAgain = readLineSync.question("Do you want try again ?");
    if (isTryAgain === "yes" || isTryAgain === "y") {
      brainEvenGame();
    }
    else {
      return null;
    }
  }

  brainEvenGame();
};

brainEvenGame();
export default brainEvenGame;

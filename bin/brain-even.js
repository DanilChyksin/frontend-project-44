#!/usr/bin/env node
import { startApp } from "../src/cli.js";
import readLineSync from "readline-sync";
const name = startApp();
const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};
const brainEvenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const randomNumber = getRandomNumber(100);
  console.log(`Question: ${randomNumber}`);
  const answer = readLineSync.question("Your answer: ");
  if (answer === "yes") {
    if (randomNumber % 2 === 0) {
      console.log("Is correct");
    } else {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, ${name}!`);
      return brainEvenGame();
    }
  } else if (answer === "no") {
    if (randomNumber % 2 === 0) {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.
            Let's try again, ${name}!`);
      return brainEvenGame();
    } else {
      console.log("Is correct");
    }
  } else {
    console.log(`
The value: ${answer} entered is invalid`);
    console.log(`Lets try again ${name}!`);
    return brainEvenGame();
  }
  const isTryAgain = readLineSync.question("Do you want try again ?");
  if (isTryAgain === "yes" || isTryAgain === "y") {
    brainEvenGame();
  } else {
    return null;
  }
};

brainEvenGame();
export default brainEvenGame;

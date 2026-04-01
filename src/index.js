import readlineSync from "readline-sync";
import { startApp } from "./cli.js";

export default (description, questionAndAnswer) => {
  const name = startApp();
  console.log(description);

  for (let i = 0; i < 3; i++) {
    const [question, correctAnswer] = questionAndAnswer();
    console.log(question);
    const userAnswer = readlineSync.question("Your answer: ");

    if (correctAnswer !== +userAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${name}!`);
      return null;
    } else {
      console.log("Correct!");
    }
  }
};

// import startGame from "../../bin/brain-progression.js";
import { getRandomNumber } from "../cli.js";

const getRandomInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const description = "What number is missing in the progression?";
const getLineProgression = (startNumber, interval, length) => {
  let result = [startNumber];
  for (let i = 1; i < length; i++) {
    result.push(startNumber + interval * i);
  }
  return result;
};
const progressionGame = () => {
  const getStartNumber = getRandomNumber(20);
  const getInterval = getRandomInterval(3, 10);
  const getLineLength = getRandomInterval(5, 15);
  const line = getLineProgression(getStartNumber, getInterval, getLineLength);
  console.log(line);
};
progressionGame();
// export default () => {
//   return startGame(description);
// };

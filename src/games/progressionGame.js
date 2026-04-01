import startGame from "../index.js";
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

const getStringProgression = (arr, index) => {
  return arr.map((el, i) => (index === i ? ".." : el)).join(" ");
};

const progressionGame = () => {
  const getStartNumber = getRandomNumber(20);
  const getInterval = getRandomInterval(3, 10);
  const getLineLength = getRandomInterval(5, 15);
  const line = getLineProgression(getStartNumber, getInterval, getLineLength);
  const getIndexHiddenElement = getRandomInterval(0, getLineLength);
  const getFinishLine = getStringProgression(line, getIndexHiddenElement);
  const question = `Question: ${getFinishLine}`;
  const correctAnswer = line[getIndexHiddenElement];
  return [question, correctAnswer];
};

export default () => {
  return startGame(description, progressionGame);
};

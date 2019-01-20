import gameEngine from '..';
import generateNum from '../utils';

const gameGoal = 'What number is missing in the progression?';
const progressionLength = 10;
const upperBoundOfProgressionStart = 9;
const lowerBoundOfProgressionStart = 0;
const upperBoundOfProgressionDiff = 8;
const lowerBoundOfProgressionDiff = 2;

const generateGameData = () => {
  const progressionStart = generateNum(lowerBoundOfProgressionStart,
    upperBoundOfProgressionStart);
  const progressionDiff = generateNum(lowerBoundOfProgressionDiff, upperBoundOfProgressionDiff);
  const emptyPosition = generateNum(0, progressionLength - 1);
  const correctAnswer = progressionStart + progressionDiff * emptyPosition;
  let question = '';
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === emptyPosition) {
      question += '.. ';
    } else {
      question += `${progressionStart + progressionDiff * i} `;
    }
  }
  return [question, correctAnswer];
};

export default () => gameEngine(gameGoal, generateGameData);

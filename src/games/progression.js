import { gameEngine } from '..';
import generateNum from '../utils';

const gameGoal = 'What number is missing in the progression?';
const progressionLength = 10;

const progressionGeneration = () => {
  const upperBoundOfProgressionStart = 9;
  const lowerBoundOfProgressionStart = 0;
  const progressionStart = generateNum(lowerBoundOfProgressionStart, upperBoundOfProgressionStart);
  const upperBoundOfProgressionDiff = 8;
  const lowerBoundOfProgressionDiff = 2;
  const progressionDiff = generateNum(lowerBoundOfProgressionDiff, upperBoundOfProgressionDiff);
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progressionStart + (progressionDiff * i));
  }
  return progression;
};

const generateGameData = () => {
  const progression = progressionGeneration();
  const emptyPosition = generateNum(0, progressionLength - 1);
  const correctAnswer = progression[emptyPosition];
  let question = '';
  for (let i = 0; i < progression.length; i += 1) {
    if (i === emptyPosition) {
      question += '.. ';
    } else {
      question += `${progression[i]} `;
    }
  }
  return [question, correctAnswer];
};

export default () => gameEngine(gameGoal, generateGameData);

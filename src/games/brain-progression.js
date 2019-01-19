import { gameEngine } from '..';
import generateNum from '../utils/generateNum';

const gameGoal = 'What number is missing in the progression?';

const progressionGeneration = () => {
  const progressionStart = generateNum(0, 9);
  const progressionDiff = generateNum(2, 8);
  const emptyPosition = generateNum(0, 9);
  const progression = [progressionStart];
  const progressionLength = 10;
  for (let i = 1; i < progressionLength; i += 1) {
    progression.push(progression[i - 1] + progressionDiff);
  }
  return { progression, emptyPosition };
};

const correctAnswer = (progression, emptyPosition) => progression[emptyPosition];

const question = () => {
  const roundProgression = progressionGeneration().progression;
  const roundEmptyPosition = progressionGeneration().emptyPosition;
  const roundCorrectAnswer = correctAnswer(roundProgression, roundEmptyPosition);
  let roundQuestion = '';
  for (let i = 0; i < roundProgression.length; i += 1) {
    if (i === roundEmptyPosition) {
      roundQuestion += '.. ';
    } else {
      roundQuestion += `${roundProgression[i]} `;
    }
  }
  return [roundQuestion, roundCorrectAnswer];
};

export default () => gameEngine(gameGoal, question);

import gameEngine from '..';
import generateNum from '../utils';

const gameGoal = 'Answer "yes" if number even otherwise answer "no"';
const upperBoundOfNumbers = 101;
const lowerBoundOfNumbers = 0;

const isEvenNumber = number => number % 2 === 0;

const getCorrectAnswer = number => (isEvenNumber(number) ? 'yes' : 'no');

const generateGameData = () => {
  const num = generateNum(lowerBoundOfNumbers, upperBoundOfNumbers);
  const question = `${num}`;
  const correctAnswer = String(getCorrectAnswer(num));
  return [question, correctAnswer];
};

export default () => gameEngine(gameGoal, generateGameData);

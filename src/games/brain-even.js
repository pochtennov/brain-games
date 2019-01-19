import { gameEngine } from '..';
import generateNum from '../utils/generateNum';

const gameGoal = 'Answer "yes" if number even otherwise answer "no"';

const questionNumberGeneration = () => {
  const upperBoundOfNumbers = 101;
  const lowerBoundOfNumbers = 0;
  return generateNum(lowerBoundOfNumbers, upperBoundOfNumbers);
};

const isEvenNumber = number => number % 2 === 0;

const correctAnswer = number => (isEvenNumber(number) ? 'yes' : 'no');

const question = () => {
  const questionNumbers = questionNumberGeneration();
  const roundCorrectAnswer = correctAnswer(questionNumbers);
  const roundQuestion = `${questionNumbers}`;
  return [roundQuestion, roundCorrectAnswer];
};

export default () => gameEngine(gameGoal, question);

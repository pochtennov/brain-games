import { gameEngine } from '..';
import generateNum from '../utils/generateNum';

const gameGoal = 'Find the greatest common divisor of given numbers.';

const questionNumbersGeneration = () => {
  const upperBoundOfNumbers = 101;
  const lowerBoundOfNumbers = 0;
  const firstNumber = generateNum(lowerBoundOfNumbers, upperBoundOfNumbers);
  const secondNumber = generateNum(lowerBoundOfNumbers, upperBoundOfNumbers);
  return [firstNumber, secondNumber];
};

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  const remainder = a % b;
  return gcd(b, remainder);
};

const correctAnswer = numbers => gcd(numbers[0], numbers[1]);

const question = () => {
  const questionNumbers = questionNumbersGeneration();
  const roundCorrectAnswer = correctAnswer(questionNumbers);
  const roundQuestion = `${questionNumbers[0]} ${questionNumbers[1]}`;
  return [roundQuestion, roundCorrectAnswer];
};

export default () => gameEngine(gameGoal, question);

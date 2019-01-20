import { gameEngine } from '..';
import generateNum from '../utils';

const gameGoal = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  const remainder = a % b;
  return gcd(b, remainder);
};

const generateGameData = () => {
  const upperBoundOfNumbers = 101;
  const lowerBoundOfNumbers = 0;
  const firstNumber = generateNum(lowerBoundOfNumbers, upperBoundOfNumbers);
  const secondNumber = generateNum(lowerBoundOfNumbers, upperBoundOfNumbers);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = gcd(firstNumber, secondNumber);
  return [question, correctAnswer];
};

export default () => gameEngine(gameGoal, generateGameData);

import gameEngine from '..';
import generateNum from '../utils';

const gameGoal = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const upperBoundOfNumbers = 40;
const lowerBoundOfNumbers = 0;

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1 && num !== 0;
};

const generateGameData = () => {
  const question = generateNum(lowerBoundOfNumbers, upperBoundOfNumbers);
  const correctAnswer = (isPrime(question)) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => gameEngine(gameGoal, generateGameData);

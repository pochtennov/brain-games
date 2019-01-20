import { gameEngine } from '..';
import generateNum from '../utils';

const gameGoal = 'What is the result of the expression?';

const expressionDataGeneration = () => {
  const upperBoundOfNumbers = 101;
  const lowerBoundOfNumbers = 0;
  const upperBoundOfSign = 3;
  const lowerBoundOfSign = 1;
  const firstNumber = generateNum(lowerBoundOfNumbers, upperBoundOfNumbers);
  const secondNumber = generateNum(lowerBoundOfNumbers, upperBoundOfNumbers);
  const signNumber = generateNum(lowerBoundOfSign, upperBoundOfSign);
  switch (signNumber) {
    case 1: return [(firstNumber + secondNumber), `${firstNumber} + ${secondNumber}`];
    case 2: return [(firstNumber - secondNumber), `${firstNumber} - ${secondNumber}`];
    case 3: return [(firstNumber * secondNumber), `${firstNumber} * ${secondNumber}`];
    default: return [(firstNumber + secondNumber), `${firstNumber} + ${secondNumber}`];
  }
};

const generateGameData = () => {
  const expressionData = expressionDataGeneration();
  const correctAnswer = expressionData[0];
  const question = expressionData[1];
  return [question, correctAnswer];
};

export default () => gameEngine(gameGoal, generateGameData);

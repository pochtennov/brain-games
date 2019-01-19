import { gameEngine } from '..';
import generateNum from '../utils/generateNum';

const gameGoal = 'What is the result of the expression?';

const signMaking = () => {
  const upperBound = 3;
  const lowerBound = 0;
  const randomSign = generateNum(lowerBound, upperBound);
  switch (randomSign) {
    case 1: return '+';
    case 2: return '-';
    case 3: return '*';
    default: return '+';
  }
};

const questionNumbersGeneration = () => {
  const upperBoundOfNumbers = 101;
  const firstNumber = Math.floor(Math.random() * upperBoundOfNumbers);
  const secondNumber = Math.floor(Math.random() * upperBoundOfNumbers);
  const sign = signMaking();
  return [firstNumber, secondNumber, sign];
};

const correctAnswer = (numbers) => {
  switch (numbers[2]) {
    case '+': return (numbers[0] + numbers[1]);
    case '-': return (numbers[0] - numbers[1]);
    case '*': return (numbers[0] * numbers[1]);
    default: return 'Error!';
  }
};

const question = () => {
  const questionNumbers = questionNumbersGeneration();
  const roundCorrectAnswer = correctAnswer(questionNumbers);
  const roundQuestion = `${questionNumbers[0]} ${questionNumbers[2]} ${questionNumbers[1]}`;
  return [roundQuestion, roundCorrectAnswer];
};

export default () => gameEngine(gameGoal, question);

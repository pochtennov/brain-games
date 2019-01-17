import { gameEngine } from '..';

const gameGoal = 'What is the result of the expression?';


const signMaking = () => {
  const numberOfSigns = 3;
  const randomSign = Math.floor(Math.random() * (1 + numberOfSigns));
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

const question = number => `${number[0]} ${number[2]} ${number[1]}`;

export default () => gameEngine(gameGoal, question,
  correctAnswer, questionNumbersGeneration);

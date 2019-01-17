import { gameEngine } from '..';


const gameGoal = 'Find the greatest common divisor of given numbers.';


const questionNumbersGeneration = () => {
  const upperBoundOfNumbers = 101;
  const firstNumber = Math.floor(Math.random() * upperBoundOfNumbers);
  const secondNumber = Math.floor(Math.random() * upperBoundOfNumbers);
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

const question = numbers => `${numbers[0]} ${numbers[1]}`;

export default () => gameEngine(gameGoal, question,
  correctAnswer, questionNumbersGeneration);

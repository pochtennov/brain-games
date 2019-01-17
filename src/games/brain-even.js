import { gameEngine } from '..';

const gameGoal = 'Answer "yes" if number even otherwise answer "no"';

const questionNumberGeneration = () => {
  const upperBoundOfNumbers = 101;
  return Math.floor(Math.random() * upperBoundOfNumbers);
};

const isEvenNumber = number => number % 2 === 0;

const correctAnswer = (number) => { // If I write return as ternary operator => lint error
  if (isEvenNumber(number)) {
    return 'yes';
  } return 'no';
};

const question = number => `${number}`;

export default () => gameEngine(gameGoal, question,
  correctAnswer, questionNumberGeneration);

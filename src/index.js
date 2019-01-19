import readlineSync from 'readline-sync';
import isEvenGame from './games/brain-even';
import calculationGame from './games/brain-calc';
import greatestCommonDivisorGame from './games/brain-gcd';

const round = (question, firstName) => {
  const roundQuestion = question();
  console.log(`Question: ${roundQuestion[0]}`);
  console.log('');
  const userAnswer = readlineSync.question('Your answer: ');
  const roundCorrectAnswer = roundQuestion[1];
  if (String(roundCorrectAnswer) === userAnswer) {
    console.log('correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer =(. Correct answer was '${roundCorrectAnswer}'`);
  console.log(`Try again, ${firstName}`);
  return false;
};

export const gameEngine = (gameGoal, question) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameGoal);
  console.log('');
  const firstName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${firstName}!`);
  console.log('');
  const numberOfSuccessfullRounds = 3;
  for (let numberOfRounds = 1; numberOfRounds <= numberOfSuccessfullRounds; numberOfRounds += 1) {
    if (!round(question, firstName)) {
      return;
    }
  }
  console.log(`Congratulations, ${firstName}`);
};

export const gameStart = () => {
  console.log('Welcome to the Brain Games!');
  console.log('');
  const firstName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${firstName}!`);
  console.log('');
  console.log('What game would you like to play?');
  console.log('1. Brain-even');
  console.log('2. Brain-calc');
  console.log('3. Brain-gcd');
  const gameNumber = readlineSync.question('Your choise: ');
  console.log('');
  switch (gameNumber) {
    case '1':
      isEvenGame();
      break;
    case '2':
      calculationGame();
      break;
    case '3':
      greatestCommonDivisorGame();
      break;
    default:
      console.log('There is no such game!');
      break;
  }
  console.log(`Goodbye, ${firstName}`);
};

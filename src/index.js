import readlineSync from 'readline-sync';
import isEvenGame from './games/brain-even';
import calculationGame from './games/brain-calc';
import greatestCommonDivisorGame from './games/brain-gcd';

const round = (question, correctAnswer, questionNumbersGeneration) => {
  const questionNumbers = questionNumbersGeneration();
  console.log(`Question: ${question(questionNumbers)}`);
  console.log('');
  const userAnswer = readlineSync.question('Your answer: ');
  const roundCorrectAnswer = correctAnswer(questionNumbers);
  if (String(roundCorrectAnswer) === userAnswer) {
    console.log('correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer =(. Correct answer was '${roundCorrectAnswer}'`);
  console.log('Try again!');
  return false;
};

export const gameEngine = (gameGoal, question, correctAnswer, questionNumbersGeneration) => {
  console.log(gameGoal);
  const numberOfSuccessfullRounds = 3;
  for (let numberOfRounds = 1; numberOfRounds <= numberOfSuccessfullRounds; numberOfRounds += 1) {
    if (!round(question, correctAnswer, questionNumbersGeneration)) {
      return;
    }
  }
  console.log('Congratulations!');
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

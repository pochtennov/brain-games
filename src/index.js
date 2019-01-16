import readlineSync from 'readline-sync';
import isEvenGame from './games/brain-even';
import calculationGame from './games/brain-calc';

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('');
  const firstName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${firstName}!`);
  console.log('');
  console.log('What game would you like to play?');
  console.log('1. Brain-even');
  console.log('2. Brain-calc');
  const gameNumber = readlineSync.question('Your choise: ');
  switch (gameNumber) {
    case '1':
      isEvenGame();
      break;
    case '2':
      calculationGame();
      break;
    default:
      console.log('There is no such game!');
      break;
  }
  console.log('Goodbye!');
};

import readlineSync from 'readline-sync';

const maxNumberOfRounds = 3;

const round = (generateGameData) => {
  const [roundQuestion, roundCorrectAnswer] = generateGameData();
  console.log(`Question: ${roundQuestion}`);
  console.log('');
  const userAnswer = readlineSync.question('Your answer: ');
  if (roundCorrectAnswer === userAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer =(. Correct answer was '${roundCorrectAnswer}'`);
  return false;
};

const gameEngine = (gameGoal, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameGoal);
  console.log('');
  const firstName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${firstName}!`);
  console.log('');
  for (let numberOfRounds = 1; numberOfRounds <= maxNumberOfRounds; numberOfRounds += 1) {
    if (!round(generateGameData)) {
      console.log(`Try again, ${firstName}`);
      return;
    }
  }
  console.log(`Congratulations, ${firstName}`);
};

export default gameEngine;

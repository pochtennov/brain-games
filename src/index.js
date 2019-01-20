import readlineSync from 'readline-sync';

const round = (generateGameData) => {
  const [roundQuestion, roundCorrectAnswer] = generateGameData();
  console.log(`Question: ${roundQuestion}`);
  console.log('');
  const userAnswer = readlineSync.question('Your answer: ');
  if (String(roundCorrectAnswer) === userAnswer) {
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
  const numberOfSuccessfullRounds = 3;
  for (let numberOfRounds = 1; numberOfRounds <= numberOfSuccessfullRounds; numberOfRounds += 1) {
    if (round(generateGameData)) {
      console.log('Correct!');
    } else {
      console.log(`Try again, ${firstName}`);
      return;
    }
  }
  console.log(`Congratulations, ${firstName}`);
};

export default gameEngine;

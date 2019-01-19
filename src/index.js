import readlineSync from 'readline-sync';

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
  console.log(`Goodbye, ${firstName}`);
};

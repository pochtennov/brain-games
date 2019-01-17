import readlineSync from 'readline-sync';

const isEvenNumber = number => number % 2 === 0;

const round = () => {
  const upperBoundOfQuestionNumber = 101;
  // returns a random integer from 0 to 100
  const question = Math.floor(Math.random() * upperBoundOfQuestionNumber);
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  let rightAnswer = '';
  if (isEvenNumber(question)) {
    rightAnswer = 'yes';
  } else {
    rightAnswer = 'no';
  }
  if (rightAnswer === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer =(. Correct answer was '${rightAnswer}'`);
  console.log('Try again!');
  return false;
};

const isEvenGame = () => {
  console.log('Answer "yes" if number even otherwise answer "no"');

  const numberOfSuccessfullRounds = 3;
  for (let numberOfRounds = 1; numberOfRounds <= numberOfSuccessfullRounds; numberOfRounds += 1) {
    if (!round()) {
      return;
    }
  }
  console.log('Congratulations!');
};

export default isEvenGame;

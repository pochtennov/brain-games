import readlineSync from 'readline-sync';

const isEvenNumber = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const round = () => {
  const upperBoundOfQuestionNumber = 101;
  // returns a random integer from 0 to 100
  const question = Math.floor(Math.random() * upperBoundOfQuestionNumber);
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  let rightAnswer = '';
  if (isEvenNumber(question) === true) {
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

  for (let numberOfRounds = 1; numberOfRounds <= 3; numberOfRounds += 1) {
    if (round() === false) {
      return;
    }
  }
  console.log('Congratulations!');
};

export default isEvenGame;

import readlineSync from 'readline-sync';

const isEvenNumber = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const round = (firstName) => {
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
  console.log(`Try again, ${firstName}`);
  return false;
};

export const isEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"');
  const firstName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${firstName}!`);

  for (let numberOfRounds = 1; numberOfRounds <= 3; numberOfRounds += 1) {
    if (round(firstName) === false) {
      return;
    }
  }
  console.log(`Congratulations, ${firstName}`);
};


export const greetingsToUser = () => {
  console.log('Welcome to the Brain Games!');
  console.log('');
  const firstName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${firstName}!`);
};

import readlineSync from 'readline-sync';

const numbersMaking = () => {
  const upperBoundOfNumbers = 101;
  const firstNumber = Math.floor(Math.random() * upperBoundOfNumbers);
  const secondNumber = Math.floor(Math.random() * upperBoundOfNumbers);
  return [firstNumber, secondNumber];
};

const signMaking = () => {
  const numberOfSigns = 3;
  const randomSign = Math.floor(Math.random() * (1 + numberOfSigns));
  switch (randomSign) {
    case 1: return '+';
    case 2: return '-';
    case 3: return '*';
    default: return '+';
  }
};

const calculation = (numbers, sign) => {
  switch (sign) {
    case '+': return (numbers[0] + numbers[1]);
    case '-': return (numbers[0] - numbers[1]);
    case '*': return (numbers[0] * numbers[1]);
    default: return 'Error!';
  }
};

const round = (numbers, sign) => {
  console.log(`Question: ${numbers[0]} ${sign} ${numbers[1]}`);
  const rightAnswer = calculation(numbers, sign);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  if (rightAnswer === userAnswer) {
    console.log('correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer =(. Correct answer was '${rightAnswer}'`);
  console.log('Try again!');
  return false;
};

const calculationGame = () => {
  console.log('What is the result of the expression?');
  console.log('');
  for (let numberOfRounds = 1; numberOfRounds <= 3; numberOfRounds += 1) {
    if (round(numbersMaking(), signMaking()) === false) {
      return;
    }
  }
  console.log('Congratulations!');
};

export default calculationGame;

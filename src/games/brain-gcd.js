import readlineSync from 'readline-sync';

const numbersMaking = () => {
  const upperBoundOfNumbers = 101;
  const firstNumber = Math.floor(Math.random() * upperBoundOfNumbers);
  const secondNumber = Math.floor(Math.random() * upperBoundOfNumbers);
  return [firstNumber, secondNumber];
};

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  const remainder = a % b;
  return gcd(b, remainder);
};

const round = (numbers) => {
  console.log(`Question: ${numbers[0]} ${numbers[1]}`);
  console.log('');
  const correctAnswer = gcd(numbers[0], numbers[1]);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  if (correctAnswer === userAnswer) {
    console.log('correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer =(. Correct answer was '${correctAnswer}'`);
  console.log('Try again!');
  return false;
};

const greatestCommonDivisorGame = () => {
  console.log('Find the greatest common divisor of given numbers.');
  console.log('');
  for (let numberOfRounds = 1; numberOfRounds <= 3; numberOfRounds += 1) {
    if (round(numbersMaking()) === false) {
      return;
    }
  }
  console.log('Congratulations!');
};

export default greatestCommonDivisorGame;

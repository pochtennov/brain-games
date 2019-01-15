import readlineSync from 'readline-sync';

export function greetingsToUser() {
  console.log('Welcome to the Brain Games!');
  console.log('');
  const firstName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${firstName}!`);
}

export function isEvenGame() {
  const isEvenNumber = (number) => {
    if (number % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };

  const round = () => {
    const randomNumber = Math.floor(Math.random() * 101); // returns a random integer from 0 to 100
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (isEvenNumber(randomNumber) === answer) {
      console.log('Correct!');
      return 1;
    }
    console.log(`'${answer}' is wrong answer =(. Correct answer was '${isEvenNumber(randomNumber)}'`);
    console.log(`Try again, ${firstName}`);
    return 0;
  };
  
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"'); 
  const firstName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${firstName}!`);
  let numberOfCorrectRounds = 0;

  while (numberOfCorrectRounds < 3) {
    numberOfCorrectRounds += round();
  }
  console.log(`Congratulations, ${firstName}`);
}

import readlineSync from 'readline-sync';

const gameStart = () => {
  console.log('Welcome to the Brain Games!');
  console.log('');
  const firstName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${firstName}!`);
  console.log('');
  console.log('Bye!');
};

export default gameStart;

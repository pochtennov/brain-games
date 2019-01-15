import readlineSync from 'readline-sync';

export default () => {
    console.log("Welcome to the Brain Games!");
    console.log('');
    const firstName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${firstName}!`);
}
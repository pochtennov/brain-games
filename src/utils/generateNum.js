const generateNum = (lowerBoundOfNumbers, upperBoundOfNumbers) => Math.floor(Math.random()
  * (upperBoundOfNumbers - lowerBoundOfNumbers + 1)) + lowerBoundOfNumbers;

export default generateNum;

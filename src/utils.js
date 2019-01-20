const generateNum = (numStart, numEnd) => (Math.floor(Math.random()
  * (numEnd - numStart + 1)) + numStart);

export default generateNum;

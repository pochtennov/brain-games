const generateNum = (numStart, numEnd) => (
  Math.floor((numEnd - numStart + 1) * Math.random() + numStart)
);

export default generateNum;

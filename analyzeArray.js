const analyzeArray = (array) => {
  if(!Array.isArray(array)) {
    return "Input is not an ARRAY!";
  }
  
  if (array.length === 0) {
    return null;
  };

  const arrayOfNaN = array.filter(element => typeof element !== "number");
  if (arrayOfNaN.length !== 0) {
    return "Array contains NaN elements";
  };

  return {
    average: getAverage(array),
    min: getMin(array),
    max: getMax(array),
    length: array.length,
  }
}


const getAverage = (array) => {
  const average = Math.round(array.reduce((prev, cur) => prev + cur) / array.length);
  return average;
}

const getMin = (array) => {
  const min = Math.min(...array);
  return min;
}

const getMax = (array) => {
  const max = Math.max(...array);
  return max;
}

export { analyzeArray };
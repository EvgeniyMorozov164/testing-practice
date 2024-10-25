const reverseString = (str) => {
  let result = "";
  result = str.split("").reverse().join("");
  return result;
};

export { reverseString };
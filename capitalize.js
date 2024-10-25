const capitalize = (str) => {
  const cap = str[0].toUpperCase();
  str = str.slice(1);
  const result = `${cap}${str}`;
  return result;
}

export { capitalize };
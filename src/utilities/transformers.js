import reduce from 'lodash/reduce';
const reduceHelperFunction = (key = 'uuid') => (acc, value) => {
  acc[value[key]] = value;
  return acc;
};

const reduceArrayToObjectByKey = (array, key) => reduce(array, reduceHelperFunction(key), {});

export {
  reduceHelperFunction,
  reduceArrayToObjectByKey,
};

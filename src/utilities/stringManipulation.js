import isObject from 'lodash/isObject';
import has from 'lodash/has';
import isNumber from 'lodash/isNumber';
import isBoolean from 'lodash/isBoolean';
import replace from 'lodash/replace';

const arrayToString = (array) => {
  let str = '';
  for (let i = 0; i < array.length; i++) {
    switch (true) {
      case isObject(array[i]):
        str += `${wrapStringInParentheses(objToString(array[i]))},`;
    }
  }
  return replace(str, /'/g, '"');
};

const wrapStringInParentheses = str => `{${str}}`;

const objToString = (obj) => {
  var str = '';
  for (var p in obj) {
    if (has(obj, p)) {
      if (isNumber(obj[p])) {
        str += `${p}: ${obj[p]} \n`;
        continue;
      }
      if (isBoolean(obj[p])) {
        str += `${p}: ${obj[p]} \n`;
        continue;
      }
      if (isObject(obj[p])) {
        str += objToString(obj[p]);
        continue;
      }
      str += `${p}: '${obj[p]}' \n`;
    }
  }
  return str;
};

export {
  arrayToString,
  wrapStringInParentheses,
  objToString,
};

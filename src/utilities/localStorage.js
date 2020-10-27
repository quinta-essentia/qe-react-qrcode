import keys from 'lodash/keys';
import isObject from 'lodash/isObject';

const LocalStorageKeys = {
  JWT_TOKEN: 'JWT_TOKEN',

  USER_ID: 'USER_ID',
  USER_USERNAME: 'USER_USERNAME',

  COMPANY_PROFILE: 'COMPANY_PROFILE',
  COMPANY_SELECTED_ACTIVITIES: 'COMPANY_SELECTED_ACTIVITIES',
};

const getLocalStorageEntry = (key) => {
  if (!key) return console.error(`getLocalStorageEntry: 'key' is ${key}`);
  return localStorage.getItem(key);
};

const setLocalStorageEntry = (key, data) => {
  if (!key || !data) return console.error(key ? `setLocalStorageEntry: 'data' is ${data}` : `setLocalStorage: 'key' is ${key}`);
  localStorage.setItem(key, data);
};

const deleteLocalStorageEntry = (key) => {
  if (!key) return;
  localStorage.removeItem(key);
};

const getLocalStorageEntriesList = () => {
  const values = {};
  const keysArr = keys(localStorage);
  let i = keysArr.length;
  while (i--) {
    values[keysArr[i]] = localStorage.getItem(keysArr[i]);
  }
  return values;
};

const setLocalStorageEntriesList = (entriesObject) => {
  if (!isObject(entriesObject)) return console.error(`setLocalStorageEntriesList: 'entriesObject' is ${entriesObject}`);
  for (const [key, value] of Object.entries(entriesObject)) {
    setLocalStorageEntry(key, value);
  }
};

const deleteLocalStorageEntiesList = () => {
  localStorage.clear();
};

export {
  LocalStorageKeys,
  getLocalStorageEntry,
  setLocalStorageEntry,
  deleteLocalStorageEntry,
  getLocalStorageEntriesList,
  setLocalStorageEntriesList,
  deleteLocalStorageEntiesList,
};

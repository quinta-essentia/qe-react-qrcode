import {
  getLocalStorageEntry,
  setLocalStorageEntry,
  deleteLocalStorageEntry,
  getLocalStorageEntriesList,
  setLocalStorageEntriesList,
  deleteLocalStorageEntiesList
} from './localStorage';

describe('Local Storage add/read single', () => {
  const testKey = 'testKey';
  const testData = 'testData';
  const multipleEntries = { testKey: testKey, testData: testData };
  const expectedObject = { testData: 'testData', testKey: 'testKey' };

  test('it should add entry and read it from local storage', () => {
    setLocalStorageEntry(testKey, testData);
    expect(getLocalStorageEntry(testKey)).toBe(testData);
  });

  test('it should delete entry and try to read it from local storage', () => {
    deleteLocalStorageEntry(testKey);
    expect(getLocalStorageEntry(testKey)).toBe(null);
  });

  test('it should insert multiple entries and try to read them from local storage', () => {
    setLocalStorageEntriesList(multipleEntries);
    expect(getLocalStorageEntriesList()).toEqual(expectedObject);
  });

  test('it should delete entries and try to read them from local storage', () => {
    deleteLocalStorageEntiesList();
    expect(getLocalStorageEntriesList()).toEqual({});
  });
});

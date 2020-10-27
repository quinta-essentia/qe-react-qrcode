import {
  arrayToString,
  wrapStringInParentheses,
  objToString,
} from './stringManipulation';

describe('String manipulation', () => {
  const testString = 'testString';
  const expectedString = '{testString}';
  const testObject = { testBool: true, testNum: 123123, testStr: 'TestStr' };
  const expectedObjectString = "testBool: true \ntestNum: 123123 \ntestStr: 'TestStr' \n";
  const testArray = [testObject, testObject];
  const expectedArrayString = '{testBool: true \ntestNum: 123123 \ntestStr: "TestStr" \n},{testBool: true \ntestNum: 123123 \ntestStr: "TestStr" \n},'
;

  test('it should wrap string into parentheses', () => {
    expect(wrapStringInParentheses(testString)).toBe(expectedString);
  });

  test('it should turn object properties into string', () => {
    expect(objToString(testObject)).toBe(expectedObjectString);
  });

  test('it should insert multiple entries and try to read them from local storage', () => {
    expect(arrayToString(testArray)).toEqual(expectedArrayString);
  });
});

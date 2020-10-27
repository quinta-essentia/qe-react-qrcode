import {
  parseIsoDateString,
} from 'qe-react-components-web';

import {
  formatDate,
  formatTime,
} from './dates';

describe('dates utility functions', () => {
  const start = parseIsoDateString('2019-11-21T14:00:00+00:00');

  test('formatDate', () => {
    expect(formatDate(start))
      .toEqual('Thursday, November 21');
  });

  test('formatTime', () => {
    const result = new RegExp('((1?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))');
    expect(formatTime(start))
      .toMatch(result);
  });
});

import { formatDate } from './format';

describe('formatDate', () => {
  it('should return the date in the format of Month dd, yyyy', () => {
    const date = '2022-06-26T20:14:53.357Z';
    const expected = 'June 26, 2022';

    expect(formatDate(date)).toBe(expected);
  });
});

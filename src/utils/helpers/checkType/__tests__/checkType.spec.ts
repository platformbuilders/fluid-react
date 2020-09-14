import faker from 'faker';
import { isString } from '..';

describe('Helpers: checkType', () => {
  test('true', () => {
    const response = isString(faker.random.word());

    expect(response).toEqual(true);
  });
});

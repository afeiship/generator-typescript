import fn from '../src';

describe('api.basic', () => {
  test('Noraml single value case', () => {
    expect(fn({ rel: true })).toBe(undefined);
  });
});

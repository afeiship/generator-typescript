import fn from '../src';

describe('api.basic', () => {
  test('Noraml single value case', () => {
    const res = fn(1,2)
    expect(res).toBe(3);
  });
});

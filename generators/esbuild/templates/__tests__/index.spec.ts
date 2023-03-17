const { CraEnvs } = require('../src');

describe('test cra-envs', () => {
  test('cra-envs: get all', function () {
    const res = CraEnvs.get();
    expect(res).toEqual({
      beta: {
        base_url: 'https://site-predict-platform.beta.saybot.net',
      },
      staging: {
        base_url: 'https://site-predict-platform.staging.saybot.net',
      },
    });
  });
});

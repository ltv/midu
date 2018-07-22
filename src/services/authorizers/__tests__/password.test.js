const { genHash, compareHash } = require('../helpers');

describe('Password', () => {
  const password = 'Abcd1234';

  it('Should generate password hash', async () => {
    const hash = await genHash(password);
    expect(typeof hash).toBe('string');
    expect(hash.length).toBe(60);
  });

  it('Should compare hash', async () => {
    const hash = await genHash(password);
    const matched = await compareHash(password, hash);
    console.log('[matched]', matched);
    expect(matched).toBeTruthy();
  });
});

const { genHash, compareHash } = require('../helpers');

describe('Password', () => {
  const password = 'Abcd1234XXX';

  it('Check generate hash', async () => {
    const hash = await genHash(password);
    expect(typeof hash).toBe('string');
    expect(hash.length).toBe(60);
  });

  it('Check compare hash', async () => {
    const hash = await genHash(password);
    const matched = await compareHash(password, hash);
    expect(matched).toBeTruthy();
  });
});

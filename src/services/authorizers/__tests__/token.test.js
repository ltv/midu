const { signToken, verifyToken } = require('../token');

describe('Token', () => {
  const data = { email: 'test@example.com', resetPassword: true };

  it('Check sign token', async () => {
    const token = await signToken(data);
    expect(typeof token).toBe('string');
  });

  it('Check verify token', async () => {
    const token = await signToken(data);
    const _data = await verifyToken(token);
    expect(_data.email).toBe(data.email);
  });
});

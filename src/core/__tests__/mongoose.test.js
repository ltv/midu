const { connect, closeConnection } = require('../mongoose');

describe('Mongoose', () => {
  afterAll(closeConnection);

  it('Should connect to db', async () => {
    await connect();
    expect(true).toBe(true);
  });
});

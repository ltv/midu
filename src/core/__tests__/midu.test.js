const { service, actions, mutations } = require('./midu.test-cases');
const midu = require('../midu');
const { Service, ServiceBroker, Context } = require('moleculer');
const broker = new ServiceBroker();

describe('Midu: create service\'s shape', () => {
  const serviceShape = midu({ service, actions, mutations });
  const brokerStart = broker.start.bind(broker);
  const brokerStop = broker.start.bind(broker);
  const params = { name: 'a', description: 'a', deathLine: 0 };

  broker.createService(serviceShape);

  beforeAll(brokerStart);
  afterAll(brokerStop);

  it('Should create service\'s successfully', async () => {
    const res = await broker.call('TEST_MIDU.CREATE_PROJECT', params);
    expect(res.ctx).toBeInstanceOf(Context);
    expect(res.service).toBeInstanceOf(Service);
  });
});

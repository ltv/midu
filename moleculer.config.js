const os = require('os');
const nodeID = `${process.env.NODEID || ''}-${os.hostname().toLowerCase()}`;

// More info about options: https://moleculer.services/docs/0.13/broker.html#Broker-options
module.exports = {
  namespace: '',
  nodeID,

  logger: true,
  logLevel: 'info',
  logFormatter: 'default',
  logObjectPrinter: null,
  serviceDir: 'src',

  // Use transporter when deploy to multiple servers
  // transporter: "NATS",

  cacher: 'Memory',

  serializer: 'JSON',

  requestTimeout: 10 * 1000,
  retryPolicy: {
    enabled: false,
    retries: 5,
    delay: 100,
    maxDelay: 1000,
    factor: 2,
    check: err => err && !!err.retryable
  },

  maxCallLevel: 100,
  heartbeatInterval: 5,
  heartbeatTimeout: 15,

  tracking: {
    enabled: false,
    shutdownTimeout: 5000
  },

  disableBalancer: false,

  registry: {
    strategy: 'RoundRobin',
    preferLocal: true
  },

  circuitBreaker: {
    enabled: false,
    threshold: 0.5,
    windowTime: 60,
    minRequestCount: 20,
    halfOpenTime: 10 * 1000,
    check: err => err && err.code >= 500
  },

  bulkhead: {
    enabled: false,
    concurrency: 10,
    maxQueueSize: 100
  },

  validation: true,
  validator: null,

  metrics: true,
  metricsRate: 1,

  statistics: true,

  internalServices: true,
  internalMiddlewares: true,

  hotReload: true,

  // Register custom middlewares
  middlewares: [],

  // Called after broker created.
  created(broker) {},

  // Called after broker started.
  started(broker) {},

  // Called after broker stopped.
  stopped(broker) {},

  replCommands: null
};

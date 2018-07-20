import { BrokerOptions } from 'moleculer';
import * as os from 'os';

const nodeID = `${process.env.NODEID || ''}-${os.hostname().toLowerCase()}`;

const MoleculerConfig: BrokerOptions = {
  nodeID,
  cacher: 'Memory',
  requestTimeout: 10 * 1000,
  circuitBreaker: {
    enabled: true
  },
  metrics: true
};

export = MoleculerConfig;

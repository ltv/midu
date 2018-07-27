import _c from 'store/constants/agents';
import dataAdapter from 'core/dataAdapter';

import agents from 'mock/Agents.json';
const fetchAgents = () => new Promise(resolve => setTimeout(resolve.bind(this, agents), 2500));

export default {
  actionGetList: () => ({ type: _c.GET_LIST, promise: fetchAgents() })
};

import produce, { setAutoFreeze } from 'immer';
import router from './router';
import login from './login';
import agents from './agents';

setAutoFreeze(false);

export default (state = {}, action) =>
  produce(state, draft => {
    router(draft, action);
    login(draft, action);
    agents(draft, action);
  });

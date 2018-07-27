import { withMutators } from 'core/helpers';
import _c from 'store/constants/router';

const _init = {
  router: {
    history: {}
  }
};

export default withMutators({
  '@@INIT': state => (state.router = _init),
  [_c.STORE_HISTORY]: (state, action) => {
    const { history } = action;
    state.router.history = history;
  },
  [_c.GO_TO_PATH]: (state, action) => {
    const { path } = action;
    state.router.path = path;

    const goTo = state.router.history.push;
    goTo && goTo(path);
  }
});

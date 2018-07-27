import _c from 'store/constants/router';

export default {
  actionStoreHistory: history => ({ type: _c.STORE_HISTORY, history }),
  actionGoTo: path => ({ type: _c.GO_TO_PATH, path })
};

import _c from 'store/constants/login';
import { withMutators } from 'core/helpers';

const _init = {
  email: '',
  password: ''
};

export default withMutators({
  '@@INIT': state => (state.login = _init),
  [_c.UPDATE_FORM]: (state, action) => {
    return;
  },
  [_c.SIGN_IN]: (state, action) => {
    return;
  },
  [_c.SIGN_OUT]: (state, action) => {
    return;
  }
});

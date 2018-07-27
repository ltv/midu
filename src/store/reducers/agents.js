import { handle } from 'redux-pack';
import _c from 'store/constants/agents';
import { withMutators } from 'core/helpers';

export default withMutators({
  '@@INIT': state => (state.agents = {}),
  [_c.GET_LIST]: (state, action) =>
    handle(state, action, {
      start: () => (state.isLoading = true),
      finish: () => (state.isLoading = false),
      success: () => (state.agents = action.payload)
    })
});

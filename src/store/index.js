import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools as withDevTools } from 'redux-devtools-extension';
import { middleware as pack } from 'redux-pack';
import reducers from './reducers';

const compose = withDevTools({});
const middleWares = [thunk, pack];
const enhancer = compose(applyMiddleware(...middleWares));
const store = createStore(reducers, enhancer);

export default store;

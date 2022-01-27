// == Import : npm
import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';

// == Import : local
import reducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(),
);

const store = createStore(reducer, enhancers);

// == Export
export default store;

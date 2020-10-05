import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import _ from 'lodash';

//  Import Reducer and intialState
import { reducer, initialState } from './reducer.js';
import { LoadState, SaveState } from './persist';

export function initializeStore() {
  let stateToUse = initialState;

  //  Check if local storage has a version of the state to load and use it if so
  const localState = LoadState();

  if (typeof localState !== 'undefined' && Object.keys(localState).length > 0) {
    stateToUse = localState;
  }

  const composeEnhancers = composeWithDevTools({
    trace: true,
    traceLimit: 25,
  });

  const store = createStore(
    reducer,
    stateToUse,
    composeEnhancers(applyMiddleware())
  );

  _.throttle(
    store.subscribe(() => {
      SaveState(store.getState());
    }),
    1000
  );

  return store;
}

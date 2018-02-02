import { createStore, combineReducers } from 'redux';
import guessesReducer from '../reducers/guesses';

export default () => {
  // Store creation
  const store = createStore(
    combineReducers({
      guesses: guessesReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};

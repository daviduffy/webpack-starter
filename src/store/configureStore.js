import { createStore, combineReducers } from 'redux';
import guessesReducer from '../reducers/guesses';
// import filtersReducer from '../reducers/filters';


// export default () => {
//   // Store creation
//   const store = createStore(
//     combineReducers({
//       expenses: expensesReducer,
//       filters: filtersReducer
//     }),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );

//   return store;
// };

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

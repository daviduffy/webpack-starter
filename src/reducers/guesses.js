import { createSequencedArray, randArray, getGameIndex } from '../utils/utilities.js';
import { setup } from '../utils/puzzle.js';

const guessesReducerDefaultState = setup({ sideLength: 9 });
export default (state = guessesReducerDefaultState, action) => {
  switch (action.type) {
    case 'EDIT_GUESS':
      return state.map(guess => {
        if (guess.index === action.index) {
          return {
            // grab and use existing properties
            ...guess,
            // override any existing properties with the updates from the updates object
            ...action.updates
          };
        }
        return guess;
      });
    default:
      return state;
  }
};

// case 'SET_TEXT_FILTER':
//   return {
//     ...state,
//     text: action.text
//   };
// case 'SORT_BY_DATE':
//   return {
//     ...state,
//     sortBy: 'date'
//   };
// case 'SORT_BY_AMOUNT':
//   return {
//     ...state,
//     sortBy: 'amount'
//   };
// case 'SET_START_DATE':
//   return {
//     ...state,
//     startDate: action.startDate
//   };
// case 'SET_END_DATE':
//   return {
//     ...state,
//     endDate: action.endDate

//   };

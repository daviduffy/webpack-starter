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

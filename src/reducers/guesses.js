import { createSequencedArray, randArray, getGameIndex } from '../utils/utilities.js';
import { setup, singleGuess, makeGuess } from '../utils/puzzle.js';

const guessesReducerDefaultState = setup({ sideLength: 9 });
export default (state = guessesReducerDefaultState, action) => {
  switch (action.type) {
    case 'SOLVE_PUZZLE':
      // this is the same as 'SOFT_RESET_PUZZLE' :(
      const strippedGuesses = state.map((guess, ind) => {
        if (guess.userValue) {
          return guess;
        }
        return guess;
      })
      return makeGuess({
        sideLength: 9,
        allGuesses: strippedGuesses,
        guessIndex: 0,
        limit: 81,
        forward: false
      });
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
    case 'HARD_RESET_PUZZLE':
      return state.map((guess, ind) => singleGuess(ind));
    case 'SOFT_RESET_PUZZLE':
      return state.map((guess, ind) => {
        if (guess.userValue) {
          return guess;
        }
        return guess;
      })
    default:
      return state;
  }
};

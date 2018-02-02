// EDIT_GUESS
export const editGuess = (index, updates) => ({
  type: 'EDIT_GUESS',
  index,
  updates
});

// RESET_PUZZLE
export const resetPuzzle = (type) => ({
  type
});

// SOLVE_PUZZLE
export const solvePuzzle = () => ({
  type: 'SOLVE_PUZZLE'
});

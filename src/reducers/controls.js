const controlsReducerDefaultState = {
  diff: ''
};
export default (state = controlsReducerDefaultState, action) => {
  switch (action.type) {
    case 'CLEAR_GAME':
      return controlsReducerDefaultState;
    case 'EASY_GAME':
      return {
        diff: 'easy'
      };
    case 'MEDIUM_GAME':
      return {
        diff: 'medium'
      };
    case 'HARD_GAME':
      return {
        diff: 'hard'
      };
    default:
      return state;
  }
};

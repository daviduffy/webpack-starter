const controlsReducerDefaultState = {
  diff: '',
  resetType: ''
};
export default (state = controlsReducerDefaultState, action) => {
  switch (action.type) {
    case 'EASY_PUZZLE':
      return {

      };
    case 'MEDIUM_PUZZLE':
      return {

      };
    case 'HARD_PUZZLE':
      return {

      };
    case 'HARD_RESET_PUZZLE':
      return {
        resetType: 'hard'
      };
    case 'SOFT_RESET_PUZZLE':
      return {
        resetType: 'soft'
      };
    default:
      return state;
  }
};

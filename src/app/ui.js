// UI Logic
// =================================================================================================
const addListeners = () => {
  document.querySelectorAll('input').forEach((input) => {
    input.addEventListener('keydown', (e) => {
      e.preventDefault();
      // this is jank
      if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Backspace'].includes(e.key)) {
        input.value = e.key;
        input.parentNode.classList.add('user-value');
        console.log(e.key);
      }
    });
  });
};

// Create the markup with values from guesses
// =================================================================================================
const doMarkup = ({ allGuesses, gameIndex, diff }) => {
  const puzzle = document.getElementById('puzzle');
  // empty the container. faster than innerHTML = ''
  while (puzzle.firstChild) {
    puzzle.removeChild(puzzle.firstChild);
  }
  const html = allGuesses.map((guess, index) => {
    let val;
    const classes = [];
    // if difficulty is specified only output based on visible prop
    if (diff) {
      if (guess.visible) {
        val = guess.value;
        classes.push('game-value');
      } else {
        val = '';
      }
    // if difficulty not specified
    } else if (guess.userValue) {
      val = guess.userValue;
      classes.push('user-value');
    } else {
      val = guess.value;
    }
    
    return (
      `<li ${classes.length > 0 ? `class="${classes.join(' ')}"` : ''}>
        <input type="number" 
          maxlength='1' 
          value="${val}"
          pattern="[0-9]{1}">
      </li>`);
  }).join('');
  puzzle.innerHTML = html;
  addListeners();
};
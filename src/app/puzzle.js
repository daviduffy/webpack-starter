// Get row, column, and square arrays
// =================================================================================================
export const getXYSquare = ({ sideLength, allGuesses, guessIndex }) => {
  // ex: 52
  const XYS = {
    //  5
    rowNumber: ~~(guessIndex / sideLength),
    // 45
    get rowStartIndex() {
      return this.rowNumber * sideLength;
    },
    //  3
    get rowSquareIndex() {
      return ~~(this.rowNumber / 3) * 3;
    },
    //  7
    colStartIndex: (guessIndex % sideLength || 0),
    //  6
    get colSquareIndex() {
      return ~~(this.colStartIndex / 3) * 3;
    },
    // 33
    get squareStartIndex() {
      return this.rowSquareIndex * sideLength + this.colSquareIndex;
    },
  };
  const arr = Array(sideLength).fill(undefined);
  const outputArrays = {
    row: [...arr].map((item, index) => allGuesses[(XYS.rowStartIndex + index)].value),
    column: [...arr].map((item, index) => allGuesses[(XYS.colStartIndex + (sideLength * index))].value),
    square: [],
  };
  // build square indexes array (this one is tricky)
  for (let sr = 0; sr < 3; sr++) {
    for (let sc = 0; sc < 3; sc++) {
      const val = allGuesses[XYS.squareStartIndex + ((sr * 9) + sc)].value;
      outputArrays.square.push(val);
    }
  }
  return outputArrays;
};

// Guess Logic
// =================================================================================================
export const makeGuess = ({ sideLength, allGuesses, guessIndex, limit, forward, diff, gameIndex }) => {
  if (guessIndex < limit) {
    // use the current `guessIndex` value to get a guess from allGuesses
    const currentGuess = allGuesses[guessIndex];
    // see if this guess still has available options
    if (currentGuess.options.length !== 0) {
      // get row, column, and square array contexts for current guess value
      const currentContext = getXYSquare({ sideLength, allGuesses, guessIndex });
      // if this is not user input
      if (currentGuess.userValue) {
        if (forward) {
          guessIndex++;
          return makeGuess({
            sideLength,
            allGuesses,
            guessIndex,
            limit,
            forward: true,
            gameIndex,
            diff
          });
        } else {
          guessIndex--;
          return makeGuess({
            sideLength,
            allGuesses,
            guessIndex,
            limit,
            forward: false,
            gameIndex,
            diff
          });
        }
      }
      // assign a random integer from the guess.options
      currentGuess.value = currentGuess.options.splice(~~(Math.random() * currentGuess.options.length), 1)[0];
      // if the random guess value is not in the row array
      if (currentContext.row.indexOf(currentGuess.value) === -1) {
        // vertical plane tests
        if (currentContext.column.indexOf(currentGuess.value) === -1) {
          // square in grid tests
          if (currentContext.square.indexOf(currentGuess.value) === -1) {
            // increment the cell you're move to the next index
            guessIndex++;
            forward = true;
            return makeGuess({
              sideLength,
              allGuesses,
              guessIndex,
              limit,
              forward: true,
              gameIndex,
              diff
            });
          }
        }
      }
    // this guess value is impossible because a previous guess is incorrect
    } else {
      currentGuess.options = createSequencedArray(sideLength);
      currentGuess.value = null;
      guessIndex--;
    }
    return makeGuess({
      sideLength,
      allGuesses,
      guessIndex,
      limit,
      forward: false,
      gameIndex,
      diff
    });
  }
  return doMarkup({
    allGuesses,
    gameIndex,
    diff
  });
};

// Initial State
// =================================================================================================
export const setup = ({ cellWidth: num, diff }) => {
  // when defined, difficulty causes value visibility to change
  const init = {
    cellWidth: num,
    sideLength: num * num,
    guessIndex: 0,
    limit: (num * num) * (num * num),
    forward: true,
    gameIndex: diff ? getGameIndex({
      limit: (num * num) * (num * num),
      diff
    }) : undefined,
    diff,
  };
  // fast way to create an array of these objects
  const allGuesses = Array(init.limit).fill(null).map((e, index) => ({
    options: createSequencedArray(init.sideLength),
    value: null,
    visible: diff ? init.gameIndex.includes(index) : true,
    index,
    userValue: null,
  }));
  init.allGuesses = allGuesses;
  return init;
};

// Puzzle Starter
// =================================================================================================
export const init = ({ clear = false, diff = undefined, preserveUserInput = false }) => {
  // diff easy 1 through expert 4
  const state = setup({ cellWidth: 3, diff });
  console.log(state);

  if (!clear) {
    // add user input to allGuesses array before guessing anything
    document.querySelectorAll('li').forEach((li, index) => {
      if (li.classList.contains('user-value')) {
        const val = li.querySelector('input').value;
        state.allGuesses[index].value = parseInt(val, 10);
        state.allGuesses[index].userValue = parseInt(val, 10);
      }
    });
    return makeGuess(state);
  } else {
    if (preserveUserInput) {
      Array.from(document
        .querySelectorAll('li'))
        .filter(li => !li.classList.contains('user-value'))
        .forEach(li => {li.querySelector('input').value = '';})
    } else {
      doMarkup({
        allGuesses: createSequencedArray(81),
        diff
      });
    }
    addListeners();
  }
};

// import React from 'react';
import PropTypes from 'prop-types';
import { createSequencedArray, randArray, getGameIndex } from './utilities.js';
import { getXYSquare, makeGuess, setup, init } from './puzzle.js';
import Cell from './components/Cell';
import Controls from './components/Controls';
import Puzzle from './components/Puzzle';


const sideLength = 9;
const limit = sideLength * sideLength;
const blankSudoku = setup({ sideLength });


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Sudoku Magician',
      subtitle: 'Play sudoku on any difficulty, or enter numbers from the newspaper if you\'re too lazy to solve it yourself!',
      allGuesses: blankSudoku,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSolve = this.handleSolve.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(e, i){
    const allGuesses = this.state.allGuesses
    allGuesses[i].value = e.target.value;
    allGuesses[i].userValue = true;
    allGuesses[i].visible = true;

    this.setState(prevState => ({
      allGuesses,
    }));
  }

  handleSolve(e){
    const diff = parseInt(e.target.value, 10);
    let allGuesses = this.state.allGuesses;

    // clean guesses
    allGuesses = setup({ diff, sideLength, allGuesses })

    const opts = { 
      sideLength,
      allGuesses,
      guessIndex: 0,
      limit,
      forward: true,
      diff,
      gameIndex: e.target.value ? getGameIndex({
        limit,
        diff
      }) : undefined
    };

    const solvedGuesses = makeGuess(opts)

    this.setState(prevState => ({
      allGuesses: solvedGuesses,
    }));
  }

  handleClear(e){
    const clearAll = parseInt(e.target.value, 10);
    let clearedGuesses;

    if (clearAll === 1) {
      // clear entire puzzle
      clearedGuesses = setup({ sideLength });
    } else {
      // clear cpu guesses
      clearedGuesses = setup({
        sideLength: this.state.sideLength,
        allGuesses: this.state.allGuesses
      });
    }

    this.setState(prevState => ({
      allGuesses: clearedGuesses,
    }));
  }

  render() {
    return (
      <div className="Sudoku">
        <Puzzle
          cells={this.state.allGuesses} 
          handleChange={this.handleChange} />
        <Controls
          handleClear={this.handleClear}
          handleSolve={this.handleSolve} />
      </div>
    );
  }
}

export default App;

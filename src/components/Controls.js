import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setupGame } from '../actions/controls';
import { resetPuzzle, solvePuzzle } from '../actions/guesses';

class Controls extends React.Component {
  handleSolve = (e) => {
    this.props.solvePuzzle();
  };
  handleGameSetup = (e) => {
    this.props.setupGame(`${e.target.value}_GAME`);
  };
  handleClear = (e) => {
    this.props.resetPuzzle(`${e.target.value}_RESET_PUZZLE`);
    // I'm not sure if it's okay to trigger two action generators at once
    if (e.target.value === 'HARD') {
      this.props.setupGame(`CLEAR_GAME`);
    }
  };
  render() {
    return (
      <aside id="controls" className="Sudoku__controls">
        <div className="controls__group">
          <button 
            className="h4 btn btn--action btn--easy" 
            value="EASY" 
            onClick={this.handleGameSetup}>
            Easy
          </button>
          <button 
            className="h4 btn btn--action btn--medium" 
            value="MEDIUM" 
            onClick={this.handleGameSetup}>
            Medium
          </button>
          <button 
            className="h4 btn btn--action btn--hard" 
            value="HARD" 
            onClick={this.handleGameSetup}>
            Hard
          </button>
        </div>
        <div className="controls__group">
          <button 
            className="h4 btn btn--white" 
            value="FULL" 
            onClick={this.handleSolve}>
            Solve
          </button>
          <button 
            className="h4 btn" 
            value='SOFT' 
            onClick={this.handleClear}>
            Clear Solution
          </button>
          <button 
            className="h4 btn btn--inverted" 
            value='HARD' 
            onClick={this.handleClear}>
            Clear All
          </button>
        </div>
      </aside>
    );
  }
}

Controls.propTypes = {
  // handleSolve: PropTypes.func.isRequired,
  // handleClear: PropTypes.func.isRequired,
};

// on here you define your dispatcher functions, which will be mapped and called
const mapDispatchToProps = (dispatch) => ({
  // set the names of these to be the same as the name of the action generator
  setupGame: (type) => dispatch(setupGame(type)),
  resetPuzzle: (type) => dispatch(resetPuzzle(type)),
  solvePuzzle: () => dispatch(solvePuzzle())
});

// mapStateToProps, mapDispatchToProps
export default connect(undefined, mapDispatchToProps)(Controls);
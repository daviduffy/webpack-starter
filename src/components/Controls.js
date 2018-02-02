import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPuzzle, resetPuzzle } from '../actions/controls';

class Controls extends React.Component {
  handleSolve = (e) => {
    this.props.getPuzzle(`${e.target.value}_PUZZLE`);
  };
  handleClear = (e) => {
    this.props.resetPuzzle(`${e.target.value}_RESET_PUZZLE`);
  };
  render() {
    return (
      <aside id="controls" className="Sudoku__controls">
        <div className="controls__group">
          <button 
            className="h4 btn btn--action btn--easy" 
            value="EASY_PUZZLE" 
            onClick={this.handleSolve}>
            Easy
          </button>
          <button 
            className="h4 btn btn--action btn--medium" 
            value="MEDIUM_PUZZLE" 
            onClick={this.handleSolve}>
            Medium
          </button>
          <button 
            className="h4 btn btn--action btn--hard" 
            value="HARD_PUZZLE" 
            onClick={this.handleSolve}>
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
  getPuzzle: (type) => dispatch(getPuzzle(type)),
  resetPuzzle: (type) => dispatch(resetPuzzle(type))
});

// mapStateToProps, mapDispatchToProps
export default connect(undefined, mapDispatchToProps)(Controls);
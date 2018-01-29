import React from 'react';
import PropTypes from 'prop-types';

const Controls = (props) => (
  <aside id="controls" className="Sudoku__controls">
    <button className="h4 btn btn--action btn--easy" value="1" onClick={props.handleSolve}>Easy</button>
    <button className="h4 btn btn--action btn--medium" value="2" onClick={props.handleSolve}>Medium</button>
    <button className="h4 btn btn--action btn--hard" value="3" onClick={props.handleSolve}>Hard</button>
    <button className="h4 btn" value="0" onClick={props.handleSolve}>Solve</button>
    <button className="h4 btn btn--inverted" value='1' onClick={props.handleClear}>Clear</button>
  </aside>
);
Controls.propTypes = {
  handleSolve: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
};

export default Controls;

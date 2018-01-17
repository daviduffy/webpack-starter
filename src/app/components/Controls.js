import React from 'react';
import PropTypes from 'prop-types';

const Controls = (props) => (
  <aside id="controls" className="controls">
    <div className="control control--play">
      <h2 className="control__title">Play the Game</h2>
      <div className="control__options">
        <button className="h4 btn btn--action btn--easy" value="1" onClick={props.handleSolve}>Easy</button>
        <button className="h4 btn btn--action btn--medium" value="2" onClick={props.handleSolve}>Medium</button>
        <button className="h4 btn btn--action btn--hard" value="3" onClick={props.handleSolve}>Hard</button>
      </div>
    </div>
    <div className="control control--solve">
      <h2 className="control__title">Just Solve It</h2>
      <div className="control__options">
        <button className="h4 btn btn--action" value="0" onClick={props.handleSolve}>Generate Solution</button>
        <button className="h4 btn" value={false} onClick={props.handleClear}>Clear Solution</button>
        <button className="h4 btn" value onClick={props.handleClear}>Clear All</button>
      </div>
    </div>
  </aside>
);
Controls.propTypes = {
  handleSolve: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
};

export default Controls;

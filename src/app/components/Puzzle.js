import React from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';


const Puzzle = (props) => {
  return (
    <ul id="puzzle" className="puzzle">
      { props.cells.map((cell, index) => {
        return (
          <Cell
            key={index}
            cell={cell}
            handleChange={props.handleChange} />
        )
      })
    }
    </ul>
  );
}
Puzzle.propTypes = {
  cells: PropTypes.array,
}

export default Puzzle;

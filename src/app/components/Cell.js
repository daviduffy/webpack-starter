import React from 'react';
import PropTypes from 'prop-types';

const Cell = (props) => (
  <li className={props.cell.userValue ? 'user-value' : ''}>
    <input 
      type="number"
      maxLength="1"
      value={props.cell.value}
      pattern="[0-9]{1}"
      onChange={function(e){props.handleChange(e, `${props.cell.index}`)}} />
  </li>
);
Cell.propTypes = {
  value: PropTypes.number
}

export default Cell;

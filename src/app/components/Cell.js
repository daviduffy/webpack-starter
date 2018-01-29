import React from 'react';
import PropTypes from 'prop-types';

const Cell = (props) => {
  const { userValue, value, index, visible } = props.cell;
  return (
  <li className={userValue ? 'user-value' : ''}>
    <input 
      type="number"
      maxLength="1"
      value={(visible && value) || ''}
      pattern="[0-9]{1}"
      onChange={function(e){props.handleChange(e, `${index}`)}} />
  </li>
)};
Cell.propTypes = {
  value: PropTypes.number
}

export default Cell;

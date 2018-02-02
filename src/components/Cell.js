import React from 'react';
import PropTypes from 'prop-types';

class Cell extends React.Component {
  handleChange = (e) => {
    return (
      this.props.handleChange(e, `${this.props.cell.index}`)
    );
  };
  render() {
    const { userValue, value, visible } = this.props.cell;
    return (
      <li className={userValue ? 'user-value' : ''}>
        <input 
          type="number"
          maxLength="1"
          value={(visible && value) || ''}
          pattern="[0-9]{1}"
          onChange={this.handleChange} />
      </li>
    )
  }
}

Cell.propTypes = {
  value: PropTypes.number,
  handleChange: PropTypes.func.isRequired
}

export default Cell;

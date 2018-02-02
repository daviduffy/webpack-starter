import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editGuess } from '../actions/guesses';

class Cell extends React.Component {
  handleChange = (e) => {
    this.props.editGuess(this.props.cell.index, {
      ...this.props.cell,
      value: e.target.value,
      userValue: e.target.value !== ''
    })
  };
  render() {
    const { userValue, visible, value } = this.props.cell;
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
  value: PropTypes.string
}


// on here you define your dispatcher functions, which will be mapped and called
const mapDispatchToProps = (dispatch) => ({
  // set the names of these to be the same as the name of the action generator
  editGuess: (index, guess) => dispatch(editGuess(index, guess))
});

// mapStateToProps, mapDispatchToProps
export default connect(undefined, mapDispatchToProps)(Cell);
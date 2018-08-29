import React, { Component } from 'react';
import CardnumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
  state = {
    cardNumber: ''
  };
  static displayName = 'Card number formating';
  render() {
    return (
      <CardnumberInput
        cardNumber={this.state.cardNumber}
        onChange={this.handleChange}
      />
    );
  }
  handleChange = value => {
    this.setState({ cardNumber: value });
  };
}

export default CardNumberHolder;

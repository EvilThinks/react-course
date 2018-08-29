import React, { Component } from 'react';

class CardNumberInput extends Component {
  state = {
    number: ''
  };

  componentWillMount() {
    this.setState({ number: this.format(this.props.cardNumber) });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.cardNumber !== nextProps.cardNumber) {
      this.setState({ number: this.format(nextProps.cardNumber) });
    }
  }

  render() {
    return <input value={this.state.number} onChange={this.handleChange} />;
  }

  handleChange = event => {
    const { value } = event.target;
    this.props.onChange(this.normalize(value));
  };

  format = number => {
    if (number) {
      return number
        .toString()
        .replace(/.{4}/g, '$& ')
        .trim();
    } else return '';
  };

  normalize = data => {
    return data.replace(/ /g, '');
  };
}
export default CardNumberInput;

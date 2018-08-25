import React, { Component } from 'react';
import Title from '../Title';
import './CardForm.css';

class CardForm extends Component {
  render() {
    return (
      <div data-test="card-form">
        <Title>Номер карты</Title>
        <div className="card-form">
          <input name="cardNumber" onChange={this.handleChangeForm} />
        </div>
      </div>
    );
  }
  handleChangeForm = e => {
    const target = e.target;
    this.props.onChangeForm(target.name, target.value);
  };
  componentWillUnmount = e => {};
}

export default CardForm;

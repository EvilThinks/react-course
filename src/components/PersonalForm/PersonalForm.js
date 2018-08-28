import React, { Component } from 'react';
import './PersonalForm.css';
import Title from '../Title/Title';

class PersonalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div data-test="personal-form">
        <Title>Персональная информация</Title>
        <div className="personal-form">
          <input name="firstName" onChange={this.handleChangeForm} />
          <input name="lastName" onChange={this.handleChangeForm} />
          <input name="email" onChange={this.handleChangeForm} />
        </div>
      </div>
    );
  }
  handleChangeForm = e => {
    const { name, value } = e.target;
    this.props.onChangeForm(name, value);
  };
}

export default PersonalForm;

import React, { Component } from 'react';
import CardForm from '../CardForm';
import PersonalForm from '../PersonalForm';
import Step from '../Step';
import './App.css';
class App extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: ''
  };
  render() {
    const { step } = this.state;
    return (
      <div className="container">
        <div className="tab-panel">
          <Step
            key="Personal information"
            number={1}
            isSelected={step === 1}
            isClickable={step === 2 || step === 3}
            onClick={this.handleTabClick}
          >
            Personal information
          </Step>
          <Step
            key="Card information"
            number={2}
            isSelected={step === 2}
            isClickable={step === 3}
            onClick={this.handleTabClick}
          >
            Card information
          </Step>
          <Step
            key="Finish"
            number={3}
            isSelected={step === 3}
            isClickable={false}
            onClick={this.handleTabClick}
          >
            Finish
          </Step>
        </div>
        <div className="form-content">{this.renderForm()}</div>
        <div className="button-panel">
          <button
            className="button-next"
            onClick={this.handleClickNextForm}
            disabled={!this.isFormCommitable()}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
  handleTabClick = e => {
    if (e) {
      this.setState({
        step: e
      });
    }
  };
  handleChangeForm = (first, second) => {
    if (first && second) {
      this.setState({
        [first]: second
      });
    }
  };
  handleClickNextForm = e => {
    this.setState({
      step: this.state.step + 1
    });
  };
  isFormCommitable = e => {
    switch (this.state.step) {
      case 1:
        return (
          this.state.firstName !== '' &&
          this.state.lastName !== '' &&
          this.state.email !== '' &&
          this.state.email.includes('@')
        );
      case 2:
        return this.state.cardNumber.length === 16;
      case 1 && 2:
        return false;
      default:
        return false;
    }
  };
  renderForm = e => {
    return this.state.step === 1 ? (
      <PersonalForm
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        email={this.state.email}
        onChangeForm={this.handleChangeForm}
      >
      </PersonalForm>
    ) : this.state.step === 2 ? (
      <CardForm
        cardNumber={this.state.cardNumber}
        onChangeForm={this.handleChangeForm}
        onChangeTimeOver={this.handleChangeTimeOver}
      >
      </CardForm>
    ) : this.state.step === 3 ? (
      <p data-test="congratulations">Поздравляем!</p>
    ) : null;
  };
}

export default App;

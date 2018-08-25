import React, { Component } from 'react';
import './Step.css';

class Step extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className={`step ${
          this.props.isSelected
            ? 'step-selected'
            : this.props.isClickable
              ? 'step-clickable'
              : ''
        }`}
      >
        <p className="step__number">{this.props.number}</p>
        <p className="step__title">{this.props.children}</p>
      </div>
    );
  }
  handleClick = e => {
    const onClick = this.props.onClick;
    const number = this.props.number;
    this.props.isClickable ? onClick(number) : void 0;
  };
}

export default Step;

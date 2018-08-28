import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0
  };
  render() {
    const Childs = React.Children.toArray(this.props.children);
    console.log(Childs);
    const renderedChilds = Childs.map((item, index) => {
      return item;
    });
    return (
      <div className="switcher">
        <nav>
          <ul className="component-list">{this.handleChangeChild()}</ul>
        </nav>
      </div>
    );
  }
  handleChangeChild = e => {
    return (
      <li
        data-id={this.props.index}
        className="component-list__name"
        onClick={hello}
      >
        {this.props.children}
      </li>
    );
  };
}

export default Switcher;

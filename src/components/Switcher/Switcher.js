import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0
  };
  childs = React.Children.toArray(this.props.children);
  render() {
    return (
      <div className="switcher">
        <nav>
          <ul className="component-list">
            {this.childs.map((child, index) => (
              <li
                key={child.key}
                data-id={index}
                className="component-list__name"
                onClick={this.handleChangeChild}
              >
                {child.type.displayName || child.type.name}
              </li>
            ))}
          </ul>
        </nav>
        <hr />
        <div className="component-wrapper">{this.renderChildren()}</div>
      </div>
    );
  }
  handleChangeChild = event => {
    //Доделать console.log(event.target.dataset.id)
    this.setState({
      selectedChild:event.target.dataset.id
    });
  };
  renderChildren = () => {
    const { selectedChild } = this.state;
    return this.childs[selectedChild];
  };
}

export default Switcher;

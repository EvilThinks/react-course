import React, { Component } from 'react';
import Order from '../Order';
import './Farm.css';

export class Farm extends Component {
  render() {
    const { orders } = this.props;
    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button disabled={!orders.length} onClick={this.HandleMoveToCustomer}>
          Отправить урожай клиенту
        </button>
        <div>
          {orders.map(order => {
            return (
              <Order
                key={order.id}
                name={order.name}
                price={order.price}
                createdAt={order.createdAt.toString().substring(16)}
              />
            );
          })}
        </div>
      </div>
    );
  }
  HandleMoveToCustomer = () => {
    const { orders, moveOrderToCustomer } = this.props;
    moveOrderToCustomer(orders[0]);
  };
}

export default Farm;

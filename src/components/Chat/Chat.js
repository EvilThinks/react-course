import React, { Component } from 'react';
import Message from '../Message/Message';
import './Chat.css';

export default class Chat extends Component {
  state = {
    messages: [],
    messageInput: ''
  };

  render() {
    const { messages, messageInput } = this.state;

    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {messages.map(({ text }, index) => (
              <Message key={index} text={text} />
            ))}
          </div>
        </div>
        <input
          className="input-message"
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
          value={messageInput}
        />
      </div>
    );
  }

  changeInputMessage = e => {
    this.setState({
      messageInput: e.target.value
    });
  };

  sendMessageOnEnter = e => {
    if (e.key === 'Enter' && this.state.messageInput) {
      this.setState(state => ({
        messages: [...state.messages, { text: state.messageInput }],
        messageInput: ''
      }));
    }
  };
}

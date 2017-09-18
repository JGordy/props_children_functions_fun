import React, { Component } from 'react';

export default class DisplayComponent extends Component {
  render() {
    return (
      <div className="message">
        <div>{this.props.sayWhat}</div>
      </div>
    );
  }
}

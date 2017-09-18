import React, { Component } from 'react';


export default class ChildComponent extends Component {
  render() {
    return (
      <div>
        <div>
          <input type="submit" onClick={this.props.onClick}/>
        </div>
      </div>
    );
  }
}

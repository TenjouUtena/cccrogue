import React, { Component } from 'react'

export default class ActionBar extends Component {

  constructor(props) {
    super(props)

    this.onClick = this.props.onClick;
  }

  render() {
    return (
      <div className="ActionBar">
        <input type="button" onClick={this.onClick} value="Test!"/>
      </div>
    )
  }
}

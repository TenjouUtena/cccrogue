import React, { Component } from 'react'

export default class Inventory extends Component {
  render() {
    return (
      <div className="Inventory"> <span>Inventory:</span>
      {this.props.inventory.map((m,i) => <div key={'inv-item-'+i}>{m.item}</div>)}</div>
    )
  }
}

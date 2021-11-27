import React, { Component } from 'react'

export default class MessageBox extends Component {
  state = {
    messages: []
  }

  constructor(props) {
    super(props)

    this.setState({messages: this.props.messages})

    this.addMessage = this.addMessage.bind(this)

    this.props.mcallback(this.addMessage);
  }

  addMessage(m) {
    const newm = this.state.messages.slice()
    newm.push(m)
    this.setState({messages:newm})
  }

  render() {
    return (
      <div className="MessageBox">
        {this.state.messages.map((m, i) => <div key={"mess-"+i}><span>{m}</span></div>)}
      </div>
    )
  }
}

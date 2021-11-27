import React, { Component } from 'react'

export default class MessageBox extends Component {

  messagesEndRef = React.createRef()

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
    this.scrollToBottom()
  }

  scrollToBottom() {
    this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  render() {
    return (
      <div className="MessageBox">
        {this.state.messages.map((m, i) => <div className="MessageNode" key={"mess-"+i}><span>{m}</span></div>)}
        <div ref={this.messagesEndRef} />
      </div>
    )
  }
}

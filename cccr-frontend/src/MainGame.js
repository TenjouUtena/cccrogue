import React from 'react';
import Grid from './Grid.js';
import Inventory from './Inventory.js';
import MessageBox from './MessageBox.js';
import ActionBar from './ActionBar.js'


class MainGame extends React.Component {
  state = {
    gridmap: {
      height: 50,
      width: 50,
      data: [[
        {type:'wall'},
        {type:'wall'},
      ]],
    },
    inventory: [
      {item:'hat'},
      {item:'beanie'},
    ],
    messages: ['Welcome to CCC Rogue!'],
  }

  constructor(props) {
    super(props)

    this.messageDispatch = null

    this.messageDispatchSet = this.messageDispatchSet.bind(this)
    this.onTestAction = this.onTestAction.bind(this)
  }


  onTestAction(e) {
    this.messageDispatch("Test Message!")
  }

  messageDispatchSet(md) {
    this.messageDispatch = md;
  }

  render() {
    return(
        <div className="MainGame">
        <Grid height={this.state.gridmap.height}
              width ={this.state.gridmap.width} />
          <Inventory inventory={this.state.inventory} />
          <MessageBox messages={this.state.messages} mcallback={this.messageDispatchSet}/>
          <ActionBar onClick={this.onTestAction}/>
        </div>
    )
  }
}

export default MainGame;

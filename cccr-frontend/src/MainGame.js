import React from 'react';
import Grid from './Grid.js';
import Inventory from './Inventory.js';
import MessageBox from './MessageBox.js';
import ActionBar from './ActionBar.js'
import {api_url} from './env.js';


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

    ],
    messages: ['Welcome to CCC Rogue!'],
  }

  constructor(props) {
    super(props)

    this.messageDispatch = null

    this.messageDispatchSet = this.messageDispatchSet.bind(this)
    this.onTestAction = this.onTestAction.bind(this)
  }


  updateGame() {
    this.updateMap();
    this.updateInventory();
  } 
  
  updateInventory () {
    fetch(`${api_url}Game/${this.props.game_id}/Inventory`)
      .then(data => data.json())
      .then(data => this.setState({ inventory: data }));
  }

  updateMap() {
    fetch(`${api_url}Game/${this.props.game_id}/Map`)
      .then(data => data.json())
      .then(data => this.setState({ gridmap: data }));
  }

  onTestAction(e) {
    this.messageDispatch("Test Message! 5")
  }

  componentDidUpdate(prevProps) {
    if(this.props.game_id !== prevProps.game_id) {
      this.updateGame();
    }
  }

  componentDidMount(e) {
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

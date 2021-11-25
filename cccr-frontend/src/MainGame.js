import React from 'react';
import Grid from './Grid.js';
import Inventory from './Inventory.js';


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
  }

  render() {
    return(
        <div className="MainGame">
        <Grid height={this.state.gridmap.height}
              width ={this.state.gridmap.width} />
          <Inventory inventory={this.state.inventory} />
        </div>
    )
  }
}

export default MainGame;

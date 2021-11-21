import React from 'react';
import Grid from './Grid.js';

class MainGame extends React.Component {
  state = {
    gridmap: {
      height: 50,
      width: 50,
      data: [[
        {type:'wall'},
        {type:'wall'},
      ]],
    }
  }

  render() {
    return(
        <div className="MainGame">
        <Grid height={this.state.gridmap.height}
              width ={this.state.gridmap.width} />
        </div>
    )
  }
}

export default MainGame;

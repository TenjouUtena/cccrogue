import './App.css';
import React, {useState} from 'react';
import MainGame from './MainGame.js';
import {api_url} from './env.js'

class TitleBar extends React.Component {
  state = {
    "version" : "Err",
    "games_list" : [],
    "show_gl" : false
  }

  componentDidMount() {
    fetch(api_url)
      .then(data => data.json())
      .then(data => this.setState({"version":data}))

    fetch(`${api_url}Games`)
      .then(data => data.json())
      .then(data => this.setState({"games_list":data}))
  }


  render() {
    return(
      <div className="TitleBar">
        <div className="TitleBarNode"
             onMouseEnter={() => this.setState({"show_gl":true})}
            
        ><span>Games</span>
          {this.state.show_gl && <div className="TitleGameList"  onMouseLeave={() => this.setState({"show_gl":false})}>
            {this.state.games_list.map((m, i) => <div className="TitleGameListEntry" key={"game-entry-"+i}
                                                      onClick={() => this.props.update_game(m.id)}> {m.name} </div>)}
          </div>}
        </div>
        <div className="TitleBarNode"><span>Test1</span></div>
        <div className="TitleBarNode"><span>Other Option Here</span></div>
        <div className="TitleBarNode"><span>Some other shit</span></div>
        <div className="TitleBarNode"><span>{this.state.version}</span></div>
      </div>
    )
  }
}


function App() {
  const [game, setGame] = useState("");

  return (
      <div className="App">
        <TitleBar update_game={setGame}/>
      <div id="error" />
      <MainGame game_id={game}/>
    </div>
  );
}

export default App;

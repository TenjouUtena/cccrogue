import './App.css';
import React from 'react';
import MainGame from './MainGame.js';
import {api_url} from './env.js'

class TitleBar extends React.Component {
  state = {
    "version" : "Err"
  }
  componentDidMount() {
    fetch(api_url)
      .then(data => data.json())
      .then(data => this.setState({"version":data}))
  }
  render() {
    return(
      <div className="TitleBar">
        <div className="TitleBarNode"><span>Home</span></div>
        <div className="TitleBarNode"><span>Test1</span></div>
        <div className="TitleBarNode"><span>Other Option Here</span></div>
        <div className="TitleBarNode"><span>Some other shit</span></div>
        <div className="TitleBarNode"><span>{this.state.version}</span></div>
      </div>
    )
  }
}


function App() {
  return (
      <div className="App">
        <TitleBar />
      <div id="error" />
      <MainGame />
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import MainGame from './MainGame.js';

class TitleBar extends React.Component {
  render() {
    return(
      <div className="TitleBar">
        <div className="TitleBarNode"><span>Home</span></div>
        <div className="TitleBarNode"><span>Test1</span></div>
        <div className="TitleBarNode"><span>Other Option Here</span></div>
        <div className="TitleBarNode"><span>Some other shit</span></div>
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

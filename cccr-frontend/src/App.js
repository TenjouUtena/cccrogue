import './App.css';
import React from 'react';
import MainGame from './MainGame.js';

class TitleBar extends React.Component {
  
}

function App() {
  return (
    <div className="App">
      <div id="error" />
      <MainGame />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React from 'react';

class Hello extends React.Component {
  state = {
    message: "Cannot connect to backend."
  }

  componentDidMount() {
    fetch("http://localhost:5000/")
    .then(res => res.json())
    .then((result) => {
      this.setState({message:result})
    })
  };

  render() {
    return (
      <div>
      <span>Hello World</span>
      <p />
      <span>{this.state.message}</span>
      </div>
      )
  };
}

function App() {
  return (
    <div className="App">
      <Hello />
    </div>
  );
}

export default App;

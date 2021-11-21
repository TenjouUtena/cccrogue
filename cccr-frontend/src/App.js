import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';


class ErrorBox extends React.Component {
  state = {

  }

  render() {
    return (
        <div className="Errorbox"> {this.props.message} </div>
    )
  }
}


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
      .catch(err => { console.log(err)
                      const conerrelement = (<ErrorBox message="Connect Error." />);
                      ReactDOM.render(conerrelement, document.getElementById('root'));
                      })
  };

  render() {
    return (
      <div>
      <span>Hello World</span>
      <p />
      <span>{this.state.message}</span>
      </div>
    );
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

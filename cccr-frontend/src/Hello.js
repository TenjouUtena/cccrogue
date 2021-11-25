import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBox from './ErrorBox.js';



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
                      ReactDOM.render(conerrelement, document.getElementById('error'));
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

export default Hello;

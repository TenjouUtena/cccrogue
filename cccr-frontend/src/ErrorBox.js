import React from 'react';

class ErrorBox extends React.Component {
  state = {
  }
  render() {
    return (
        <div className="Errorbox"> {this.props.message} </div>
    )
  }
}


export default ErrorBox;
